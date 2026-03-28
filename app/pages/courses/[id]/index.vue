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
        <NuxtLink to="/courses" class="text-sm text-gray-500 hover:text-blue-600 transition-colors">
          ← Back to Courses
        </NuxtLink>
      </div>
    </header>

    <!-- Loading -->
    <div v-if="isLoading" class="flex-1 flex items-center justify-center">
      <div class="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>

    <!-- Not found -->
    <div v-else-if="!course" class="flex-1 flex flex-col items-center justify-center text-center px-6">
      <p class="text-gray-400 text-sm font-medium">Course not found.</p>
      <NuxtLink to="/courses" class="mt-4 text-blue-600 text-sm font-semibold hover:underline">
        Browse all courses →
      </NuxtLink>
    </div>

    <!-- Course Detail -->
    <main v-else class="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10">

      <div class="grid md:grid-cols-[1fr_340px] gap-8 items-start">

        <!-- LEFT: Course Info -->
        <div>
          <!-- Thumbnail -->
          <div class="w-full rounded-2xl overflow-hidden aspect-video mb-6 bg-blue-50 flex items-center justify-center">
            <img
              v-if="course.thumbnail"
              :src="course.thumbnail"
              :alt="course.title"
              class="w-full h-full object-cover"
            />
            <svg v-else class="w-16 h-16 text-blue-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
          </div>

          <!-- Category badge -->
          <span class="text-[10px] font-semibold px-2.5 py-1 rounded uppercase tracking-wide bg-blue-100 text-blue-700 mb-4 inline-block">
            {{ course.category }}
          </span>

          <h1 class="text-2xl font-bold text-gray-900 mb-2">{{ course.title }}</h1>
          <p class="text-gray-500 text-sm mb-4">by DigitalEd Hub &nbsp;·&nbsp; Lifetime access</p>
          <p class="text-gray-600 leading-relaxed mb-6">{{ course.description }}</p>

          <!-- What you'll learn -->
          <div class="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-6">
            <h2 class="font-bold text-gray-900 mb-3 text-sm">What you'll learn</h2>
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-sm text-gray-700">
                <svg class="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Gain practical skills you can apply immediately in your teaching
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-700">
                <svg class="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Learn at your own pace with lifetime access to all materials
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-700">
                <svg class="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Join a community of educators growing together
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-700">
                <svg class="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Earn a certificate of completion upon finishing the course
              </li>
            </ul>
          </div>

          <!-- Course video preview (if available) -->
          <div v-if="course.video_url" class="mb-6">
            <h2 class="font-bold text-gray-900 mb-3 text-sm">Course Preview</h2>
            <div class="rounded-xl overflow-hidden border border-gray-200 bg-black aspect-video">
              <video
                :src="course.video_url"
                controls
                class="w-full h-full"
                preload="metadata"
              />
            </div>
          </div>

          <!-- Course details -->
          <div class="border border-gray-200 rounded-xl overflow-hidden">
            <div class="px-5 py-4 bg-gray-50 border-b border-gray-100">
              <h2 class="font-bold text-gray-900 text-sm">Course Details</h2>
            </div>
            <div class="divide-y divide-gray-100">
              <div class="flex items-center gap-3 px-5 py-3.5">
                <svg class="w-4 h-4 text-gray-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
                <span class="text-sm text-gray-600">Category: <strong class="text-gray-900">{{ course.category }}</strong></span>
              </div>
              <div class="flex items-center gap-3 px-5 py-3.5">
                <svg class="w-4 h-4 text-gray-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                <span class="text-sm text-gray-600">Self-paced · Lifetime access</span>
              </div>
              <div class="flex items-center gap-3 px-5 py-3.5">
                <svg class="w-4 h-4 text-gray-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span class="text-sm text-gray-600">Certificate of completion included</span>
              </div>
              <div class="flex items-center gap-3 px-5 py-3.5">
                <svg class="w-4 h-4 text-gray-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span class="text-sm text-gray-600">Secure payment via Paystack</span>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT: Enroll Card (sticky) -->
        <div class="sticky top-20">
          <div class="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

            <!-- Thumbnail preview -->
            <div class="w-full h-40 bg-blue-50 overflow-hidden">
              <img
                v-if="course.thumbnail"
                :src="course.thumbnail"
                :alt="course.title"
                class="w-full h-full object-cover"
              />
              <div v-else class="w-full h-full flex items-center justify-center">
                <svg class="w-10 h-10 text-blue-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </div>
            </div>

            <div class="p-5">
              <div class="flex items-baseline gap-2 mb-1">
                <span class="text-2xl font-extrabold text-gray-900">₦{{ course.price.toLocaleString() }}</span>
              </div>
              <p class="text-xs text-gray-400 mb-5">One-time payment · Lifetime access</p>

              <!-- Already enrolled -->
              <div v-if="isEnrolled" class="mb-4">
                <p class="text-green-600 text-xs font-semibold mb-2 text-center">✓ You are enrolled in this course</p>
                <NuxtLink
                  :to="`/courses/${course.id}/learn`"
                  class="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-colors text-sm"
                >
                  Continue Learning →
                </NuxtLink>
              </div>

              <!-- Enroll button -->
              <button
                v-else
                @click="handleEnroll"
                :disabled="enrolling"
                class="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <svg v-if="enrolling" class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                </svg>
                {{ enrolling ? 'Processing...' : 'Enroll Now →' }}
              </button>

              <p v-if="paymentError" class="text-red-500 text-xs mt-3 text-center">{{ paymentError }}</p>

              <ul class="mt-5 space-y-2 text-xs text-gray-500">
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  Self-paced · Learn anytime
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

    <footer class="text-center py-6 text-xs text-gray-400">
      © 2026 DigitalEd Hub. All rights reserved.
    </footer>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

definePageMeta({ layout: false })

interface Course {
  id:          string
  title:       string
  description: string
  price:       number
  category:    string
  thumbnail:   string | null
  video_url:   string | null
  status:      string
}

const route   = useRoute()
const courseId = String(route.params.id)

const supabase     = useSupabaseClient()
const user         = useSupabaseUser()
const config       = useRuntimeConfig()

const isLoading    = ref(true)
const course       = ref<Course | null>(null)
const isEnrolled   = ref(false)
const enrolling    = ref(false)
const paymentError = ref('')

onMounted(async () => {
  // ✅ Fetch course from Supabase
  const { data, error } = await supabase
    .from('courses')
    .select('id, title, description, price, category, thumbnail, video_url, status')
    .eq('id', courseId)
    .single()

  if (error || !data) {
    console.error('Course fetch error:', error?.message)
    isLoading.value = false
    return
  }

  course.value    = data
  isLoading.value = false

  // ✅ Check if user is enrolled
  const { data: { session } } = await supabase.auth.getSession()
  const currentUser = session?.user ?? user.value
  if (!currentUser) return

  const { data: enrollment } = await supabase
    .from('enrollments')
    .select('id')
    .eq('user_id', currentUser.id)
    .eq('course_id', courseId)
    .maybeSingle()

  isEnrolled.value = !!enrollment
})

function handleEnroll() {
  if (!user.value) {
    navigateTo('/login')
    return
  }

  if (!course.value) return

  const PaystackPop = (window as any).PaystackPop

  if (!PaystackPop) {
    paymentError.value = 'Payment is loading, please try again in a moment.'
    return
  }

  enrolling.value    = true
  paymentError.value = ''

  // ✅ Capture synchronously before iframe opens
  const userId      = user.value.id
  const payingEmail = user.value.email!
  const courseId_   = courseId
  const price       = course.value.price

  const handler = PaystackPop.setup({
    key:      config.public.paystackPublicKey,
    email:    payingEmail,
    amount:   price * 100,
    currency: 'NGN',
    ref:      `DEH-${courseId_}-${Date.now()}`,
    metadata: {
      course_id:    courseId_,
      course_title: course.value.title,
    },
    onClose() {
      enrolling.value = false
    },
    callback(response: { reference: string }) {          // ← NOT async
      enrolling.value = false
      const ref = response.reference
      Promise.resolve().then(() => onPaymentSuccess(ref, userId))
    },
  })

  handler.openIframe()
}

async function onPaymentSuccess(reference: string, userId: string) {
  if (!course.value) return
  enrolling.value = true

  try {
    // ✅ Force fresh session — don't rely on cached user
    const { data: { session } } = await supabase.auth.getSession()

    if (!session) {
      paymentError.value = 'Session expired. Please log in and contact support.'
      enrolling.value = false
      return
    }

    const { error } = await supabase.from('enrollments').insert({
      user_id:      session.user.id,   // ✅ use session directly, not the passed userId
      course_id:    courseId,
      course_title: course.value.title,
      amount:       course.value.price,
      reference,
    })

    if (error) {
      console.error('Enrollment error:', JSON.stringify(error, null, 2))
      paymentError.value = 'Payment received but enrollment failed. Please contact support.'
      enrolling.value = false
      return
    }

    isEnrolled.value = true
    await navigateTo('/dashboard')

  } catch (err: any) {
    console.error('Enrollment exception:', err)
    paymentError.value = 'Payment received but enrollment failed. Please contact support.'
  }

  enrolling.value = false
}
</script>