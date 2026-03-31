export function useStudentAutoLogout(timeoutMinutes = 20) {
  const supabase = useSupabaseClient()
  const router   = useRouter()
  let timer: ReturnType<typeof setTimeout>

  const STORAGE_KEY = 'student_last_active'

  function updateLastActive() {
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, Date.now().toString())
    }
  }

  function resetTimer() {
    clearTimeout(timer)
    updateLastActive()
    timer = setTimeout(async () => {
      await supabase.auth.signOut()
      await router.replace('/login?reason=timeout')
    }, timeoutMinutes * 60 * 1000)
  }

  onMounted(() => {
    if (!import.meta.client) return

    // ✅ Check if they were already inactive before this mount
    // (e.g. they left the tab and came back after 20+ mins)
    const lastActive = localStorage.getItem(STORAGE_KEY)
    if (lastActive) {
      const elapsed = Date.now() - parseInt(lastActive)
      const timeoutMs = timeoutMinutes * 60 * 1000
      if (elapsed > timeoutMs) {
        // Already timed out — sign out immediately
        supabase.auth.signOut().then(() => {
          router.replace('/login?reason=timeout')
        })
        return
      }
    }

    // ✅ Start fresh timer
    resetTimer()

    // ✅ Reset on any user activity
    const events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'click']
    events.forEach(e => window.addEventListener(e, resetTimer, { passive: true }))

    // ✅ Also check when tab becomes visible again (user switched tabs/apps)
    function onVisibilityChange() {
      if (document.visibilityState === 'visible') {
        const lastActive = localStorage.getItem(STORAGE_KEY)
        if (lastActive) {
          const elapsed = Date.now() - parseInt(lastActive)
          const timeoutMs = timeoutMinutes * 60 * 1000
          if (elapsed > timeoutMs) {
            supabase.auth.signOut().then(() => {
              router.replace('/login?reason=timeout')
            })
            return
          }
        }
        // Still within time — reset timer
        resetTimer()
      } else {
        // Tab hidden — update last active time
        updateLastActive()
      }
    }

    document.addEventListener('visibilitychange', onVisibilityChange)

    onUnmounted(() => {
      clearTimeout(timer)
      events.forEach(e => window.removeEventListener(e, resetTimer))
      document.removeEventListener('visibilitychange', onVisibilityChange)
    })
  })
}