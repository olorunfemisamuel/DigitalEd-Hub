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

        <!-- ADMIN nav -->
        <template v-if="isAdmin">
          <li>
            <NuxtLink to="/admin/dashboard" class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors" active-class="text-blue-600">
              Dashboard
            </NuxtLink>
          </li>
        </template>

        <!-- STUDENT / GUEST nav -->
        <template v-else>
          <li v-if="!user">
            <NuxtLink to="/" class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors" active-class="text-blue-600">
              Home
            </NuxtLink>
          </li>
          <li v-if="!user">
            <NuxtLink to="/courses" class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors" active-class="text-blue-600">
              Courses
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/community" class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors" active-class="text-blue-600">
              Community
            </NuxtLink>
          </li>

          <!-- <li>
            <NuxtLink to="/resources" class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors" active-class="text-blue-600">
              Resources
            </NuxtLink>
          </li> -->

          <li>
            <NuxtLink to="/about" class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors" active-class="text-blue-600">
              About
            </NuxtLink>
          </li>
        </template>

      </ul>

      <!-- Desktop Right Side -->
      <div class="hidden md:flex items-center gap-3">

        <!-- Logged OUT -->
        <template v-if="!user">
          <NuxtLink to="/login" class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors">
            Login
          </NuxtLink>
          <NuxtLink to="/register" class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-1">
            Get Started <span>→</span>
          </NuxtLink>
        </template>

        <!-- Logged IN as ADMIN -->
        <template v-else-if="isAdmin">
          <NuxtLink
            to="/admin/dashboard"
            class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Admin Dashboard
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

        <!-- Logged IN as STUDENT -->
        <template v-else>
          <NuxtLink to="/dashboard" class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
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

      <!-- Mobile Right: Get Started / Avatar + Hamburger -->
      <div class="md:hidden flex items-center gap-3">

        <!-- Get Started — only when logged OUT -->
        <NuxtLink
          v-if="!user"
          to="/register"
          class="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
        >
          Get Started
        </NuxtLink>

        <!-- User initial avatar — only when logged IN -->
        <div
          v-if="user"
          class="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold"
        >
          {{ user.email?.charAt(0).toUpperCase() }}
        </div>

        <!-- Hamburger -->
        <button @click="openMenu" class="text-gray-700 focus:outline-none" aria-label="Toggle menu">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

      </div>
    </nav>

    <!-- MOBILE SIDEBAR -->
    <Teleport to="body">

      <Transition name="fade">
        <div
          v-if="isOpen"
          class="fixed inset-0 bg-black/40 z-[60] md:hidden"
          @click="closeMenu"
        />
      </Transition>

      <Transition name="slide">
        <div
          v-if="isOpen"
          class="fixed top-0 right-0 h-full w-72 bg-white z-[70] md:hidden shadow-2xl flex flex-col"
        >
          <!-- Sidebar header -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="5" height="5" rx="1" fill="white"/>
                  <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
                  <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
                  <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.4"/>
                </svg>
              </div>
              <span class="text-blue-600 font-bold text-sm tracking-tight">DigitalEd Hub</span>
            </div>
            <button @click="closeMenu" class="text-gray-400 hover:text-gray-600">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- Nav links -->
          <div class="flex flex-col px-6 py-4 gap-1 flex-1 overflow-y-auto">

            <!-- ADMIN mobile links -->
            <template v-if="isAdmin">
              <NuxtLink to="/admin/dashboard" @click="closeMenu"
                class="text-sm text-blue-600 font-semibold py-2.5 border-b border-gray-50">
                Admin Dashboard
              </NuxtLink>
            </template>

            <!-- STUDENT / GUEST mobile links -->
            <template v-else>
              <NuxtLink v-if="!user" to="/" @click="closeMenu"
                class="text-sm text-gray-700 font-medium py-2.5 hover:text-blue-600 border-b border-gray-50">
                Home
              </NuxtLink>
              <NuxtLink to="/courses" @click="closeMenu"
                class="text-sm text-gray-700 font-medium py-2.5 hover:text-blue-600 border-b border-gray-50">
                Courses
              </NuxtLink>
              <NuxtLink to="/community" @click="closeMenu"
                class="text-sm text-gray-700 font-medium py-2.5 hover:text-blue-600 border-b border-gray-50">
                Community
              </NuxtLink>

<!-- 
                <NuxtLink to="/resources" @click="closeMenu"
                class="text-sm text-gray-700 font-medium py-2.5 hover:text-blue-600 border-b border-gray-50">
                Resources
              </NuxtLink> -->


              <NuxtLink to="/about" @click="closeMenu"
                class="text-sm text-gray-700 font-medium py-2.5 hover:text-blue-600 border-b border-gray-50">
                About
              </NuxtLink>
            </template>

          </div>

          <!-- Bottom auth section -->
          <div class="px-6 py-4 border-t border-gray-100 flex flex-col gap-3">

            <!-- Logged OUT -->
            <template v-if="!user">
              <NuxtLink to="/login" @click="closeMenu"
                class="text-sm text-gray-700 font-medium hover:text-blue-600">
                Login
              </NuxtLink>
            </template>

            <!-- Logged IN (admin or student) -->
            <template v-else>
              <div class="flex items-center gap-2 mb-1">
                <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {{ user.email?.charAt(0).toUpperCase() }}
                </div>
                <span class="text-sm text-gray-500 truncate">{{ user.email }}</span>
              </div>

              <!-- Admin: go to admin dashboard -->
              <NuxtLink v-if="isAdmin" to="/admin/dashboard" @click="closeMenu"
                class="text-sm text-blue-600 font-semibold hover:underline">
                Admin Dashboard
              </NuxtLink>

              <!-- Student: go to student dashboard -->
              <NuxtLink v-else to="/dashboard" @click="closeMenu"
                class="text-sm text-gray-700 font-medium hover:text-blue-600">
                Dashboard
              </NuxtLink>

              <button
                @click="handleLogout"
                class="flex items-center gap-2 text-sm text-red-500 font-semibold py-1"
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
      </Transition>

    </Teleport>

  </header>
</template>

<script setup lang="ts">
const isOpen   = ref(false)
const supabase = useSupabaseClient()
const user     = useSupabaseUser()

// ✅ Check admin cookie — not Supabase email
const isAdmin = ref(false)

onMounted(async () => {
  try {
    const result = await $fetch<{ isAdmin: boolean }>('/api/admin-check')
    isAdmin.value = result.isAdmin
  } catch {
    isAdmin.value = false
  }
})

function openMenu() {
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeMenu() {
  isOpen.value = false
  document.body.style.overflow = ''
}

async function handleLogout() {
  closeMenu()
  if (isAdmin.value) {
    // ✅ Admin logout — clear cookie only
    await $fetch('/api/admin-logout', { method: 'POST' })
    isAdmin.value = false
    await navigateTo('/admin/login')
  } else {
    // ✅ Student logout — clear Supabase session
    await supabase.auth.signOut()
    await navigateTo('/')
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }

.slide-enter-active,
.slide-leave-active { transition: transform 0.3s ease; }
.slide-enter-from,
.slide-leave-to { transform: translateX(100%); }
</style>