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
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
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
          <h1 class="text-sm font-semibold text-gray-800">Courses</h1>
        </div>

        <div class="flex items-center gap-3">
          <input
            v-model="search"
            placeholder="Search courses..."
            class="hidden md:block border border-gray-200 rounded-lg px-3 py-1.5 text-xs outline-none focus:ring-2 focus:ring-blue-500 w-48"
          />
          <div class="text-right hidden sm:block">
            <p class="text-xs font-semibold text-gray-800 leading-none">{{ adminEmail?.split('@')[0] }}</p>
            <p class="text-[10px] text-gray-400">Super Administrator</p>
          </div>
          <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
            {{ adminEmail?.charAt(0).toUpperCase() ?? 'A' }}
          </div>
        </div>
      </header>

      <!-- PAGE BODY -->
      <main class="flex-1 px-4 md:px-6 py-6 max-w-4xl">

        <!-- Header -->
        <div class="mb-6">
          <h2 class="text-xl font-extrabold text-gray-900">Upload New Course</h2>
          <p class="text-xs text-gray-400 mt-1">Share high-quality educational content for the DigitalEd Hub community.</p>
        </div>

        <!-- Success / Error messages -->
        <div v-if="successMsg" class="mb-4 bg-green-50 border border-green-200 text-green-700 text-xs rounded-lg px-4 py-3">
          {{ successMsg }}
        </div>
        <div v-if="errorMsg" class="mb-4 bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg px-4 py-3">
          {{ errorMsg }}
        </div>

        <!-- FORM CARD -->
        <div class="bg-white border border-gray-100 rounded-xl shadow-sm p-6 space-y-6">

          <!-- GENERAL INFORMATION -->
          <div>
            <h3 class="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">General Information</h3>
            <div class="flex flex-col gap-4">

              <div>
                <label class="text-xs text-gray-500 font-medium mb-1 block">Course Title</label>
                <input
                  v-model="form.title"
                  placeholder="e.g. Advanced UI Design Patterns"
                  class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="text-xs text-gray-500 font-medium mb-1 block">Category</label>
                  <input
                    v-model="form.category"
                    placeholder="e.g. Design"
                    class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
                <div>
                  <label class="text-xs text-gray-500 font-medium mb-1 block">Price (₦)</label>
                  <input
                    v-model="form.price"
                    type="number"
                    placeholder="0.00"
                    class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
              </div>

              <div>
                <label class="text-xs text-gray-500 font-medium mb-1 block">Description</label>
                <textarea
                  v-model="form.description"
                  placeholder="Describe what students will learn in this course..."
                  class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition h-28 resize-none"
                />
              </div>

            </div>
          </div>

          <!-- MEDIA UPLOADS -->
          <div>
            <h3 class="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">Media</h3>
            <div class="grid md:grid-cols-2 gap-4">

              <!-- Thumbnail -->
              <div class="border border-gray-200 rounded-xl p-4">
                <p class="text-xs font-semibold text-gray-700 mb-3">Course Thumbnail</p>
                <label
                  class="border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center py-8 cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-colors"
                  :class="thumbnailPreview ? 'border-blue-400' : ''"
                >
                  <input type="file" accept="image/*" class="hidden" @change="handleThumbnail"/>
                  <img v-if="thumbnailPreview" :src="thumbnailPreview" class="w-full h-24 object-cover rounded-lg mb-2"/>
                  <svg v-else class="w-8 h-8 text-gray-300 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <p class="text-xs text-gray-400">{{ thumbnailPreview ? 'Click to change' : 'Click to upload' }}</p>
                  <p class="text-[10px] text-gray-300 mt-0.5">PNG, JPG up to 5MB</p>
                </label>
              </div>

              <!-- Video / Materials -->
              <div class="border border-gray-200 rounded-xl p-4">
                <p class="text-xs font-semibold text-gray-700 mb-3">Course Video or Materials</p>
                <label
                  class="border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center py-8 cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-colors"
                  :class="materialFile ? 'border-blue-400' : ''"
                >
                  <input type="file" accept="video/*,.pdf,.zip,.docx" class="hidden" @change="handleMaterial"/>
                  <svg class="w-8 h-8 mb-2" :class="materialFile ? 'text-blue-500' : 'text-gray-300'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                  </svg>
                  <p class="text-xs text-gray-400">{{ materialFile ? materialFile.name : 'Upload Video or Course Content' }}</p>
                  <p class="text-[10px] text-gray-300 mt-0.5">MP4, PDF, ZIP, DOCX</p>
                </label>
              </div>

            </div>
          </div>

          <!-- VISIBILITY -->
          <div>
            <h3 class="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">Visibility Settings</h3>
            <div class="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
              <div>
                <p class="text-sm font-medium text-gray-700">Publication Status</p>
                <p class="text-xs text-gray-400 mt-0.5">Control course visibility before publishing</p>
              </div>
              <div class="flex bg-white border border-gray-200 rounded-lg p-1 text-xs gap-1">
                <button
                  @click="form.status = 'draft'"
                  class="px-4 py-1.5 rounded-md font-semibold transition-all"
                  :class="form.status === 'draft' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'"
                >
                  Draft
                </button>
                <button
                  @click="form.status = 'published'"
                  class="px-4 py-1.5 rounded-md font-semibold transition-all"
                  :class="form.status === 'published' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'"
                >
                  Published
                </button>
              </div>
            </div>
          </div>

          <!-- ACTIONS -->
          <div class="flex justify-end gap-3 pt-4 border-t border-gray-100">
            <NuxtLink to="/admin/courses" class="text-sm text-gray-500 hover:text-gray-700 px-4 py-2 transition-colors">
              Cancel
            </NuxtLink>
            <button
              @click="saveCourse"
              :disabled="isSaving"
              class="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-semibold px-6 py-2 rounded-lg transition-colors flex items-center gap-2"
            >
              <svg v-if="isSaving" class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
              </svg>
              {{ isSaving ? 'Saving...' : 'Save Course' }}
            </button>
          </div>

        </div>

      </main>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

definePageMeta({ layout: false }) // ✅ prevents default layout wrapping

const supabase    = useSupabaseClient()
const config      = useRuntimeConfig()
const adminEmail  = config.public.adminEmail ?? ''
const sidebarOpen = ref(false)
const search      = ref('')
const isSaving    = ref(false)
const successMsg  = ref('')
const errorMsg    = ref('')

const thumbnailPreview = ref<string | null>(null)
const thumbnailFile    = ref<File | null>(null)
const materialFile     = ref<File | null>(null)

const form = ref({
  title:       '',
  category:    '',
  price:       '',
  description: '',
  status:      'draft' as 'draft' | 'published',
})

// ✅ Redirect non-admins
onMounted(async () => {
  const result = await $fetch<{ isAdmin: boolean }>('/api/admin-check')
  if (!result.isAdmin) await navigateTo('/admin/login')
})

function handleThumbnail(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  thumbnailFile.value    = file
  thumbnailPreview.value = URL.createObjectURL(file)
}

function handleMaterial(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  materialFile.value = file
}

async function saveCourse() {
  errorMsg.value   = ''
  successMsg.value = ''

  if (!form.value.title || !form.value.category || !form.value.price) {
    errorMsg.value = 'Please fill in Title, Category and Price before saving.'
    return
  }

  isSaving.value = true

  try {
    // ✅ Upload thumbnail
    let thumbnailUrl = ''
    if (thumbnailFile.value) {
      const fd = new FormData()
      fd.append('file', thumbnailFile.value)
      fd.append('upload_preset', 'digitaled_hub')

      const res  = await fetch('https://api.cloudinary.com/v1_1/duisso2y3/image/upload', {
        method: 'POST',
        body:   fd,
      })
      const data = await res.json()
      if (data.error) throw new Error('Thumbnail upload failed: ' + data.error.message)
      thumbnailUrl = data.secure_url ?? ''
    }

    // ✅ Upload video — use 'auto' not 'video' so it handles all file types
    let videoUrl = ''
    if (materialFile.value) {
      const fd = new FormData()
      fd.append('file', materialFile.value)
      fd.append('upload_preset', 'digitaled_hub')

      const res  = await fetch('https://api.cloudinary.com/v1_1/duisso2y3/auto/upload', { // ✅ auto instead of video
        method: 'POST',
        body:   fd,
      })
      const data = await res.json()
      console.log('Cloudinary video response:', data) // ✅ debug log
      if (data.error) throw new Error('Video upload failed: ' + data.error.message)
      videoUrl = data.secure_url ?? ''
    }

    // ✅ Save to Supabase
    const { error } = await supabase.from('courses').insert({
      title:       form.value.title,
      category:    form.value.category,
      price:       Number(form.value.price),
      description: form.value.description,
      status:      form.value.status,
      thumbnail:   thumbnailUrl,
      video_url:   videoUrl,
    })

    if (error) throw error

    successMsg.value = 'Course saved successfully!'
    form.value = { title: '', category: '', price: '', description: '', status: 'draft' }
    thumbnailPreview.value = null
    thumbnailFile.value    = null
    materialFile.value     = null

  } catch (e: any) {
    errorMsg.value = e.message ?? 'Failed to save course. Please try again.'
    console.error('saveCourse error:', e)
  }

  isSaving.value = false
}

async function handleLogout() {
  await $fetch('/api/admin-logout', { method: 'POST' })
  await supabase.auth.signOut()
  await navigateTo('/admin/login')
}
</script>