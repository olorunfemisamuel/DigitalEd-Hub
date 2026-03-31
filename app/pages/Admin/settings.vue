<template>
  <div class="min-h-screen bg-gray-50 flex font-sans">

    <!-- SIDEBAR -->
    <aside
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
      class="fixed top-0 left-0 h-full w-56 bg-white border-r border-gray-100 flex flex-col z-50 transition-transform duration-300 md:translate-x-0"
    >
      <div class="px-5 py-4 border-b border-gray-100">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="5" height="5" rx="1" fill="white"/>
              <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
              <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
              <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.4"/>
            </svg>
          </div>
          <span class="font-bold text-blue-600 text-sm">DigitalEd Hub</span>
        </div>
      </div>

      <nav class="flex flex-col px-3 py-4 gap-1 flex-1">
        <NuxtLink to="/admin/dashboard" @click="sidebarOpen = false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
          </svg>
          Overview
        </NuxtLink>

        <NuxtLink to="/admin/courses" @click="sidebarOpen = false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
          Courses
        </NuxtLink>

        <NuxtLink to="/admin/students" @click="sidebarOpen = false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          Students
        </NuxtLink>

        <NuxtLink to="/admin/community" @click="sidebarOpen = false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          Community
        </NuxtLink>


          <!-- <NuxtLink to="/admin/resources" @click="sidebarOpen = false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-50 text-blue-600 text-sm font-semibold">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
          Resources
        </NuxtLink> -->


        <NuxtLink to="/admin/settings" @click="sidebarOpen = false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-50 text-blue-600 text-sm font-semibold">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
          Settings
        </NuxtLink>
      </nav>
    </aside>

    <div v-if="sidebarOpen" class="fixed inset-0 bg-black/40 z-40 md:hidden" @click="sidebarOpen = false"/>

    <!-- MAIN -->
    <div class="flex-1 md:ml-56 flex flex-col min-h-screen">

      <!-- TOP NAVBAR -->
      <header class="bg-white border-b border-gray-100 h-14 flex items-center justify-between px-4 md:px-6 sticky top-0 z-30">
        <div class="flex items-center gap-3">
          <button @click="sidebarOpen = true" class="md:hidden text-gray-500">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
          <h1 class="text-sm font-semibold text-gray-800">Settings</h1>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
            {{ adminEmail?.charAt(0).toUpperCase() ?? 'A' }}
          </div>
          <button @click="handleLogout" class="text-red-500 text-xs font-semibold hover:text-red-600 transition-colors">
            Log out
          </button>
        </div>
      </header>

      <!-- PAGE BODY -->
      <main class="flex-1 px-4 md:px-6 py-6 max-w-3xl">

        <div class="mb-8">
          <h2 class="text-2xl font-extrabold text-gray-900">Settings</h2>
          <p class="text-sm text-gray-500 mt-1">Manage your platform preferences and account security.</p>
        </div>

        <!-- ── Profile Card ── -->
        <div class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-5">
          <h3 class="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg class="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            Profile
          </h3>

          <div class="mb-4">
            <label class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Admin Email</label>
            <p class="text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5">
              {{ adminEmail }}
            </p>
          </div>

          <!-- Change Password -->
          <div v-if="!showPasswordForm">
            <button
              @click="showPasswordForm = true"
              class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Change Password
            </button>
          </div>

          <div v-else class="flex flex-col gap-3 max-w-sm">
            <div>
              <label class="text-xs font-semibold text-gray-500 mb-1 block">New Password</label>
              <input
                v-model="newPassword"
                type="password"
                placeholder="Enter new password"
                class="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="text-xs font-semibold text-gray-500 mb-1 block">Confirm Password</label>
              <input
                v-model="confirmPassword"
                type="password"
                placeholder="Confirm new password"
                class="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <p v-if="passwordError" class="text-xs text-red-500">{{ passwordError }}</p>
            <p v-if="passwordSuccess" class="text-xs text-green-600">{{ passwordSuccess }}</p>
            <div class="flex gap-3">
              <button
                @click="changePassword"
                :disabled="savingPassword"
                class="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
              >
                <svg v-if="savingPassword" class="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                </svg>
                {{ savingPassword ? 'Saving...' : 'Save Password' }}
              </button>
              <button
                @click="showPasswordForm = false; newPassword = ''; confirmPassword = ''; passwordError = ''"
                class="border border-gray-200 text-gray-600 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        <!-- ── Platform Card ── -->
        <div class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-5">
          <h3 class="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg class="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
            Platform
          </h3>

          <div class="flex flex-col gap-4 max-w-sm">
            <div>
              <label class="text-xs font-semibold text-gray-500 mb-1 block">Platform Name</label>
              <input
                v-model="platformName"
                type="text"
                class="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="text-xs font-semibold text-gray-500 mb-1 block">Slogan</label>
              <input
                v-model="platformSlogan"
                type="text"
                class="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="text-xs font-semibold text-gray-500 mb-1 block">Support Email</label>
              <input
                v-model="supportEmail"
                type="email"
                class="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <p v-if="platformSuccess" class="text-xs text-green-600">{{ platformSuccess }}</p>

            <button
              @click="savePlatform"
              :disabled="savingPlatform"
              class="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-2 w-fit"
            >
              <svg v-if="savingPlatform" class="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
              </svg>
              {{ savingPlatform ? 'Saving...' : 'Save Changes' }}
            </button>
          </div>
        </div>

        <!-- ── Danger Zone ── -->
        <div class="bg-white border border-red-200 rounded-2xl p-6 shadow-sm">
          <h3 class="text-sm font-bold text-red-600 mb-1 flex items-center gap-2">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            Danger Zone
          </h3>
          <p class="text-xs text-gray-500 mb-4">These actions are irreversible. Proceed with extreme caution.</p>

          <button
            @click="confirmClearData = true"
            class="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Clear All Test Data
          </button>
        </div>

      </main>
    </div>

    <!-- Clear data confirm modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="confirmClearData" class="fixed inset-0 bg-black/40 z-[80] flex items-center justify-center px-4">
          <div class="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm">
            <h3 class="font-bold text-gray-900 mb-2">Clear all test data?</h3>
            <p class="text-sm text-gray-500 mb-5">
              This will permanently delete all test enrollments, community posts, replies, and likes.
              <strong class="text-red-600"> This cannot be undone.</strong>
            </p>
            <p v-if="clearError" class="text-xs text-red-500 mb-3">{{ clearError }}</p>
            <p v-if="clearSuccess" class="text-xs text-green-600 mb-3">{{ clearSuccess }}</p>
            <div class="flex gap-3">
              <button
                @click="confirmClearData = false"
                class="flex-1 border border-gray-200 text-gray-700 text-sm font-semibold py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                @click="clearTestData"
                :disabled="clearingData"
                class="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors disabled:opacity-60"
              >
                {{ clearingData ? 'Clearing...' : 'Yes, Clear' }}
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

definePageMeta({ layout: false })

const config     = useRuntimeConfig()
const supabase   = useSupabaseClient()
const adminEmail = config.public.adminEmail as string

const sidebarOpen = ref(false)

// ── Password ───────────────────────────
const showPasswordForm  = ref(false)
const newPassword       = ref('')
const confirmPassword   = ref('')
const passwordError     = ref('')
const passwordSuccess   = ref('')
const savingPassword    = ref(false)

// ── Platform ───────────────────────────
const platformName    = ref('DigitalEd Hub')
const platformSlogan  = ref('Learn. Teach. Earn.')
const supportEmail    = ref('')
const platformSuccess = ref('')
const savingPlatform  = ref(false)

// ── Danger Zone ────────────────────────
const confirmClearData = ref(false)
const clearingData     = ref(false)
const clearError       = ref('')
const clearSuccess     = ref('')

// ── Load settings from Supabase on mount ─
onMounted(async () => {
  try {
    const data = await $fetch<Record<string, string>>('/api/admin-settings')
    platformName.value   = data.platform_name   || 'DigitalEd Hub'
    platformSlogan.value = data.platform_slogan || 'Learn. Teach. Earn.'
    supportEmail.value   = data.support_email   || adminEmail
  } catch (e) {
    console.error('Failed to load settings:', e)
    // Fall back to defaults
    platformName.value   = 'DigitalEd Hub'
    platformSlogan.value = 'Learn. Teach. Earn.'
    supportEmail.value   = adminEmail
  }
})


// ── Change password ────────────────────
async function changePassword() {
  passwordError.value   = ''
  passwordSuccess.value = ''

  if (!newPassword.value || newPassword.value.length < 8) {
    passwordError.value = 'Password must be at least 8 characters.'
    return
  }

  if (newPassword.value !== confirmPassword.value) {
    passwordError.value = 'Passwords do not match.'
    return
  }

  savingPassword.value = true

  const { error } = await supabase.auth.updateUser({
    password: newPassword.value
  })

  if (error) {
    passwordError.value = error.message
  } else {
    passwordSuccess.value = 'Password updated successfully.'
    newPassword.value     = ''
    confirmPassword.value = ''
    setTimeout(() => {
      showPasswordForm.value  = false
      passwordSuccess.value   = ''
    }, 2000)
  }

  savingPassword.value = false
}

// ── Save platform settings to Supabase ──
async function savePlatform() {
  platformSuccess.value = ''
  savingPlatform.value  = true

  try {
    await $fetch('/api/admin-settings', {
      method: 'POST',
      body: {
        platform_name:   platformName.value,
        platform_slogan: platformSlogan.value,
        support_email:   supportEmail.value,
      }
    })
    platformSuccess.value = 'Settings saved successfully.'
    setTimeout(() => { platformSuccess.value = '' }, 3000)
  } catch (e) {
    console.error('Failed to save settings:', e)
    platformSuccess.value = 'Failed to save. Please try again.'
  }

  savingPlatform.value = false
}

// ── Clear test data ────────────────────
async function clearTestData() {
  clearError.value   = ''
  clearSuccess.value = ''
  clearingData.value = true

  try {
    // Delete in correct order to avoid FK violations
    await supabase.from('post_likes').delete().neq('id', '00000000-0000-0000-0000-000000000000')
    await supabase.from('post_replies').delete().neq('id', '00000000-0000-0000-0000-000000000000')
    await supabase.from('community_posts').delete().neq('id', '00000000-0000-0000-0000-000000000000')
    await supabase.from('enrollments').delete().neq('id', '00000000-0000-0000-0000-000000000000')

    clearSuccess.value = 'All test data cleared successfully.'
    setTimeout(() => {
      confirmClearData.value = false
      clearSuccess.value     = ''
    }, 2000)
  } catch (err: any) {
    clearError.value = 'Failed to clear data: ' + err.message
  }

  clearingData.value = false
}

async function handleLogout() {
  await $fetch('/api/admin-logout', { method: 'POST' })
  await supabase.auth.signOut()
  await navigateTo('/admin/login')
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>