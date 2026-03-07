<template>
  <div>

  <!-- ═══════════════════════════════════════
       HERO SECTION
  ════════════════════════════════════════ -->
  <section class="min-h-screen bg-gray-50 flex items-center">
    <div class="max-w-7xl mx-auto px-6 md:px-12 w-full py-20 md:py-0">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <!-- LEFT CONTENT -->
        <div class="flex flex-col gap-6">
          <div class="inline-flex">
            <span class="bg-blue-100 text-blue-600 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">
              For Educators, By Educators
            </span>
          </div>
          <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Learn. Teach. Earn.<br />
           <span class="text-blue-600">The Educator's</span> <br />
            <span class="text-blue-600">Community</span>
          </h1>
          <p class="text-gray-500 text-base leading-relaxed max-w-md">
           DigitalEd Hub gives educators the tools,
            courses and community to teach online
            and earn consistently.
          </p>
          <div class="flex items-center gap-4 flex-wrap">
            <NuxtLink to="/courses"
              class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2">
              Explore Courses <span>→</span>
            </NuxtLink>
            <NuxtLink to="/courses"
              class="border border-gray-300 hover:border-gray-400 text-gray-800 text-sm font-semibold px-6 py-3 rounded-lg transition-colors duration-200 bg-white">
             See How It Works
            </NuxtLink>
          </div>
          <div class="flex items-center gap-3 mt-2">
            <div class="flex items-center">
              <div class="w-9 h-9 rounded-full bg-gray-300 border-2 border-white"></div>
              <div class="w-9 h-9 rounded-full bg-gray-400 border-2 border-white -ml-3"></div>
            </div>
            <p class="text-sm text-gray-500">
              <span class="font-semibold text-gray-800">12k+</span> Educators already joined
            </p>
          </div>
        </div>

        <!-- RIGHT IMAGE -->
        <div class="flex justify-center md:justify-end">
          <div class="relative w-full max-w-md">
            <div class="rounded-3xl overflow-hidden shadow-lg bg-gray-200 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
                alt="Educators collaborating"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════
       FEATURED COURSES — INFINITE CAROUSEL
  ════════════════════════════════════════ -->
  <section class="bg-white py-16 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 md:px-12">

      <!-- Section Header -->
      <div class="flex items-start justify-between mb-8">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">Featured Development Courses</h2>
          <p class="text-gray-500 text-sm mt-1">
            Master the latest in pedagogy and classroom technology with industry leaders.
          </p>
        </div>
        <NuxtLink to="/courses"
          class="text-blue-600 text-sm font-medium hover:underline whitespace-nowrap mt-1 flex items-center gap-1">
          Browse all ↗
        </NuxtLink>
      </div>

    </div>

    <!-- ── Carousel Track (full width, no max-w constraint) ── -->
    <div
      class="relative w-full"
      @mouseenter="pauseCarousel"
      @mouseleave="resumeCarousel"
    >
      <!-- Left fade -->
      <div class="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <!-- Right fade -->
      <div class="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <!-- Scrolling track -->
      <div class="flex gap-6 carousel-track" ref="trackRef">

        <!-- We render cards twice for seamless infinite loop -->
        <template v-for="pass in 2" :key="pass">

          <!-- Card 1 -->
          <div class="carousel-card bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer flex-shrink-0 w-80">
            <div class="relative w-full aspect-video bg-gray-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=600&q=80"
                alt="Advanced Digital Pedagogy" class="w-full h-full object-cover" loading="lazy" />
              <span class="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Digital Mastery</span>
            </div>
            <div class="p-5">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-gray-900 font-bold text-sm">Advanced Digital Pedagogy</h3>
                <span class="text-blue-600 font-bold text-sm whitespace-nowrap ml-2">₦45,000</span>
              </div>
              <p class="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
                Learn how to integrate AI and interactive tools seamlessly into your daily lesson plans for...
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded-full bg-gray-300 flex-shrink-0"></div>
                  <span class="text-xs text-gray-500">Dr. Adeyemi</span>
                </div>
                <div class="flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <span class="text-xs text-gray-500">4.9</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="carousel-card bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer flex-shrink-0 w-80">
            <div class="relative w-full aspect-video bg-gray-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80"
                alt="Curriculum Design Mastery" class="w-full h-full object-cover" loading="lazy" />
              <span class="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Curriculum</span>
            </div>
            <div class="p-5">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-gray-900 font-bold text-sm">Curriculum Design Mastery</h3>
                <span class="text-blue-600 font-bold text-sm whitespace-nowrap ml-2">₦60,000</span>
              </div>
              <p class="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
                A comprehensive guide to building future-proof curricula that meet global standards while stayin...
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded-full bg-gray-300 flex-shrink-0"></div>
                  <span class="text-xs text-gray-500">Prof. Okoro</span>
                </div>
                <div class="flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <span class="text-xs text-gray-500">4.8</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="carousel-card bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer flex-shrink-0 w-80">
            <div class="relative w-full aspect-video bg-gray-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                alt="Classroom Leadership 101" class="w-full h-full object-cover" loading="lazy" />
              <span class="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Leadership</span>
            </div>
            <div class="p-5">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-gray-900 font-bold text-sm">Classroom Leadership 101</h3>
                <span class="text-blue-600 font-bold text-sm whitespace-nowrap ml-2">₦35,000</span>
              </div>
              <p class="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
                Develop the soft skills required to lead, motivate, and inspire students of all backgrounds and...
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded-full bg-gray-300 flex-shrink-0"></div>
                  <span class="text-xs text-gray-500">Sarah Jenkins</span>
                </div>
                <div class="flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <span class="text-xs text-gray-500">5.0</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="carousel-card bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer flex-shrink-0 w-80">
            <div class="relative w-full aspect-video bg-gray-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80"
                alt="Student Engagement Strategies" class="w-full h-full object-cover" loading="lazy" />
              <span class="absolute top-3 left-3 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Engagement</span>
            </div>
            <div class="p-5">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-gray-900 font-bold text-sm">Student Engagement Strategies</h3>
                <span class="text-blue-600 font-bold text-sm whitespace-nowrap ml-2">₦40,000</span>
              </div>
              <p class="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
                Proven techniques to keep students engaged, motivated and actively participating in every lesson...
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded-full bg-gray-300 flex-shrink-0"></div>
                  <span class="text-xs text-gray-500">Mrs. Balogun</span>
                </div>
                <div class="flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <span class="text-xs text-gray-500">4.7</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 5 -->
          <div class="carousel-card bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer flex-shrink-0 w-80">
            <div class="relative w-full aspect-video bg-gray-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80"
                alt="Online Course Monetisation" class="w-full h-full object-cover" loading="lazy" />
              <span class="absolute top-3 left-3 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Monetise</span>
            </div>
            <div class="p-5">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-gray-900 font-bold text-sm">Online Course Monetisation</h3>
                <span class="text-blue-600 font-bold text-sm whitespace-nowrap ml-2">₦55,000</span>
              </div>
              <p class="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
                Everything you need to price, package and sell your online course to the right audience...
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded-full bg-gray-300 flex-shrink-0"></div>
                  <span class="text-xs text-gray-500">Tunde Fashola</span>
                </div>
                <div class="flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <span class="text-xs text-gray-500">4.9</span>
                </div>
              </div>
            </div>
          </div>

        </template>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════
       TRUSTED BY EDUCATORS — TESTIMONIALS
  ════════════════════════════════════════ -->
  <section class="bg-gray-50 py-20">
    <div class="max-w-7xl mx-auto px-6 md:px-12">

      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-3">Trusted by Educators Worldwide</h2>
        <p class="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
          Join a growing community of thousands of teachers who have transformed
          their teaching careers through EduTrain.
        </p>
      </div>

      <!-- Testimonial Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <!-- Card 1 -->
        <div class="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
          <!-- Stars -->
          <div class="flex items-center gap-1 mb-5">
            <svg v-for="i in 5" :key="i" class="w-4 h-4 fill-gray-300" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <!-- Quote -->
          <p class="text-gray-700 text-sm leading-relaxed mb-6">
            "EduTrain completely changed how I approach my virtual classroom. The strategies I learned from Dr. Adeyemi were immediately applicable and my students love the new tools."
          </p>
          <!-- Author -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
            <div>
              <p class="text-gray-900 font-semibold text-sm">Mariam Yusuf</p>
              <p class="text-gray-400 text-xs">High School Teacher, Lagos</p>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
          <!-- Stars -->
          <div class="flex items-center gap-1 mb-5">
            <svg v-for="i in 5" :key="i" class="w-4 h-4 fill-gray-300" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <!-- Quote -->
          <p class="text-gray-700 text-sm leading-relaxed mb-6">
            "The curriculum design course is world-class. It gave me the framework I needed to redesign our department's entire syllabus for the new academic year."
          </p>
          <!-- Author -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
            <div>
              <p class="text-gray-900 font-semibold text-sm">David Chen</p>
              <p class="text-gray-400 text-xs">Head of Academics, Nairobi</p>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
          <!-- Stars -->
          <div class="flex items-center gap-1 mb-5">
            <svg v-for="i in 5" :key="i" class="w-4 h-4 fill-gray-300" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <!-- Quote -->
          <p class="text-gray-700 text-sm leading-relaxed mb-6">
            "Finally, a professional development platform that actually understands the modern teacher's workload. High quality, bite-sized lessons that make sense."
          </p>
          <!-- Author -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
            <div>
              <p class="text-gray-900 font-semibold text-sm">Amara Diofor</p>
              <p class="text-gray-400 text-xs">Primary School Lead, Abuja</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════
       JOIN COMMUNITY — CTA SECTION
  ════════════════════════════════════════ -->
  <section class="bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-6 md:px-12">

      <!-- Blue Card -->
      <div class="bg-blue-600 rounded-3xl px-8 py-16 text-center">

        <!-- Heading -->
        <h2 class="text-3xl font-bold text-white mb-3">Join our Teacher Community</h2>

        <!-- Subtitle -->
        <p class="text-blue-100 text-sm leading-relaxed max-w-sm mx-auto mb-8">
          Get the weekly newsletter with free resources, teaching tips, and early access
          to new courses.
        </p>

        <!-- Input + Button Row -->
        <div class="flex items-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your school email"
            class="flex-1 bg-white text-gray-800 text-sm placeholder-gray-400 px-5 py-3 rounded-lg outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            class="bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold px-6 py-3 rounded-lg whitespace-nowrap transition-colors duration-200 overflow-hidden"
          >
            Sign Up
          </button>
        </div>

        <!-- Privacy note -->
        <p class="text-blue-200 text-xs mt-4">We respect your privacy. No spam, ever.</p>

      </div>
    </div>
  </section>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const trackRef = ref<HTMLElement | null>(null)
let animationId: number | null = null
let position = 0
let isPaused = false

// Speed in pixels per frame — lower = slower
const SPEED = 0.5

function animate() {
  if (!trackRef.value || isPaused) {
    animationId = requestAnimationFrame(animate)
    return
  }

  position += SPEED

  // Each card is w-80 (320px) + gap-6 (24px) = 344px per card
  // We have 5 cards in first set = 5 * 344 = 1720px
  // When we've scrolled one full set, reset to 0 for seamless loop
  const singleSetWidth = 5 * 344

  if (position >= singleSetWidth) {
    position = 0
  }

  trackRef.value.style.transform = `translateX(-${position}px)`
  animationId = requestAnimationFrame(animate)
}

function pauseCarousel() {
  isPaused = true
}

function resumeCarousel() {
  isPaused = false
}

onMounted(() => {
  animationId = requestAnimationFrame(animate)
})

onBeforeUnmount(() => {
  if (animationId) cancelAnimationFrame(animationId)
})
</script>

<style scoped>
.carousel-track {
  display: flex;
  gap: 24px;
  width: max-content;
  will-change: transform;
}
</style>