<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">

    <!-- NAVBAR -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

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
            <NuxtLink to="/dashboard" class="text-gray-500 text-sm hover:text-gray-800 transition-colors">Dashboard</NuxtLink>
            <NuxtLink to="/community" class="text-blue-600 text-sm font-semibold">Community</NuxtLink>
            <NuxtLink to="/courses" class="text-gray-500 text-sm hover:text-gray-800 transition-colors">Courses</NuxtLink>
          </template>
        </div>

        <!-- Desktop right -->
        <div class="hidden md:flex items-center gap-3">
          <template v-if="!user">
            <NuxtLink to="/login" class="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors">Login</NuxtLink>
            <NuxtLink to="/register" class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-1.5 rounded-lg transition-colors">
              Get Started
            </NuxtLink>
          </template>
          <template v-else>
            <div class="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
              {{ user.email?.charAt(0).toUpperCase() }}
            </div>
            <button @click="handleLogout" class="text-sm text-red-500 font-medium hover:text-red-600">Log out</button>
          </template>
        </div>

        <!-- Mobile right -->
        <div class="md:hidden flex items-center gap-3">
          <NuxtLink v-if="!user" to="/register" class="bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
            Get Started
          </NuxtLink>
          <div v-if="user" class="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
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
            <span class="text-blue-600 font-bold text-sm">DigitalEd Hub</span>
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
              <NuxtLink to="/courses" @click="closeMenu" class="text-sm text-gray-700 font-medium py-2.5 hover:text-blue-600 border-b border-gray-50">Courses</NuxtLink>
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

      <!-- Composer -->
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

      <!-- Guest banner -->
      <div v-else class="bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 flex items-center justify-between gap-4">
        <p class="text-sm text-blue-700 font-medium">Join the community to share posts and reply to others.</p>
        <NuxtLink to="/register" class="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
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
        class="bg-white rounded-xl border border-gray-200 shadow-sm p-5"
      >
        <!-- Post header -->
        <div class="flex items-start gap-3 mb-3">
          <div
            class="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
            :style="{ backgroundColor: stringToColor(post.user_email) }"
          >
            {{ post.user_email?.charAt(0).toUpperCase() }}
          </div>
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-sm font-bold text-gray-900">{{ post.user_email?.split('@')[0] }}</span>
              <span class="text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider bg-gray-100 text-gray-600">
                Educator
              </span>
            </div>
            <p class="text-xs text-gray-400 mt-0.5">{{ formatTime(post.created_at) }}</p>
          </div>
        </div>

        <p class="text-sm text-gray-600 leading-relaxed mb-4">{{ post.text }}</p>

        <!-- Actions -->
        <div class="flex items-center gap-5 pt-3 border-t border-gray-100">
          <button
            v-if="user"
            @click="toggleLike(post)"
            class="flex items-center gap-1.5 transition-colors duration-200 group"
            :class="post.likedByMe ? 'text-rose-500' : 'text-gray-400 hover:text-rose-500'"
          >
            <svg class="w-4 h-4 transition-transform duration-150 group-active:scale-125" viewBox="0 0 24 24"
              :fill="post.likedByMe ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span class="text-xs font-medium tabular-nums">{{ post.likes }}</span>
          </button>
          <div v-else class="flex items-center gap-1.5 text-gray-300">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span class="text-xs font-medium tabular-nums">{{ post.likes }}</span>
          </div>

          <button
            v-if="user"
            @click="toggleReply(post.id)"
            class="flex items-center gap-1.5 transition-colors duration-200"
            :class="activeReply === post.id ? 'text-blue-600' : 'text-gray-400 hover:text-blue-500'"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span class="text-xs font-medium tabular-nums">{{ post.replies.length }}</span>
          </button>
          <div v-else class="flex items-center gap-1.5 text-gray-300">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span class="text-xs font-medium tabular-nums">{{ post.replies.length }}</span>
          </div>
        </div>

        <!-- Replies section -->
        <div v-if="user && activeReply === post.id" class="mt-4 flex flex-col gap-2">

          <!-- Existing replies -->
          <div
            v-for="reply in post.replies"
            :key="reply.id"
            class="flex gap-2.5 bg-gray-50 rounded-lg px-3 py-2.5"
          >
            <div
              class="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
              :style="{ backgroundColor: stringToColor(reply.user_email) }"
            >
              {{ reply.user_email?.charAt(0).toUpperCase() }}
            </div>
            <div>
              <p class="text-xs font-semibold text-gray-800">{{ reply.user_email?.split('@')[0] }}</p>
              <p class="text-xs text-gray-500 mt-0.5">{{ reply.text }}</p>
              <p class="text-[10px] text-gray-400 mt-1">{{ formatTime(reply.created_at) }}</p>
            </div>
          </div>

          <!-- Empty replies state -->
          <p v-if="post.replies.length === 0" class="text-xs text-gray-400 text-center py-2">
            No replies yet. Be the first!
          </p>

          <!-- Reply input -->
          <div class="flex gap-2 items-start mt-1">
            <div class="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1">
              {{ user.email?.charAt(0).toUpperCase() }}
            </div>
            <input
              v-model="replyTexts[post.id]"
              placeholder="Write a reply..."
              class="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-blue-500 transition"
              @keydown.enter="submitReply(post)"
            />
            <button
              @click="submitReply(post)"
              :disabled="!replyTexts[post.id]?.trim() || submittingReply === post.id"
              class="bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors flex items-center gap-1"
            >
              <svg v-if="submittingReply === post.id" class="w-3 h-3 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
              </svg>
              Send
            </button>
          </div>
        </div>
      </div>

      <!-- Empty feed -->
      <div v-if="!isLoading && posts.length === 0" class="text-center py-16 text-gray-400 text-sm">
        No posts yet. Be the first to share something!
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
  id:         string
  user_email: string
  text:       string
  created_at: string
}

interface Post {
  id:         string
  user_email: string
  user_id:    string
  text:       string
  likes:      number
  created_at: string
  likedByMe:  boolean
  replies:    Reply[]
}

// ── State ──────────────────────────────
const sidebarOpen     = ref(false)
const newPost         = ref('')
const replyTexts      = ref<Record<string, string>>({})
const isPosting       = ref(false)
const isLoading       = ref(true)
const activeReply     = ref<string | null>(null)
const submittingReply = ref<string | null>(null)
const posts           = ref<Post[]>([])

const supabase = useSupabaseClient()
const user     = useSupabaseUser()

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
  return new Date(dateStr).toLocaleDateString('en-NG', { day: 'numeric', month: 'short' })
}

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

// ── Fetch posts + replies on mount ─────
onMounted(async () => {
  await loadPosts()
  isLoading.value = false
})

async function loadPosts() {
  const { data: postsData, error } = await supabase
    .from('community_posts')
    .select('id, user_id, user_email, text, likes, created_at')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Posts fetch error:', error.message)
    posts.value = []
    return
  }

  if (!postsData || postsData.length === 0) {
    posts.value = []
    return
  }

  const postIds = postsData.map((p: any) => p.id)

  const { data: repliesData } = await supabase
    .from('post_replies')
    .select('id, post_id, user_id, user_email, text, created_at')
    .in('post_id', postIds)
    .order('created_at', { ascending: true })

  const { data: { session } } = await supabase.auth.getSession()
  const currentUser = session?.user ?? user.value

  let likedPostIds: string[] = []
  if (currentUser) {
    const { data: likesData } = await supabase
      .from('post_likes')
      .select('post_id')
      .eq('user_id', currentUser.id)

    likedPostIds = (likesData ?? []).map((l: any) => String(l.post_id))
  }

  posts.value = postsData.map((p: any) => ({
    id:         String(p.id),
    user_id:    String(p.user_id),
    user_email: String(p.user_email ?? ''),
    text:       String(p.text ?? ''),
    likes:      Number(p.likes ?? 0),
    created_at: String(p.created_at),
    likedByMe:  likedPostIds.includes(String(p.id)),
    replies:    (repliesData ?? [])
      .filter((r: any) => r.post_id === p.id)
      .map((r: any) => ({
        id:         String(r.id),
        user_email: String(r.user_email ?? ''),
        text:       String(r.text ?? ''),
        created_at: String(r.created_at),
      })),
  }))
}

async function submitPost() {
  if (!newPost.value.trim() || isPosting.value) return
  isPosting.value = true
  const text = newPost.value.trim()

  // ✅ Force fresh session — don't rely on user.value alone
  const { data: { session } } = await supabase.auth.getSession()
  const currentUser = session?.user

  if (!currentUser) {
    alert('Not logged in — please refresh and try again.')
    isPosting.value = false
    return
  }

  const { data, error } = await supabase
    .from('community_posts')
    .insert({
      user_id:    currentUser.id,
      user_email: currentUser.email,
      text,
      likes:    0,
      comments: 0,
    })
    .select()
    .single()

  if (!error && data) {
    posts.value.unshift({
      id:         String(data.id),
      user_id:    String(data.user_id),
      user_email: String(data.user_email ?? ''),
      text:       String(data.text),
      likes:      0,
      created_at: String(data.created_at),
      likedByMe:  false,
      replies:    [],
    })
    newPost.value = ''
  } else {
    console.error('Post failed:', JSON.stringify(error, null, 2))
  }

  isPosting.value = false
}

// ── Toggle like — persisted to post_likes table ─
async function toggleLike(post: Post) {
  if (!user.value) return

  const wasLiked = post.likedByMe
  // Optimistic update
  post.likedByMe = !wasLiked
  post.likes += wasLiked ? -1 : 1

  if (wasLiked) {
    // Unlike: delete from post_likes
    await supabase
      .from('post_likes')
      .delete()
      .eq('post_id', post.id)
      .eq('user_id', user.value.id)
  } else {
    // Like: insert into post_likes
    await supabase
      .from('post_likes')
      .insert({ post_id: post.id, user_id: user.value.id })
  }

  // ✅ Always sync the likes count on the post
  await supabase
    .from('community_posts')
    .update({ likes: post.likes })
    .eq('id', post.id)
}

// ── Toggle reply section ───────────────
function toggleReply(postId: string) {
  activeReply.value = activeReply.value === postId ? null : postId
  if (!replyTexts.value[postId]) replyTexts.value[postId] = ''
}

// ── Submit reply — saved to Supabase ──
async function submitReply(post: Post) {
  const text = replyTexts.value[post.id]?.trim()
  if (!text || submittingReply.value === post.id) return

  submittingReply.value = post.id

  // ✅ Force fresh session
  const { data: { session } } = await supabase.auth.getSession()
  const currentUser = session?.user
  if (!currentUser) return

  const { data, error } = await supabase
    .from('post_replies')
    .insert({
      post_id:    post.id,
      user_id:    currentUser.id,
      user_email: currentUser.email,
      text,
    })
    .select()
    .single()

  if (!error && data) {
    post.replies.push({
      id:         String(data.id),
      user_email: String(data.user_email ?? currentUser.email ?? ''),
      text:       String(data.text),
      created_at: String(data.created_at),
    })
    replyTexts.value[post.id] = ''
  } else {
    console.error('Reply failed:', JSON.stringify(error, null, 2))
  }

  submittingReply.value = null
}
// ── Refresh timestamps every 30s ───────
let timeInterval: ReturnType<typeof setInterval>
onMounted(() => { timeInterval = setInterval(() => { posts.value = [...posts.value] }, 30_000) })
onBeforeUnmount(() => clearInterval(timeInterval))
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.slide-enter-active, .slide-leave-active { transition: transform 0.3s ease; }
.slide-enter-from, .slide-leave-to { transform: translateX(100%); }
</style>