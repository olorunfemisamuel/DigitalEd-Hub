// composables/useStudentAutoLogout.ts
export function useStudentAutoLogout(timeoutMinutes = 10) {
  const supabase = useSupabaseClient()
  const router   = useRouter()

  const STORAGE_KEY = 'student_last_active'
//   const TIMEOUT_MS  = timeoutMinutes * 60 * 1000
const TIMEOUT_MS = timeoutMinutes * 60 * 1000  // ← 1 minute for testing

  // ── For testing: use 2 minutes instead of 20 ──
  // const TIMEOUT_MS = 2 * 60 * 1000

  let timer: ReturnType<typeof setTimeout>

  function stamp() {
    localStorage.setItem(STORAGE_KEY, Date.now().toString())
  }

  async function logout() {
    clearTimeout(timer)
    localStorage.removeItem(STORAGE_KEY)
    await supabase.auth.signOut()
    await router.replace('/login?reason=timeout')
  }

  function checkExpiry() {
    const last = localStorage.getItem(STORAGE_KEY)
    if (!last) return false
    const elapsed = Date.now() - parseInt(last)
    console.log(`[AutoLogout] Elapsed: ${Math.round(elapsed / 1000)}s / ${Math.round(TIMEOUT_MS / 1000)}s`)
    return elapsed > TIMEOUT_MS
  }

  function resetTimer() {
    stamp()
    clearTimeout(timer)
    timer = setTimeout(() => {
      console.log('[AutoLogout] Timer fired — logging out')
      logout()
    }, TIMEOUT_MS)
  }

  onMounted(() => {
    if (!import.meta.client) return

    // ✅ Immediate check on mount — catches returning users
    if (checkExpiry()) {
      console.log('[AutoLogout] Already expired on mount — logging out')
      logout()
      return
    }

    // ✅ Start timer
    resetTimer()

    // ✅ Activity events reset the timer
    const events = ['mousedown', 'keydown', 'touchstart', 'scroll', 'click']
    events.forEach(e => window.addEventListener(e, resetTimer, { passive: true }))

    // ✅ Tab visibility change — most reliable way to catch returning users
    function onVisibilityChange() {
      if (document.visibilityState === 'visible') {
        console.log('[AutoLogout] Tab became visible — checking expiry')
        if (checkExpiry()) {
          logout()
        } else {
          resetTimer()
        }
      } else {
        // Tab hidden — save timestamp
        stamp()
        clearTimeout(timer)
      }
    }

    document.addEventListener('visibilitychange', onVisibilityChange)

    // ✅ Window focus — catches alt-tab back to browser
    function onFocus() {
      console.log('[AutoLogout] Window focused — checking expiry')
      if (checkExpiry()) {
        logout()
      } else {
        resetTimer()
      }
    }

    window.addEventListener('focus', onFocus)

    onUnmounted(() => {
      clearTimeout(timer)
      events.forEach(e => window.removeEventListener(e, resetTimer))
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.removeEventListener('focus', onFocus)
    })
  })
}