<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">

    <!-- ══════════════════════════════
         NAVBAR
    ══════════════════════════════ -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50">

      <!-- Main navbar row -->
      <div class="max-w-2xl mx-auto px-6 h-12 flex items-center justify-between">

        <!-- Left: Logo -->
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
          <span class="font-bold text-gray-900 text-sm">DigitalEd Hub Community</span>
        </div>

        <!-- Right -->
        <div class="flex items-center gap-4">

          <!-- Desktop Nav links -->
          <nav class="hidden md:flex items-center gap-5">
            <NuxtLink to="/community" class="text-blue-600 text-sm font-semibold">Home</NuxtLink>
            <NuxtLink to="/community/discussion" class="text-gray-500 text-sm hover:text-gray-800 transition-colors">Discussion</NuxtLink>
            <NuxtLink to="/community/members" class="text-gray-500 text-sm hover:text-gray-800 transition-colors">Members</NuxtLink>
          </nav>

          <!-- Avatar (always visible) -->
          <img src="https://i.pravatar.cc/32?img=5" class="w-7 h-7 rounded-full cursor-pointer" />

          <!-- Mobile: Hamburger button -->
          <button
            class="md:hidden text-gray-500 hover:text-gray-800 transition-colors"
            @click="mobileOpen = !mobileOpen"
            aria-label="Toggle menu"
          >
            <!-- Hamburger icon -->
            <svg v-if="!mobileOpen" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
            <!-- X close icon -->
            <svg v-else class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

        </div>
      </div>

      <!-- Mobile dropdown menu -->
      <div
        v-if="mobileOpen"
        class="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4"
      >
        <NuxtLink
          to="/community"
          @click="mobileOpen = false"
          class="text-blue-600 text-sm font-semibold"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/community/discussion"
          @click="mobileOpen = false"
          class="text-gray-600 text-sm hover:text-gray-900 transition-colors"
        >
          Discussion
        </NuxtLink>
        <NuxtLink
          to="/community/members"
          @click="mobileOpen = false"
          class="text-gray-600 text-sm hover:text-gray-900 transition-colors"
        >
          Members
        </NuxtLink>
      </div>

    </header>

    <!-- ══════════════════════════════
         MAIN FEED
    ══════════════════════════════ -->
    <main class="flex-1 max-w-2xl mx-auto w-full px-6 py-6 flex flex-col gap-4">

     <!-- Composer Box -->
<div class="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
  <div class="flex items-start gap-3 mb-3">
    <img src="https://i.pravatar.cc/36?img=5" class="w-9 h-9 rounded-full flex-shrink-0 mt-1" />
    <textarea
      v-model="newPost"
      placeholder="Share something with the community..."
      rows="3"
      class="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200"
    />
  </div>
  <div class="flex justify-end">
    <button
      @click="submitPost"
      :disabled="!newPost.trim()"
      class="bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors duration-200"
    >
      Post
    </button>
  </div>
</div>

      <!-- Feed Posts -->
      <div
        v-for="post in posts"
        :key="post.id"
        class="bg-white rounded-xl border border-gray-200 shadow-sm p-5"
      >
        <!-- Post Header -->
        <div class="flex items-start gap-3 mb-3">
          <img :src="post.avatar" :alt="post.name" class="w-9 h-9 rounded-full flex-shrink-0 object-cover" />
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-sm font-bold text-gray-900">{{ post.name }}</span>
              <span
                class="text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider"
                :class="post.badgeClass"
              >
                {{ post.badge }}
              </span>
            </div>
            <p class="text-xs text-gray-400 mt-0.5">{{ post.time }}</p>
          </div>
        </div>

        <!-- Post Text -->
        <p class="text-sm text-gray-600 leading-relaxed mb-4">{{ post.text }}</p>

        <!-- Post Actions -->
        <div class="flex items-center gap-5 pt-3 border-t border-gray-100">
          <button class="flex items-center gap-1.5 text-gray-400 hover:text-rose-500 transition-colors duration-200">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span class="text-xs">{{ post.likes }} Likes</span>
          </button>

          <button class="flex items-center gap-1.5 text-gray-400 hover:text-blue-500 transition-colors duration-200">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span class="text-xs">{{ post.comments }} Comments</span>
          </button>
        </div>
      </div>

    </main>

    <!-- Footer -->
    <footer class="text-center py-5">
      <p class="text-gray-400 text-xs">© 2026 DigitalEd Hub. The Educators' Community.</p>
    </footer>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({ layout: false })

const mobileOpen = ref(false)

interface Post {
  id: number
  name: string
  avatar: string
  badge: string
  badgeClass: string
  time: string
  text: string
  likes: number
  comments: number
}

const posts: Post[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    avatar: 'https://i.pravatar.cc/36?img=47',
    badge: 'Mentor',
    badgeClass: 'bg-blue-100 text-blue-600',
    time: '7 hours ago',
    text: "Has anyone tried the new collaborative learning modules? I'm seeing great engagement from my students this week. The peer-to-peer interactions have improved significantly since we implemented the structured feedback loops.",
    likes: 12,
    comments: 6,
  },
  {
    id: 2,
    name: 'Michael Chan',
    avatar: 'https://i.pravatar.cc/36?img=12',
    badge: 'Educator',
    badgeClass: 'bg-gray-100 text-gray-600',
    time: '5 hours ago',
    text: 'The best way to structure your first peer-review session is to provide clear rubrics beforehand. It saves so much time and ensures students are focused on constructive criticism rather than just correcting grammar or surface-level errors.',
    likes: 8,
    comments: 2,
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    avatar: 'https://i.pravatar.cc/36?img=23',
    badge: 'Educator',
    badgeClass: 'bg-gray-100 text-gray-600',
    time: '1 day ago',
    text: "Looking for recommendations on open-source textbooks for advanced biology. Our current curriculum is a bit outdated and we'd love to move toward more dynamic, open resources that the students can access anywhere. Any suggestions from the group?",
    likes: 24,
    comments: 15,
  },
]


const newPost = ref('')

function submitPost() {
  if (!newPost.value.trim()) return

  posts.unshift({
    id: Date.now(),
    name: 'You',
    avatar: 'https://i.pravatar.cc/36?img=5',
    badge: 'Educator',
    badgeClass: 'bg-gray-100 text-gray-600',
    time: 'Just now',
    text: newPost.value.trim(),
    likes: 0,
    comments: 0,
  })

  newPost.value = ''  // clear after posting
}

</script>