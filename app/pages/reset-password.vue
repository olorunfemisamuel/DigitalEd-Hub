<template>
  <div class="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
    <div class="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden">

      <div class="bg-gradient-to-b from-[#cbd5e1] via-[#e2e8f0] to-[#5d9cdc] px-10 py-8 text-center">
        <h1 class="text-xl font-semibold text-gray-800">Set Your Password</h1>
        <p class="text-gray-500 text-sm mt-1">Choose a new password for your account</p>
      </div>

      <div class="px-8 py-7 flex flex-col gap-5">

        <!-- Loading state while exchanging code -->
        <div v-if="isExchanging" class="text-center py-4">
          <div class="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
          <p class="text-sm text-gray-500">Verifying your link...</p>
        </div>

        <!-- Error -->
        <div v-if="errorMsg" class="bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg px-4 py-3 text-center">
          {{ errorMsg }}
        </div>

        <!-- Success -->
        <div v-if="successMsg" class="bg-green-50 border border-green-200 text-green-700 text-xs rounded-lg px-4 py-3 text-center">
          {{ successMsg }}
        </div>

        <!-- Form — only show once code is exchanged -->
        <template v-if="!isExchanging && !successMsg">

          <div class="flex flex-col gap-1.5">
            <label class="text-gray-700 text-sm font-medium">New Password</label>
            <div class="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
              <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <rect x="3" y="11" width="18" height="11" rx="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <input
                v-model="newPassword"
                :type="showPassword ? 'text' : 'password'"
                placeholder="••••••••"
                class="flex-1 bg-transparent outline-none text-sm tracking-widest"
              />
              <button type="button" @click="showPassword = !showPassword" class="text-gray-400 hover:text-gray-500">
                <svg v-if="!showPassword" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                <svg v-else class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <line x1="1" y1="1" x2="23" y2="23"/>
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8"/>
                </svg>
              </button>
            </div>
          </div>

          <button
            @click="handleSetPassword"
            :disabled="isLoading"
            class="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <svg v-if="isLoading" class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
            </svg>
            {{ isLoading ? 'Saving...' : 'Set Password →' }}
          </button>

        </template>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

definePageMeta({ layout: false })

const errorMsg    = ref('')
const successMsg  = ref('')
const newPassword = ref('')
const showPassword  = ref(false)
const isLoading     = ref(false)
const isExchanging  = ref(true)   // true while we exchange the code for a session

const supabase = useSupabaseClient()
const route    = useRoute()

onMounted(async () => {
  // Check if Supabase returned an error in the URL (e.g. expired link)
  const error_code = route.query.error_code as string | undefined
  const error_description = route.query.error_description as string | undefined

  if (error_code) {
    isExchanging.value = false
    errorMsg.value = error_description
      ? decodeURIComponent(error_description.replace(/\+/g, ' '))
      : 'This link is invalid or has expired. Please request a new one.'
    return
  }

  // Normal flow — exchange the code for a session
  const code = route.query.code as string | undefined

  if (!code) {
    isExchanging.value = false
    errorMsg.value = 'Invalid reset link. Please request a new one.'
    return
  }

  const { error } = await supabase.auth.exchangeCodeForSession(code)
  isExchanging.value = false

  if (error) {
    errorMsg.value = 'This link has expired or already been used. Please request a new one.'
  }
})

async function handleSetPassword() {
  errorMsg.value   = ''
  successMsg.value = ''

  if (newPassword.value.length < 6) {
    errorMsg.value = 'Password must be at least 6 characters.'
    return
  }

  isLoading.value = true

  const { error } = await supabase.auth.updateUser({
    password: newPassword.value
  })

  isLoading.value = false

  if (error) {
    errorMsg.value = error.message
    return
  }

  successMsg.value = 'Password set successfully! Redirecting to dashboard...'
  setTimeout(() => navigateTo('/dashboard'), 1500)
}
</script>