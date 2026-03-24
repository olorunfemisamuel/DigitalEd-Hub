<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-between px-4 py-8">

    <!-- CENTER CARD -->
    <div class="flex-1 flex items-center justify-center">
      <div class="bg-white rounded-2xl shadow-md w-full max-w-sm px-10 py-10">

        <!-- Icon -->
        <div class="flex justify-center mb-5">
          <div class="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 3L1 9L12 15L23 9L12 3Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
              <path d="M1 9V15" stroke="white" stroke-width="2" stroke-linecap="round"/>
              <path d="M5 11V17.5C5 17.5 7.5 20 12 20C16.5 20 19 17.5 19 17.5V11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>

        <!-- Title -->
        <div class="text-center mb-7">
          <h1 class="text-xl font-bold text-gray-900 mb-1">Admin Login</h1>
          <p class="text-xs text-gray-400">DigitalEd Hub: Administrator Portal</p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleLogin" class="flex flex-col gap-5">

          <!-- Email -->
          <div>
            <label class="block text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
              Email Address
            </label>
            <div class="flex items-center border border-gray-200 rounded-lg px-3 py-2.5 gap-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all bg-white">
              <svg class="w-4 h-4 text-gray-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <input
                v-model="email"
                type="email"
                placeholder="name@digitaled.edu"
                class="flex-1 text-sm text-gray-700 placeholder-gray-300 outline-none bg-transparent"
              />
            </div>
          </div>

          <!-- Password -->
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <label class="block text-[10px] font-semibold text-gray-500 uppercase tracking-widest">
                Password
              </label>
              <button type="button" class="text-[11px] text-blue-600 font-medium hover:underline">
                Forgot Password?
              </button>
            </div>
            <div class="flex items-center border border-gray-200 rounded-lg px-3 py-2.5 gap-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all bg-white">
              <svg class="w-4 h-4 text-gray-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="••••••••"
                class="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
              />
              <button type="button" @click="showPassword = !showPassword" class="text-gray-400 hover:text-gray-600 flex-shrink-0">
                <svg v-if="!showPassword" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                <svg v-else class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                  <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Keep me signed in -->
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              v-model="keepSignedIn"
              type="checkbox"
              class="w-3.5 h-3.5 accent-blue-600 rounded"
            />
            <span class="text-xs text-gray-500">Keep me signed in for 30 days</span>
          </label>

          <!-- Error message -->
          <p v-if="errorMsg" class="text-xs text-red-500 text-center -mt-2">{{ errorMsg }}</p>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <svg v-if="isLoading" class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
            </svg>
            {{ isLoading ? 'Signing in...' : 'Sign In →' }}
          </button>

        </form>

        <!-- Quote -->
        <p class="text-center text-[11px] text-gray-400 italic mt-8 leading-relaxed">
          "The educator is the architect of the future's greatest minds."
        </p>

      </div>
    </div>

    <!-- FOOTER -->
    <footer class="flex items-end justify-between px-2 pt-6">

      <!-- Left: branding -->
      <div>
        <p class="text-xs font-bold text-gray-700">DigitalEd Hub</p>
        <p class="text-[10px] text-gray-400">© 2024 DigitalEd Hub: The Academic Curator System.</p>
      </div>

      <!-- Right: links -->
      <div class="flex items-center gap-4">
        <a href="#" class="text-[11px] text-gray-400 hover:text-gray-600 transition-colors">Privacy Policy</a>
        <a href="#" class="text-[11px] text-gray-400 hover:text-gray-600 transition-colors">Terms of Service</a>
        <a href="#" class="text-[11px] text-gray-400 hover:text-gray-600 transition-colors">Security</a>
        <a href="#" class="text-[11px] text-gray-400 hover:text-gray-600 transition-colors">Contact</a>
      </div>

    </footer>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  middleware: [],  // ✅ opts this page out of ALL global middleware
  layout: false,
})

const email        = ref('')
const password     = ref('')
const keepSignedIn = ref(false)
const showPassword = ref(false)
const isLoading    = ref(false)
const errorMsg     = ref('')

const supabase = useSupabaseClient()

async function handleLogin() {
  if (!email.value || !password.value) {
    errorMsg.value = 'Please enter your email and password.'
    return
  }

  isLoading.value = true
  errorMsg.value  = ''

  try {
    // ✅ Clear any existing Supabase student session first
    await supabase.auth.signOut()

    // ✅ Then set the admin cookie
    await $fetch('/api/admin-login', {
      method: 'POST',
      body: { email: email.value, password: password.value },
    })

    await navigateTo('/admin/dashboard')
  } catch {
    errorMsg.value  = 'Invalid credentials. Please try again.'
    isLoading.value = false
  }
}
</script>