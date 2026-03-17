<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">

    <!-- NAVBAR -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-2xl mx-auto px-6 h-12 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
          <span class="font-bold text-gray-900 text-sm">DigitalEd Hub Community</span>
        </div>

        <div class="flex items-center gap-4">
          <nav class="hidden md:flex items-center gap-5">
            <NuxtLink to="/community" class="text-blue-600 text-sm font-semibold">Home</NuxtLink>
            <NuxtLink to="/community/discussion" class="text-gray-500 text-sm hover:text-gray-800 transition-colors">Discussion</NuxtLink>
            <NuxtLink to="/community/members" class="text-gray-500 text-sm hover:text-gray-800 transition-colors">Members</NuxtLink>
          </nav>
          <img src="https://i.pravatar.cc/32?img=5" class="w-7 h-7 rounded-full cursor-pointer"/>
          <button class="md:hidden text-gray-500" @click="mobileOpen = !mobileOpen">
            <svg v-if="!mobileOpen" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
            <svg v-else class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      <div v-if="mobileOpen" class="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
        <NuxtLink to="/community" @click="mobileOpen = false" class="text-blue-600 text-sm font-semibold">Home</NuxtLink>
        <NuxtLink to="/community/discussion" @click="mobileOpen = false" class="text-gray-600 text-sm">Discussion</NuxtLink>
        <NuxtLink to="/community/members" @click="mobileOpen = false" class="text-gray-600 text-sm">Members</NuxtLink>
      </div>
    </header>

    <!-- MAIN FEED -->
    <main class="flex-1 max-w-2xl mx-auto w-full px-6 py-6 flex flex-col gap-4">

      <!-- Composer -->
      <div class="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
        <div class="flex items-start gap-3 mb-3">
          <img src="https://i.pravatar.cc/36?img=5" class="w-9 h-9 rounded-full flex-shrink-0 mt-1"/>
          <textarea
            v-model="newPost"
            placeholder="Share something with the community..."
            rows="3"
            class="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all"
          />
        </div>
        <div class="flex justify-end">
          <button
            @click="submitPost"
            :disabled="!newPost.trim() || isPosting"
            class="bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors flex items-center gap-2"
          >
            <svg v-if="isPosting" class="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
            </svg>
            {{ isPosting ? 'Posting...' : 'Post' }}
          </button>
        </div>
      </div>

      <!-- Loading -->
      <div v-if="isLoading" class="flex justify-center py-10">
        <div class="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>

      <!-- Posts -->
      <div
        v-for="post in posts"
        :key="post.id"
        class="bg-white rounded-xl border border-gray-200 shadow-sm p-5 transition-all"
      >
        <!-- Header -->
        <div class="flex items-start gap-3 mb-3">
          <img :src="post.avatar" class="w-9 h-9 rounded-full flex-shrink-0 object-cover"/>
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-sm font-bold text-gray-900">{{ post.name }}</span>
              <span class="text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider" :class="post.badgeClass">
                {{ post.badge }}
              </span>
            </div>
            <!-- Live updating time -->
            <p class="text-xs text-gray-400 mt-0.5">{{ formatTime(post.created_at) }}</p>
          </div>
        </div>

        <!-- Text -->
        <p class="text-sm text-gray-600 leading-relaxed mb-4">{{ post.text }}</p>

        <!-- Actions -->
        <div class="flex items-center gap-5 pt-3 border-t border-gray-100">

          <!-- Like button — reactive -->
          <button
            @click="toggleLike(post)"
            class="flex items-center gap-1.5 transition-colors duration-200 group"
            :class="post.likedByMe ? 'text-rose-500' : 'text-gray-400 hover:text-rose-500'"
          >
            <svg
              class="w-4 h-4 transition-transform duration-150 group-active:scale-125"
              viewBox="0 0 24 24"
              :fill="post.likedByMe ? 'currentColor' : 'none'"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span class="text-xs font-medium tabular-nums">{{ post.likes }}</span>
          </button>

          <!-- Reply button — toggles reply box -->
          <button
            @click="toggleReply(post.id)"
            class="flex items-center gap-1.5 transition-colors duration-200"
            :class="activeReply === post.id ? 'text-blue-600' : 'text-gray-400 hover:text-blue-500'"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span class="text-xs font-medium tabular-nums">{{ post.comments }}</span>
          </button>

        </div>

        <!-- Reply box — appears when clicked -->
        <div v-if="activeReply === post.id" class="mt-4 flex flex-col gap-2">

          <!-- Existing replies -->
          <div
            v-for="reply in post.replies"
            :key="reply.id"
            class="flex gap-2.5 bg-gray-50 rounded-lg px-3 py-2.5"
          >
            <img :src="reply.avatar" class="w-7 h-7 rounded-full flex-shrink-0 object-cover"/>
            <div>
              <p class="text-xs font-semibold text-gray-800">{{ reply.name }}</p>
              <p class="text-xs text-gray-500 mt-0.5">{{ reply.text }}</p>
              <p class="text-[10px] text-gray-400 mt-1">{{ formatTime(reply.created_at) }}</p>
            </div>
          </div>

          <!-- New reply input -->
          <div class="flex gap-2 items-start mt-1">
            <img src="https://i.pravatar.cc/28?img=5" class="w-7 h-7 rounded-full flex-shrink-0 mt-1"/>
            <input
              v-model="replyText"
              placeholder="Write a reply..."
              class="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-blue-500 transition"
              @keydown.enter="submitReply(post)"
            />
            <button
              @click="submitReply(post)"
              :disabled="!replyText.trim()"
              class="bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
            >
              Send
            </button>
          </div>
        </div>

      </div>

    </main>

    <footer class="text-center py-5">
      <p class="text-gray-400 text-xs">© 2026 DigitalEd Hub. The Educators' Community.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

definePageMeta({ layout: false })

// ── Types ──────────────────────────────
interface Reply {
  id: string
  name: string
  avatar: string
  text: string
  created_at: string
}

interface Post {
  id: string
  name: string
  avatar: string
  badge: string
  badgeClass: string
  text: string
  likes: number
  comments: number
  created_at: string
  likedByMe: boolean
  replies: Reply[]
  user_id?: string
}

// ── State ──────────────────────────────
const mobileOpen  = ref(false)
const newPost     = ref('')
const replyText   = ref('')
const isPosting   = ref(false)
const isLoading   = ref(true)
const activeReply = ref<string | null>(null)
const posts       = ref<Post[]>([])

// ── Auth ───────────────────────────────
const supabase = useSupabaseClient()
const user     = useSupabaseUser()

// ── Seed posts (always visible, static) ──


// ── Load posts from Supabase ────────────

onMounted(async () => {
  try {
    const { data } = await supabase
      .from('community_posts')
      .select('*')
      .order('created_at', { ascending: false })

    posts.value = (data ?? []).map((p: any) => ({
      id:         p.id,
      name:       p.user_email?.split('@')[0] ?? 'Educator',
      avatar:     `https://i.pravatar.cc/36?u=${p.user_id}`,
      badge:      'Educator',
      badgeClass: 'bg-gray-100 text-gray-600',
      text:       p.text,
      likes:      p.likes ?? 0,
      comments:   p.comments ?? 0,
      created_at: p.created_at,
      likedByMe:  false,
      replies:    [],
      user_id:    p.user_id,
    }))
  } catch {
    posts.value = []
  }

  isLoading.value = false
})

// ── Submit new post ─────────────────────
async function submitPost() {
  if (!newPost.value.trim() || isPosting.value) return
  isPosting.value = true

  const text = newPost.value.trim()

  try {
    if (user.value) {
      // Save to Supabase
      const { data, error } = await supabase.from('community_posts').insert({
        user_id:    user.value.id,
        user_email: user.value.email,
        text,
        likes:    0,
        comments: 0,
      }).select().single()

      if (!error && data) {
        const newEntry: Post = {
          id:         data.id,
          name:       user.value.email?.split('@')[0] ?? 'You',
          avatar:     `https://i.pravatar.cc/36?u=${user.value.id}`,
          badge:      'Educator',
          badgeClass: 'bg-gray-100 text-gray-600',
          text:       data.text,
          likes:      0,
          comments:   0,
          created_at: data.created_at,
          likedByMe:  false,
          replies:    [],
          user_id:    user.value.id,
        }
        posts.value.unshift(newEntry)
      }
    } else {
      // Not logged in — add locally only (won't persist)
      posts.value.unshift({
        id:         `local-${Date.now()}`,
        name:       'You',
        avatar:     'https://i.pravatar.cc/36?img=5',
        badge:      'Educator',
        badgeClass: 'bg-gray-100 text-gray-600',
        text,
        likes:      0,
        comments:   0,
        created_at: new Date().toISOString(),
        likedByMe:  false,
        replies:    [],
      })
    }
  } catch {
    // Still add locally if Supabase fails
    posts.value.unshift({
      id:         `local-${Date.now()}`,
      name:       'You',
      avatar:     'https://i.pravatar.cc/36?img=5',
      badge:      'Educator',
      badgeClass: 'bg-gray-100 text-gray-600',
      text,
      likes:      0,
      comments:   0,
      created_at: new Date().toISOString(),
      likedByMe:  false,
      replies:    [],
    })
  }

  newPost.value   = ''
  isPosting.value = false
}

// ── Like toggle ─────────────────────────
async function toggleLike(post: Post) {
  const wasLiked = post.likedByMe
  post.likedByMe = !wasLiked
  post.likes += wasLiked ? -1 : 1

  // Persist to Supabase for real posts
  if (!post.id.startsWith('seed-') && !post.id.startsWith('local-')) {
    await supabase
      .from('community_posts')
      .update({ likes: post.likes })
      .eq('id', post.id)
  }
}

// ── Reply toggle & submit ───────────────
function toggleReply(postId: string) {
  activeReply.value = activeReply.value === postId ? null : postId
  replyText.value   = ''
}

function submitReply(post: Post) {
  if (!replyText.value.trim()) return

  post.replies.push({
    id:         `r-${Date.now()}`,
    name:       user.value?.email?.split('@')[0] ?? 'You',
    avatar:     user.value
                  ? `https://i.pravatar.cc/28?u=${user.value.id}`
                  : 'https://i.pravatar.cc/28?img=5',
    text:       replyText.value.trim(),
    created_at: new Date().toISOString(),
  })

  post.comments += 1
  replyText.value = ''
}

// ── Live time updates every 30s ─────────
let timeInterval: ReturnType<typeof setInterval>

onMounted(() => {
  timeInterval = setInterval(() => {
    // Trigger reactivity by touching a post — Vue picks up formatTime() re-renders
    posts.value = [...posts.value]
  }, 30_000)
})

onBeforeUnmount(() => clearInterval(timeInterval))

// ── Format time (live) ──────────────────
function formatTime(dateStr: string): string {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000)

  if (diff < 60)                return 'Just now'
  if (diff < 3600)              return `${Math.floor(diff / 60)}m ago`
  if (diff < 86400)             return `${Math.floor(diff / 3600)}h ago`
  if (diff < 86400 * 7)        return `${Math.floor(diff / 86400)}d ago`

  return new Date(dateStr).toLocaleDateString('en-NG', {
    day: 'numeric', month: 'short'
  })
}
</script>