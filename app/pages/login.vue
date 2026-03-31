<template>
  <div class="min-h-screen bg-[#F8FAFC] flex flex-col">

    <!-- Top Bar -->
    <div class="w-full px-8 py-4 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-2">
        <div class="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <rect x="2" y="2" width="5" height="5" rx="1" fill="white"/>
            <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
            <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
            <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.4"/>
          </svg>
        </div>
        <span class="text-blue-600 font-semibold text-sm">DigitalEd Hub</span>
      </NuxtLink>

      <p class="text-sm text-gray-500">
        Don't have an account?
        <NuxtLink to="/register" class="text-blue-600 font-semibold hover:underline ml-1">Sign up</NuxtLink>
      </p>
    </div>

    <!-- Center Area -->
    <div class="flex-1 flex items-center justify-center px-4">
      <div class="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden">

        <!-- Header -->
        <div class="bg-gradient-to-b from-[#cbd5e1] via-[#e2e8f0] to-[#5d9cdc] px-10 py-8 text-center">
          <h1 class="text-xl font-semibold text-gray-800">Welcome Back</h1>
          <p class="text-gray-500 text-sm mt-1">Continue your learning journey</p>
        </div>

        <!-- Body -->
        <div class="px-8 py-7 flex flex-col gap-5">

          <!-- Error message -->
          <div v-if="errorMsg" class="bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg px-4 py-3 text-center">
            {{ errorMsg }}
          </div>

          <!-- Success message -->
<div v-if="successMsg" class="bg-green-50 border border-green-200 text-green-700 text-xs rounded-lg px-4 py-3 text-center">
  {{ successMsg }}
</div>

<!-- Google user trying to use password -->
<div v-if="showSetPassword" class="bg-blue-50 border border-blue-200 rounded-lg px-4 py-4 text-center">
  <p class="text-sm text-gray-700 font-medium mb-1">Looks like you signed up with Google</p>
  <p class="text-xs text-gray-500 mb-3">You don't have a password yet. Click below and we'll email you a link to set one.</p>
  <button
    @click="sendPasswordReset"
    :disabled="isLoading"
    class="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-xs font-semibold px-5 py-2 rounded-lg transition-colors"
  >
    {{ isLoading ? 'Sending...' : 'Send me a link →' }}
  </button>
</div>


            <!-- Timeout notice -->
<div
  v-if="isTimeout"
  class="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-4 flex items-center gap-3"
>
  <svg class="w-4 h-4 text-amber-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
  <p class="text-sm text-amber-700 font-medium">
    Your session expired after 20 minutes of inactivity. Please log in again.
  </p>
</div>


          <!-- Email -->
          <div class="flex flex-col gap-1.5">
            <label class="text-gray-700 text-sm font-medium">Email Address</label>
            <div class="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
              <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <input v-model="email" type="email" placeholder="name@example.com"
                class="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"/>
            </div>
          </div>

          <!-- Password -->
          <div class="flex flex-col gap-1.5">
            <div class="flex items-center justify-between">
              <label class="text-gray-700 text-sm font-medium">Password</label>
            <button
  type="button"
  @click="handleForgotPassword"
  class="text-blue-600 text-xs font-medium hover:underline"
>
  Forgot password?
</button>
            </div>
            <div class="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
              <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <rect x="3" y="11" width="18" height="11" rx="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="••••••••"
                class="flex-1 bg-transparent outline-none text-sm tracking-widest"/>
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

          <!-- Remember -->
          <div class="flex items-center gap-2">
            <input id="remember" v-model="remember" type="checkbox" class="w-4 h-4 border-gray-300 accent-blue-600"/>
            <label for="remember" class="text-sm text-gray-600">Remember me for 30 days</label>
          </div>

          <!-- Sign In button -->
          <button
            @click="handleLogin"
            :disabled="isLoading"
            class="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-semibold py-3 rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors"
          >
            <svg v-if="isLoading" class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
            </svg>
            {{ isLoading ? 'Signing in...' : 'Sign In →' }}
          </button>

          <!-- Divider -->
          <div class="flex items-center gap-3">
            <div class="flex-1 h-px bg-gray-200"></div>
            <span class="text-xs text-gray-400 uppercase tracking-wider">or continue with</span>
            <div class="flex-1 h-px bg-gray-200"></div>
          </div>

          <!-- Social buttons -->
          <div class="flex gap-3">

            <!-- Google OAuth -->
            <button
              @click="signInWithGoogle"
              :disabled="isGoogleLoading"
              class="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-60 transition-colors"
            >
              <svg v-if="isGoogleLoading" class="w-4 h-4 animate-spin text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
              </svg>
              <svg v-else class="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              {{ isGoogleLoading ? 'Redirecting...' : 'Google' }}
            </button>

            <!-- SSO placeholder -->
            <!-- <button class="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <svg class="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
              </svg>
              SSO
            </button> -->

          </div>

          <!-- Bottom link -->
          <p class="text-center text-sm text-gray-500">
            New to DigitalEd Hub?
            <NuxtLink to="/register" class="text-blue-600 font-semibold hover:underline ml-1">Create an account</NuxtLink>
          </p>

        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="text-center py-6">
      <p class="text-gray-400 text-xs">© 2026 DigitalEd Hub. All rights reserved. The Educator's Community.</p>
    </div>

  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  middleware: [],  // ✅ same fix for student login
  layout: false,
})

const errorMsg        = ref('')
const successMsg      = ref('')
const email           = ref('')
const password        = ref('')
const remember        = ref(false)
const showPassword    = ref(false)
const isLoading       = ref(false)
const isGoogleLoading = ref(false)
const showSetPassword = ref(false)  // ← shows the "set a password" prompt


const route     = useRoute()
const isTimeout = computed(() => route.query.reason === 'timeout')

const supabase = useSupabaseClient()

async function handleLogin() {
  errorMsg.value       = ''
  successMsg.value     = ''
  showSetPassword.value = false
  isLoading.value      = true

  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  isLoading.value = false

  if (error) {
    // Supabase returns this when the user has no password (Google-only account)
    if (error.message.toLowerCase().includes('invalid login credentials')) {
      showSetPassword.value = true  // ← show the helpful prompt instead
    } else {
      errorMsg.value = error.message
    }
    return
  }

  await navigateTo('/dashboard')
}

async function sendPasswordReset() {
  if (!email.value) {
    errorMsg.value = 'Please enter your email address first.'
    return
  }

  isLoading.value = true

const { error } = await supabase.auth.resetPasswordForEmail(email.value, {
  redirectTo: `${window.location.origin}/reset-password`,
})

  isLoading.value = false

  if (error) {
    errorMsg.value = error.message
    return
  }

  showSetPassword.value = false
  successMsg.value = 'Check your email — we sent you a link to set your password.'
}

async function signInWithGoogle() {
  errorMsg.value        = ''
  successMsg.value      = ''
  isGoogleLoading.value = true

  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/confirm`,
    }
  })

  if (error) {
    errorMsg.value        = error.message
    isGoogleLoading.value = false
  }
}


//Forgot Password Function
async function handleForgotPassword() {
  errorMsg.value   = ''
  successMsg.value = ''

  if (!email.value) {
    errorMsg.value = 'Enter your email address above first, then click Forgot password.'
    return
  }

  isLoading.value = true

  const { error } = await supabase.auth.resetPasswordForEmail(email.value, {
    redirectTo: `${window.location.origin}/reset-password`,
  })

  isLoading.value = false

  if (error) {
    errorMsg.value = error.message
    return
  }

  successMsg.value = 'Check your email — we sent you a password reset link.'
}



</script>