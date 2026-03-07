<template>
  <header class="w-full bg-white border-b border-gray-200 fixed top-0 left-0 z-50">
    <nav class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <div class="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <NuxtLink
            to="/"
            class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors duration-200"
            active-class="text-blue-600"
          >
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/courses"
            class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors duration-200"
            active-class="text-blue-600"
          >
            Courses
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/community"
            class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors duration-200"
            active-class="text-blue-600"
          >
            Community
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/about"
            class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors duration-200"
            active-class="text-blue-600"
          >
            About
          </NuxtLink>
        </li>
        <!-- <li>
          <NuxtLink
            to="/blog"
            class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors duration-200"
            active-class="text-blue-600"
          >
            Blog
          </NuxtLink>
        </li> -->
      </ul>

      <!-- Right Side: Login + Get Started -->
      <div class="hidden md:flex items-center gap-6">
        <NuxtLink
          to="/login"
          class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors duration-200"
        >
          Login
        </NuxtLink>

        <NuxtLink
          to="/register"
          class="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors duration-200 flex items-center gap-1"
        >
          Get Started
          <span class="text-xs">→</span>
        </NuxtLink>
      </div>

      <!-- Mobile Hamburger -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden text-gray-700 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

    </nav>

    <!-- Mobile Menu -->
    <div v-show="isOpen" class="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
      <NuxtLink to="/" @click="isOpen = false" class="block text-sm text-gray-700 font-medium py-2 hover:text-blue-600">Home</NuxtLink>
      <NuxtLink to="/courses" @click="isOpen = false" class="block text-sm text-gray-700 font-medium py-2 hover:text-blue-600">Courses</NuxtLink>
      <NuxtLink to="/community" @click="isOpen = false" class="block text-sm text-gray-700 font-medium py-2 hover:text-blue-600">Community</NuxtLink>
      <NuxtLink to="/about" @click="isOpen = false" class="block text-sm text-gray-700 font-medium py-2 hover:text-blue-600">About</NuxtLink>
      <NuxtLink to="/blog" @click="isOpen = false" class="block text-sm text-gray-700 font-medium py-2 hover:text-blue-600">Blog</NuxtLink>
      <div class="pt-3 border-t border-gray-100 flex flex-col gap-3">
        <NuxtLink to="/login" @click="isOpen = false" class="text-sm text-gray-700 font-medium hover:text-blue-600">Login</NuxtLink>
        <NuxtLink to="/register" @click="isOpen = false"
          class="bg-teal-500 text-white text-sm font-medium px-4 py-2 rounded-md text-center hover:bg-teal-600 transition-colors">
          Get Started →
        </NuxtLink>
      </div>
    </div>

  </header>
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>