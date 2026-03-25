<template>
  <div class="min-h-screen bg-gray-50 flex font-sans">

    <!-- SIDEBAR — hidden on mobile, fixed on desktop -->
    <aside
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
      class="fixed top-0 left-0 h-full w-56 bg-white border-r border-gray-100 flex flex-col z-50 transition-transform duration-300 md:translate-x-0"
    >
      <!-- Logo -->
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

      <!-- Nav -->
      <nav class="flex flex-col px-3 py-4 gap-1 flex-1">
        <NuxtLink to="/admin/dashboard" @click="sidebarOpen = false" class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-50 text-blue-600 text-sm font-semibold">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
          </svg>
          Overview
        </NuxtLink>
        <NuxtLink to="/admin/courses/new" @click="sidebarOpen = false" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
          Courses
        </NuxtLink>
        <NuxtLink to="/admin/students" @click="sidebarOpen = false" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          Students
        </NuxtLink>
        <NuxtLink to="/admin/analytics" @click="sidebarOpen = false" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="20" x2="18" y2="10"/>
            <line x1="12" y1="20" x2="12" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
          Analytics
        </NuxtLink>
        <NuxtLink to="/admin/settings" @click="sidebarOpen = false" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
          Settings
        </NuxtLink>
      </nav>
    </aside>

    <!-- Sidebar overlay (mobile) -->
    <div
      v-if="sidebarOpen"
      class="fixed inset-0 bg-black/40 z-40 md:hidden"
      @click="sidebarOpen = false"
    />

    <!-- MAIN CONTENT -->
    <div class="flex-1 md:ml-56 flex flex-col min-h-screen">

      <!-- TOP NAVBAR -->
      <header class="bg-white border-b border-gray-100 h-14 flex items-center justify-between px-4 md:px-6 sticky top-0 z-30">
        <div class="flex items-center gap-3">
          <!-- Hamburger (mobile only) -->
          <button @click="sidebarOpen = true" class="md:hidden text-gray-500 focus:outline-none">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
          <h1 class="text-sm font-semibold text-gray-800">Admin Dashboard</h1>
        </div>
       <!-- TOP NAVBAR right side -->
<div class="flex items-center gap-3">
  <div class="text-right hidden sm:block">
   <p class="text-xs font-semibold text-gray-800">
  {{ adminEmail?.split('@')[0] }}
</p>
<div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
  {{ adminEmail?.charAt(0).toUpperCase() ?? 'A' }}
</div>
    <p class="text-[10px] text-gray-400">Super Administrator</p>
  </div>
  <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
   {{ adminEmail?.charAt(0).toUpperCase() ?? 'A' }}
  </div>
  <button
    @click="handleLogout"
    class="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-500 border border-red-200 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
  >
    <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
      <polyline points="16 17 21 12 16 7"/>
      <line x1="21" y1="12" x2="9" y2="12"/>
    </svg>
    Log out
  </button>
</div>
      </header>

      <!-- PAGE BODY -->
      <main class="flex-1 px-4 md:px-6 py-6">

        <!-- Greeting -->
        <div class="mb-6">
          <h2 class="text-xl md:text-2xl font-extrabold text-gray-900">Morning, Admin</h2>
          <p class="text-sm text-gray-400 mt-0.5">Here is what's happening with DigitalEd Hub today.</p>
        </div>

        <!-- STAT CARDS — 2 cols mobile, 4 cols desktop -->
        <!-- STAT CARDS -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">

  <!-- Total Students -->
  <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4 md:p-5">
    <p class="text-xs text-gray-400 font-medium mb-2">Total Students</p>

    <p class="text-xl md:text-2xl font-extrabold text-gray-900">
      {{ stats?.totalStudents?.toLocaleString() ?? '0' }}
    </p>

    <p class="text-[11px] text-green-500 font-medium mt-1">
      ↑ {{ stats?.newThisMonth ?? 0 }} new this month
    </p>
  </div>

  <!-- Total Courses -->
  <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4 md:p-5">
    <p class="text-xs text-gray-400 font-medium mb-2">Total Courses</p>

    <p class="text-xl md:text-2xl font-extrabold text-gray-900">
      {{ stats?.totalCourses ?? 0 }}
    </p>
  </div>

  <!-- Total Earnings -->
  <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4 md:p-5">
    <p class="text-xs text-gray-400 font-medium mb-2">Total Earnings</p>

    <p class="text-xl md:text-2xl font-extrabold text-gray-900">
      ₦{{ stats?.totalEarnings?.toLocaleString() ?? '0' }}
    </p>
  </div>

  <!-- Community Posts -->
  <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4 md:p-5">
    <p class="text-xs text-gray-400 font-medium mb-2">Community Posts</p>

    <p class="text-xl md:text-2xl font-extrabold text-gray-900">
      {{ stats?.communityPosts ?? 0 }}
    </p>
  </div>

</div>

        <!-- CHART + LATEST INTERACTIONS — stacked on mobile, side by side on desktop -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">

          <!-- Enrollment Growth Chart -->
          <div class="md:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-4 md:p-5">
            <div class="flex items-center justify-between mb-1">
              <div>
                <h3 class="text-sm font-bold text-gray-900">Enrollment Growth</h3>
                <p class="text-xs text-gray-400 mt-0.5">Student activity over the last 30 days</p>
              </div>
              <button class="text-xs font-semibold text-blue-600 border border-blue-200 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors">
                View Export
              </button>
            </div>

            <!-- Bar Chart -->
            <div class="mt-5 flex items-end gap-1.5 md:gap-2 h-32 md:h-36">
              <div
                v-for="(bar, i) in chartBars"
                :key="i"
                class="flex-1 rounded-t-md transition-all"
                :class="bar.active ? 'bg-blue-600' : 'bg-blue-200'"
                :style="{ height: bar.height + '%' }"
              />
            </div>

            <!-- X axis labels -->
            <div class="flex gap-1.5 md:gap-2 mt-2">
              <div v-for="(bar, i) in chartBars" :key="i" class="flex-1 text-center text-[8px] md:text-[9px] text-gray-400">
                {{ bar.label }}
              </div>
            </div>
          </div>

          <!-- Latest Interactions -->
          <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4 md:p-5">
            <h3 class="text-sm font-bold text-gray-900 mb-4">Latest Interactions</h3>

            <<div class="flex flex-col gap-4">

  <div
    v-for="item in latestInteractions"
    :key="item.id"
    class="flex gap-3 items-start"
  >
    <div :class="item.color" class="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"></div>

    <div>
      <p class="text-xs font-semibold text-gray-800">
        {{ item.text }}
      </p>

      <p class="text-[10px] text-gray-400 mt-0.5">
        {{ formatTime(item.created_at) }}
      </p>
    </div>
  </div>

</div>

            <button class="mt-5 text-xs text-blue-600 font-semibold hover:underline">
              View all activity →
            </button>
          </div>

        </div>

      </main>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

definePageMeta({ layout: false })

const supabase    = useSupabaseClient() 
const config  = useRuntimeConfig()

// ✅ Use config email, NOT Supabase user
const adminEmail = config.public.adminEmail
const { isAdmin } = useIsAdmin()
const sidebarOpen = ref(false)

//handle Logout function
async function handleLogout() {
  // ✅ Clear admin cookie
  await $fetch('/api/admin-logout', { method: 'POST' })
  // ✅ Also sign out of Supabase to clear the student session
  await supabase.auth.signOut()
  await navigateTo('/admin/login')
}
type AdminStats = {
  totalStudents: number
  newThisMonth: number
  totalCourses: number
  totalEarnings: number
  communityPosts: number

  enrollmentGrowth: { created_at: string }[]
  latestPosts: {
    id: string
    user_email: string
    created_at: string
  }[]
  latestEnrollments: {
    id: string
    user_email: string
    amount: number
    created_at: string
  }[]
}

// ✅ Redirect non-admins out
onMounted(async () => {
  const result = await $fetch<{ isAdmin: boolean }>('/api/admin-check')
  if (!result.isAdmin) {
    await navigateTo('/admin/login')
  }
})

// ✅ Fetch live stats
const { data: stats } = await useFetch<AdminStats>('/api/admin/stats')

// ✅ Build chart bars from real enrollment growth data
const chartBars = computed(() => {
  if (!stats.value?.enrollmentGrowth?.length) return []

  // Group enrollments by day number in the last 30 days
  const dayCounts: Record<number, number> = {}
  const now = new Date()

  stats.value.enrollmentGrowth.forEach((e: { created_at: string }) => {
    const diffDays = Math.ceil(
      (now.getTime() - new Date(e.created_at).getTime()) / (1000 * 60 * 60 * 24)
    )
    const dayNum = 30 - diffDays
    if (dayNum >= 0) dayCounts[dayNum] = (dayCounts[dayNum] ?? 0) + 1
  })

  const max = Math.max(...Object.values(dayCounts), 1)

  return Array.from({ length: 15 }, (_, i) => {
    const day = Math.round(i * 2)
    return {
      label:  String(day + 1),
      height: Math.max(10, Math.round(((dayCounts[day] ?? 0) / max) * 100)),
      active: i >= 9,
    }
  })
})

// ✅ Merge latest interactions from posts + enrollments
const latestInteractions = computed(() => {
  const posts = (stats.value?.latestPosts ?? []).map((p: any) => ({
    id:         p.id,
    type:       'post',
    text:       `New post by ${p.user_email?.split('@')[0] ?? 'someone'}`,
    created_at: p.created_at,
    color:      'bg-blue-500',
  }))

const enrollments = (stats.value?.latestEnrollments ?? []).map((e: any) => ({
  id:         e.id,
  type:       'enrollment',
  text:       `${e.user_email?.split('@')[0] ?? 'Someone'} enrolled in ${e.course_title} — ₦${Number(e.amount ?? 0).toLocaleString()}`,
  created_at: e.created_at,
  color:      'bg-green-500',
}))

  return [...posts, ...enrollments]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 6)
})

function formatTime(dateStr: string): string {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000)
  if (diff < 60)    return 'Just now'
  if (diff < 3600)  return `${Math.floor(diff / 60)}m ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
  return `${Math.floor(diff / 86400)}d ago`
}


</script>