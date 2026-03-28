<template>
<div class="min-h-screen bg-[#F9FAFB] flex flex-col">

<!-- NAVBAR -->
<header class="bg-white border-b border-gray-200 sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

    <!-- Logo -->
    <NuxtLink to="/" class="flex items-center gap-2">
      <div class="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="2" width="5" height="5" rx="1" fill="white"/>
          <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
          <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
          <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.4"/>
        </svg>
      </div>
      <span class="text-blue-600 font-bold text-sm">DigitalEd Hub</span>
    </NuxtLink>

    <!-- Desktop nav links -->
    <ul v-if="!user" class="hidden md:flex items-center gap-7">
      <li><NuxtLink to="/" class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors">Home</NuxtLink></li>
      <li><NuxtLink to="/community" class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors">Community</NuxtLink></li>
      <li><NuxtLink to="/about" class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors">About</NuxtLink></li>
    </ul>

    <!-- Right side -->
    <div class="flex items-center gap-3">

      <!-- LOGGED OUT -->
      <template v-if="!user">
        <NuxtLink to="/login" class="hidden md:block text-sm text-gray-600 font-medium hover:text-blue-600 transition-colors">Login</NuxtLink>
        <NuxtLink to="/register" class="hidden md:block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-1.5 rounded-lg transition-colors">Get Started</NuxtLink>
        <NuxtLink to="/register" class="md:hidden bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">Get Started</NuxtLink>
        <button @click="openMenu" class="md:hidden text-gray-600 focus:outline-none">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </template>

      <!-- LOGGED IN -->
      <template v-else>
        <button class="text-gray-400 hover:text-gray-600">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </button>
        <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
          {{ user.email?.charAt(0).toUpperCase() }}
        </div>
        <button @click="openMenu" class="text-gray-600 hover:text-gray-800 focus:outline-none">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </template>

    </div>
  </div>
</header>

<!-- SIDEBAR -->
<Teleport to="body">
  <Transition name="fade">
    <div v-if="sidebarOpen" class="fixed inset-0 bg-black/40 z-[60]" @click="closeMenu"/>
  </Transition>
  <Transition name="slide">
    <div v-if="sidebarOpen" class="fixed top-0 right-0 h-full w-72 bg-white z-[70] shadow-2xl flex flex-col">
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
          <span class="text-blue-600 font-bold text-sm">DigitalEd Hub</span>
        </div>
        <button @click="closeMenu" class="text-gray-400 hover:text-gray-600">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div v-if="user" class="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
        <div class="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
          {{ user.email?.charAt(0).toUpperCase() }}
        </div>
        <div class="min-w-0">
          <p class="text-sm font-semibold text-gray-900 truncate">{{ user.email }}</p>
          <p class="text-xs text-gray-400">Student</p>
        </div>
      </div>
      <div class="flex flex-col px-6 py-4 gap-1 flex-1">
        <NuxtLink to="/" @click="closeMenu" class="text-sm text-gray-700 font-medium py-2.5 hover:text-blue-600 border-b border-gray-50">Home</NuxtLink>
        <NuxtLink to="/courses" @click="closeMenu" class="text-sm text-blue-600 font-semibold py-2.5 border-b border-gray-50">Courses</NuxtLink>
        <NuxtLink to="/community" @click="closeMenu" class="text-sm text-gray-700 font-medium py-2.5 hover:text-blue-600 border-b border-gray-50">Community</NuxtLink>
        <NuxtLink to="/about" @click="closeMenu" class="text-sm text-gray-700 font-medium py-2.5 hover:text-blue-600 border-b border-gray-50">About</NuxtLink>
        <NuxtLink v-if="user" to="/dashboard" @click="closeMenu" class="text-sm text-gray-700 font-medium py-2.5 hover:text-blue-600 border-b border-gray-50">Dashboard</NuxtLink>
      </div>
      <div class="px-6 py-4 border-t border-gray-100">
        <template v-if="!user">
          <NuxtLink to="/login" @click="closeMenu" class="text-sm text-gray-700 font-medium hover:text-blue-600">Login</NuxtLink>
        </template>
        <template v-else>
          <button @click="handleLogout" class="flex items-center gap-2 text-sm text-red-500 font-semibold">
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

<!-- MAIN -->
<main class="flex-1 max-w-7xl mx-auto w-full px-6 py-8">

  <div class="flex items-center justify-between mb-6">
    <div>
      <h1 class="text-2xl font-bold text-gray-900">Our Courses</h1>
      <p class="text-gray-400 text-sm mt-1">Everything you need to teach online and earn</p>
    </div>
  </div>

  <!-- Tabs -->
  <div class="flex gap-6 border-b border-gray-200 mb-8 text-xs font-semibold uppercase tracking-wide overflow-x-auto">
    <button
      v-for="tab in tabs"
      :key="tab"
      @click="activeTab = tab"
      :class="[
        'pb-3 whitespace-nowrap transition-colors duration-200',
        activeTab === tab
          ? 'text-blue-600 border-b-2 border-blue-600'
          : 'text-gray-400 hover:text-gray-600'
      ]"
    >
      {{ tab }}
    </button>
  </div>

  <!-- Loading -->
  <div v-if="isLoading" class="flex justify-center py-20">
    <div class="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>

  <!-- Empty state -->
  <div v-else-if="filteredCourses.length === 0" class="flex flex-col items-center justify-center py-20 text-center">
    <svg class="w-12 h-12 text-gray-200 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
    <p class="text-gray-400 text-sm font-medium">No courses available yet.</p>
    <p class="text-gray-300 text-xs mt-1">Check back soon!</p>
  </div>

  <!-- Course Grid -->
  <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="course in filteredCourses"
      :key="course.id"
      class="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
    >
      <!-- Thumbnail -->
      <div class="w-full h-40 bg-gray-100 overflow-hidden">
        <img
          v-if="course.thumbnail"
          :src="course.thumbnail"
          :alt="course.title"
          class="w-full h-full object-cover"
          loading="lazy"
        />
        <div v-else class="w-full h-full flex items-center justify-center bg-blue-50">
          <svg class="w-10 h-10 text-blue-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
        </div>
      </div>

      <div class="p-5">
        <!-- Category badge -->
        <div class="flex gap-2 mb-3">
          <span class="text-[10px] font-semibold px-2.5 py-1 rounded uppercase tracking-wide bg-blue-100 text-blue-700">
            {{ course.category }}
          </span>
        </div>

        <h3 class="font-semibold text-sm text-gray-900 mb-2 leading-snug">{{ course.title }}</h3>
        <p class="text-gray-400 text-xs mb-4 line-clamp-2 leading-relaxed">{{ course.description }}</p>

        <div class="flex items-center justify-between">
          <span class="text-gray-900 font-bold text-sm">₦{{ course.price.toLocaleString() }}</span>

          <!-- Already enrolled -->
          <NuxtLink
            v-if="isEnrolled(course.id)"
            :to="`/courses/${course.id}/learn`"
            class="bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-4 py-1.5 rounded-lg transition-colors duration-200"
          >
            Continue →
          </NuxtLink>

          <!-- Enroll button -->
          <button
            v-else
            @click="handleEnroll(course)"
            :disabled="enrollingId === course.id"
            class="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs font-semibold px-4 py-1.5 rounded-lg transition-colors duration-200 flex items-center gap-1.5"
          >
            <svg v-if="enrollingId === course.id" class="w-3 h-3 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
            </svg>
            {{ enrollingId === course.id ? 'Loading...' : 'Enroll Now' }}
          </button>
        </div>
      </div>
    </div>
  </div>

</main>

<footer class="text-center py-6 text-xs text-gray-400">
  © 2026 DigitalEd Hub. All rights reserved.
</footer>

<!-- ERROR TOAST -->
<div
  v-if="errorMsg"
  class="fixed bottom-6 left-1/2 -translate-x-1/2 bg-red-600 text-white text-sm font-medium px-5 py-3 rounded-xl shadow-lg z-50"
>
  {{ errorMsg }}
</div>

</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

definePageMeta({ layout: false })

interface Course {
  id:          string
  title:       string
  description: string
  price:       number
  category:    string
  thumbnail:   string | null
  status:      string
}

const supabase    = useSupabaseClient()
const user        = useSupabaseUser()
const config      = useRuntimeConfig()
const sidebarOpen = ref(false)
const isLoading   = ref(true)
const activeTab   = ref('All')
const enrollingId = ref<string | null>(null)
const errorMsg    = ref('')
const courses     = ref<Course[]>([])
const enrolledIds = ref<string[]>([])

// ✅ Derive tabs dynamically from categories
const tabs = computed(() => {
  const cats = [...new Set(courses.value.map(c => c.category))]
  return ['All', ...cats]
})

// ✅ Filter by active tab
const filteredCourses = computed(() => {
  if (activeTab.value === 'All') return courses.value
  return courses.value.filter(c => c.category === activeTab.value)
})

function openMenu() {
  sidebarOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeMenu() {
  sidebarOpen.value = false
  document.body.style.overflow = ''
}

async function handleLogout() {
  closeMenu()
  await supabase.auth.signOut()
  await navigateTo('/')
}

onMounted(async () => {
  // ✅ Fetch published courses from Supabase
  const { data, error } = await supabase
    .from('courses')
    .select('id, title, description, price, category, thumbnail, status')
    .eq('status', 'published')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Failed to load courses:', error.message)
  } else {
    courses.value = data ?? []
  }

  isLoading.value = false

  // ✅ Load enrolled courses for logged-in user
  const { data: { session } } = await supabase.auth.getSession()
  const currentUser = session?.user ?? user.value
  if (!currentUser) return

  const { data: enrollments } = await supabase
    .from('enrollments')
    .select('course_id')
    .eq('user_id', currentUser.id)

  if (enrollments) {
    enrolledIds.value = enrollments.map((e: any) => String(e.course_id))
  }
})

function isEnrolled(courseId: string): boolean {
  return enrolledIds.value.includes(String(courseId))
}

async function handlePaymentSuccess(course: Course, reference: string) {
  const { data: { session } } = await supabase.auth.getSession()
  const currentUser = session?.user ?? user.value
  if (!currentUser) return

  try {
    const { error } = await supabase.from('enrollments').insert({
      user_id:      currentUser.id,
      course_id:    course.id,
      course_title: course.title,
      amount:       course.price,
      reference,
    })

    if (error) {
       console.error('Enrollment insert error:', JSON.stringify(error, null, 2)) // 👈 add this
      errorMsg.value = 'Payment received but enrollment failed. Contact support.'
      setTimeout(() => { errorMsg.value = '' }, 4000)
      return
    }

    enrolledIds.value.push(String(course.id))

  } catch (err) {
    console.error('Enrollment save failed:', err)
  }

  await navigateTo('/dashboard')
}

function handleEnroll(course: Course) {
  if (!user.value) {
    if (import.meta.client) {
      sessionStorage.setItem('pendingCourseId', String(course.id))
    }
    navigateTo('/register')
    return
  }

  const PaystackPop = (window as any).PaystackPop

  if (!PaystackPop) {
    errorMsg.value = 'Payment is still loading, please try again.'
    setTimeout(() => { errorMsg.value = '' }, 3000)
    return
  }

  enrollingId.value = course.id
  errorMsg.value    = ''

  // ✅ Capture synchronously before iframe opens
  const courseSnapshot = { ...course }
  const userEmail      = user.value.email!

  const handler = PaystackPop.setup({
    key:      config.public.paystackPublicKey,
    email:    userEmail,
    amount:   course.price * 100,
    currency: 'NGN',
    ref:      `DEH-${course.id}-${Date.now()}`,
    metadata: {
      course_id:    course.id,
      course_title: course.title,
    },
    onClose() {
      enrollingId.value = null
    },
    callback(response: { reference: string }) {
      enrollingId.value = null
      const ref = response.reference
      Promise.resolve().then(() => handlePaymentSuccess(courseSnapshot, ref))
    },
  })

  handler.openIframe()
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