<template>
<div class="min-h-screen bg-[#F9FAFB] flex flex-col">

<!-- ===================================
NAVBAR
=================================== -->
<header class="bg-white border-b border-gray-200 sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-6 h-16 flex items-center">

    <!-- Logo -->
    <NuxtLink to="/" class="flex items-center gap-2">
      <div class="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="2" width="5" height="5" rx="1" fill="white"/>
          <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
          <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
          <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.4"/>
        </svg>
      </div>
      <span class="text-blue-600 font-bold text-sm">CoursePlatform</span>
    </NuxtLink>

    <!-- Desktop Nav -->
    <nav class="hidden md:flex items-center gap-8 ml-8">
      <NuxtLink to="/dashboard" class="text-gray-500 text-sm hover:text-gray-800">Dashboard</NuxtLink>
      <NuxtLink to="/courses" class="text-gray-500 text-sm hover:text-gray-800">Courses</NuxtLink>
      <NuxtLink to="/students" class="text-gray-500 text-sm hover:text-gray-800">Students</NuxtLink>
      <!-- <NuxtLink to="/earnings" class="text-gray-500 text-sm hover:text-gray-800">Earnings</NuxtLink> -->
    </nav>

    <!-- Right -->
    <div class="ml-auto flex items-center gap-4">
      <!-- Search -->
      <!-- <div class="hidden md:flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-1.5 bg-gray-50 w-52"> -->
        <!-- <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input type="text" placeholder="Search courses..." class="text-xs text-gray-500 outline-none bg-transparent w-full"/> -->
      <!-- </div> -->
      <!-- Bell -->
      <button class="text-gray-400 hover:text-gray-600">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
      </button>
      <!-- Settings -->
      <button class="text-gray-400 hover:text-gray-600">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      </button>
      <!-- Avatar -->
      <img src="https://i.pravatar.cc/32?img=5" class="w-8 h-8 rounded-full cursor-pointer"/>
      <!-- Mobile toggle -->
      <button class="md:hidden text-gray-500" @click="mobileOpen = !mobileOpen">☰</button>
    </div>

  </div>

  <!-- Mobile Nav -->
  <div v-if="mobileOpen" class="md:hidden border-t border-gray-200 bg-white px-6 py-4">
    <nav class="flex flex-col gap-4 text-sm">
      <NuxtLink to="/dashboard">Dashboard</NuxtLink>
      <NuxtLink to="/courses" class="text-blue-600 font-semibold">Courses</NuxtLink>
      <NuxtLink to="/students">Students</NuxtLink>
      <!-- <NuxtLink to="/earnings">Earnings</NuxtLink> -->
    </nav>
  </div>
</header>

<!-- ===================================
MAIN
=================================== -->
<main class="flex-1 max-w-7xl mx-auto w-full px-6 py-8">

  <!-- Page Header -->
  <div class="flex items-center justify-between mb-6">
    <div>
      <h1 class="text-2xl font-bold text-gray-900">Our Courses</h1>
      <p class="text-gray-400 text-sm mt-1">Everything you need to teach online and earn</p>
    </div>
    <!-- <button class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow transition-colors duration-200">
      + Create New Course
    </button> -->
  </div>

  <!-- Tabs -->
  <div class="flex gap-6 border-b border-gray-200 mb-8 text-xs font-semibold uppercase tracking-wide">
    <button
      v-for="tab in tabs"
      :key="tab"
      @click="activeTab = tab"
      :class="[
        'pb-3 transition-colors duration-200',
        activeTab === tab
          ? 'text-blue-600 border-b-2 border-blue-600'
          : 'text-gray-400 hover:text-gray-600'
      ]"
    >
      {{ tab }}
    </button>
  </div>

  <!-- Course Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="course in filteredCourses"
      :key="course.id"
      class="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer"
    >
      <img :src="course.image" :alt="course.title" class="w-full h-40 object-cover" loading="lazy"/>

      <div class="p-5">
        <!-- Badges -->
        <div class="flex gap-2 mb-3">
          <span
            v-for="badge in course.badges"
            :key="badge.label"
            :class="`text-[10px] font-semibold px-2.5 py-1 rounded uppercase tracking-wide ${badge.color}`"
          >
            {{ badge.label }}
          </span>
        </div>
        <!-- Title -->
        <h3 class="font-semibold text-sm text-gray-900 mb-2 leading-snug">{{ course.title }}</h3>
        <!-- Description -->
        <p class="text-gray-400 text-xs mb-4 line-clamp-2 leading-relaxed">{{ course.description }}</p>
        <!-- Price + Enroll -->
        <div class="flex items-center justify-between">
          <span class="text-gray-900 font-bold text-sm">₦{{ course.price.toLocaleString() }}</span>
          <button class="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-1.5 rounded-lg transition-colors duration-200">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Pagination -->
  <div class="flex justify-center items-center gap-2 mt-10 text-sm">
    <button class="w-8 h-8 flex items-center justify-center text-gray-400 border border-gray-200 rounded hover:bg-gray-100">‹</button>
    <button
      v-for="page in [1, 2, 3]"
      :key="page"
      @click="currentPage = page"
      :class="[
        'w-8 h-8 flex items-center justify-center rounded font-medium transition-colors',
        currentPage === page ? 'bg-blue-600 text-white' : 'border border-gray-200 text-gray-500 hover:bg-gray-100'
      ]"
    >
      {{ page }}
    </button>
    <span class="text-gray-400 px-1">...</span>
    <button class="w-8 h-8 flex items-center justify-center border border-gray-200 rounded text-gray-500 hover:bg-gray-100">12</button>
    <button class="w-8 h-8 flex items-center justify-center text-gray-400 border border-gray-200 rounded hover:bg-gray-100">›</button>
  </div>

</main>

<!-- Footer -->
<footer class="text-center py-6 text-xs text-gray-400">
  © 2024 CoursePlatform. All rights reserved.
</footer>

</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({ layout: false })

// ── Types ──────────────────────────────────────────
interface Badge {
  label: string
  color: string
}

interface Course {
  id: number
  title: string
  description: string
  price: number
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  image: string
  badges: Badge[]
}

// ── State ──────────────────────────────────────────
const mobileOpen = ref(false)
const tabs = ['All', 'Beginner', 'Intermediate', 'Advanced']
const activeTab = ref('All')
const currentPage = ref(1)

// ── Data ───────────────────────────────────────────
const courses: Course[] = [
  {
    id: 1,
    title: 'Digital Marketing Masterclass',
    description: 'Master SEO, SEM, and social media advertising. Learn to scale brands with data-driven strategies.',
    price: 5000,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    badges: [
      { label: 'Marketing', color: 'bg-green-100 text-green-700' },
      { label: 'Bestseller', color: 'bg-yellow-100 text-yellow-700' },
    ]
  },
  {
    id: 2,
    title: 'Advanced Python for Data Science',
    description: 'Deep dive into NumPy, Pandas and Scikit-learn. Build predictive models from scratch.',
    price: 4500,
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    badges: [
      { label: 'Data Science', color: 'bg-blue-100 text-blue-700' },
    ]
  },
  {
    id: 3,
    title: 'UI/UX Design Essentials',
    description: 'Learn Figma and user-centric design principles. Create stunning prototypes that convert.',
    price: 10000,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    badges: [
      { label: 'Design', color: 'bg-purple-100 text-purple-700' },
    ]
  },
  {
    id: 4,
    title: 'Full-stack Web Development',
    description: 'Build robust apps with React and Nodejs. Comprehensive guide from frontend to backend.',
    price: 10000,
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    badges: [
      { label: 'Development', color: 'bg-teal-100 text-teal-700' },
    ]
  },
  {
    id: 5,
    title: 'Business Analytics 101',
    description: 'Data-driven decision making for managers. Learn to interpret KPIs and forecast growth.',
    price: 2000,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    badges: [
      { label: 'Business', color: 'bg-orange-100 text-orange-700' },
    ]
  },
  {
    id: 6,
    title: 'Social Media Strategy',
    description: 'Scale your brand presence across platforms. Content creation and community management.',
    price: 1500,
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
    badges: [
      { label: 'Social Media', color: 'bg-rose-100 text-rose-700' },
    ]
  },
]

// ── Computed ───────────────────────────────────────
const filteredCourses = computed((): Course[] => {
  if (activeTab.value === 'All') return courses
  return courses.filter(c => c.level === activeTab.value)
})
</script>