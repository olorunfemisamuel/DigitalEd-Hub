<template>
  <div class="min-h-screen flex">

    <!-- LEFT PANEL -->
    <div class="hidden md:flex relative w-[48%] flex-shrink-0 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-br from-blue-700/80 via-blue-600/60 to-blue-400/40"></div>

      <!-- Logo -->
      <div class="absolute top-6 left-6 flex items-center gap-2 z-10">
        <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.1L22 11l-7.1 2.9L12 20l-2.9-6.1L2 11l7.1-2.9L12 2z"/>
        </svg>
        <span class="text-white font-semibold text-sm">DigitalEd Hub</span>
      </div>

      <!-- Text -->
      <div class="absolute bottom-0 left-0 p-10 z-10 max-w-md">
        <h2 class="text-white text-4xl font-bold leading-tight mb-4">
          Empowering <br> Educators <br> Together
        </h2>
        <p class="text-blue-100 text-sm leading-relaxed mb-6 max-w-sm">
          Join a global community of professionals sharing lesson plans,
          mentorship, and growing their teaching careers.
        </p>
        <div class="flex items-center gap-3">
          <div class="flex items-center">
            <img src="https://i.pravatar.cc/32?img=12" class="w-8 h-8 rounded-full border-2 border-white"/>
            <img src="https://i.pravatar.cc/32?img=47" class="w-8 h-8 rounded-full border-2 border-white -ml-3"/>
          </div>
          <span class="text-blue-100 text-xs">Trusted by educators worldwide</span>
        </div>
      </div>
    </div>

    <!-- RIGHT PANEL -->
    <div class="flex-1 bg-[#F8FAFC] flex items-center justify-center px-8">
      <div class="w-full max-w-md">

        <h1 class="text-2xl font-semibold text-gray-900 mb-1">Create your account</h1>
        <p class="text-gray-400 text-sm mb-8">Fill in your details to join the professional community.</p>

        <!-- Error message -->
        <div v-if="errorMsg" class="mb-4 bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg px-4 py-3">
          {{ errorMsg }}
        </div>

        <div class="flex flex-col gap-5">

          <!-- Full Name -->
          <div class="flex flex-col gap-1">
            <label class="text-sm text-gray-700 font-medium">Full Name</label>
            <div class="flex items-center border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
              <svg class="w-4 h-4 text-gray-300 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <circle cx="12" cy="7" r="4"/>
                <path d="M5.5 21a6.5 6.5 0 0 1 13 0"/>
              </svg>
              <input v-model="fullName" placeholder="Jane Doe" class="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"/>
            </div>
          </div>

          <!-- Email -->
          <div class="flex flex-col gap-1">
            <label class="text-sm text-gray-700 font-medium">Email Address</label>
            <div class="flex items-center border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
              <svg class="w-4 h-4 text-gray-300 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M4 4h16v16H4z"/>
                <path d="M22 6l-10 7L2 6"/>
              </svg>
              <input v-model="email" placeholder="jane@school.edu" class="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"/>
            </div>
          </div>

          <!-- Password -->
          <div class="flex flex-col gap-1.5">
            <label class="text-gray-700 text-sm font-medium">Password</label>
            <div class="flex items-center gap-2.5 border border-gray-200 rounded-lg px-3 py-2.5 bg-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition">
              <svg class="w-4 h-4 text-gray-300 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="••••••••"
                class="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent tracking-widest"
              />
              <button type="button" @click="showPassword = !showPassword" class="text-gray-300 hover:text-gray-500 flex-shrink-0 transition-colors">
                <svg v-if="!showPassword" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                <svg v-else class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                  <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Teaching Niche -->
          <div class="flex flex-col gap-1">
            <label class="text-sm text-gray-700 font-medium">Teaching Niche</label>
            <div class="flex items-center border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50">
              <select v-model="niche" class="flex-1 bg-transparent text-sm text-gray-400 outline-none">
                <option>Select your specialty</option>
                <option>Primary Education</option>
                <option>Secondary Education</option>
                <option>Higher Education</option>
              </select>
            </div>
          </div>

          <!-- Terms -->
          <div class="flex items-start gap-2 text-xs text-gray-500">
            <input type="checkbox" v-model="agreed" class="mt-1 accent-blue-600"/>
            <p>
              I agree to the
              <span class="text-blue-600 cursor-pointer">Terms of Service</span>
              and
              <span class="text-blue-600 cursor-pointer">Privacy Policy</span>.
            </p>
          </div>

          <!-- Register button -->
          <button
            @click="handleRegister"
            :disabled="isLoading"
            class="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-semibold py-3 rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors"
          >
            <svg v-if="isLoading" class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
            </svg>
            {{ isLoading ? 'Creating account...' : 'Get Started →' }}
          </button>

          <!-- Login link -->
          <p class="text-center text-sm text-gray-500">
            Already have an account?
            <NuxtLink to="/login" class="text-blue-600 font-semibold ml-1">Log in</NuxtLink>
          </p>

          <!-- Divider -->
          <div class="flex items-center gap-3 my-1">
            <div class="flex-1 h-px bg-gray-200"></div>
            <span class="text-xs text-gray-400">or continue with</span>
            <div class="flex-1 h-px bg-gray-200"></div>
          </div>

          <!-- Social buttons -->
          <div class="grid grid-cols-2 gap-3">

            <!-- ✅ Google OAuth -->
            <button
              @click="signInWithGoogle"
              :disabled="isGoogleLoading"
              class="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm bg-white hover:bg-gray-50 disabled:opacity-60 transition-colors"
            >
              <svg v-if="isGoogleLoading" class="w-4 h-4 animate-spin text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
              </svg>
              <!-- Real Google logo -->
              <svg v-else class="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              {{ isGoogleLoading ? 'Redirecting...' : 'Google' }}
            </button>

            <!-- Facebook (placeholder) -->
            <button class="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm bg-white hover:bg-gray-50 transition-colors">
              <svg class="w-4 h-4 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
              Facebook
            </button>

          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({ layout: false })

// ── State ──────────────────────────────
const errorMsg      = ref('')
const fullName      = ref('')
const email         = ref('')
const password      = ref('')
const niche         = ref('')
const agreed        = ref(false)
const showPassword  = ref(false)
const isLoading     = ref(false)
const isGoogleLoading = ref(false)

const supabase = useSupabaseClient()

// ── Email/password register ─────────────
async function handleRegister() {
  errorMsg.value = ''
  isLoading.value = true

  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        full_name: fullName.value,
        niche: niche.value,
      }
    }
  })

  isLoading.value = false

  if (error) {
    errorMsg.value = error.message
    return
  }

  // Check for a pending course from FeatureCards click
  const pendingCourseId = sessionStorage.getItem('pendingCourseId')
  if (pendingCourseId) {
    sessionStorage.removeItem('pendingCourseId')
    await navigateTo(`/courses/${pendingCourseId}`)
  } else {
    await navigateTo('/dashboard')
  }
}

// ── Google OAuth ────────────────────────
async function signInWithGoogle() {
  errorMsg.value      = ''
  isGoogleLoading.value = true

  const { error } = await supabase.auth.signInWithOAuth({
  provider: 'google',
  options: {
    redirectTo: `${window.location.origin}/confirm`,  // ← was /dashboard
  }
})

  // If there's an error before redirect happens
  if (error) {
    errorMsg.value        = error.message
    isGoogleLoading.value = false
  }

  // Note: isGoogleLoading stays true intentionally
  // because the page redirects to Google — no need to reset it
}
</script>