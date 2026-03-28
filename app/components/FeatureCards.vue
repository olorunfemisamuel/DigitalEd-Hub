<template>
  <section class="bg-white py-16">

    <div class="max-w-7xl mx-auto px-6 md:px-12 mb-10">
      <div class="flex justify-between items-start">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">Featured Courses</h2>
          <p class="text-gray-500 text-sm mt-1">Everything you need to teach online and earn.</p>
        </div>
        <NuxtLink to="/courses" class="text-blue-600 text-sm font-medium hover:underline">
          Browse all ↗
        </NuxtLink>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="isLoading" class="flex justify-center py-10">
      <div class="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"/>
    </div>

    <!-- Empty -->
    <div v-else-if="courses.length === 0" class="text-center py-10 text-gray-400 text-sm">
      No courses available yet.
    </div>

    <!-- Carousel -->
    <div v-else class="px-6 md:px-12">
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
          <!-- Thumbnail -->
          <div class="relative overflow-hidden rounded-t-2xl h-44 bg-blue-50">
            <img
              v-if="course.thumbnail"
              :src="course.thumbnail"
              :alt="course.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div v-else class="w-full h-full flex items-center justify-center">
              <svg class="w-10 h-10 text-blue-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            </div>
            <!-- Hover overlay -->
            <div class="absolute inset-0 bg-blue-600/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span class="bg-white text-blue-600 text-xs font-bold px-4 py-2 rounded-full shadow">
                View Course →
              </span>
            </div>
          </div>

          <!-- Info -->
          <div class="p-5">
            <span class="text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wide bg-blue-100 text-blue-700 mb-2 inline-block">
              {{ course.category }}
            </span>
            <div class="flex justify-between items-start mb-2 gap-2">
              <h3 class="font-bold text-sm text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                {{ course.title }}
              </h3>
              <span class="text-blue-600 font-bold text-sm flex-shrink-0">
                ₦{{ course.price.toLocaleString() }}
              </span>
            </div>
            <p class="text-gray-400 text-xs line-clamp-2 leading-relaxed">{{ course.description }}</p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Course {
  id:          string
  title:       string
  description: string
  price:       number
  category:    string
  thumbnail:   string | null
}

const user    = useSupabaseUser()
const supabase = useSupabaseClient()

const courses  = ref<Course[]>([])
const isLoading = ref(true)

onMounted(async () => {
  const { data, error } = await supabase
    .from('courses')
    .select('id, title, description, price, category, thumbnail')
    .eq('status', 'published')
    .order('created_at', { ascending: false })
    .limit(5)  // only show up to 5 in the carousel

  if (!error) courses.value = data ?? []
  isLoading.value = false
})

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

// ── Drag to scroll (unchanged) ─────────
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
  trackRef.value.scrollLeft = scrollLeft - (x - startX) * 1.2
}

function endDrag() { isDragging = false }
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