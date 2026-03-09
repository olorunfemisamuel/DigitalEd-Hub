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
        <NuxtLink to="/register" class="text-blue-600 font-semibold hover:underline ml-1">
          Sign up
        </NuxtLink>
      </p>
    </div>

    <!-- Center Area -->
    <div class="flex-1 flex items-center justify-center px-4">

      <div class="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden">

        <!-- Header -->
        <div class="bg-gradient-to-b from-[#cbd5e1] via-[#e2e8f0] to-[#5d9cdc] px-10 py-8 text-center">
          <h1 class="text-xl font-semibold text-gray-800">
            Welcome Back
          </h1>
          <p class="text-gray-500 text-sm mt-1">
            Continue your learning journey
          </p>
        </div>

        <!-- Body -->
        <div class="px-8 py-7 flex flex-col gap-5">

          <!-- Email -->
          <div class="flex flex-col gap-1.5">
            <label class="text-gray-700 text-sm font-medium">
              Email Address
            </label>

            <div class="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
              <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>

              <input
                v-model="email"
                type="email"
                placeholder="name@company.com"
                class="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          <!-- Password -->
          <div class="flex flex-col gap-1.5">

            <div class="flex items-center justify-between">
              <label class="text-gray-700 text-sm font-medium">
                Password
              </label>

              <NuxtLink
                to="/forgot-password"
                class="text-blue-600 text-xs font-medium hover:underline"
              >
                Forgot password?
              </NuxtLink>
            </div>

            <div class="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">

              <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <rect x="3" y="11" width="18" height="11" rx="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>

              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="••••••••"
                class="flex-1 bg-transparent outline-none text-sm tracking-widest"
              />

              <button
                type="button"
                @click="showPassword = !showPassword"
                class="text-gray-400 hover:text-gray-500"
              >
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
            <input
              id="remember"
              v-model="remember"
              type="checkbox"
              class="w-4 h-4 border-gray-300 accent-blue-600"
            />
            <label for="remember" class="text-sm text-gray-600">
              Remember me for 30 days
            </label>
          </div>

          <!-- Sign In -->
          <button
            @click="handleLogin"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3 rounded-lg shadow-sm flex items-center justify-center gap-2"
          >
            Sign In →
          </button>

          <!-- Divider -->
          <div class="flex items-center gap-3">
            <div class="flex-1 h-px bg-gray-200"></div>
            <span class="text-xs text-gray-400 uppercase tracking-wider">
              or continue with
            </span>
            <div class="flex-1 h-px bg-gray-200"></div>
          </div>

          <!-- Social -->
          <div class="flex gap-3">

            <button class="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm text-gray-700 hover:bg-gray-50">
              <div class="w-4 h-4 bg-green-600 rounded-sm"></div>
              Google
            </button>

            <button class="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm text-gray-700 hover:bg-gray-50">
              <svg class="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
              </svg>
              SSO
            </button>

          </div>

          <!-- Bottom Link -->
          <p class="text-center text-sm text-gray-500">
            New to DigitalEd Hub?
            <NuxtLink to="/register" class="text-blue-600 font-semibold hover:underline ml-1">
              Create an account
            </NuxtLink>
          </p>

        </div>

      </div>

    </div>

    <!-- Footer -->
    <div class="text-center py-6">
      <p class="text-gray-400 text-xs">
        © 2026 DigitalEd Hub. All rights reserved. The Educator's Community.
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: false
})

const email = ref('')
const password = ref('')
const remember = ref(false)
const showPassword = ref(false)

async function handleLogin() {
  const supabase = useSupabaseClient()

  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  if (error) {
    console.error('Login failed:', error.message)
    return
  }

  await navigateTo('/dashboard')
}
</script>