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
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
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
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-50 text-blue-600 text-sm font-semibold">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
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
          <h1 class="text-sm font-semibold text-gray-800">Community Management</h1>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
            {{ adminEmail?.charAt(0).toUpperCase() ?? 'A' }}
          </div>
          <button @click="handleLogout"
            class="text-red-500 text-xs font-semibold px-3 py-1.5 hover:text-red-600 transition-colors">
            Log out
          </button>
        </div>
      </header>

      <!-- PAGE BODY -->
      <main class="flex-1 px-4 md:px-6 py-6">

        <!-- Header -->
        <div class="flex items-center justify-between mb-6">
          <div>
            <h2 class="text-2xl font-extrabold text-gray-900">Community Posts</h2>
            <p class="text-sm text-gray-500 mt-1">Moderate discussions from your students and educators.</p>
          </div>
          <!-- Live stats -->
          <div class="hidden sm:flex items-center gap-4">
            <div class="text-center">
              <p class="text-2xl font-extrabold text-gray-900">{{ posts.length }}</p>
              <p class="text-xs text-gray-400">Total Posts</p>
            </div>
            <div class="text-center">
              <p class="text-2xl font-extrabold text-blue-600">{{ totalReplies }}</p>
              <p class="text-xs text-gray-400">Total Replies</p>
            </div>
          </div>
        </div>

        <!-- Search -->
        <div class="relative mb-6">
          <div class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search posts by content or author..."
            class="w-full bg-white border border-gray-200 pl-11 pr-4 py-3 rounded-2xl text-sm focus:outline-none focus:border-blue-300"
          />
        </div>

        <!-- Loading -->
        <div v-if="isLoading" class="flex justify-center py-20">
          <div class="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"/>
        </div>

        <!-- Empty -->
        <div v-else-if="filteredPosts.length === 0" class="text-center py-20 text-gray-400 text-sm">
          {{ searchQuery ? 'No posts match your search.' : 'No community posts yet.' }}
        </div>

        <!-- Posts -->
        <div v-else class="space-y-4 mb-8">
          <div
            v-for="post in filteredPosts"
            :key="post.id"
            class="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="flex justify-between items-start gap-4">

              <!-- Left: author + content -->
              <div class="flex items-start gap-3 flex-1 min-w-0">
                <div
                  class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  :style="{ backgroundColor: stringToColor(post.user_email) }"
                >
                  {{ post.user_email?.charAt(0).toUpperCase() }}
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 flex-wrap mb-1">
                    <p class="font-semibold text-gray-900 text-sm">{{ post.user_email?.split('@')[0] }}</p>
                    <span class="text-xs text-gray-400">{{ formatTime(post.created_at) }}</span>
                  </div>
                  <p class="text-sm text-gray-700 leading-relaxed">{{ post.text }}</p>

                  <!-- Stats -->
                  <div class="flex gap-5 mt-3 text-xs text-gray-400">
                    <div class="flex items-center gap-1">
                      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                      {{ post.likes }} likes
                    </div>
                    <div class="flex items-center gap-1">
                      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                      </svg>
                      {{ post.reply_count }} replies
                    </div>
                    <div class="flex items-center gap-1 text-gray-300">
                      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                      {{ formatTime(post.created_at) }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right: Delete button -->
              <button
                @click="deletePost(post)"
                :disabled="deletingId === post.id"
                class="flex-shrink-0 flex items-center gap-1.5 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 text-xs font-semibold px-3 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg v-if="deletingId === post.id" class="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                </svg>
                <svg v-else class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"/>
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                  <path d="M10 11v6"/><path d="M14 11v6"/>
                  <path d="M9 6V4h6v2"/>
                </svg>
                {{ deletingId === post.id ? 'Deleting...' : 'Delete' }}
              </button>

            </div>
          </div>
        </div>

      </main>
    </div>

    <!-- Delete confirm modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="confirmPost" class="fixed inset-0 bg-black/40 z-[80] flex items-center justify-center px-4">
          <div class="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm">
            <h3 class="font-bold text-gray-900 mb-2">Delete this post?</h3>
            <p class="text-sm text-gray-500 mb-1">Posted by <strong>{{ confirmPost.user_email?.split('@')[0] }}</strong>:</p>
            <p class="text-sm text-gray-700 bg-gray-50 rounded-lg p-3 mb-5 line-clamp-3">{{ confirmPost.text }}</p>
            <p class="text-xs text-red-500 mb-5">This will also delete all replies to this post. This cannot be undone.</p>
            <div class="flex gap-3">
              <button
                @click="confirmPost = null"
                class="flex-1 border border-gray-200 text-gray-700 text-sm font-semibold py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                @click="confirmDelete"
                :disabled="deletingId !== null"
                class="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors disabled:opacity-60"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

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
const deletingId   = ref<string | null>(null)
const confirmPost  = ref<Post | null>(null)

interface Post {
  id:          string
  user_id:     string
  user_email:  string
  text:        string
  likes:       number
  reply_count: number
  created_at:  string
}

const posts = ref<Post[]>([])

const totalReplies = computed(() =>
  posts.value.reduce((sum, p) => sum + p.reply_count, 0)
)

const filteredPosts = computed(() => {
  if (!searchQuery.value.trim()) return posts.value
  const q = searchQuery.value.toLowerCase()
  return posts.value.filter(p =>
    p.text.toLowerCase().includes(q) ||
    p.user_email.toLowerCase().includes(q)
  )
})

// ── Helpers ────────────────────────────
function stringToColor(str: string = ''): string {
  const colors = ['#4f46e5','#0ea5e9','#10b981','#f59e0b','#ef4444','#8b5cf6','#ec4899']
  let hash = 0
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash)
  return colors[Math.abs(hash) % colors.length] ?? '#4f46e5'
}

function formatTime(dateStr: string): string {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000)
  if (diff < 60)        return 'Just now'
  if (diff < 3600)      return `${Math.floor(diff / 60)}m ago`
  if (diff < 86400)     return `${Math.floor(diff / 3600)}h ago`
  if (diff < 86400 * 7) return `${Math.floor(diff / 86400)}d ago`
  return new Date(dateStr).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })
}

// ── Fetch posts with reply counts ──────
onMounted(async () => {
  await loadPosts()
  isLoading.value = false
})

async function loadPosts() {
  // Fetch all posts
  const { data: postsData, error } = await supabase
    .from('community_posts')
    .select('id, user_id, user_email, text, likes, created_at')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Posts fetch error:', error.message)
    return
  }

  if (!postsData || postsData.length === 0) {
    posts.value = []
    return
  }

  // Fetch reply counts for all posts
  const postIds = postsData.map((p: any) => p.id)

  const { data: repliesData } = await supabase
    .from('post_replies')
    .select('post_id')
    .in('post_id', postIds)

  // Count replies per post
  const replyCountMap: Record<string, number> = {}
  for (const r of (repliesData ?? [])) {
    const pid = String(r.post_id)
    replyCountMap[pid] = (replyCountMap[pid] ?? 0) + 1
  }

  posts.value = postsData.map((p: any) => ({
    id:          String(p.id),
    user_id:     String(p.user_id),
    user_email:  String(p.user_email ?? ''),
    text:        String(p.text ?? ''),
    likes:       Number(p.likes ?? 0),
    reply_count: replyCountMap[String(p.id)] ?? 0,
    created_at:  String(p.created_at),
  }))
}

// ── Delete flow — confirm first ────────
function deletePost(post: Post) {
  confirmPost.value = post
}

async function confirmDelete() {
  if (!confirmPost.value) return
  const post = confirmPost.value
  deletingId.value = post.id

  // ✅ Delete replies first (cascade may handle this but let's be explicit)
  await supabase
    .from('post_replies')
    .delete()
    .eq('post_id', post.id)

  // ✅ Delete the post
  const { error } = await supabase
    .from('community_posts')
    .delete()
    .eq('id', post.id)

  if (error) {
    console.error('Delete failed:', error.message)
  } else {
    // Remove from local list immediately
    posts.value = posts.value.filter(p => p.id !== post.id)
  }

  deletingId.value  = null
  confirmPost.value = null
}

async function handleLogout() {
  await $fetch('/api/admin-logout', { method: 'POST' })
  await useSupabaseClient().auth.signOut()
  await navigateTo('/admin/login')
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>