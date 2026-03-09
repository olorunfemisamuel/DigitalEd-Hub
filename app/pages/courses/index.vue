<template>
<div class="min-h-screen bg-[#F9FAFB] flex flex-col">

<!-- NAVBAR -->
<header class="bg-white border-b border-gray-200 sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-6 h-16 flex items-center">
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
    <nav class="hidden md:flex items-center gap-8 ml-8">
      <NuxtLink to="/courses" class="text-gray-500 text-sm hover:text-gray-800">Courses</NuxtLink>
    </nav>
    <div class="ml-auto flex items-center gap-4">
      <button class="text-gray-400 hover:text-gray-600">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
      </button>
      <img src="https://i.pravatar.cc/32?img=5" class="w-8 h-8 rounded-full cursor-pointer"/>
      <button class="md:hidden text-gray-500" @click="mobileOpen = !mobileOpen">☰</button>
    </div>
  </div>
  <div v-if="mobileOpen" class="md:hidden border-t border-gray-200 bg-white px-6 py-4">
    <nav class="flex flex-col gap-4 text-sm">
      <NuxtLink to="/dashboard">Dashboard</NuxtLink>
      <NuxtLink to="/courses" class="text-blue-600 font-semibold">Courses</NuxtLink>
    </nav>
  </div>
</header>

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

          <!-- Already enrolled → go to learn page -->
          <NuxtLink
            v-if="isEnrolled(course.id)"
            :to="`/courses/${course.id}/learn`"
            class="bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-4 py-1.5 rounded-lg transition-colors duration-200"
          >
            Continue →
          </NuxtLink>

          <!-- Not enrolled → Paystack -->
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
import { ref, computed } from 'vue'

definePageMeta({ layout: false })

// ── Types ──────────────────────────────
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

// ── Auth + composables ─────────────────
const supabase = useSupabaseClient()
const user     = useSupabaseUser()
const config   = useRuntimeConfig()
const { isEnrolled, markEnrolled } = useEnrollment()

// ── State ──────────────────────────────
const mobileOpen  = ref(false)
const tabs        = ['All', 'Beginner', 'Intermediate', 'Advanced']
const activeTab   = ref('All')
const currentPage = ref(1)
const enrollingId = ref<number | null>(null)
const errorMsg    = ref('')

// ── Courses ────────────────────────────
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

// ── Async work after payment ────────────
// Separated so callback() stays a plain function (Paystack requirement)
async function handlePaymentSuccess(course: Course, reference: string) {
  try {
    await (supabase as any).from('enrollments').insert({
      user_id:      user.value!.id,
      course_id:    course.id,
      course_title: course.title,
      amount:       course.price,
      reference,
    })
  } catch (err) {
    console.error('Enrollment save failed:', err)
  }

  // Save to localStorage so isEnrolled() reflects instantly
  markEnrolled(course.id)

  // Navigate to lesson
  await navigateTo(`/courses/${course.id}/learn`)
}

// ── Enroll handler ─────────────────────
// Must be a plain (non-async) function so Paystack's
// callback rule is satisfied
function handleEnroll(course: Course) {

  // Not logged in → save intended course and send to register
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
    key:      config.public.paystackPublicKey,  // from .env
    email:    user.value.email!,                // real user email
    amount:   course.price * 100,               // kobo
    currency: 'NGN',
    ref:      `DEH-${course.id}-${Date.now()}`,
    metadata: {
      course_id:    course.id,
      course_title: course.title,
    },

    // ✅ Plain function — Paystack requires this
    onClose() {
      enrollingId.value = null
    },

    // ✅ Plain function — async work moved to handlePaymentSuccess()
    callback(response: { reference: string }) {
      enrollingId.value = null
      handlePaymentSuccess(course, response.reference)
    },
  })

  // ✅ Called synchronously inside the click handler — no await before this
  handler.openIframe()
}
</script>