<template>
  <div class="min-h-screen bg-gray-50 flex font-sans">

    <!-- SIDEBAR -->
    <aside
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
      class="fixed top-0 left-0 h-full w-56 bg-white border-r border-gray-100 flex flex-col z-50 transition-transform duration-300 md:translate-x-0"
    >
      <div class="px-5 py-4 border-b border-gray-100">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="5" height="5" rx="1" fill="white"/>
              <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
              <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
              <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.4"/>
            </svg>
          </div>
          <span class="font-bold text-blue-600 text-sm">DigitalEd Hub</span>
        </div>
      </div>

      <nav class="flex flex-col px-3 py-4 gap-1 flex-1">
        <NuxtLink to="/admin/dashboard" @click="sidebarOpen = false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
          </svg>
          Overview
        </NuxtLink>

        <NuxtLink to="/admin/courses" @click="sidebarOpen = false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-50 text-blue-600 text-sm font-semibold">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
          Courses
        </NuxtLink>

        <NuxtLink to="/admin/students" @click="sidebarOpen = false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          Students
        </NuxtLink>

        <NuxtLink to="/admin/community" @click="sidebarOpen = false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="20" x2="18" y2="10"/>
            <line x1="12" y1="20" x2="12" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
          Community
        </NuxtLink>

        <NuxtLink to="/admin/settings" @click="sidebarOpen = false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
          Settings
        </NuxtLink>
      </nav>
    </aside>

    <div v-if="sidebarOpen" class="fixed inset-0 bg-black/40 z-40 md:hidden" @click="sidebarOpen = false"/>

    <!-- MAIN CONTENT -->
    <div class="flex-1 md:ml-56 flex flex-col min-h-screen">

      <!-- TOP NAVBAR -->
      <header class="bg-white border-b border-gray-100 h-14 flex items-center justify-between px-4 md:px-6 sticky top-0 z-30">
        <div class="flex items-center gap-3">
          <button @click="sidebarOpen = true" class="md:hidden text-gray-500">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
          <h1 class="text-sm font-semibold text-gray-800">Manage Courses</h1>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
            {{ adminEmail?.charAt(0).toUpperCase() ?? 'A' }}
          </div>
          <button @click="handleLogout"
            class="flex items-center gap-2 text-red-500 text-xs font-semibold px-3 py-1.5 hover:text-red-600 transition-colors">
            <span>Log out</span>
          </button>
        </div>
      </header>

      <!-- PAGE BODY -->
      <main class="flex-1 px-4 md:px-6 py-6">

        <div class="flex items-center justify-between mb-6">
          <div>
            <h2 class="text-2xl font-extrabold text-gray-900">Manage Courses</h2>
            <p class="text-sm text-gray-500">Curate and organize your digital learning curriculum.</p>
          </div>
          <NuxtLink to="/admin/courses/new"
            class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-colors">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
            </svg>
            Upload New Course
          </NuxtLink>
        </div>

        <!-- Search -->
        <div class="flex flex-col md:flex-row gap-3 mb-6">
          <div class="flex-1 relative">
            <div class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 01-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
            <input
              v-model="searchQuery"
              @input="onSearch"
              type="text"
              placeholder="Search for course title or category..."
              class="w-full bg-white border border-gray-200 pl-11 pr-4 py-3 rounded-2xl text-sm focus:outline-none focus:border-blue-300"
            />
          </div>
        </div>

        <!-- Table -->
        <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-100">
                <th class="text-left px-6 py-5 text-xs font-semibold text-gray-400 uppercase tracking-widest">Course Title</th>
                <th class="text-left px-6 py-5 text-xs font-semibold text-gray-400 uppercase tracking-widest hidden md:table-cell">Category</th>
                <th class="text-left px-6 py-5 text-xs font-semibold text-gray-400 uppercase tracking-widest">Price</th>
                <th class="text-left px-6 py-5 text-xs font-semibold text-gray-400 uppercase tracking-widest hidden md:table-cell">Students</th>
                <th class="text-left px-6 py-5 text-xs font-semibold text-gray-400 uppercase tracking-widest">Status</th>
                <th class="text-left px-6 py-5 text-xs font-semibold text-gray-400 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>

            <!-- Loading -->
            <tbody v-if="isLoading">
              <tr>
                <td colspan="6" class="px-6 py-16 text-center">
                  <div class="flex justify-center">
                    <div class="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"/>
                  </div>
                </td>
              </tr>
            </tbody>

            <!-- Empty -->
            <tbody v-else-if="courses.length === 0">
              <tr>
                <td colspan="6" class="px-6 py-16 text-center text-gray-400 text-sm">
                  No courses found.
                </td>
              </tr>
            </tbody>

            <!-- Rows -->
            <tbody v-else class="divide-y divide-gray-100">
              <tr v-for="course in courses" :key="course.id" class="hover:bg-gray-50 transition-colors">
                <td class="px-6 py-5">
                  <div class="flex items-center gap-4">
                    <div class="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg class="w-5 h-5 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                      </svg>
                    </div>
                    <div>
                      <p class="font-semibold text-gray-900">{{ course.title }}</p>
                      <p class="text-xs text-gray-400">{{ course.category }}</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-5 hidden md:table-cell">
                  <span class="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                    {{ course.category }}
                  </span>
                </td>
                <td class="px-6 py-5 font-semibold text-gray-900">₦{{ course.price.toLocaleString() }}</td>
                <td class="px-6 py-5 hidden md:table-cell">
                  <div class="flex items-center gap-1 text-blue-600">
                    <span class="text-lg">👥</span>
                    <span class="font-medium">{{ course.students.toLocaleString() }}</span>
                  </div>
                </td>
                <td class="px-6 py-5">
                  <span
                    :class="course.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'"
                    class="inline-block px-3 py-1 text-xs font-semibold rounded-full capitalize"
                  >
                    {{ course.status }}
                  </span>
                </td>
                <td class="px-6 py-5">
                  <button
                    @click="navigateTo(`/admin/courses/${course.id}/edit`)"
                    class="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Edit →
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- PAGINATION -->
          <div class="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-sm">
            <p class="text-gray-500">
              Showing {{ showingFrom }}–{{ showingTo }} of {{ totalCourses }} course{{ totalCourses === 1 ? '' : 's' }}
            </p>
            <div class="flex items-center gap-1">
              <!-- Prev -->
              <button
                @click="goToPage(currentPage - 1)"
                :disabled="currentPage === 1"
                class="w-8 h-8 flex items-center justify-center rounded-xl border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >‹</button>

              <!-- Page numbers -->
              <button
                v-for="page in totalPages"
                :key="page"
                @click="goToPage(page)"
                :class="page === currentPage
                  ? 'bg-blue-600 text-white'
                  : 'border border-gray-200 hover:bg-gray-50 text-gray-700'"
                class="w-8 h-8 flex items-center justify-center rounded-xl text-sm font-medium"
              >
                {{ page }}
              </button>

              <!-- Next -->
              <button
                @click="goToPage(currentPage + 1)"
                :disabled="currentPage === totalPages"
                class="w-8 h-8 flex items-center justify-center rounded-xl border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >›</button>
            </div>
          </div>

        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

definePageMeta({ layout: false })

const config     = useRuntimeConfig()
const supabase   = useSupabaseClient()
const adminEmail = config.public.adminEmail

const sidebarOpen  = ref(false)
const isLoading    = ref(true)
const searchQuery  = ref('')

const PER_PAGE     = 5
const currentPage  = ref(1)
const totalCourses = ref(0)

interface Course {
  id:       string
  title:    string
  category: string
  price:    number
  status:   string
  students: number
}

const courses = ref<Course[]>([])

// ── Pagination helpers ─────────────────
const totalPages = computed(() => Math.max(1, Math.ceil(totalCourses.value / PER_PAGE)))

const showingFrom = computed(() =>
  totalCourses.value === 0 ? 0 : (currentPage.value - 1) * PER_PAGE + 1
)

const showingTo = computed(() =>
  Math.min(currentPage.value * PER_PAGE, totalCourses.value)
)

// ── Fetch one page of courses ──────────
async function fetchPage() {
  isLoading.value = true

  const from = (currentPage.value - 1) * PER_PAGE
  const to   = from + PER_PAGE - 1

  let query = supabase
    .from('courses')
    .select('id, title, category, price, status', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to)

  if (searchQuery.value.trim()) {
    query = query.or(
      `title.ilike.%${searchQuery.value.trim()}%,category.ilike.%${searchQuery.value.trim()}%`
    )
  }

  const { data: courseData, count, error: courseError } = await query

  if (courseError) {
    console.error('Courses fetch error:', courseError.message)
    isLoading.value = false
    return
  }

  totalCourses.value = count ?? 0

  const ids = (courseData ?? []).map(c => c.id)

  // Server API with service role — bypasses RLS
  let countMap: Record<string, number> = {}
  if (ids.length > 0) {
    countMap = await $fetch('/api/admin-enrollment-counts', {
      query: { ids: ids.join(',') }
    })
  }

  courses.value = (courseData ?? []).map(c => ({
    ...c,
    students: countMap[String(c.id)] ?? 0,
  }))

  isLoading.value = false
}

// ── Page navigation ────────────────────
function goToPage(page: number) {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  fetchPage()
}

// ── Search — reset to page 1 ───────────
let searchTimeout: ReturnType<typeof setTimeout>
function onSearch() {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    currentPage.value = 1
    fetchPage()
  }, 350) // debounce 350ms so it doesn't fire on every keystroke
}

onMounted(fetchPage)

async function handleLogout() {
  await $fetch('/api/admin-logout', { method: 'POST' })
  const supabase = useSupabaseClient()
  await supabase.auth.signOut()
  await navigateTo('/admin/login')
}
</script>