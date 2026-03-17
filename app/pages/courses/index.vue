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

    <!-- Desktop nav links — logged out only -->
    <!-- Desktop nav links — logged out only -->
<ul v-if="!user" class="hidden md:flex items-center gap-7">
  <li><NuxtLink to="/" class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors">Home</NuxtLink></li>
  <!-- Hide Courses link when already on the courses page -->
  <li v-if="route.path !== '/courses'">
    <NuxtLink to="/courses" class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors">Courses</NuxtLink>
  </li>
  <li><NuxtLink to="/community" class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors">Community</NuxtLink></li>
  <li><NuxtLink to="/about" class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors">About</NuxtLink></li>
</ul>

    <!-- Right side -->
    <div class="flex items-center gap-3">

      <!-- LOGGED OUT -->
      <template v-if="!user">

        <!-- Desktop: Login + Get Started -->
        <NuxtLink to="/login"
          class="hidden md:block text-sm text-gray-600 font-medium hover:text-blue-600 transition-colors">
          Login
        </NuxtLink>
        <NuxtLink to="/register"
          class="hidden md:block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-1.5 rounded-lg transition-colors">
          Get Started
        </NuxtLink>

        <!-- Mobile: Get Started + Hamburger -->
        <NuxtLink to="/register"
          class="md:hidden bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
          Get Started
        </NuxtLink>
        <button @click="openMenu" class="md:hidden text-gray-600 focus:outline-none">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

      </template>

      <!-- LOGGED IN -->
      <template v-else>

        <!-- Notification bell -->
        <button class="text-gray-400 hover:text-gray-600">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </button>

        <!-- Email initial avatar -->
        <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
          {{ user.email?.charAt(0).toUpperCase() }}
        </div>

        <!-- Hamburger -->
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

  <!-- Backdrop -->
  <Transition name="fade">
    <div
      v-if="sidebarOpen"
      class="fixed inset-0 bg-black/40 z-[60]"
      @click="closeMenu"
    />
  </Transition>

  <!-- Panel -->
  <Transition name="slide">
    <div
      v-if="sidebarOpen"
      class="fixed top-0 right-0 h-full w-72 bg-white z-[70] shadow-2xl flex flex-col"
    >
      <!-- Header -->
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

      <!-- User info — logged in only -->
      <div v-if="user" class="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
        <div class="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
          {{ user.email?.charAt(0).toUpperCase() }}
        </div>
        <div class="min-w-0">
          <p class="text-sm font-semibold text-gray-900 truncate">{{ user.email }}</p>
          <p class="text-xs text-gray-400">Student</p>
        </div>
      </div>

      <!-- Nav links -->
      <div class="flex flex-col px-6 py-4 gap-1 flex-1">
        <NuxtLink to="/" @click="closeMenu"
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
        <NuxtLink to="/about" @click="closeMenu"
          class="text-sm text-gray-700 font-medium py-2.5 hover:text-blue-600 border-b border-gray-50">
          About
        </NuxtLink>

        <!-- Dashboard — logged in only -->
        <NuxtLink v-if="user" to="/dashboard" @click="closeMenu"
          class="text-sm text-gray-700 font-medium py-2.5 hover:text-blue-600 border-b border-gray-50">
          Dashboard
        </NuxtLink>
      </div>

      <!-- Bottom auth section -->
      <div class="px-6 py-4 border-t border-gray-100">

        <!-- Logged OUT — Login link -->
        <template v-if="!user">
          <NuxtLink to="/login" @click="closeMenu"
            class="text-sm text-gray-700 font-medium hover:text-blue-600">
            Login
          </NuxtLink>
        </template>

        <!-- Logged IN — Logout button -->
        <template v-else>
          <button
            @click="handleLogout"
            class="flex items-center gap-2 text-sm text-red-500 font-semibold"
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

<!-- MAIN -->
<main class="flex-1 max-w-7xl mx-auto w-full px-6 py-8">

  <div class="flex items-center justify-between mb-6">
    <div>
      <h1 class="text-2xl font-bold text-gray-900">Our Courses</h1>
      <p class="text-gray-400 text-sm mt-1">Everything you need to teach online and earn</p>
    </div>
  </div>

  <!-- Tabs -->
  <div class="flex gap-6 border-b border-gray-200 mb-8 text-xs font-semibold uppercase tracking-wide">
    <button
      v-for="tab in tabs"
      :key="tab"
      @click="activeTab = tab"
      :class="[
        'pb-3 transition-colors duration-200',
        activeTab === tab
          ? 'text-blue-600 border-b-2 border-blue-600'
          : 'text-gray-400 hover:text-gray-600'
      ]"
    >
      {{ tab }}
    </button>
  </div>

  <!-- Course Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="course in filteredCourses"
      :key="course.id"
      class="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
    >
      <img :src="course.image" :alt="course.title" class="w-full h-40 object-cover" loading="lazy"/>
      <div class="p-5">
        <div class="flex gap-2 mb-3">
          <span
            v-for="badge in course.badges"
            :key="badge.label"
            :class="`text-[10px] font-semibold px-2.5 py-1 rounded uppercase tracking-wide ${badge.color}`"
          >
            {{ badge.label }}
          </span>
        </div>
        <h3 class="font-semibold text-sm text-gray-900 mb-2 leading-snug">{{ course.title }}</h3>
        <p class="text-gray-400 text-xs mb-4 line-clamp-2 leading-relaxed">{{ course.description }}</p>

        <div class="flex items-center justify-between">
          <span class="text-gray-900 font-bold text-sm">₦{{ course.price.toLocaleString() }}</span>

          <NuxtLink
            v-if="isEnrolled(course.id)"
            :to="`/courses/${course.id}/learn`"
            class="bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-4 py-1.5 rounded-lg transition-colors duration-200"
          >
            Continue →
          </NuxtLink>

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

  <!-- Pagination -->
  <div class="flex justify-center items-center gap-2 mt-10 text-sm">
    <button class="w-8 h-8 flex items-center justify-center text-gray-400 border border-gray-200 rounded hover:bg-gray-100">‹</button>
    <button
      v-for="page in [1, 2, 3]"
      :key="page"
      @click="currentPage = page"
      :class="[
        'w-8 h-8 flex items-center justify-center rounded font-medium transition-colors',
        currentPage === page ? 'bg-blue-600 text-white' : 'border border-gray-200 text-gray-500 hover:bg-gray-100'
      ]"
    >
      {{ page }}
    </button>
    <span class="text-gray-400 px-1">...</span>
    <button class="w-8 h-8 flex items-center justify-center border border-gray-200 rounded text-gray-500 hover:bg-gray-100">12</button>
    <button class="w-8 h-8 flex items-center justify-center text-gray-400 border border-gray-200 rounded hover:bg-gray-100">›</button>
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

const route = useRoute()

definePageMeta({ layout: false })

interface Badge { label: string; color: string }
interface Course {
  id: number
  title: string
  description: string
  price: number
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  image: string
  badges: Badge[]
}

const supabase    = useSupabaseClient()
const user        = useSupabaseUser()
const config      = useRuntimeConfig()
const sidebarOpen = ref(false)
const tabs        = ['All', 'Beginner', 'Intermediate', 'Advanced']
const activeTab   = ref('All')
const currentPage = ref(1)
const enrollingId = ref<number | null>(null)
const errorMsg    = ref('')
const enrolledIds = ref<number[]>([])

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
  const { data: { session } } = await supabase.auth.getSession()
  const currentUser = session?.user ?? user.value
  if (!currentUser) return

  const { data } = await supabase
    .from('enrollments')
    .select('course_id')
    .eq('user_id', currentUser.id)

  if (data) {
    enrolledIds.value = data.map((e: any) => Number(e.course_id))
  }
})

function isEnrolled(courseId: number): boolean {
  return enrolledIds.value.includes(courseId)
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Digital Marketing Masterclass',
    description: 'Master SEO, SEM, and social media advertising. Learn to scale brands with data-driven strategies.',
    price: 5000,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    badges: [
      { label: 'Marketing',  color: 'bg-green-100 text-green-700'  },
      { label: 'Bestseller', color: 'bg-yellow-100 text-yellow-700' },
    ]
  },
  {
    id: 2,
    title: 'Advanced Python for Data Science',
    description: 'Deep dive into NumPy, Pandas and Scikit-learn. Build predictive models from scratch.',
    price: 4500,
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    badges: [{ label: 'Data Science', color: 'bg-blue-100 text-blue-700' }]
  },
  {
    id: 3,
    title: 'UI/UX Design Essentials',
    description: 'Learn Figma and user-centric design principles. Create stunning prototypes that convert.',
    price: 10000,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    badges: [{ label: 'Design', color: 'bg-purple-100 text-purple-700' }]
  },
  {
    id: 4,
    title: 'Full-stack Web Development',
    description: 'Build robust apps with React and Node.js. Comprehensive guide from frontend to backend.',
    price: 10000,
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    badges: [{ label: 'Development', color: 'bg-teal-100 text-teal-700' }]
  },
  {
    id: 5,
    title: 'Business Analytics 101',
    description: 'Data-driven decision making for managers. Learn to interpret KPIs and forecast growth.',
    price: 2000,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    badges: [{ label: 'Business', color: 'bg-orange-100 text-orange-700' }]
  },
  {
    id: 6,
    title: 'Social Media Strategy',
    description: 'Scale your brand presence across platforms. Content creation and community management.',
    price: 1500,
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
    badges: [{ label: 'Social Media', color: 'bg-rose-100 text-rose-700' }]
  },
]

const filteredCourses = computed((): Course[] => {
  if (activeTab.value === 'All') return courses
  return courses.filter(c => c.level === activeTab.value)
})

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
      console.error('Enrollment save failed:', error)
      errorMsg.value = 'Payment received but enrollment failed. Contact support.'
      setTimeout(() => { errorMsg.value = '' }, 4000)
      return
    }

    enrolledIds.value.push(course.id)

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

  const handler = PaystackPop.setup({
    key:      config.public.paystackPublicKey,
    email:    user.value.email!,
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
      handlePaymentSuccess(course, response.reference)
    },
  })

  handler.openIframe()
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>