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
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-50 text-blue-600 text-sm font-semibold">
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
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
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

    <!-- MAIN -->
    <div class="flex-1 md:ml-56 flex flex-col min-h-screen">

      <!-- TOP NAVBAR -->
      <header class="bg-white border-b border-gray-100 h-14 flex items-center justify-between px-4 md:px-6 sticky top-0 z-30">
        <div class="flex items-center gap-3">
          <button @click="sidebarOpen = true" class="md:hidden text-gray-500">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
          <NuxtLink to="/admin/courses" class="text-gray-400 hover:text-gray-600 text-sm transition-colors">
            ← Back to Courses
          </NuxtLink>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
            {{ adminEmail?.charAt(0).toUpperCase() ?? 'A' }}
          </div>
          <button @click="handleLogout" class="text-red-500 text-xs font-semibold hover:text-red-600 transition-colors">
            Log out
          </button>
        </div>
      </header>

      <!-- PAGE BODY -->
      <main class="flex-1 px-4 md:px-6 py-6 max-w-3xl">

        <!-- Loading -->
        <div v-if="isLoading" class="flex justify-center py-20">
          <div class="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"/>
        </div>

        <!-- Not found -->
        <div v-else-if="!course" class="text-center py-20 text-gray-400 text-sm">
          Course not found.
          <NuxtLink to="/admin/courses" class="text-blue-600 font-semibold hover:underline ml-1">Go back</NuxtLink>
        </div>

        <template v-else>

          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-2xl font-extrabold text-gray-900">Edit Course</h2>
              <p class="text-sm text-gray-500 mt-1">{{ course.title }}</p>
            </div>
            <!-- Status badge -->
            <span
              :class="form.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'"
              class="text-xs font-semibold px-3 py-1 rounded-full capitalize"
            >
              {{ form.status }}
            </span>
          </div>

          <!-- ── Basic Info ── -->
          <div class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-5">
            <h3 class="text-sm font-bold text-gray-900 mb-4">Basic Information</h3>

            <div class="flex flex-col gap-4">
              <div>
                <label class="text-xs font-semibold text-gray-500 mb-1 block">Course Title</label>
                <input
                  v-model="form.title"
                  type="text"
                  class="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label class="text-xs font-semibold text-gray-500 mb-1 block">Category</label>
                <input
                  v-model="form.category"
                  type="text"
                  class="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label class="text-xs font-semibold text-gray-500 mb-1 block">Description</label>
                <textarea
                  v-model="form.description"
                  rows="4"
                  class="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <div>
                <label class="text-xs font-semibold text-gray-500 mb-1 block">Price (₦)</label>
                <input
                  v-model.number="form.price"
                  type="number"
                  min="0"
                  class="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label class="text-xs font-semibold text-gray-500 mb-1 block">Status</label>
                <select
                  v-model="form.status"
                  class="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
            </div>
          </div>

          <!-- ── Thumbnail ── -->
          <div class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-5">
            <h3 class="text-sm font-bold text-gray-900 mb-4">Thumbnail</h3>

            <!-- Current thumbnail -->
            <div v-if="form.thumbnail && !newThumbnailPreview" class="mb-4">
              <p class="text-xs text-gray-500 mb-2">Current thumbnail:</p>
              <div class="relative w-full max-w-sm rounded-xl overflow-hidden border border-gray-200">
                <img :src="form.thumbnail" class="w-full h-40 object-cover" alt="Thumbnail"/>
                <button
                  @click="removeThumbnail"
                  class="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-2 py-1 rounded-lg transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>

            <!-- New thumbnail preview -->
            <div v-if="newThumbnailPreview" class="mb-4">
              <p class="text-xs text-gray-500 mb-2">New thumbnail preview:</p>
              <div class="relative w-full max-w-sm rounded-xl overflow-hidden border border-blue-200">
                <img :src="newThumbnailPreview" class="w-full h-40 object-cover" alt="New thumbnail"/>
                <button
                  @click="newThumbnailFile = null; newThumbnailPreview = ''"
                  class="absolute top-2 right-2 bg-gray-600 hover:bg-gray-700 text-white text-xs font-semibold px-2 py-1 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>

            <!-- Upload new thumbnail -->
            <label class="flex items-center gap-3 border-2 border-dashed border-gray-200 rounded-xl px-5 py-4 cursor-pointer hover:border-blue-400 transition-colors w-full max-w-sm">
              <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="17 8 12 3 7 8"/>
                <line x1="12" y1="3" x2="12" y2="15"/>
              </svg>
              <div>
                <p class="text-sm font-semibold text-gray-700">{{ newThumbnailFile ? newThumbnailFile.name : 'Upload new thumbnail' }}</p>
                <p class="text-xs text-gray-400">JPG, PNG, WEBP — max 5MB</p>
              </div>
              <input
                type="file"
                accept="image/*"
                class="hidden"
                @change="onThumbnailSelected"
              />
            </label>
          </div>

          <!-- ── Video ── -->
          <div class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-5">
            <h3 class="text-sm font-bold text-gray-900 mb-4">Course Video</h3>

            <!-- Current video -->
            <div v-if="form.video_url && !removeVideo" class="mb-4">
              <p class="text-xs text-gray-500 mb-2">Current video:</p>
              <div class="bg-black rounded-xl overflow-hidden aspect-video max-w-sm mb-3">
                <video :src="form.video_url" controls class="w-full h-full object-contain" preload="metadata"/>
              </div>
              <button
                @click="removeVideo = true"
                class="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
              >
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"/>
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                </svg>
                Remove Video
              </button>
            </div>

            <!-- Removed state -->
            <div v-if="removeVideo" class="mb-4 flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
              <svg class="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <p class="text-xs text-red-600 font-medium flex-1">Video will be removed when you save.</p>
              <button @click="removeVideo = false" class="text-xs text-gray-500 hover:text-gray-700 font-semibold">Undo</button>
            </div>

            <!-- Upload new video -->
            <div v-if="!form.video_url || removeVideo">
              <label class="flex items-center gap-3 border-2 border-dashed border-gray-200 rounded-xl px-5 py-4 cursor-pointer hover:border-blue-400 transition-colors w-full max-w-sm">
                <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/>
                  <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                <div>
                  <p class="text-sm font-semibold text-gray-700">{{ newVideoFile ? newVideoFile.name : 'Upload new video' }}</p>
                  <p class="text-xs text-gray-400">MP4, MOV, WEBM — max 500MB</p>
                </div>
                <input
                  type="file"
                  accept="video/*"
                  class="hidden"
                  @change="onVideoSelected"
                />
              </label>
            </div>

            <!-- Upload progress -->
            <div v-if="uploadProgress > 0 && uploadProgress < 100" class="mt-3 max-w-sm">
              <div class="flex justify-between text-xs text-gray-500 mb-1">
                <span>Uploading video...</span>
                <span>{{ uploadProgress }}%</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  class="h-2 bg-blue-600 rounded-full transition-all duration-300"
                  :style="{ width: uploadProgress + '%' }"
                />
              </div>
            </div>
          </div>

          <!-- ── Save button ── -->
          <div class="flex items-center gap-3 mb-5">
            <button
              @click="saveCourse"
              :disabled="isSaving"
              class="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors flex items-center gap-2"
            >
              <svg v-if="isSaving" class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
              </svg>
              {{ isSaving ? 'Saving...' : 'Save Changes' }}
            </button>
            <NuxtLink to="/admin/courses" class="text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors">
              Cancel
            </NuxtLink>
          </div>

          <p v-if="saveSuccess" class="text-sm text-green-600 font-medium mb-5">✓ {{ saveSuccess }}</p>
          <p v-if="saveError" class="text-sm text-red-500 mb-5">{{ saveError }}</p>

          <!-- ── Danger Zone ── -->
          <div class="bg-white border border-red-200 rounded-2xl p-6 shadow-sm">
            <h3 class="text-sm font-bold text-red-600 mb-1 flex items-center gap-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              Danger Zone
            </h3>
            <p class="text-xs text-gray-500 mb-4">Deleting this course will also remove all enrollments for this course. This cannot be undone.</p>
            <button
              @click="confirmDelete = true"
              class="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Delete Course
            </button>
          </div>

        </template>
      </main>
    </div>

    <!-- Delete confirm modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="confirmDelete" class="fixed inset-0 bg-black/40 z-[80] flex items-center justify-center px-4">
          <div class="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm">
            <h3 class="font-bold text-gray-900 mb-2">Delete this course?</h3>
            <p class="text-sm text-gray-500 mb-1">You are about to delete:</p>
            <p class="text-sm font-semibold text-gray-900 bg-gray-50 rounded-lg p-3 mb-4">{{ course?.title }}</p>
            <p class="text-xs text-red-500 mb-5">All enrollments for this course will also be deleted. This cannot be undone.</p>
            <p v-if="deleteError" class="text-xs text-red-500 mb-3">{{ deleteError }}</p>
            <div class="flex gap-3">
              <button
                @click="confirmDelete = false"
                class="flex-1 border border-gray-200 text-gray-700 text-sm font-semibold py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                @click="deleteCourse"
                :disabled="isDeleting"
                class="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors disabled:opacity-60"
              >
                {{ isDeleting ? 'Deleting...' : 'Yes, Delete' }}
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

definePageMeta({ layout: false })

const route      = useRoute()
const courseId   = String(route.params.id)
const config     = useRuntimeConfig()
const supabase   = useSupabaseClient()
const adminEmail = config.public.adminEmail as string

const sidebarOpen = ref(false)
const isLoading   = ref(true)
const isSaving    = ref(false)
const isDeleting  = ref(false)
const confirmDelete = ref(false)
const saveSuccess = ref('')
const saveError   = ref('')
const deleteError = ref('')
const removeVideo = ref(false)

// ── New file uploads ───────────────────
const newThumbnailFile    = ref<File | null>(null)
const newThumbnailPreview = ref('')
const newVideoFile        = ref<File | null>(null)
const uploadProgress      = ref(0)

interface Course {
  id:          string
  title:       string
  category:    string
  description: string
  price:       number
  thumbnail:   string | null
  video_url:   string | null
  status:      string
  created_at:  string
}

const course = ref<Course | null>(null)

const form = ref({
  title:       '',
  category:    '',
  description: '',
  price:       0,
  thumbnail:   null as string | null,
  video_url:   null as string | null,
  status:      'published',
})

onMounted(async () => {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('id', courseId)
    .single()

  if (error || !data) {
    isLoading.value = false
    return
  }

  course.value = data
  form.value = {
    title:       data.title       ?? '',
    category:    data.category    ?? '',
    description: data.description ?? '',
    price:       data.price       ?? 0,
    thumbnail:   data.thumbnail   ?? null,
    video_url:   data.video_url   ?? null,
    status:      data.status      ?? 'published',
  }

  isLoading.value = false
})

// ── Thumbnail handlers ─────────────────
function onThumbnailSelected(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  newThumbnailFile.value    = file
  newThumbnailPreview.value = URL.createObjectURL(file)
}

function removeThumbnail() {
  form.value.thumbnail      = null
  newThumbnailFile.value    = null
  newThumbnailPreview.value = ''
}

// ── Video handler ──────────────────────
function onVideoSelected(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  newVideoFile.value = file
  removeVideo.value  = false
}

// ── Upload to Cloudinary ───────────────
async function uploadToCloudinary(file: File, resourceType: 'image' | 'video'): Promise<string> {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', 'digitaled_hub')
  formData.append('cloud_name', 'duisso2y3')

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', `https://api.cloudinary.com/v1_1/duisso2y3/${resourceType}/upload`)

    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) {
        uploadProgress.value = Math.round((e.loaded / e.total) * 100)
      }
    }

    xhr.onload = () => {
      const res = JSON.parse(xhr.responseText)
      if (xhr.status === 200) {
        resolve(res.secure_url)
      } else {
        reject(new Error(res.error?.message ?? 'Upload failed'))
      }
    }

    xhr.onerror = () => reject(new Error('Upload failed'))
    xhr.send(formData)
  })
}

// ── Save course ────────────────────────
async function saveCourse() {
  saveSuccess.value = ''
  saveError.value   = ''
  isSaving.value    = true
  uploadProgress.value = 0

  try {
    let thumbnailUrl = form.value.thumbnail
    let videoUrl     = form.value.video_url

    // Upload new thumbnail if selected
    if (newThumbnailFile.value) {
      thumbnailUrl = await uploadToCloudinary(newThumbnailFile.value, 'image')
    }

    // Upload new video if selected
    if (newVideoFile.value) {
      videoUrl = await uploadToCloudinary(newVideoFile.value, 'video')
    }

    // Remove video if flagged
    if (removeVideo.value) {
      videoUrl = null
    }

    const { error } = await supabase
      .from('courses')
      .update({
        title:       form.value.title,
        category:    form.value.category,
        description: form.value.description,
        price:       form.value.price,
        thumbnail:   thumbnailUrl,
        video_url:   videoUrl,
        status:      form.value.status,
      })
      .eq('id', courseId)

    if (error) throw error

    // Update local state
    form.value.thumbnail = thumbnailUrl
    form.value.video_url = videoUrl
    newThumbnailFile.value    = null
    newThumbnailPreview.value = ''
    newVideoFile.value        = null
    removeVideo.value         = false
    uploadProgress.value      = 0

    saveSuccess.value = 'Course updated successfully.'
    setTimeout(() => { saveSuccess.value = '' }, 3000)

  } catch (err: any) {
    saveError.value = 'Failed to save: ' + (err.message ?? 'Unknown error')
    console.error('Save error:', err)
  }

  isSaving.value = false
}

// ── Delete course ──────────────────────
async function deleteCourse() {
  deleteError.value = ''
  isDeleting.value  = true

  try {
    // ✅ Delete via server route (service role bypasses RLS)
    await $fetch('/api/admin-delete-course', {
      method: 'POST',
      body: { courseId }
    })

    await navigateTo('/admin/courses')
  } catch (err: any) {
    deleteError.value = 'Failed to delete: ' + (err.message ?? 'Unknown error')
    isDeleting.value  = false
  }
}

async function handleLogout() {
  await $fetch('/api/admin-logout', { method: 'POST' })
  await supabase.auth.signOut()
  await navigateTo('/admin/login')
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>