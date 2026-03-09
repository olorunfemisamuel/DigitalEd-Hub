<template>
  <div class="min-h-screen flex">

    <!-- LEFT PANEL -->
    <div class="hidden md:flex relative w-[48%] flex-shrink-0 overflow-hidden">

      <!-- Image -->
      <img
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <!-- Blue overlay -->
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
          Empowering <br>
          Educators <br>
          Together
        </h2>

        <p class="text-blue-100 text-sm leading-relaxed mb-6 max-w-sm">
          Join a global community of professionals sharing lesson plans,
          mentorship, and growing their teaching careers.
        </p>

        <!-- Avatars -->
        <div class="flex items-center gap-3">

          <div class="flex items-center">
            <img
              src="https://i.pravatar.cc/32?img=12"
              class="w-8 h-8 rounded-full border-2 border-white"
            />

            <img
              src="https://i.pravatar.cc/32?img=47"
              class="w-8 h-8 rounded-full border-2 border-white -ml-3"
            />
          </div>

          <span class="text-blue-100 text-xs">
            Trusted by educators worldwide
          </span>

        </div>

      </div>

    </div>

    <!-- RIGHT PANEL -->
    <div class="flex-1 bg-[#F8FAFC] flex items-center justify-center px-8">

      <div class="w-full max-w-md">

        <!-- Heading -->
        <h1 class="text-2xl font-semibold text-gray-900 mb-1">
          Create your account
        </h1>

        <p class="text-gray-400 text-sm mb-8">
          Fill in your details to join the professional community.
        </p>

        <div class="flex flex-col gap-5">

          <!-- Full Name -->
          <div class="flex flex-col gap-1">
            <label class="text-sm text-gray-700 font-medium">
              Full Name
            </label>

            <div class="flex items-center border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">

              <svg class="w-4 h-4 text-gray-300 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <circle cx="12" cy="7" r="4"/>
                <path d="M5.5 21a6.5 6.5 0 0 1 13 0"/>
              </svg>

              <input
                v-model="fullName"
                placeholder="Jane Doe"
                class="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"
              />

            </div>
          </div>

          <!-- Email -->
          <div class="flex flex-col gap-1">
            <label class="text-sm text-gray-700 font-medium">
              Email Address
            </label>

            <div class="flex items-center border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">

              <svg class="w-4 h-4 text-gray-300 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M4 4h16v16H4z"/>
                <path d="M22 6l-10 7L2 6"/>
              </svg>

              <input
                v-model="email"
                placeholder="jane@school.edu"
                class="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"
              />

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
            <label class="text-sm text-gray-700 font-medium">
              Teaching Niche
            </label>

            <div class="flex items-center border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50">

              <select
                v-model="niche"
                class="flex-1 bg-transparent text-sm text-gray-400 outline-none"
              >
                <option>Select your specialty</option>
                <option>Primary Education</option>
                <option>Secondary Education</option>
                <option>Higher Education</option>
              </select>

            </div>
          </div>

          <!-- Terms -->
          <div class="flex items-start gap-2 text-xs text-gray-500">
            <input
              type="checkbox"
              v-model="agreed"
              class="mt-1 accent-blue-600"
            />

            <p>
              I agree to the
              <span class="text-blue-600 cursor-pointer">Terms of Service</span>
              and
              <span class="text-blue-600 cursor-pointer">Privacy Policy</span>.
            </p>
          </div>

          <!-- Button -->
          <button
            @click="handleRegister"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3 rounded-lg shadow-sm flex items-center justify-center gap-2"
          >
            Get Started →
          </button>

          <!-- Login -->
          <p class="text-center text-sm text-gray-500">
            Already have an account?
            <NuxtLink to="/login" class="text-blue-600 font-semibold ml-1">
              Log in
            </NuxtLink>
          </p>

          <!-- Divider -->
          <div class="flex items-center gap-3 my-2">
            <div class="flex-1 h-px bg-gray-200"></div>
            <div class="flex-1 h-px bg-gray-200"></div>
          </div>

          <!-- Social -->
          <div class="grid grid-cols-2 gap-3">

            <button class="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm bg-white hover:bg-gray-50">
              <span class="w-4 h-4 bg-green-600 rounded-sm"></span>
              Google
            </button>

            <button class="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm bg-white hover:bg-gray-50">
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

definePageMeta({
  layout:false
})

const fullName = ref('')
const email = ref('')
const password = ref('')
const niche = ref('')
const agreed = ref(false)
const showPassword = ref(false)

//supabase auth
async function handleRegister() {
  const supabase = useSupabaseClient()

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

  if (error) {
    console.error('Register failed:', error.message)
    return
  }

  await navigateTo('/courses')
}

</script>