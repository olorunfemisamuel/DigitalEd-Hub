<template>
  <div class="min-h-screen bg-gray-100 flex flex-col font-sans">

    <!-- Navbar -->
    <nav class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between py-3">

        <!-- Logo + Search -->
        <div class="flex items-center gap-3 sm:gap-5">
          <NuxtLink to="/" class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="5" height="5" rx="1" fill="white"/>
                <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
                <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
                <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.4"/>
              </svg>
            </div>
            <span class="font-bold text-gray-900 text-sm">DigitalEd Hub</span>
          </NuxtLink>

          <div class="hidden sm:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 w-48">
            <svg class="w-3.5 h-3.5 text-gray-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input type="text" placeholder="Search courses..." class="bg-transparent outline-none text-xs text-gray-500 w-full"/>
          </div>
        </div>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-4">
          <NuxtLink to="/dashboard" class="text-sm font-medium text-gray-700 hover:text-blue-600">My Courses</NuxtLink>
          <NuxtLink to="/community" class="text-sm font-medium text-gray-700 hover:text-blue-600">Community</NuxtLink>

          <!-- Avatar + dropdown -->
          <div class="relative">
            <button @click="profileOpen = !profileOpen" class="flex items-center gap-2 focus:outline-none">
              <img src="https://i.pravatar.cc/32?img=5" class="w-8 h-8 rounded-full border-2 border-gray-200"/>
              <svg class="w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>

            <!-- Dropdown -->
            <div
              v-if="profileOpen"
              class="absolute right-0 mt-2 w-48 bg-white rounded-xl border border-gray-200 shadow-lg py-1 z-50"
            >
              <div class="px-4 py-2.5 border-b border-gray-100">
                <p class="text-xs font-semibold text-gray-900 truncate">{{ userEmail }}</p>
                <p class="text-xs text-gray-400">Student</p>
              </div>
              <NuxtLink to="/dashboard" @click="profileOpen = false" class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                Dashboard
              </NuxtLink>
              <NuxtLink to="/courses" @click="profileOpen = false" class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
                My Courses
              </NuxtLink>
              <div class="border-t border-gray-100 mt-1">
                <button
                  @click="handleLogout"
                  class="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors"
                >
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                    <polyline points="16 17 21 12 16 7"/>
                    <line x1="21" y1="12" x2="9" y2="12"/>
                  </svg>
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="isOpen = !isOpen" class="md:hidden text-gray-700">
          <svg v-if="!isOpen" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
          <svg v-else class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-show="isOpen" class="md:hidden border-t border-gray-100 px-4 py-3 space-y-3 bg-white">
        <NuxtLink to="/dashboard" @click="isOpen = false" class="block text-sm text-gray-700 font-medium">My Courses</NuxtLink>
        <NuxtLink to="/community" @click="isOpen = false" class="block text-sm text-gray-700 font-medium">Community</NuxtLink>
        <div class="border-t border-gray-100 pt-3">
          <p class="text-xs text-gray-400 mb-2">{{ userEmail }}</p>
          <button
            @click="handleLogout"
            class="flex items-center gap-2 text-sm text-red-500 font-medium"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Log out
          </button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6">

      <!-- Enrolled Courses -->
      <section class="mb-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-sm font-bold text-gray-900 sm:text-base">My Enrolled Courses</h2>
          <NuxtLink to="/courses" class="text-xs text-blue-600 font-medium hover:underline">View all</NuxtLink>
        </div>

        <div class="flex flex-col gap-4 sm:grid sm:grid-cols-2 xl:grid-cols-3">
          <div
            v-for="course in courses"
            :key="course.id"
            class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <img :src="course.image" class="w-full h-36 object-cover" :alt="course.title"/>
            <div class="p-4">
              <h3 class="text-sm font-bold text-gray-900 mb-1">{{ course.title }}</h3>
              <p class="text-xs text-gray-500 mb-3">Instructor: {{ course.instructor }}</p>
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-500">Progress</span>
                <div class="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-blue-600 rounded-full transition-all duration-500" :style="{ width: course.progress + '%' }"/>
                </div>
                <span class="text-xs font-semibold text-gray-700">{{ course.progress }}%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Feed + Resources -->
      <div class="flex flex-col gap-4 xl:grid xl:grid-cols-[1fr_300px]">

        <!-- Community Feed -->
        <section class="bg-white rounded-xl border border-gray-200 p-5">
          <h2 class="text-sm font-bold text-gray-900 mb-4">Community Feed</h2>
          <div
            v-for="post in feedPosts"
            :key="post.id"
            class="flex gap-3 pb-4 border-b border-gray-100 last:border-none last:pb-0"
          >
            <div
              class="w-9 h-9 rounded-full flex items-center justify-center text-xs text-white font-bold flex-shrink-0"
              :style="{ backgroundColor: post.avatarColor }"
            >{{ post.initials }}</div>
            <div>
              <p class="text-sm font-semibold text-gray-900 mb-0.5">{{ post.name }}</p>
              <p class="text-xs text-gray-500 mb-2">{{ post.text }}</p>
              <div class="text-xs text-gray-400">👍 {{ post.likes }} &nbsp;💬 {{ post.comments }}</div>
            </div>
          </div>
        </section>

        <!-- Resources -->
        <section class="bg-white rounded-xl border border-gray-200 p-5">
          <h2 class="text-sm font-bold text-gray-900 mb-4">Resources</h2>
          <div v-for="resource in resources" :key="resource.id" class="flex items-center gap-3 mb-3">
            <div class="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center text-lg flex-shrink-0">
              {{ resource.icon }}
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-xs font-semibold text-gray-900 truncate">{{ resource.name }}</p>
              <p class="text-xs text-gray-400">{{ resource.meta }}</p>
            </div>
          </div>
          <button class="w-full border border-gray-300 rounded-lg py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors mt-1">
            Browse Library
          </button>
        </section>

      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200 text-center py-4">
      <p class="text-xs text-gray-400">© 2026 DigitalEd Hub. All rights reserved.</p>
    </footer>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({
  layout: false,
  middleware: 'auth',
})

// ── State ──────────────────────────────
const isOpen      = ref(false)
const profileOpen = ref(false)

// ── Auth ───────────────────────────────
const supabase = useSupabaseClient()
const user     = useSupabaseUser()

const userEmail = computed(() => user.value?.email ?? '')

async function handleLogout() {
  await supabase.auth.signOut()
  await navigateTo('/')          // ← sends to homepage ✅
}

// ── Data ───────────────────────────────
const courses = [
  {
    id: 1,
    title: 'Advanced Data Science',
    instructor: 'Dr. Sarah Chen',
    progress: 65,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
  },
  {
    id: 2,
    title: 'Full Stack Web Development',
    instructor: 'Alex Rivera',
    progress: 40,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400',
  },
  {
    id: 3,
    title: 'Cybersecurity Fundamentals',
    instructor: 'James Wilson',
    progress: 90,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400',
  },
]

const feedPosts = [
  { id: 1, initials: 'JD', name: 'Jane Doe',      text: 'New practice problems uploaded for the midterms.', likes: 24, comments: 8,  avatarColor: '#4f46e5' },
  { id: 2, initials: 'MR', name: 'Mark Robinson', text: 'Great job on the group projects this week!',        likes: 12, comments: 3,  avatarColor: '#0ea5e9' },
]

const resources = [
  { id: 1, icon: '📄', name: 'Lesson Plan Template', meta: 'PDF • 2.1MB'  },
  { id: 2, icon: '📊', name: 'Grading Rubric',        meta: 'XLSX • 203KB' },
  { id: 3, icon: '📋', name: 'Study Guide',           meta: 'DOCX • 3.1MB' },
]
</script>