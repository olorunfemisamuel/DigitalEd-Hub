<template>
  <div class="min-h-screen bg-gray-50 flex font-sans">

    <!-- SIDEBAR -->
    <aside class="w-52 bg-white border-r border-gray-100 flex flex-col fixed top-0 left-0 h-full z-40">

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
        <NuxtLink to="/admin/dashboard" class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-50 text-blue-600 text-sm font-semibold">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
          </svg>
          Overview
        </NuxtLink>
        <NuxtLink to="/admin/courses" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
          Courses
        </NuxtLink>
        <NuxtLink to="/admin/students" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          Students
        </NuxtLink>
        <NuxtLink to="/admin/analytics" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="20" x2="18" y2="10"/>
            <line x1="12" y1="20" x2="12" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
          Analytics
        </NuxtLink>
        <NuxtLink to="/admin/settings" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
          Settings
        </NuxtLink>
      </nav>

    </aside>

    <!-- MAIN CONTENT -->
    <div class="flex-1 ml-52 flex flex-col min-h-screen">

      <!-- TOP NAVBAR -->
      <header class="bg-white border-b border-gray-100 h-14 flex items-center justify-between px-6 sticky top-0 z-30">
        <h1 class="text-sm font-semibold text-gray-800">Admin Dashboard</h1>
        <div class="flex items-center gap-3">
          <div class="text-right">
            <p class="text-xs font-semibold text-gray-800">Admin User</p>
            <p class="text-[10px] text-gray-400">Super Administrator</p>
          </div>
          <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
            A
          </div>
        </div>
      </header>

      <!-- PAGE BODY -->
      <main class="flex-1 px-6 py-7">

        <!-- Greeting -->
        <div class="mb-7">
          <h2 class="text-2xl font-extrabold text-gray-900">Morning, Admin</h2>
          <p class="text-sm text-gray-400 mt-0.5">Here is what's happening with DigitalEd Hub today.</p>
        </div>

        <!-- STAT CARDS -->
        <div class="grid grid-cols-4 gap-4 mb-7">

          <!-- Total Students -->
          <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <div class="flex items-start justify-between mb-3">
              <p class="text-xs text-gray-400 font-medium">Total Students</p>
              <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                <svg class="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                </svg>
              </div>
            </div>
            <p class="text-2xl font-extrabold text-gray-900">1,200</p>
            <p class="text-[11px] text-green-500 font-medium mt-1">↑ 12% from last month</p>
          </div>

          <!-- Total Courses -->
          <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <div class="flex items-start justify-between mb-3">
              <p class="text-xs text-gray-400 font-medium">Total Courses</p>
              <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                <svg class="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </div>
            </div>
            <p class="text-2xl font-extrabold text-gray-900">18</p>
            <p class="text-[11px] text-gray-400 font-medium mt-1">18 categories online</p>
          </div>

          <!-- Total Earnings -->
          <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <div class="flex items-start justify-between mb-3">
              <p class="text-xs text-gray-400 font-medium">Total Earnings</p>
              <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                <svg class="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
            </div>
            <p class="text-2xl font-extrabold text-gray-900">₦450,000</p>
            <p class="text-[11px] text-blue-500 font-medium mt-1">→ Next payout: Friday</p>
          </div>

          <!-- Active Community Posts -->
          <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <div class="flex items-start justify-between mb-3">
              <p class="text-xs text-gray-400 font-medium">Active Community Posts</p>
              <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                <svg class="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
            </div>
            <p class="text-2xl font-extrabold text-gray-900">23</p>
            <p class="text-[11px] text-gray-400 font-medium mt-1">8 new since yesterday</p>
          </div>

        </div>

        <!-- CHART + LATEST INTERACTIONS -->
        <div class="grid grid-cols-3 gap-5">

          <!-- Enrollment Growth Chart -->
          <div class="col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-5">
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
            <div class="mt-5 flex items-end gap-2 h-36">
              <div v-for="(bar, i) in chartBars" :key="i"
                class="flex-1 rounded-t-md transition-all"
                :class="bar.active ? 'bg-blue-600' : 'bg-blue-200'"
                :style="{ height: bar.height + '%' }"
              />
            </div>

            <!-- X axis labels -->
            <div class="flex gap-2 mt-2">
              <div v-for="(bar, i) in chartBars" :key="i" class="flex-1 text-center text-[9px] text-gray-400">
                {{ bar.label }}
              </div>
            </div>
          </div>

          <!-- Latest Interactions -->
          <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <h3 class="text-sm font-bold text-gray-900 mb-4">Latest Interactions</h3>

            <div class="flex flex-col gap-4">

              <div class="flex gap-3 items-start">
                <div class="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                <div>
                  <p class="text-xs font-semibold text-gray-800">Adaeze J. joined Python Basics</p>
                  <p class="text-[10px] text-gray-400 mt-0.5">3 minutes ago</p>
                </div>
              </div>

              <div class="flex gap-3 items-start">
                <div class="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                <div>
                  <p class="text-xs font-semibold text-gray-800">New forum post in "UI Design"</p>
                  <p class="text-[10px] text-gray-400 mt-0.5">17 min ago</p>
                </div>
              </div>

              <div class="flex gap-3 items-start">
                <div class="w-2 h-2 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
                <div>
                  <p class="text-xs font-semibold text-gray-800">Payment confirmed: ₦15,500</p>
                  <p class="text-[10px] text-gray-400 mt-0.5">1 hour ago</p>
                </div>
              </div>

              <div class="flex gap-3 items-start">
                <div class="w-2 h-2 rounded-full bg-yellow-400 mt-1.5 flex-shrink-0"></div>
                <div>
                  <p class="text-xs font-semibold text-gray-800">Course "Digital Marketing" updated</p>
                  <p class="text-[10px] text-gray-400 mt-0.5">2 hours ago</p>
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
definePageMeta({ layout: false })

const chartBars = [
  { height: 35, label: '1',  active: false },
  { height: 50, label: '3',  active: false },
  { height: 40, label: '5',  active: false },
  { height: 60, label: '7',  active: false },
  { height: 55, label: '9',  active: false },
  { height: 70, label: '11', active: false },
  { height: 65, label: '13', active: false },
  { height: 80, label: '15', active: false },
  { height: 75, label: '17', active: false },
  { height: 90, label: '19', active: true  },
  { height: 85, label: '21', active: true  },
  { height: 95, label: '23', active: true  },
  { height: 88, label: '25', active: true  },
  { height: 100, label: '27', active: true },
  { height: 92, label: '30', active: true  },
]
</script>