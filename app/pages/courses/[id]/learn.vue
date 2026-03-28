<template>
<div class="min-h-screen bg-gray-50 flex flex-col">

  <!-- NAVBAR -->
  <header class="bg-white border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-2">
        <div class="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <rect x="2" y="2" width="5" height="5" rx="1" fill="white"/>
            <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
            <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
            <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.4"/>
          </svg>
        </div>
        <span class="font-semibold text-gray-900 text-sm">DigitalEd Hub</span>
      </NuxtLink>
      <NuxtLink to="/dashboard" class="text-sm text-gray-500 hover:text-blue-600 transition-colors">
        ← Back to Dashboard
      </NuxtLink>
    </div>
  </header>

  <!-- LOADING -->
  <div v-if="isLoading" class="flex-1 flex items-center justify-center">
    <div class="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"/>
  </div>

  <!-- NOT FOUND -->
  <div v-else-if="!course" class="flex-1 flex flex-col items-center justify-center text-center px-6">
    <p class="text-gray-400 text-sm">Course not found.</p>
    <NuxtLink to="/dashboard" class="mt-4 text-blue-600 text-sm font-semibold hover:underline">
      Back to Dashboard →
    </NuxtLink>
  </div>

  <!-- MAIN -->
  <main v-else class="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-8">

    <!-- Course title -->
    <div class="mb-5">
      <span class="text-[10px] font-semibold px-2.5 py-1 rounded uppercase tracking-wide bg-blue-100 text-blue-700 mb-2 inline-block">
        {{ course.category }}
      </span>
      <h1 class="text-xl font-bold text-gray-900">{{ course.title }}</h1>
      <p class="text-sm text-gray-500 mt-1">by DigitalEd Hub · Lifetime access</p>
    </div>

    <!-- VIDEO PLAYER -->
    <div class="bg-black rounded-xl overflow-hidden aspect-video relative mb-6">

      <!-- No video uploaded -->
      <div v-if="!course.video_url" class="w-full h-full flex flex-col items-center justify-center text-gray-500 gap-2">
        <svg class="w-10 h-10 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <polygon points="23 7 16 12 23 17 23 7"/>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
        </svg>
        <p class="text-sm">No video available yet.</p>
      </div>

      <!-- Video -->
      <template v-else>
        <video
          ref="videoEl"
          class="w-full h-full object-contain"
          @timeupdate="onTimeUpdate"
          @loadedmetadata="onMetaLoaded"
          @ended="isPlaying = false"
        >
          <source :src="course.video_url" type="video/mp4"/>
        </video>

        <!-- Play overlay -->
        <button
          v-if="!isPlaying"
          @click="togglePlay"
          class="absolute inset-0 flex items-center justify-center"
        >
          <div class="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
            <svg class="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21"/>
            </svg>
          </div>
        </button>

        <!-- Controls -->
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
          <div
            class="h-1 bg-white/30 rounded mb-3 cursor-pointer"
            @click="seekTo"
          >
            <div class="h-1 bg-blue-500 rounded" :style="{ width: progressPercent + '%' }"/>
          </div>
          <div class="flex items-center justify-between text-white text-xs">
            <div class="flex items-center gap-3">
              <button @click="togglePlay">
                <svg v-if="!isPlaying" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5,3 19,12 5,21"/>
                </svg>
                <svg v-else class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16"/>
                  <rect x="14" y="4" width="4" height="16"/>
                </svg>
              </button>
              <span>{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</span>
            </div>
            <button @click="toggleFullscreen">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 3 21 3 21 9"/>
                <polyline points="9 21 3 21 3 15"/>
              </svg>
            </button>
          </div>
        </div>
      </template>

    </div>

    <!-- TABS -->



    <!-- MARK AS COMPLETE BUTTON -->
<div class="flex justify-end mb-4">
  <button
    @click="toggleComplete"
    :disabled="savingComplete"
    :class="isCompleted
      ? 'bg-green-100 text-green-700 border border-green-200 hover:bg-green-200'
      : 'bg-green-600 text-white hover:bg-green-700'"
    class="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
  >
    <svg v-if="savingComplete" class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
    </svg>
    <svg v-else-if="isCompleted" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
    {{ isCompleted ? 'Completed ✓' : 'Mark as Complete' }}
  </button>
</div>

    <div class="flex gap-6 border-b border-gray-200 mb-5 text-sm">
      <button
        v-for="tab in ['Overview', 'Notes']"
        :key="tab"
        @click="activeTab = tab"
        :class="activeTab === tab
          ? 'text-blue-600 border-b-2 border-blue-600 pb-2 font-semibold'
          : 'text-gray-500 pb-2 hover:text-gray-700'"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Overview -->
    <div v-if="activeTab === 'Overview'" class="max-w-3xl text-sm text-gray-600 leading-relaxed">
      <h3 class="font-semibold text-gray-900 mb-2">About this course</h3>
      <p>{{ course.description }}</p>
    </div>

    <!-- Notes -->
    <div v-if="activeTab === 'Notes'" class="max-w-3xl">
      <textarea
        v-model="notes"
        placeholder="Write your notes here..."
        rows="6"
        class="w-full border border-gray-200 rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      />
      <button class="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
        Save Notes
      </button>
    </div>

  </main>

  <footer class="text-center py-6 text-xs text-gray-400">
    © 2026 DigitalEd Hub. All rights reserved.
  </footer>

</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

definePageMeta({
  layout: false,
  middleware: 'auth',
})

interface Course {
  id:          string
  title:       string
  description: string
  category:    string
  thumbnail:   string | null
  video_url:   string | null
}

const route    = useRoute()
const courseId = String(route.params.id)
const supabase = useSupabaseClient()
const user     = useSupabaseUser()

const isLoading     = ref(true)
const course        = ref<Course | null>(null)
const activeTab     = ref('Overview')
const notes         = ref('')
const isCompleted   = ref(false)
const savingComplete = ref(false)

// ── Video state ────────────────────────
const videoEl     = ref<HTMLVideoElement | null>(null)
const isPlaying   = ref(false)
const currentTime = ref(0)
const duration    = ref(0)

const progressPercent = computed(() =>
  duration.value ? (currentTime.value / duration.value) * 100 : 0
)

onMounted(async () => {
  // Fetch course
  const { data, error } = await supabase
    .from('courses')
    .select('id, title, description, category, thumbnail, video_url')
    .eq('id', courseId)
    .single()

  if (error || !data) {
    console.error('Course fetch error:', error?.message)
    isLoading.value = false
    return
  }

  course.value    = data
  isLoading.value = false

  // ✅ Fetch enrollment to check completed status
  const { data: { session } } = await supabase.auth.getSession()
  const currentUser = session?.user ?? user.value
  if (!currentUser) return

  const { data: enrollment } = await supabase
    .from('enrollments')
    .select('completed')
    .eq('user_id', currentUser.id)
    .eq('course_id', courseId)
    .maybeSingle()

  if (enrollment) {
    isCompleted.value = enrollment.completed ?? false
  }
})

// ✅ Toggle complete and save to Supabase
async function toggleComplete() {
  const { data: { session } } = await supabase.auth.getSession()
  const currentUser = session?.user ?? user.value
  if (!currentUser || !course.value) return

  savingComplete.value = true
  const newValue = !isCompleted.value

  const { error } = await supabase
    .from('enrollments')
    .update({ completed: newValue })
    .eq('user_id', currentUser.id)
    .eq('course_id', courseId)

  if (error) {
    console.error('Failed to update completion:', error.message)
  } else {
    isCompleted.value = newValue
  }

  savingComplete.value = false
}

// ── Video controls ─────────────────────
function togglePlay() {
  if (!videoEl.value) return
  if (isPlaying.value) {
    videoEl.value.pause()
    isPlaying.value = false
  } else {
    videoEl.value.play()
    isPlaying.value = true
  }
}

function onTimeUpdate() {
  if (videoEl.value) currentTime.value = videoEl.value.currentTime
}

function onMetaLoaded() {
  if (videoEl.value) duration.value = videoEl.value.duration
}

function seekTo(e: MouseEvent) {
  const bar   = e.currentTarget as HTMLElement
  const ratio = (e.clientX - bar.getBoundingClientRect().left) / bar.offsetWidth
  if (videoEl.value) videoEl.value.currentTime = ratio * duration.value
}

function toggleFullscreen() {
  videoEl.value?.requestFullscreen()
}

function formatTime(secs: number): string {
  const m = Math.floor(secs / 60)
  const s = Math.floor(secs % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}
</script>