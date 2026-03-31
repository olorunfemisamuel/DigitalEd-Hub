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
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          Community
        </NuxtLink>
        <!-- <NuxtLink to="/admin/resources" @click="sidebarOpen = false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-50 text-blue-600 text-sm font-semibold">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
          Resources
        </NuxtLink> -->
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

      <header class="bg-white border-b border-gray-100 h-14 flex items-center justify-between px-4 md:px-6 sticky top-0 z-30">
        <div class="flex items-center gap-3">
          <button @click="sidebarOpen = true" class="md:hidden text-gray-500">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
          <h1 class="text-sm font-semibold text-gray-800">Resource Library</h1>
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

      <main class="flex-1 px-4 md:px-6 py-6">

        <div class="flex items-center justify-between mb-6">
          <div>
            <h2 class="text-2xl font-extrabold text-gray-900">Resources</h2>
            <p class="text-sm text-gray-500 mt-1">Upload and manage files for your students.</p>
          </div>
          <button
            @click="showUploadForm = !showUploadForm"
            class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
            </svg>
            Add Resource
          </button>
        </div>

        <!-- Upload Form -->
        <Transition name="fade">
          <div v-if="showUploadForm" class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-6">
            <h3 class="text-sm font-bold text-gray-900 mb-4">Upload New Resource</h3>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label class="text-xs font-semibold text-gray-500 mb-1 block">Title *</label>
                <input
                  v-model="form.title"
                  type="text"
                  placeholder="e.g. Lesson Plan Template"
                  class="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label class="text-xs font-semibold text-gray-500 mb-1 block">Category</label>
                <input
                  v-model="form.category"
                  type="text"
                  placeholder="e.g. Templates, Guides"
                  class="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div class="mb-4">
              <label class="text-xs font-semibold text-gray-500 mb-1 block">Description</label>
              <textarea
                v-model="form.description"
                rows="2"
                placeholder="Brief description of this resource..."
                class="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <!-- File upload -->
            <div class="mb-4">
              <label class="text-xs font-semibold text-gray-500 mb-1 block">File *</label>
              <label class="flex items-center gap-3 border-2 border-dashed border-gray-200 rounded-xl px-5 py-4 cursor-pointer hover:border-blue-400 transition-colors">
                <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/>
                  <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                <div>
                  <p class="text-sm font-semibold text-gray-700">
                    {{ selectedFile ? selectedFile.name : 'Choose file' }}
                  </p>
                  <p class="text-xs text-gray-400">PDF, DOCX, PPTX, XLSX supported</p>
                </div>
                <input
                  type="file"
                  accept=".pdf,.docx,.pptx,.xlsx,.xls,.doc,.ppt"
                  class="hidden"
                  @change="onFileSelected"
                />
              </label>
            </div>

            <!-- Upload progress -->
            <div v-if="uploadProgress > 0 && uploadProgress < 100" class="mb-4">
              <div class="flex justify-between text-xs text-gray-500 mb-1">
                <span>Uploading...</span>
                <span>{{ uploadProgress }}%</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div class="h-2 bg-blue-600 rounded-full transition-all" :style="{ width: uploadProgress + '%' }"/>
              </div>
            </div>

            <p v-if="uploadError" class="text-xs text-red-500 mb-3">{{ uploadError }}</p>
            <p v-if="uploadSuccess" class="text-xs text-green-600 mb-3">{{ uploadSuccess }}</p>

            <div class="flex gap-3">
              <button
                @click="uploadResource"
                :disabled="isUploading || !form.title || !selectedFile"
                class="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2"
              >
                <svg v-if="isUploading" class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                </svg>
                {{ isUploading ? 'Uploading...' : 'Upload Resource' }}
              </button>
              <button
                @click="resetForm"
                class="border border-gray-200 text-gray-600 text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </Transition>

        <!-- Loading -->
        <div v-if="isLoading" class="flex justify-center py-20">
          <div class="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"/>
        </div>

        <!-- Empty -->
        <div v-else-if="resources.length === 0" class="text-center py-20 text-gray-400 text-sm">
          No resources yet. Click "Add Resource" to upload your first file.
        </div>

        <!-- Resources table -->
        <div v-else class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-100">
                <th class="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-widest">File</th>
                <th class="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-widest hidden md:table-cell">Category</th>
                <th class="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-widest hidden md:table-cell">Size</th>
                <th class="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="resource in resources" :key="resource.id" class="hover:bg-gray-50 transition-colors">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div
                      class="w-9 h-9 rounded-xl flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                      :class="fileTypeColor(resource.file_type)"
                    >
                      {{ resource.file_type.toUpperCase() }}
                    </div>
                    <div>
                      <p class="font-semibold text-sm text-gray-900">{{ resource.title }}</p>
                      <p class="text-xs text-gray-400 line-clamp-1">{{ resource.description }}</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 hidden md:table-cell">
                  <span class="text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                    {{ resource.category || 'General' }}
                  </span>
                </td>
                <td class="px-6 py-4 hidden md:table-cell text-xs text-gray-500">{{ resource.file_size }}</td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    
                     <a :href="resource.file_url"
                      target="_blank"
                      class="text-blue-600 hover:text-blue-700 text-xs font-semibold"
                    >
                      View
                    </a>
                    <button
                      @click="deleteResource(resource)"
                      :disabled="deletingId === resource.id"
                      class="flex items-center gap-1 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-colors disabled:opacity-50"
                    >
                      <svg v-if="deletingId === resource.id" class="w-3 h-3 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                      </svg>
                      <svg v-else class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                      </svg>
                      {{ deletingId === resource.id ? '...' : 'Delete' }}
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </div>

    <!-- Delete confirm modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="confirmResource" class="fixed inset-0 bg-black/40 z-[80] flex items-center justify-center px-4">
          <div class="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm">
            <h3 class="font-bold text-gray-900 mb-2">Delete this resource?</h3>
            <p class="text-sm text-gray-700 bg-gray-50 rounded-lg p-3 mb-4">{{ confirmResource.title }}</p>
            <p class="text-xs text-red-500 mb-5">Students will no longer be able to download this file. This cannot be undone.</p>
            <div class="flex gap-3">
              <button @click="confirmResource = null" class="flex-1 border border-gray-200 text-gray-700 text-sm font-semibold py-2.5 rounded-xl hover:bg-gray-50">
                Cancel
              </button>
              <button @click="confirmDelete" :disabled="deletingId !== null" class="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2.5 rounded-xl disabled:opacity-60">
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
import { ref, onMounted } from 'vue'

definePageMeta({ layout: false })

const config     = useRuntimeConfig()
const adminEmail = config.public.adminEmail as string
const sidebarOpen = ref(false)

const isLoading     = ref(true)
const showUploadForm = ref(false)
const isUploading   = ref(false)
const uploadProgress = ref(0)
const uploadError   = ref('')
const uploadSuccess = ref('')
const deletingId    = ref<string | null>(null)
const confirmResource = ref<Resource | null>(null)

interface Resource {
  id:          string
  title:       string
  description: string
  file_url:    string
  file_type:   string
  file_size:   string
  category:    string
}

const resources  = ref<Resource[]>([])
const selectedFile = ref<File | null>(null)

const form = ref({
  title:       '',
  description: '',
  category:    '',
})

onMounted(async () => {
  await loadResources()
  isLoading.value = false
})

async function loadResources() {
  const data = await $fetch<Resource[]>('/api/admin-resources')
  resources.value = data ?? []
}

function onFileSelected(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  selectedFile.value = file
}

function fileTypeColor(type: string): string {
  const map: Record<string, string> = {
    pdf:  'bg-red-500',
    docx: 'bg-blue-500',
    pptx: 'bg-orange-500',
    xlsx: 'bg-green-600',
  }
  return map[type.toLowerCase()] ?? 'bg-gray-400'
}

function getFileType(filename: string): string {
  const ext = filename.split('.').pop()?.toLowerCase() ?? ''
  if (['doc', 'docx'].includes(ext)) return 'docx'
  if (['ppt', 'pptx'].includes(ext)) return 'pptx'
  if (['xls', 'xlsx'].includes(ext)) return 'xlsx'
  return ext
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024)        return bytes + ' B'
  if (bytes < 1048576)     return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / 1048576).toFixed(1) + ' MB'
}

// ✅ Upload to Cloudinary then save to Supabase
async function uploadResource() {
  if (!selectedFile.value || !form.value.title) return

  uploadError.value   = ''
  uploadSuccess.value = ''
  isUploading.value   = true
  uploadProgress.value = 0

  try {
    const file = selectedFile.value
    const fileType = getFileType(file.name)
    const fileSize = formatFileSize(file.size)

    // Upload to Cloudinary as raw file
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'digitaled_hub')
    formData.append('cloud_name', 'duisso2y3')
    formData.append('resource_type', 'raw')

    const uploadUrl = 'https://api.cloudinary.com/v1_1/duisso2y3/raw/upload'

    const fileUrl = await new Promise<string>((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open('POST', uploadUrl)

      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) uploadProgress.value = Math.round((e.loaded / e.total) * 100)
      }

      xhr.onload = () => {
        const res = JSON.parse(xhr.responseText)
        if (xhr.status === 200) resolve(res.secure_url)
        else reject(new Error(res.error?.message ?? 'Upload failed'))
      }

      xhr.onerror = () => reject(new Error('Upload failed'))
      xhr.send(formData)
    })

    // Save to Supabase via server route
    const result = await $fetch<{ resource: Resource }>('/api/admin-resources', {
      method: 'POST',
      body: {
        title:       form.value.title,
        description: form.value.description,
        category:    form.value.category || 'General',
        file_url:    fileUrl,
        file_type:   fileType,
        file_size:   fileSize,
      }
    })

    if (result.resource) {
      resources.value.unshift(result.resource)
      uploadSuccess.value = 'Resource uploaded successfully!'
      setTimeout(() => {
        resetForm()
      }, 2000)
    }

  } catch (err: any) {
    uploadError.value = 'Upload failed: ' + (err.message ?? 'Unknown error')
    console.error('Upload error:', err)
  }

  isUploading.value = false
}

function resetForm() {
  form.value = { title: '', description: '', category: '' }
  selectedFile.value   = null
  uploadProgress.value = 0
  uploadError.value    = ''
  uploadSuccess.value  = ''
  showUploadForm.value = false
}

function deleteResource(resource: Resource) {
  confirmResource.value = resource
}

async function confirmDelete() {
  if (!confirmResource.value) return
  const resource = confirmResource.value
  deletingId.value = resource.id

  try {
    await $fetch('/api/admin-resources', {
      method: 'POST',
      body: { action: 'delete', id: resource.id }
    })
    resources.value = resources.value.filter(r => r.id !== resource.id)
  } catch (e) {
    console.error('Delete failed:', e)
  }

  deletingId.value      = null
  confirmResource.value = null
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