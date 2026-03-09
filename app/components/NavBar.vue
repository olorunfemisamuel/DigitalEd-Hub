<template>
  <header class="w-full bg-white border-b border-gray-200 fixed top-0 left-0 z-50">
    <nav class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <div class="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="2" y="2" width="5" height="5" rx="1" fill="white"/>
            <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
            <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
            <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.4"/>
          </svg>
        </div>
        <span class="text-blue-600 font-bold text-base tracking-tight">DigitalEd Hub</span>
      </NuxtLink>

      <!-- Desktop Nav Links -->
      <ul class="hidden md:flex items-center gap-7">
        <li>
          <NuxtLink to="/" class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors" active-class="text-blue-600">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/courses" class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors" active-class="text-blue-600">
            Courses
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/community" class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors" active-class="text-blue-600">
            Community
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors" active-class="text-blue-600">
            About
          </NuxtLink>
        </li>
      </ul>

      <!-- ── DESKTOP RIGHT SIDE ── -->
      <div class="hidden md:flex items-center gap-3">

        <!-- Logged OUT -->
        <template v-if="!user">
          <NuxtLink to="/login"
            class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors">
            Login
          </NuxtLink>
          <NuxtLink to="/register"
            class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-1">
            Get Started <span>→</span>
          </NuxtLink>
        </template>

        <!-- Logged IN -->
        <template v-else>
          <NuxtLink to="/dashboard"
            class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Dashboard
          </NuxtLink>
          <span class="text-sm text-gray-400">{{ user.email }}</span>
          <button
            @click="handleLogout"
            class="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-500 border border-red-200 text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Log out
          </button>
        </template>

      </div>

      <!-- Mobile Hamburger -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden text-gray-700 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg v-if="!isOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

    </nav>

    <!-- ── MOBILE MENU ── -->
    <div v-show="isOpen" class="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1">

      <!-- Nav links — always visible -->
      <NuxtLink to="/"          @click="isOpen = false" class="block text-sm text-gray-700 font-medium py-2 hover:text-blue-600">Home</NuxtLink>
      <NuxtLink to="/courses"   @click="isOpen = false" class="block text-sm text-gray-700 font-medium py-2 hover:text-blue-600">Courses</NuxtLink>
      <NuxtLink to="/community" @click="isOpen = false" class="block text-sm text-gray-700 font-medium py-2 hover:text-blue-600">Community</NuxtLink>
      <NuxtLink to="/about"     @click="isOpen = false" class="block text-sm text-gray-700 font-medium py-2 hover:text-blue-600">About</NuxtLink>

      <div class="pt-3 border-t border-gray-100 flex flex-col gap-3">

        <!-- Logged OUT -->
        <template v-if="!user">
          <NuxtLink to="/login" @click="isOpen = false"
            class="text-sm text-gray-700 font-medium hover:text-blue-600">
            Login
          </NuxtLink>
          <NuxtLink to="/register" @click="isOpen = false"
            class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center transition-colors">
            Get Started →
          </NuxtLink>
        </template>

        <!-- Logged IN -->
        <template v-else>
          <div class="flex items-center gap-2 py-1">
            <div class="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">
              {{ user.email?.charAt(0).toUpperCase() }}
            </div>
            <span class="text-sm text-gray-500 truncate">{{ user.email }}</span>
          </div>
          <NuxtLink to="/dashboard" @click="isOpen = false"
            class="text-sm text-gray-700 font-medium hover:text-blue-600">
            Dashboard
          </NuxtLink>
          <button
            @click="handleLogout"
            class="flex items-center gap-2 text-sm text-red-500 font-semibold py-2"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Log out
          </button>
        </template>

      </div>
    </div>

  </header>
</template>

<script setup lang="ts">
const isOpen   = ref(false)
const supabase = useSupabaseClient()
const user     = useSupabaseUser()

async function handleLogout() {
  isOpen.value = false
  await supabase.auth.signOut()
  await navigateTo('/')
}
</script>