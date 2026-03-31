<template>
  <div class="min-h-screen bg-gray-100 flex flex-col font-sans">

    <!-- Navbar -->
    <nav class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between py-3">

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
            <span class="font-bold text-gray-900 text-sm">DigitalEd Hub</span>
          </NuxtLink>
        </div>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-4">
          <NuxtLink to="/community" class="text-sm font-medium text-gray-700 hover:text-blue-600">Community</NuxtLink>
          <div class="relative">
            <button @click="profileOpen = !profileOpen" class="flex items-center gap-2 focus:outline-none">
              <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                {{ userEmail.charAt(0).toUpperCase() }}
              </div>
              <svg class="w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            <div v-if="profileOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-xl border border-gray-200 shadow-lg py-1 z-50">
              <div class="px-4 py-2.5 border-b border-gray-100">
                <p class="text-xs font-semibold text-gray-900 truncate">{{ userEmail }}</p>
                <p class="text-xs text-gray-400">Student</p>
              </div>
              <NuxtLink to="/courses" @click="profileOpen = false" class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                Browse Courses
              </NuxtLink>
              <div class="border-t border-gray-100 mt-1">
                <button @click="handleLogout" class="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="isOpen = !isOpen" class="md:hidden text-gray-700">
          <svg v-if="!isOpen" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
          <svg v-else class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-show="isOpen" class="md:hidden border-t border-gray-100 px-4 py-3 space-y-3 bg-white">
        <NuxtLink to="/community" @click="isOpen = false" class="block text-sm text-gray-700 font-medium">Community</NuxtLink>
        <div class="border-t border-gray-100 pt-3">
          <p class="text-xs text-gray-400 mb-2">{{ userEmail }}</p>
          <button @click="handleLogout" class="flex items-center gap-2 text-sm text-red-500 font-medium">Log out</button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6">

      <!-- Enrolled Courses -->
      <section class="mb-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-sm font-bold text-gray-900 sm:text-base">My Enrolled Courses</h2>
          <NuxtLink to="/courses" class="text-xs text-blue-600 font-medium hover:underline">Browse more</NuxtLink>
        </div>

        <div v-if="isLoadingCourses" class="flex items-center justify-center py-16">
          <div class="w-7 h-7 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>

        <div v-else-if="enrolledCourses.length === 0" class="bg-white rounded-xl border border-dashed border-gray-300 p-10 text-center">
          <div class="text-4xl mb-3">📚</div>
          <h3 class="text-sm font-semibold text-gray-700 mb-1">No courses yet</h3>
          <p class="text-xs text-gray-400 mb-4">Enroll in a course to start learning</p>
          <NuxtLink to="/courses" class="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors">
            Browse Courses →
          </NuxtLink>
        </div>

        <div v-else class="flex flex-col gap-4 sm:grid sm:grid-cols-2 xl:grid-cols-3">
          <div
            v-for="enrollment in enrolledCourses"
            :key="enrollment.id"
            @click="navigateTo(`/courses/${enrollment.course_id}/learn`)"
            class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group"
          >
            <!-- Thumbnail -->
            <div class="relative w-full h-36 bg-blue-50 overflow-hidden">
              <img
                v-if="enrollment.courses?.thumbnail"
                :src="enrollment.courses.thumbnail"
                :alt="enrollment.course_title"
                class="w-full h-full object-cover"
              />
              <div v-else class="w-full h-full flex items-center justify-center">
                <svg class="w-10 h-10 text-blue-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </div>
              <!-- Hover overlay -->
              <div class="absolute inset-0 bg-blue-600/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div class="flex items-center gap-2 bg-white text-blue-600 text-xs font-bold px-4 py-2 rounded-full shadow">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21"/>
                  </svg>
                  {{ enrollment.completed ? 'Review Course' : 'Resume Course' }}
                </div>
              </div>
            </div>

            <div class="p-4">
              <h3 class="text-sm font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                {{ enrollment.course_title }}
              </h3>
              <p class="text-xs text-gray-400 mb-3">Enrolled {{ formatDate(enrollment.enrolled_at) }}</p>
              <div class="flex items-center justify-between">

                <!-- ✅ Completed vs Enrolled badge -->
                <span
                  v-if="enrollment.completed"
                  class="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full flex items-center gap-1"
                >
                  <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Completed
                </span>
                <span v-else class="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                  ✓ Enrolled
                </span>

                <span class="text-xs text-gray-400">₦{{ enrollment.amount?.toLocaleString() }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Feed + Resources -->
      <div class="flex flex-col gap-4 xl:grid xl:grid-cols-[1fr_300px]">

        <!-- Community Feed -->
        <section class="bg-white rounded-xl border border-gray-200 p-5">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-sm font-bold text-gray-900">Community Feed</h2>
            <NuxtLink to="/community" class="text-xs text-blue-600 font-medium hover:underline">See all →</NuxtLink>
          </div>

          <div v-if="isLoadingFeed" class="flex justify-center py-6">
            <div class="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>

          <div v-else-if="feedPosts.length === 0" class="text-center py-6">
            <p class="text-xs text-gray-400">No community posts yet.</p>
            <NuxtLink to="/community" class="text-xs text-blue-600 font-medium hover:underline mt-1 block">Be the first to post →</NuxtLink>
          </div>

          <div
            v-else
            v-for="post in feedPosts"
            :key="post.id"
            class="pb-4 border-b border-gray-100 last:border-none last:pb-0 mb-4 last:mb-0"
          >
            <div class="flex gap-3 mb-2">
              <div
                class="w-9 h-9 rounded-full flex items-center justify-center text-xs text-white font-bold flex-shrink-0"
                :style="{ backgroundColor: post.avatarColor }"
              >{{ post.initials }}</div>
              <div>
                <p class="text-sm font-semibold text-gray-900">{{ post.name }}</p>
                <p class="text-xs text-gray-400">{{ post.timeAgo }}</p>
              </div>
            </div>

            <p class="text-xs text-gray-600 leading-relaxed mb-3 ml-12">{{ post.text }}</p>

            <div class="flex items-center gap-5 ml-12">
              <button
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

              <button
                @click="toggleReply(post.id)"
                class="flex items-center gap-1.5 transition-colors duration-200"
                :class="activeReply === post.id ? 'text-blue-600' : 'text-gray-400 hover:text-blue-500'"
              >
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                <span class="text-xs font-medium tabular-nums">{{ post.replies.length }}</span>
              </button>
            </div>

            <div v-if="activeReply === post.id" class="mt-3 ml-12 flex flex-col gap-2">
              <div v-for="reply in post.replies" :key="reply.id" class="flex gap-2.5 bg-gray-50 rounded-lg px-3 py-2.5">
                <div
                  class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] text-white font-bold flex-shrink-0"
                  :style="{ backgroundColor: stringToColor(reply.name) }"
                >{{ reply.name.charAt(0).toUpperCase() }}</div>
                <div>
                  <p class="text-xs font-semibold text-gray-800">{{ reply.name }}</p>
                  <p class="text-xs text-gray-500 mt-0.5">{{ reply.text }}</p>
                </div>
              </div>

              <div class="flex gap-2 items-start mt-1">
                <div
                  class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] text-white font-bold flex-shrink-0 mt-1"
                  :style="{ backgroundColor: stringToColor(userEmail) }"
                >{{ userEmail.charAt(0).toUpperCase() }}</div>
                <input
                  v-model="replyTexts[post.id]"
                  placeholder="Write a reply..."
                  class="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-blue-500 transition"
                  @keydown.enter="submitReply(post)"
                />
                <button
                  @click="submitReply(post)"
                  :disabled="!replyTexts[post.id]?.trim()"
                  class="bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
                >Send</button>
              </div>
            </div>
          </div>
        </section>

        <!-- Resources -->
        <section class="bg-white rounded-xl border border-gray-200 p-5">
          <h2 class="text-sm font-bold text-gray-900 mb-4">Resources</h2>
          <div v-for="resource in resources" :key="resource.id" class="flex items-center gap-3 mb-3">
            <div class="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center text-lg flex-shrink-0">
              {{ resource.icon }}
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-xs font-semibold text-gray-900 truncate">{{ resource.name }}</p>
              <p class="text-xs text-gray-400">{{ resource.meta }}</p>
            </div>
          </div>
          <button class="w-full border border-gray-300 rounded-lg py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors mt-1">
            Browse Library
          </button>
        </section>

      </div>
    </main>

    <footer class="bg-white border-t border-gray-200 text-center py-4">
      <p class="text-xs text-gray-400">© 2026 DigitalEd Hub. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
// ✅ Auto logout after 20 mins of inactivity
useStudentAutoLogout()
import { ref, computed, onMounted } from 'vue'

definePageMeta({
  layout: false,
  middleware: 'auth',
})

// ── Types ──────────────────────────────
interface Enrollment {
  id:           string
  course_id:    string
  course_title: string
  amount:       number
  enrolled_at:  string
  completed:    boolean        // ✅ new
  courses: {                   // ✅ joined thumbnail
    thumbnail: string | null
  } | null
}

interface FeedReply {
  id:         string
  name:       string
  text:       string
  created_at: string
}

interface FeedPost {
  id:          string
  initials:    string
  name:        string
  text:        string
  likes:       number
  avatarColor: string
  likedByMe:   boolean
  replies:     FeedReply[]
  timeAgo:     string
}

// ── State ──────────────────────────────
const isOpen           = ref(false)
const profileOpen      = ref(false)
const isLoadingCourses = ref(true)
const isLoadingFeed    = ref(true)
const enrolledCourses  = ref<Enrollment[]>([])
const feedPosts        = ref<FeedPost[]>([])
const activeReply      = ref<string | null>(null)
const replyTexts       = ref<Record<string, string>>({})

// ── Auth ───────────────────────────────
const supabase  = useSupabaseClient()
const user      = useSupabaseUser()
const userEmail = computed(() => user.value?.email ?? '')

async function handleLogout() {
  await supabase.auth.signOut()
  await navigateTo('/')
}

// ── Helpers ────────────────────────────
function stringToColor(str: string): string {
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

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-NG', {
    day: 'numeric', month: 'short', year: 'numeric'
  })
}

// ── Fetch on mount ─────────────────────
onMounted(async () => {
  const { data: { session } } = await supabase.auth.getSession()
  const currentUser = session?.user ?? user.value

  if (!currentUser) {
    isLoadingCourses.value = false
    isLoadingFeed.value    = false
    return
  }

  // ✅ Fetch enrollments WITH completed + joined thumbnail from courses table
  const { data: enrollmentData, error: enrollmentError } = await supabase
    .from('enrollments')
    .select(`
      id,
      course_id,
      course_title,
      amount,
      enrolled_at,
      completed,
      courses (
        thumbnail
      )
    `)
    .eq('user_id', currentUser.id)
    .order('enrolled_at', { ascending: false })

  if (enrollmentError) {
    console.error('Enrollment fetch error:', enrollmentError.message)
  }

  enrolledCourses.value  = (enrollmentData ?? []) as Enrollment[]
  isLoadingCourses.value = false

  // ── Community feed ─────────────────────
  const { data: communityData } = await supabase
    .from('community_posts')
    .select('id, user_email, text, likes, created_at')
    .order('created_at', { ascending: false })
    .limit(5)

  if (communityData) {
    const postIds = communityData.map((p: any) => String(p.id))

    const { data: repliesData } = await supabase
      .from('post_replies')
      .select('id, post_id, user_email, text, created_at')
      .in('post_id', postIds)
      .order('created_at', { ascending: true })

    feedPosts.value = communityData.map((p: any) => {
      const postReplies: FeedReply[] = (repliesData ?? [])
        .filter((r: any) => r.post_id === p.id)
        .map((r: any) => ({
          id:         String(r.id),
          name:       String(r.user_email ?? 'Educator').split('@')[0] ?? 'Educator',
          text:       String(r.text ?? ''),
          created_at: String(r.created_at ?? new Date().toISOString()),
        }))

      return {
        id:          String(p.id),
        initials:    String(p.user_email ?? 'U').charAt(0).toUpperCase(),
        name:        String(p.user_email ?? 'Educator').split('@')[0] ?? 'Educator',
        text:        String(p.text ?? ''),
        likes:       Number(p.likes ?? 0),
        avatarColor: stringToColor(String(p.user_email ?? 'default')),
        likedByMe:   false,
        replies:     postReplies,
        timeAgo:     formatTime(String(p.created_at)),
      }
    })
  }

  isLoadingFeed.value = false
})

// ── Like ───────────────────────────────
async function toggleLike(post: FeedPost) {
  const wasLiked = post.likedByMe
  post.likedByMe = !wasLiked
  post.likes += wasLiked ? -1 : 1
  await supabase.from('community_posts').update({ likes: post.likes }).eq('id', post.id)
}

// ── Reply ──────────────────────────────
function toggleReply(postId: string) {
  activeReply.value = activeReply.value === postId ? null : postId
  if (!replyTexts.value[postId]) replyTexts.value[postId] = ''
}

async function submitReply(post: FeedPost) {
  const text = replyTexts.value[post.id]?.trim()
  if (!text) return

  const { data: { session } } = await supabase.auth.getSession()
  const currentUser = session?.user ?? user.value

  const { data: newReply, error } = await supabase
    .from('post_replies')
    .insert({
      post_id:    post.id,
      user_id:    currentUser?.id,
      user_email: currentUser?.email,
      text,
    })
    .select()
    .single()

  if (!error && newReply) {
    post.replies.push({
      id:         String(newReply.id),
      name:       String(newReply.user_email ?? 'You').split('@')[0] ?? 'You',
      text:       String(newReply.text),
      created_at: String(newReply.created_at),
    })
  } else {
    post.replies.push({
      id:         `r-${Date.now()}`,
      name:       String(currentUser?.email ?? 'You').split('@')[0] ?? 'You',
      text,
      created_at: new Date().toISOString(),
    })
  }

  replyTexts.value[post.id] = ''
}

// ── Static resources ───────────────────
const resources = [
  { id: 1, icon: '📄', name: 'Lesson Plan Template', meta: 'PDF • 2.1MB'  },
  { id: 2, icon: '📊', name: 'Grading Rubric',        meta: 'XLSX • 203KB' },
  { id: 3, icon: '📋', name: 'Study Guide',           meta: 'DOCX • 3.1MB' },
]
</script>