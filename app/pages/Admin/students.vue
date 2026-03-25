<template>
  <div class="min-h-screen bg-gray-50 flex font-sans">

    <!-- SIDEBAR -->
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
        <NuxtLink to="/admin/dashboard" @click="sidebarOpen = false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
          </svg>
          Overview
        </NuxtLink>
        <NuxtLink to="/admin/courses" @click="sidebarOpen = false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
          Courses
        </NuxtLink>
        <NuxtLink to="/admin/students" @click="sidebarOpen = false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-50 text-blue-600 text-sm font-semibold">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          Students
        </NuxtLink>
        <NuxtLink to="/admin/analytics" @click="sidebarOpen = false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="20" x2="18" y2="10"/>
            <line x1="12" y1="20" x2="12" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
          Analytics
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

      <!-- Bottom actions -->
      <div class="px-3 py-4 border-t border-gray-100 flex flex-col gap-2">
        <NuxtLink to="/admin/courses/new"
          class="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-2.5 rounded-lg transition-colors">
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          New Course
        </NuxtLink>
        <button class="flex items-center gap-2 text-gray-500 text-xs font-medium px-3 py-2 hover:text-gray-700 transition-colors">
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
          Support
        </button>
        <button @click="handleLogout" class="flex items-center gap-2 text-red-500 text-xs font-semibold px-3 py-2 hover:text-red-600 transition-colors">
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Log out
        </button>
      </div>
    </aside>

    <!-- Sidebar overlay (mobile) -->
    <div v-if="sidebarOpen" class="fixed inset-0 bg-black/40 z-40 md:hidden" @click="sidebarOpen = false"/>

    <!-- MAIN CONTENT -->
    <div class="flex-1 md:ml-56 flex flex-col min-h-screen">

      <!-- TOP NAVBAR -->
      <header class="bg-white border-b border-gray-100 h-14 flex items-center justify-between px-4 md:px-6 sticky top-0 z-30">
        <div class="flex items-center gap-3">
          <button @click="sidebarOpen = true" class="md:hidden text-gray-500 focus:outline-none">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
          <h1 class="text-sm font-semibold text-gray-800">All Students</h1>
        </div>

        <!-- Search -->
        <div class="hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 w-64">
          <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            v-model="search"
            type="text"
            placeholder="Global search..."
            class="bg-transparent text-sm text-gray-700 outline-none placeholder-gray-400 w-full"
          />
        </div>

        <!-- Right -->
        <div class="flex items-center gap-3">
          <button class="text-gray-400 hover:text-gray-600">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </button>
          <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
              {{ adminEmail?.charAt(0).toUpperCase() ?? 'A' }}
            </div>
            <div class="hidden sm:block text-right">
              <p class="text-xs font-semibold text-gray-800 leading-none">Admin User</p>
              <p class="text-[10px] text-gray-400">Super Administrator</p>
            </div>
          </div>
        </div>
      </header>

      <!-- PAGE BODY -->
      <main class="flex-1 px-4 md:px-6 py-6">

        <!-- Page title -->
        <h2 class="text-xl font-extrabold text-gray-900 mb-5">All Students</h2>

        <!-- STAT CARDS -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

          <!-- Total Students -->
          <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
            <div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
              </svg>
            </div>
            <div>
              <p class="text-xs text-gray-400 font-medium">Total Students</p>
              <p class="text-2xl font-extrabold text-gray-900">{{ totalStudents.toLocaleString() }}</p>
              <p class="text-[11px] text-green-500 font-medium mt-0.5">↑ 14% from last year</p>
            </div>
          </div>

          <!-- New This Month -->
          <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
            <div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>
              </svg>
            </div>
            <div>
              <p class="text-xs text-gray-400 font-medium">New This Month</p>
              <p class="text-2xl font-extrabold text-gray-900">{{ newThisMonth }}</p>
              <p class="text-[11px] text-gray-400 font-medium mt-0.5">Target: 300</p>
            </div>
          </div>

          <!-- Total Revenue -->
          <div class="bg-blue-600 rounded-xl shadow-sm p-5 flex items-center gap-4">
            <div class="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <div>
              <p class="text-xs text-white/70 font-medium">Total Revenue</p>
              <p class="text-2xl font-extrabold text-white">₦{{ totalEarnings.toLocaleString() }}</p>
              <p class="text-[11px] text-white/60 font-medium mt-0.5">Processing complete</p>
            </div>
          </div>

        </div>

        <!-- STUDENT REGISTRY TABLE -->
        <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">

          <!-- Table header -->
          <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h3 class="text-sm font-bold text-gray-900">Student Registry</h3>
              <p class="text-xs text-gray-400 mt-0.5">Managing learners across all academic disciplines</p>
            </div>
            <div class="flex items-center gap-2">
              <div class="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 md:hidden">
                <svg class="w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <input v-model="search" type="text" placeholder="Search..." class="bg-transparent text-xs outline-none w-24"/>
              </div>
              <button class="p-2 border border-gray-200 rounded-lg text-gray-400 hover:text-gray-600">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
                </svg>
              </button>
              <button @click="exportCSV" class="p-2 border border-gray-200 rounded-lg text-gray-400 hover:text-gray-600">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Loading state -->
          <div v-if="isLoading" class="flex justify-center py-12">
            <div class="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>

          <!-- Table -->
          <div v-else class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-gray-100">
                  <th class="text-left px-5 py-3 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Student Name</th>
                  <th class="text-left px-5 py-3 text-[11px] font-semibold text-gray-400 uppercase tracking-wider hidden md:table-cell">Contact Details</th>
                  <th class="text-left px-5 py-3 text-[11px] font-semibold text-gray-400 uppercase tracking-wider hidden md:table-cell">Enrollment</th>
                  <th class="text-left px-5 py-3 text-[11px] font-semibold text-gray-400 uppercase tracking-wider hidden lg:table-cell">Joined Date</th>
                  <th class="text-left px-5 py-3 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                  <th class="text-left px-5 py-3 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="student in paginatedStudents"
                  :key="student.id"
                  class="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                >
                  <!-- Name + Avatar -->
                  <td class="px-5 py-3.5">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                        :style="{ backgroundColor: getAvatarColor(student.email) }"
                      >
                        {{ student.email?.charAt(0).toUpperCase() }}
                      </div>
                      <div>
                        <p class="text-sm font-semibold text-gray-900">{{ student.email?.split('@')[0] }}</p>
                      </div>
                    </div>
                  </td>

                  <!-- Email -->
                  <td class="px-5 py-3.5 hidden md:table-cell">
                    <p class="text-xs text-gray-500">{{ student.email }}</p>
                  </td>

                  <!-- Enrollments -->
                  <td class="px-5 py-3.5 hidden md:table-cell">
                    <span class="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {{ student.enrollmentCount }} Course{{ student.enrollmentCount !== 1 ? 's' : '' }}
                    </span>
                  </td>

                  <!-- Joined date -->
                  <td class="px-5 py-3.5 hidden lg:table-cell">
                    <p class="text-xs text-gray-500">{{ formatDate(student.created_at) }}</p>
                  </td>

                  <!-- Status -->
                  <td class="px-5 py-3.5">
                    <span
                      class="text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide"
                      :class="student.enrollmentCount > 0 ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'"
                    >
                      {{ student.enrollmentCount > 0 ? 'Active' : 'Inactive' }}
                    </span>
                  </td>

                  <!-- Actions -->
                  <td class="px-5 py-3.5">
                    <div class="relative">
                      <button
                        @click="toggleMenu(student.id)"
                        class="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/>
                        </svg>
                      </button>
                      <!-- Dropdown -->
                      <div
                        v-if="openMenu === student.id"
                        class="absolute right-0 top-8 bg-white border border-gray-100 rounded-xl shadow-lg z-10 py-1 w-36"
                      >
                        <button class="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-50">View Profile</button>
                        <button class="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-50">Send Email</button>
                        <button class="w-full text-left px-4 py-2 text-xs text-red-500 hover:bg-red-50">Deactivate</button>
                      </div>
                    </div>
                  </td>

                </tr>

                <!-- Empty state -->
                <tr v-if="paginatedStudents.length === 0">
                  <td colspan="6" class="px-5 py-10 text-center text-sm text-gray-400">
                    No students found.
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div class="px-5 py-4 border-t border-gray-100 flex items-center justify-between">
            <p class="text-xs text-gray-400">
              Showing {{ (currentPage - 1) * pageSize + 1 }}–{{ Math.min(currentPage * pageSize, filteredStudents.length) }} of {{ filteredStudents.length }} students
            </p>
            <div class="flex items-center gap-1">
              <button
                @click="currentPage--"
                :disabled="currentPage === 1"
                class="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed text-xs"
              >‹</button>
              <button
                v-for="p in totalPages"
                :key="p"
                @click="currentPage = p"
                class="w-7 h-7 flex items-center justify-center rounded-lg text-xs font-semibold transition-colors"
                :class="p === currentPage ? 'bg-blue-600 text-white' : 'border border-gray-200 text-gray-500 hover:bg-gray-50'"
              >{{ p }}</button>
              <button
                @click="currentPage++"
                :disabled="currentPage === totalPages"
                class="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed text-xs"
              >›</button>
            </div>
          </div>

        </div>

        <!-- BOTTOM ACTION BAR -->
        <div class="mt-4 bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-3 flex items-center justify-around md:justify-start md:gap-6">
          <button class="flex flex-col items-center gap-1 text-blue-600">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
            </svg>
            <span class="text-[10px] font-semibold">Active List</span>
          </button>
          <button class="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
            </svg>
            <span class="text-[10px] font-semibold">Bulk Action</span>
          </button>
          <button class="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="20" x2="18" y2="10"/>
              <line x1="12" y1="20" x2="12" y2="4"/>
              <line x1="6" y1="20" x2="6" y2="14"/>
            </svg>
            <span class="text-[10px] font-semibold">Analytics</span>
          </button>
          <button @click="exportCSV" class="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span class="text-[10px] font-semibold">Export All</span>
          </button>
        </div>

      </main>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

definePageMeta({ layout: false })

const supabase    = useSupabaseClient()
const config      = useRuntimeConfig()
const adminEmail = config.public.adminEmail ?? ''
const sidebarOpen = ref(false)
const search      = ref('')
const currentPage = ref(1)
const pageSize    = 10
const isLoading   = ref(true)
const openMenu    = ref<string | null>(null)

interface Student {
  id:              string
  email:           string
  created_at:      string
  enrollmentCount: number
}

const students = ref<Student[]>([])

// ✅ Redirect non-admins
onMounted(async () => {
  const result = await $fetch<{ isAdmin: boolean }>('/api/admin-check')
  if (!result.isAdmin) {
    await navigateTo('/admin/login')
    return
  }
  await loadStudents()
})

async function loadStudents() {
  isLoading.value = true
  try {
    const data = await $fetch<Student[]>('/api/admin/students')
    students.value = data ?? []
  } catch (e) {
    console.error('Failed to load students:', e)
  }
  isLoading.value = false
}

const filteredStudents = computed(() => {
  if (!search.value.trim()) return students.value
  const q = search.value.toLowerCase()
  return students.value.filter(s => s.email.toLowerCase().includes(q))
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredStudents.value.length / pageSize)))

const paginatedStudents = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredStudents.value.slice(start, start + pageSize)
})

const totalStudents = computed(() => students.value.length)
const newThisMonth  = computed(() => {
  const start = new Date()
  start.setDate(1)
  start.setHours(0, 0, 0, 0)
  return students.value.filter(s => new Date(s.created_at) >= start).length
})
const totalEarnings = ref(0)

onMounted(async () => {
  try {
    const stats = await $fetch<{ totalEarnings: number }>('/api/admin/stats')
    totalEarnings.value = stats.totalEarnings ?? 0
  } catch {}
})

function toggleMenu(id: string) {
  openMenu.value = openMenu.value === id ? null : id
}

function getAvatarColor(email: string): string {
  const colors = ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#EF4444', '#6366F1']
  let hash = 0
  for (let i = 0; i < email.length; i++) hash = email.charCodeAt(i) + ((hash << 5) - hash)
  const avatarColor = colors[Math.abs(hash) % colors.length] || '#3B82F6'
  return avatarColor
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-NG', {
    day: 'numeric', month: 'short', year: 'numeric'
  })
}

function exportCSV() {
  const rows = [
    ['Name', 'Email', 'Enrollments', 'Joined', 'Status'],
    ...students.value.map(s => [
      s.email.split('@')[0],
      s.email,
      String(s.enrollmentCount),
      formatDate(s.created_at),
      s.enrollmentCount > 0 ? 'Active' : 'Inactive',
    ])
  ]
  const csv  = rows.map(r => r.join(',')).join('\n')
  const blob = new Blob([csv], { type: 'text/csv' })
  const url  = URL.createObjectURL(blob)
  const a    = document.createElement('a')
  a.href     = url
  a.download = 'students.csv'
  a.click()
  URL.revokeObjectURL(url)
}

async function handleLogout() {
  await $fetch('/api/admin-logout', { method: 'POST' })
  await supabase.auth.signOut()
  await navigateTo('/admin/login')
}
</script>