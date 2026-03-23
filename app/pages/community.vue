<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">

    <!-- NAVBAR -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

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
          <span class="font-bold text-blue-600 text-sm">DigitalEd Hub</span>
        </NuxtLink>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-7">
          <template v-if="!user">
            <NuxtLink to="/" class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors">Home</NuxtLink>
            <NuxtLink to="/courses" class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors">Courses</NuxtLink>
            <NuxtLink to="/community" class="text-blue-600 text-sm font-semibold">Community</NuxtLink>
            <NuxtLink to="/about" class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors">About</NuxtLink>
          </template>
          <template v-else>
            <NuxtLink to="/community" class="text-blue-600 text-sm font-semibold">Home</NuxtLink>
            <NuxtLink to="/community/discussion" class="text-gray-500 text-sm hover:text-gray-800 transition-colors">Discussion</NuxtLink>
            <NuxtLink to="/community/members" class="text-gray-500 text-sm hover:text-gray-800 transition-colors">Members</NuxtLink>
          </template>
        </div>

        <!-- Desktop right side -->
        <div class="hidden md:flex items-center gap-3">
          <template v-if="!user">
            <NuxtLink to="/login" class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors">Login</NuxtLink>
            <NuxtLink to="/register" class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-1.5 rounded-lg transition-colors">
              Get Started
            </NuxtLink>
          </template>
          <template v-else>
            <div class="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold cursor-pointer">
              {{ user.email?.charAt(0).toUpperCase() }}
            </div>
          </template>
        </div>

        <!-- Mobile right -->
        <div class="md:hidden flex items-center gap-3">
          <NuxtLink
            v-if="!user"
            to="/register"
            class="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
          >
            Get Started
          </NuxtLink>
          <div
            v-if="user"
            class="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold"
          >
            {{ user.email?.charAt(0).toUpperCase() }}
          </div>
          <button @click="openMenu" class="text-gray-600 focus:outline-none">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

      </div>
    </header>

    <!-- SIDEBAR -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="sidebarOpen" class="fixed inset-0 bg-black/40 z-[60]" @click="closeMenu"/>
      </Transition>
      <Transition name="slide">
        <div v-if="sidebarOpen" class="fixed top-0 right-0 h-full w-72 bg-white z-[70] shadow-2xl flex flex-col">
          <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <NuxtLink to="/" @click="closeMenu" class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="5" height="5" rx="1" fill="white"/>
                  <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
                  <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
                  <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.4"/>
                </svg>
              </div>
              <span class="text-blue-600 font-bold text-sm">DigitalEd Hub</span>
            </NuxtLink>
            <button @click="closeMenu" class="text-gray-400 hover:text-gray-600">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div v-if="user" class="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              {{ user.email?.charAt(0).toUpperCase() }}
            </div>
            <div class="min-w-0">
              <p class="text-sm font-semibold text-gray-900 truncate">{{ user.email }}</p>
              <p class="text-xs text-gray-400">Student</p>
            </div>
          </div>
          <div class="flex flex-col px-6 py-4 gap-1 flex-1">
            <template v-if="!user">
              <NuxtLink to="/" @click="closeMenu" class="text-sm text-gray-700 font-medium py-2.5 hover:text-blue-600 border-b border-gray-50">Home</NuxtLink>
              <NuxtLink to="/courses" @click="closeMenu" class="text-sm text-gray-700 font-medium py-2.5 hover:text-blue-600 border-b border-gray-50">Courses</NuxtLink>
              <NuxtLink to="/community" @click="closeMenu" class="text-sm text-blue-600 font-semibold py-2.5 border-b border-gray-50">Community</NuxtLink>
              <NuxtLink to="/about" @click="closeMenu" class="text-sm text-gray-700 font-medium py-2.5 hover:text-blue-600 border-b border-gray-50">About</NuxtLink>
            </template>
            <template v-else>
              <NuxtLink to="/dashboard" @click="closeMenu" class="text-sm text-gray-700 font-medium py-2.5 hover:text-blue-600 border-b border-gray-50">Dashboard</NuxtLink>
              <NuxtLink to="/community" @click="closeMenu" class="text-sm text-blue-600 font-semibold py-2.5 border-b border-gray-50">Community</NuxtLink>
              <NuxtLink to="/community/discussion" @click="closeMenu" class="text-sm text-gray-700 font-medium py-2.5 hover:text-blue-600 border-b border-gray-50">Discussion</NuxtLink>
              <NuxtLink to="/community/members" @click="closeMenu" class="text-sm text-gray-700 font-medium py-2.5 hover:text-blue-600 border-b border-gray-50">Members</NuxtLink>
            </template>
          </div>
          <div class="px-6 py-4 border-t border-gray-100">
            <template v-if="!user">
              <NuxtLink to="/login" @click="closeMenu" class="text-sm text-gray-700 font-medium hover:text-blue-600">Login</NuxtLink>
            </template>
            <template v-else>
              <button @click="handleLogout" class="flex items-center gap-2 text-sm text-red-500 font-semibold">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                  <polyline points="16 17 21 12 16 7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
                Log out
              </button>
            </template>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- MAIN FEED -->
    <main class="flex-1 max-w-2xl mx-auto w-full px-6 py-6 flex flex-col gap-4">

      <!-- Composer — logged in only -->
      <div v-if="user" class="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
        <div class="flex items-start gap-3 mb-3">
          <div class="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
            {{ user.email?.charAt(0).toUpperCase() }}
          </div>
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

      <!-- Guest banner — logged out only -->
      <div v-else class="bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 flex items-center justify-between gap-4">
        <p class="text-sm text-blue-700 font-medium">Join the community to share posts and reply to others.</p>
        <NuxtLink
          to="/register"
          class="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
        >
          Get Started
        </NuxtLink>
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
        <div class="flex items-start gap-3 mb-3">
          <img :src="post.avatar" class="w-9 h-9 rounded-full flex-shrink-0 object-cover"/>
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-sm font-bold text-gray-900">{{ post.name }}</span>
              <span class="text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider" :class="post.badgeClass">
                {{ post.badge }}
              </span>
            </div>
            <p class="text-xs text-gray-400 mt-0.5">{{ formatTime(post.created_at) }}</p>
          </div>
        </div>

        <p class="text-sm text-gray-600 leading-relaxed mb-4">{{ post.text }}</p>

        <div class="flex items-center gap-5 pt-3 border-t border-gray-100">
          <!-- Like — logged in only -->
          <button
            v-if="user"
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

          <!-- Like count only — logged out -->
          <div v-else class="flex items-center gap-1.5 text-gray-300">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span class="text-xs font-medium tabular-nums">{{ post.likes }}</span>
          </div>

          <!-- Reply toggle — logged in only -->
          <button
            v-if="user"
            @click="toggleReply(post.id)"
            class="flex items-center gap-1.5 transition-colors duration-200"
            :class="activeReply === post.id ? 'text-blue-600' : 'text-gray-400 hover:text-blue-500'"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span class="text-xs font-medium tabular-nums">{{ post.comments }}</span>
          </button>

          <!-- Comment count only — logged out -->
          <div v-else class="flex items-center gap-1.5 text-gray-300">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span class="text-xs font-medium tabular-nums">{{ post.comments }}</span>
          </div>
        </div>

        <!-- Reply section — logged in only -->
        <div v-if="user && activeReply === post.id" class="mt-4 flex flex-col gap-2">
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
          <div class="flex gap-2 items-start mt-1">
            <div class="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1">
              {{ user.email?.charAt(0).toUpperCase() }}
            </div>
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

const sidebarOpen = ref(false)
const newPost     = ref('')
const replyText   = ref('')
const isPosting   = ref(false)
const isLoading   = ref(true)
const activeReply = ref<string | null>(null)
const posts       = ref<Post[]>([])

const supabase = useSupabaseClient()
const user     = useSupabaseUser()

function openMenu() {
  sidebarOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeMenu() {
  sidebarOpen.value = false
  document.body.style.overflow = ''
}

async function handleLogout() {
  closeMenu()
  await supabase.auth.signOut()
  await navigateTo('/')
}

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

let timeInterval: ReturnType<typeof setInterval>

onMounted(() => {
  timeInterval = setInterval(() => {
    posts.value = [...posts.value]
  }, 30_000)
})

onBeforeUnmount(() => clearInterval(timeInterval))

async function submitPost() {
  if (!newPost.value.trim() || isPosting.value) return
  isPosting.value = true
  const text = newPost.value.trim()

  try {
    const { data, error } = await supabase.from('community_posts').insert({
      user_id:    user.value!.id,
      user_email: user.value!.email,
      text,
      likes:    0,
      comments: 0,
    }).select().single()

    if (!error && data) {
      posts.value.unshift({
        id:         data.id,
        name:       user.value!.email?.split('@')[0] ?? 'You',
        avatar:     `https://i.pravatar.cc/36?u=${user.value!.id}`,
        badge:      'Educator',
        badgeClass: 'bg-gray-100 text-gray-600',
        text:       data.text,
        likes:      0,
        comments:   0,
        created_at: data.created_at,
        likedByMe:  false,
        replies:    [],
        user_id:    user.value!.id,
      })
    }
  } catch (e) {
    console.error('Failed to post:', e)
  }

  newPost.value   = ''
  isPosting.value = false
}

async function toggleLike(post: Post) {
  const wasLiked = post.likedByMe
  post.likedByMe = !wasLiked
  post.likes += wasLiked ? -1 : 1

  if (!post.id.startsWith('seed-') && !post.id.startsWith('local-')) {
    await supabase
      .from('community_posts')
      .update({ likes: post.likes })
      .eq('id', post.id)
  }
}

function toggleReply(postId: string) {
  activeReply.value = activeReply.value === postId ? null : postId
  replyText.value   = ''
}

function submitReply(post: Post) {
  if (!replyText.value.trim()) return

  post.replies.push({
    id:         `r-${Date.now()}`,
    name:       user.value?.email?.split('@')[0] ?? 'You',
    avatar:     `https://i.pravatar.cc/28?u=${user.value!.id}`,
    text:       replyText.value.trim(),
    created_at: new Date().toISOString(),
  })

  post.comments += 1
  replyText.value = ''
}

function formatTime(dateStr: string): string {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000)
  if (diff < 60)        return 'Just now'
  if (diff < 3600)      return `${Math.floor(diff / 60)}m ago`
  if (diff < 86400)     return `${Math.floor(diff / 3600)}h ago`
  if (diff < 86400 * 7) return `${Math.floor(diff / 86400)}d ago`
  return new Date(dateStr).toLocaleDateString('en-NG', { day: 'numeric', month: 'short' })
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }

.slide-enter-active,
.slide-leave-active { transition: transform 0.3s ease; }
.slide-enter-from,
.slide-leave-to { transform: translateX(100%); }
</style>