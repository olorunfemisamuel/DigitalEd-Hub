<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">

    <!-- Navbar -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="5" height="5" rx="1" fill="white"/>
              <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
              <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
              <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.4"/>
            </svg>
          </div>
          <span class="font-bold text-gray-900 text-sm">DigitalEd Hub</span>
        </NuxtLink>
        <NuxtLink to="/courses" class="text-sm text-gray-500 hover:text-blue-600">← Back to Courses</NuxtLink>
      </div>
    </header>

    <!-- Course Detail -->
    <main class="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10">

      <div class="grid md:grid-cols-[1fr_340px] gap-8 items-start">

        <!-- LEFT: Course Info -->
        <div>
          <img :src="course.image" class="w-full rounded-2xl object-cover aspect-video mb-6"/>

          <h1 class="text-2xl font-bold text-gray-900 mb-2">{{ course.title }}</h1>
          <p class="text-gray-500 text-sm mb-4">by {{ course.author }} &nbsp;·&nbsp; ⭐ {{ course.rating }}</p>
          <p class="text-gray-600 leading-relaxed mb-6">{{ course.description }}</p>

          <!-- What you'll learn -->
          <div class="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-6">
            <h2 class="font-bold text-gray-900 mb-3 text-sm">What you'll learn</h2>
            <ul class="space-y-2">
              <li v-for="point in course.learningPoints" :key="point" class="flex items-start gap-2 text-sm text-gray-700">
                <svg class="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {{ point }}
              </li>
            </ul>
          </div>

          <!-- Lessons -->
          <div>
            <h2 class="font-bold text-gray-900 mb-3 text-sm">Course Content</h2>
            <div class="border border-gray-200 rounded-xl overflow-hidden">
              <div
                v-for="(lesson, idx) in course.lessons"
                :key="idx"
                class="flex items-center gap-3 px-4 py-3 border-b border-gray-100 last:border-none bg-white"
              >
                <div class="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-500 font-bold flex-shrink-0">
                  {{ idx + 1 }}
                </div>
                <span class="text-sm text-gray-700 flex-1">{{ lesson.title }}</span>
                <span class="text-xs text-gray-400">{{ lesson.duration }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT: Enroll Card (sticky) -->
        <div class="sticky top-20">
          <div class="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

            <img :src="course.image" class="w-full object-cover h-40"/>

            <div class="p-5">
              <div class="flex items-baseline gap-2 mb-1">
                <span class="text-2xl font-extrabold text-gray-900">{{ course.price }}</span>
              </div>
              <p class="text-xs text-gray-400 mb-5">One-time payment · Lifetime access</p>

              <!-- Enroll button -->
              <button
                @click="handleEnroll"
                :disabled="isLoading"
                class="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <svg v-if="isLoading" class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                </svg>
                {{ isLoading ? 'Processing...' : 'Enroll Now →' }}
              </button>

              <!-- Already enrolled -->
              <div v-if="isEnrolled" class="mt-3 text-center">
                <p class="text-green-600 text-xs font-semibold mb-2">✓ You are enrolled in this course</p>
                <NuxtLink
                  :to="`/courses/${course.id}/learn`"
                  class="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-xl transition-colors text-sm"
                >
                  Continue Learning →
                </NuxtLink>
              </div>

              <ul class="mt-5 space-y-2 text-xs text-gray-500">
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {{ course.lessons.length }} lessons · Self-paced
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  Certificate of completion
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  Secure payment via Paystack
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </main>

    <!-- ── PAYSTACK MODAL ── -->
    <div
      v-if="showPaymentModal"
      class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4"
      @click.self="showPaymentModal = false"
    >
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">

        <!-- Header -->
        <div class="flex items-center justify-between mb-5">
          <h2 class="font-bold text-gray-900">Complete Payment</h2>
          <button @click="showPaymentModal = false" class="text-gray-400 hover:text-gray-600">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <!-- Course summary -->
        <div class="flex gap-3 mb-5 p-3 bg-gray-50 rounded-xl">
          <img :src="course.image" class="w-14 h-14 rounded-lg object-cover flex-shrink-0"/>
          <div>
            <p class="text-sm font-semibold text-gray-900">{{ course.title }}</p>
            <p class="text-xs text-gray-500">{{ course.author }}</p>
            <p class="text-blue-600 font-bold text-sm mt-1">{{ course.price }}</p>
          </div>
        </div>

        <!-- Email display -->
        <div class="mb-5">
          <p class="text-xs text-gray-500 mb-1">Paying as</p>
          <p class="text-sm font-semibold text-gray-800 bg-gray-50 rounded-lg px-3 py-2.5 border border-gray-200">
            {{ userEmail }}
          </p>
        </div>

        <!-- Error message -->
        <p v-if="paymentError" class="text-red-500 text-xs mb-4 text-center">{{ paymentError }}</p>

        <!-- Pay button -->
        <button
          @click="initializePaystack"
          :disabled="isPaying"
          class="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <svg v-if="isPaying" class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
          </svg>
          {{ isPaying ? 'Opening Paystack...' : `Pay ${course.price} →` }}
        </button>

        <p class="text-center text-xs text-gray-400 mt-3">
          🔒 Secured by Paystack
        </p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

definePageMeta({
  layout: false,
  middleware: 'auth',
})

// ── Types ──────────────────────────────
interface Lesson { title: string; duration: string }

interface CourseDetail {
  id: number
  title: string
  price: string
  amountKobo: number   // Paystack uses kobo (₦1,000 = 100000 kobo)
  author: string
  rating: string
  image: string
  description: string
  learningPoints: string[]
  lessons: Lesson[]
}

// ── Route ──────────────────────────────
const route = useRoute()
const courseId = Number(route.params.id)

// ── Auth ───────────────────────────────
const supabase  = useSupabaseClient()
const user      = useSupabaseUser()
const userEmail = computed(() => user.value?.email ?? '')

// ── Config ─────────────────────────────
const config = useRuntimeConfig()

// ── State ──────────────────────────────
const isLoading        = ref(false)
const isPaying         = ref(false)
const showPaymentModal = ref(false)
const paymentError     = ref('')
const isEnrolled       = ref(false)

// ── Courses DB ─────────────────────────
// In production this would come from Supabase.
// For now it's local — matches FeatureCards.vue ids.
const allCourses: CourseDetail[] = [
  {
    id: 1,
    title: 'Advanced Digital Pedagogy',
    price: '₦1,000',
    amountKobo: 100000,
    author: 'Ufedo .L. Obochi',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=800&q=80',
    description: 'Learn how to integrate AI and cutting-edge digital tools into your lessons. This course walks you through modern pedagogy frameworks designed for the digital age.',
    learningPoints: [
      'Integrate AI tools into daily lesson plans',
      'Design interactive digital learning experiences',
      'Assess student progress using digital methods',
      'Build a sustainable digital teaching workflow',
    ],
    lessons: [
      { title: 'Introduction to Digital Pedagogy', duration: '12:30' },
      { title: 'AI Tools for Educators', duration: '18:00' },
      { title: 'Designing Interactive Lessons', duration: '22:15' },
      { title: 'Digital Assessment Strategies', duration: '15:45' },
      { title: 'Building Your Digital Workflow', duration: '20:00' },
    ],
  },
  {
    id: 2,
    title: 'Curriculum Design Mastery',
    price: '₦6,000',
    amountKobo: 600000,
    author: 'Ufedo .L. Obochi',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
    description: 'Build future-proof curricula that meet global standards and keep students engaged throughout the learning journey.',
    learningPoints: [
      'Apply global curriculum frameworks',
      'Map learning outcomes to activities',
      'Design assessments aligned to objectives',
      'Review and iterate your curriculum',
    ],
    lessons: [
      { title: 'Curriculum Foundations', duration: '14:00' },
      { title: 'Mapping Learning Outcomes', duration: '16:30' },
      { title: 'Designing Assessments', duration: '19:00' },
      { title: 'Global Standards Overview', duration: '12:00' },
      { title: 'Iteration and Review', duration: '11:45' },
    ],
  },
  {
    id: 3,
    title: 'Classroom Leadership',
    price: '₦3,500',
    amountKobo: 350000,
    author: 'Ufedo .L. Obochi',
    rating: '5.0',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    description: 'Develop the leadership skills needed to inspire, motivate and lead students and colleagues in the modern classroom.',
    learningPoints: [
      'Lead with confidence and clarity',
      'Manage classroom dynamics effectively',
      'Mentor and coach fellow educators',
      'Build a positive learning culture',
    ],
    lessons: [
      { title: 'The Leader Educator', duration: '10:00' },
      { title: 'Classroom Dynamics', duration: '13:30' },
      { title: 'Mentoring Colleagues', duration: '15:00' },
      { title: 'Building Learning Culture', duration: '17:00' },
      { title: 'Sustaining Leadership', duration: '09:45' },
    ],
  },
  {
    id: 4,
    title: 'Student Engagement',
    price: '₦5,000',
    amountKobo: 500000,
    author: 'Ufedo .L. Obochi',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    description: 'Master proven techniques to keep students motivated, attentive and actively participating in every lesson.',
    learningPoints: [
      'Apply engagement frameworks to lessons',
      'Use gamification in the classroom',
      'Handle disengaged students effectively',
      'Create a student-centred environment',
    ],
    lessons: [
      { title: 'What is Student Engagement?', duration: '08:30' },
      { title: 'Gamification Basics', duration: '14:00' },
      { title: 'Handling Disengagement', duration: '11:15' },
      { title: 'Student-Centred Design', duration: '16:00' },
      { title: 'Measuring Engagement', duration: '12:30' },
    ],
  },
  {
    id: 5,
    title: 'Course Monetisation',
    price: '₦7,000',
    amountKobo: 700000,
    author: 'Ufedo .L. Obochi',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
    description: 'Turn your knowledge and expertise into a profitable online course. Learn pricing, marketing and selling strategies for educators.',
    learningPoints: [
      'Package your knowledge as a course',
      'Price your course for the Nigerian market',
      'Market your course on social media',
      'Use Paystack to collect payments',
    ],
    lessons: [
      { title: 'Your Knowledge as a Product', duration: '13:00' },
      { title: 'Pricing Strategies', duration: '15:30' },
      { title: 'Social Media Marketing', duration: '20:00' },
      { title: 'Payment Integration', duration: '18:00' },
      { title: 'Scaling Your Course', duration: '14:45' },
    ],
  },
]

const course = computed((): CourseDetail =>
  allCourses.find(c => c.id === courseId) ?? allCourses[0]!
)

// ── Check enrollment on mount ───────────
onMounted(async () => {
  if (!user.value) return
  const { data } = await supabase
    .from('enrollments')
    .select('id')
    .eq('user_id', user.value.id)
    .eq('course_id', courseId)
    .maybeSingle()
  isEnrolled.value = !!data
})

// ── Enroll handler ─────────────────────
function handleEnroll() {
  if (isEnrolled.value) {
    navigateTo(`/courses/${courseId}/learn`)
    return
  }
  paymentError.value   = ''
  showPaymentModal.value = true
}

// ── Paystack ───────────────────────────
// AFTER — fully synchronous, browser allows the popup
function initializePaystack() {
  isPaying.value    = true
  paymentError.value = ''

  const PaystackPop = (window as any).PaystackPop

  if (!PaystackPop) {
    paymentError.value = 'Payment is loading, please try again.'
    isPaying.value = false
    return
  }

  const handler = PaystackPop.setup({
    key:      config.public.paystackPublicKey,
    email:    userEmail.value,
    amount:   course.value.amountKobo,
    currency: 'NGN',
    ref:      `DEH-${courseId}-${Date.now()}`,
    metadata: {
      course_id:    courseId,
      course_title: course.value.title,
    },

    onClose() {
      isPaying.value = false
    },

    // callback can be async — it's not a click handler
  callback(response: { reference: string }) {
  isPaying.value = false
  // Call the async function without await — it runs in background
  onPaymentSuccess(response.reference)
},
  })

  // ✅ Called synchronously — no await before this line
  handler.openIframe()
}

// ── After payment success ──────────────
async function onPaymentSuccess(reference: string) {
  isLoading.value = true
  showPaymentModal.value = false

  try {
    // Save enrollment to Supabase
    const { error } = await supabase.from('enrollments').insert({
      user_id:      user.value!.id,
      course_id:    courseId,
      course_title: course.value.title,
      amount:       course.value.amountKobo / 100,  // store in naira
      reference,
    })

    if (error) throw error

    // Redirect to dashboard
    await navigateTo('/dashboard')

  } catch (err) {
    console.error('Enrollment error:', err)
    paymentError.value = 'Payment received but enrollment failed. Please contact support.'
    isLoading.value = false
  }
}
</script>