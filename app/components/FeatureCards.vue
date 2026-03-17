<template>
  <!-- FEATURED COURSES -->
  <section class="bg-white py-16">

    <div class="max-w-7xl mx-auto px-6 md:px-12 mb-10">
      <div class="flex justify-between items-start">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">Featured Development Courses</h2>
          <p class="text-gray-500 text-sm mt-1">
            Master the latest in pedagogy and classroom technology.
          </p>
        </div>
        <NuxtLink to="/courses" class="text-blue-600 text-sm font-medium hover:underline">
          Browse all ↗
        </NuxtLink>
      </div>
    </div>

    <!-- DRAGGABLE / SWIPEABLE ROW -->
    <div class="px-6 md:px-12">
      <div
        ref="trackRef"
        class="flex gap-6 overflow-x-auto scroll-smooth pb-4 cursor-grab active:cursor-grabbing select-none"
        style="scrollbar-width: none; -ms-overflow-style: none;"
        @mousedown="startDrag"
        @mousemove="onDrag"
        @mouseup="endDrag"
        @mouseleave="endDrag"
      >
        <div
          v-for="course in courses"
          :key="course.id"
          class="carousel-card group flex-shrink-0 cursor-pointer"
          @click="handleCourseClick(course)"
        >
          <div class="relative overflow-hidden rounded-t-2xl">
            <img
              :src="course.image"
              class="aspect-video object-cover w-full group-hover:scale-105 transition-transform duration-300"
            />
            <!-- Hover overlay -->
            <div class="absolute inset-0 bg-blue-600/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span class="bg-white text-blue-600 text-xs font-bold px-4 py-2 rounded-full shadow">
                View Course →
              </span>
            </div>
          </div>
          <div class="p-5">
            <div class="flex justify-between mb-2">
              <h3 class="font-bold text-sm group-hover:text-blue-600 transition-colors">{{ course.title }}</h3>
              <span class="text-blue-600 font-bold text-sm">{{ course.price }}</span>
            </div>
            <p class="text-gray-400 text-xs mb-4">{{ course.desc }}</p>
            <div class="flex justify-between text-xs text-gray-500">
              <span>{{ course.author }}</span>
              <span>⭐ {{ course.rating }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// ── Types ──────────────────────────────
interface Course {
  id: number
  title: string
  price: string
  author: string
  rating: string
  image: string
  desc: string
}

// ── Auth ───────────────────────────────
const user = useSupabaseUser()

// ── Navigation ─────────────────────────
function handleCourseClick(course: Course) {
  if (user.value) {
    navigateTo(`/courses/${course.id}`)
  } else {
    if (import.meta.client) {
      sessionStorage.setItem('pendingCourseId', String(course.id))
    }
    navigateTo('/register')
  }
}

// ── Courses Data ───────────────────────
const courses: Course[] = [
  {
    id: 1,
    title: 'Advanced Digital Pedagogy',
    price: '₦1,000',
    author: 'Ufedo .L. Obochi',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=600&q=80',
    desc: 'Learn how to integrate AI and digital tools into lessons.'
  },
  {
    id: 2,
    title: 'Curriculum Design Mastery',
    price: '₦6,000',
    author: 'Ufedo .L. Obochi',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80',
    desc: 'Build future-proof curricula that meet global standards.'
  },
  {
    id: 3,
    title: 'Classroom Leadership',
    price: '₦3,500',
    author: 'Ufedo .L. Obochi',
    rating: '5.0',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    desc: 'Develop leadership skills for inspiring classrooms.'
  },
  {
    id: 4,
    title: 'Student Engagement',
    price: '₦5,000',
    author: 'Ufedo .L. Obochi',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
    desc: 'Keep students motivated and actively participating.'
  },
  {
    id: 5,
    title: 'Course Monetisation',
    price: '₦7,000',
    author: 'Ufedo .L. Obochi',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
    desc: 'Turn your knowledge into a profitable course.'
  }
]

// ── Drag to scroll (desktop) ───────────
// Touch/swipe works natively via overflow-x: auto on mobile
const trackRef = ref<HTMLElement | null>(null)
let isDragging = false
let startX = 0
let scrollLeft = 0

function startDrag(e: MouseEvent) {
  if (!trackRef.value) return
  isDragging = true
  startX = e.pageX - trackRef.value.offsetLeft
  scrollLeft = trackRef.value.scrollLeft
}

function onDrag(e: MouseEvent) {
  if (!isDragging || !trackRef.value) return
  e.preventDefault()
  const x = e.pageX - trackRef.value.offsetLeft
  const walk = (x - startX) * 1.2  // drag speed multiplier
  trackRef.value.scrollLeft = scrollLeft - walk
}

function endDrag() {
  isDragging = false
}
</script>

<style scoped>
/* Hide scrollbar visually but keep functionality */
.flex::-webkit-scrollbar {
  display: none;
}

.carousel-card {
  width: 300px;
  background: white;
  border-radius: 16px;
  border: 1px solid #f0f0f0;
  overflow: hidden;
}

@media (max-width: 640px) {
  .carousel-card {
    width: 260px;
  }
}
</style>