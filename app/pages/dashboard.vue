<template>
  <div class="min-h-screen bg-gray-100 flex flex-col font-sans">

    <!-- Navbar -->
    <nav class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between py-3">

        <!-- Logo -->
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
            <span class="font-bold text-gray-900 text-sm sm:inline">
              DigitalEd Hub
            </span>
          </NuxtLink>

          <!-- Search -->
          <div class="hidden sm:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 w-48">
            <input
              type="text"
              placeholder="Search courses..."
              class="bg-transparent border-none outline-none text-xs text-gray-500 w-full"
            />
          </div>
        </div>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-4">
          <NuxtLink to="/dashboard" class="text-sm font-medium text-gray-700 hover:text-blue-600">
            My Courses
          </NuxtLink>
          <NuxtLink to="/community" class="text-sm font-medium text-gray-700 hover:text-blue-600">
            Community
          </NuxtLink>
          <button class="bg-blue-600 text-white text-sm font-semibold px-4 py-1.5 rounded-lg hover:bg-blue-700">
            Profile
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isOpen = !isOpen"
          class="md:hidden text-gray-700"
        >
          ☰
        </button>

      </div>

      <!-- Mobile Menu -->
      <div v-show="isOpen" class="md:hidden border-t border-gray-100 px-4 py-3 space-y-3">
        <NuxtLink to="/dashboard" class="block text-sm text-gray-700">
          My Courses
        </NuxtLink>
        <NuxtLink to="/community" class="block text-sm text-gray-700">
          Community
        </NuxtLink>
      </div>
    </nav>

    <!-- Dashboard Content -->
    <main class="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6">

      <!-- Courses -->
      <section class="mb-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-sm font-bold text-gray-900 sm:text-base">
            My Enrolled Courses
          </h2>
        </div>

        <div class="flex flex-col gap-4 sm:grid sm:grid-cols-2 xl:grid-cols-3">
          <div
            v-for="course in courses"
            :key="course.id"
            class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
          >
            <img :src="course.image" class="w-full h-36 object-cover" />

            <div class="p-4">
              <h3 class="text-sm font-bold text-gray-900 mb-1">
                {{ course.title }}
              </h3>

              <p class="text-xs text-gray-500 mb-3">
                Instructor: {{ course.instructor }}
              </p>

              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-500">Progress</span>

                <div class="flex-1 h-1.5 bg-gray-200 rounded-full">
                  <div
                    class="h-full bg-blue-600 rounded-full"
                    :style="{ width: course.progress + '%' }"
                  />
                </div>

                <span class="text-xs font-semibold text-gray-700">
                  {{ course.progress }}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Feed + Resources -->
      <div class="flex flex-col gap-4 xl:grid xl:grid-cols-[1fr_300px]">

        <!-- Community Feed -->
        <section class="bg-white rounded-xl border border-gray-200 p-5">
          <h2 class="text-sm font-bold text-gray-900 mb-4">
            Community Feed
          </h2>

          <div
            v-for="post in feedPosts"
            :key="post.id"
            class="flex gap-3 pb-4 border-b border-gray-100 last:border-none"
          >
            <div
              class="w-9 h-9 rounded-full flex items-center justify-center text-xs text-white font-bold"
              :style="{ backgroundColor: post.avatarColor }"
            >
              {{ post.initials }}
            </div>

            <div>
              <div class="text-sm font-semibold text-gray-900">
                {{ post.name }}
              </div>

              <p class="text-xs text-gray-500 mb-2">
                {{ post.text }}
              </p>

              <div class="text-xs text-gray-500">
                👍 {{ post.likes }} • 💬 {{ post.comments }}
              </div>
            </div>
          </div>
        </section>

        <!-- Resources -->
        <section class="bg-white rounded-xl border border-gray-200 p-5">
          <h2 class="text-sm font-bold text-gray-900 mb-4">
            Resources
          </h2>

          <div
            v-for="resource in resources"
            :key="resource.id"
            class="flex items-center gap-3 mb-3"
          >
            <div class="w-9 h-9 rounded-lg flex items-center justify-center">
              {{ resource.icon }}
            </div>

            <div class="flex-1">
              <p class="text-xs font-semibold text-gray-900">
                {{ resource.name }}
              </p>
              <p class="text-xs text-gray-400">
                {{ resource.meta }}
              </p>
            </div>
          </div>

          <button class="w-full border border-gray-300 rounded-lg py-2 text-xs font-semibold">
            Browse Library
          </button>
        </section>

      </div>

    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200 text-center py-4">
      <p class="text-xs text-gray-400">
        © 2024 Student Dashboard MVP
      </p>
    </footer>

  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})
const isOpen = ref(false)

const courses = [
  {
    id: 1,
    title: "Advanced Data Science",
    instructor: "Dr. Sarah Chen",
    progress: 65,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400"
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    instructor: "Alex Rivera",
    progress: 40,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400"
  },
  {
    id: 3,
    title: "Cybersecurity Fundamentals",
    instructor: "James Wilson",
    progress: 90,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400"
  }
]

const feedPosts = [
  {
    id: 1,
    initials: "JD",
    name: "Jane Doe",
    text: "New practice problems uploaded for the midterms.",
    likes: 24,
    comments: 8,
    avatarColor: "#4f46e5"
  },
  {
    id: 2,
    initials: "MR",
    name: "Mark Robinson",
    text: "Great job on the group projects this week!",
    likes: 12,
    comments: 3,
    avatarColor: "#0ea5e9"
  }
]

const resources = [
  { id: 1, icon: "📄", name: "Lesson Plan Template", meta: "PDF • 2.1MB" },
  { id: 2, icon: "📊", name: "Grading Rubric", meta: "XLSX • 203KB" },
  { id: 3, icon: "📋", name: "Study Guide", meta: "DOCX • 3.1MB" }
]
</script>