<template>
<div>

<!-- HERO SECTION -->
<section class="min-h-screen bg-gray-50 flex items-center">
  <div class="max-w-7xl mx-auto px-6 md:px-12 w-full py-20 md:py-0">
    <div class="grid md:grid-cols-2 gap-12 items-center">

      <!-- LEFT -->
      <div class="flex flex-col gap-6">

        <span class="bg-blue-100 text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full w-fit">
          For Educators, By Educators
        </span>

        <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Learn. Teach. Earn.<br>
          <span class="text-blue-600">The Educator's</span><br>
          <span class="text-blue-600">Community</span>
        </h1>

        <p class="text-gray-500 max-w-md">
          DigitalEd Hub gives educators the tools, courses and community
          to teach online and earn consistently.
        </p>

        <div class="flex gap-4 flex-wrap">
          <NuxtLink
            to="/courses"
            class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-lg"
          >
            Explore Courses →
          </NuxtLink>

          <NuxtLink
            to="/courses"
            class="border border-gray-300 text-gray-800 text-sm font-semibold px-6 py-3 rounded-lg"
          >
            See How It Works
          </NuxtLink>
        </div>

        <div class="flex items-center gap-3">
          <div class="flex">
            <div class="w-9 h-9 rounded-full bg-gray-300 border-2 border-white"></div>
            <div class="w-9 h-9 rounded-full bg-gray-400 border-2 border-white -ml-3"></div>
          </div>
          <p class="text-sm text-gray-500">
            <span class="font-semibold text-gray-800">12k+</span> Educators joined
          </p>
        </div>

      </div>

      <!-- RIGHT IMAGE -->
      <div class="flex justify-center md:justify-end">
        <div class="rounded-3xl overflow-hidden shadow-lg max-w-md">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
            class="w-full h-full object-cover"
          >
        </div>
      </div>

    </div>
  </div>
</section>


<!-- FEATURED COURSES -->
<section class="bg-white py-16 overflow-hidden">

  <div class="max-w-7xl mx-auto px-6 md:px-12 mb-10">
    <div class="flex justify-between items-start">
      <div>
        <h2 class="text-2xl font-bold text-gray-900">Featured Development Courses</h2>
        <p class="text-gray-500 text-sm mt-1">
          Master the latest in pedagogy and classroom technology.
        </p>
      </div>
      <NuxtLink to="/courses" class="text-blue-600 text-sm font-medium">
        Browse all ↗
      </NuxtLink>
    </div>
  </div>

  <!-- CAROUSEL -->
  <div class="relative overflow-hidden">
    <div
      ref="trackRef"
      class="carousel-track"
      @mouseenter="pauseCarousel"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="endDrag"
      @mouseleave="() => { resumeCarousel(); endDrag(); }"
      @touchstart="startDrag"
      @touchmove="onDrag"
      @touchend="endDrag"
    >
      <template v-for="i in 2" :key="i">
        <div
          v-for="course in courses"
          :key="course.title + i"
          class="carousel-card"
        >
          <img :src="course.image" class="aspect-video object-cover w-full">
          <div class="p-5">
            <div class="flex justify-between mb-2">
              <h3 class="font-bold text-sm">{{ course.title }}</h3>
              <span class="text-blue-600 font-bold text-sm">{{ course.price }}</span>
            </div>
            <p class="text-gray-400 text-xs mb-4">{{ course.desc }}</p>
            <div class="flex justify-between text-xs text-gray-500">
              <span>{{ course.author }}</span>
              <span>⭐ {{ course.rating }}</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>

</section>

</div>
</template>


<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const trackRef = ref<HTMLElement | null>(null)

let position = 0
let animationId: number | null = null
let isPaused = false
let isDragging = false
let startX = 0
let dragStartPosition = 0

const SPEED = 0.5
const singleSetWidth = 5 * 344

const courses = [
  {
    title: 'Advanced Digital Pedagogy',
    price: '₦45,000',
    author: 'Dr. Adeyemi',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=600&q=80',
    desc: 'Learn how to integrate AI and digital tools into lessons.'
  },
  {
    title: 'Curriculum Design Mastery',
    price: '₦60,000',
    author: 'Prof. Okoro',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80',
    desc: 'Build future-proof curricula that meet global standards.'
  },
  {
    title: 'Classroom Leadership',
    price: '₦35,000',
    author: 'Sarah Jenkins',
    rating: '5.0',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    desc: 'Develop leadership skills for inspiring classrooms.'
  },
  {
    title: 'Student Engagement',
    price: '₦40,000',
    author: 'Mrs Balogun',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
    desc: 'Keep students motivated and actively participating.'
  },
  {
    title: 'Course Monetisation',
    price: '₦55,000',
    author: 'Tunde Fashola',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
    desc: 'Turn your knowledge into a profitable course.'
  }
]

function getClientX(event: TouchEvent | MouseEvent): number {
  if ('touches' in event) {
    // touches[0] can be undefined if no touches are active — guard it
    return event.touches[0]?.clientX ?? startX
  }
  return event.clientX
}

function animate() {
  if (!trackRef.value) {
    animationId = requestAnimationFrame(animate)
    return
  }

  if (!isPaused && !isDragging) {
    position += SPEED
    if (position >= singleSetWidth) position = 0
    trackRef.value.style.transform = `translateX(-${position}px)`
  }

  animationId = requestAnimationFrame(animate)
}

function pauseCarousel() { isPaused = true }
function resumeCarousel() { isPaused = false }

function startDrag(event: TouchEvent | MouseEvent) {
  isDragging = true
  isPaused = true
  startX = getClientX(event)
  dragStartPosition = position
}

function onDrag(event: TouchEvent | MouseEvent) {
  if (!isDragging || !trackRef.value) return
  const currentX = getClientX(event)
  const diff = startX - currentX
  position = Math.max(0, dragStartPosition + diff)
  trackRef.value.style.transform = `translateX(-${position}px)`
}

function endDrag() {
  isDragging = false
  isPaused = false
}

onMounted(() => { animationId = requestAnimationFrame(animate) })
onBeforeUnmount(() => { if (animationId) cancelAnimationFrame(animationId) })
</script>


<style scoped>
.carousel-track {
  display: flex;
  gap: 24px;
  width: max-content;
  cursor: grab;
  user-select: none;
}

.carousel-card {
  width: 320px;
  flex-shrink: 0;
  background: white;
  border-radius: 16px;
  border: 1px solid #f0f0f0;
  overflow: hidden;
}

.carousel-track:active {
  cursor: grabbing;
}
</style>