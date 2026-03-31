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

        <div class="hidden md:flex items-center gap-6">
          <NuxtLink to="/courses" class="text-gray-600 text-sm hover:text-blue-600 transition-colors">Courses</NuxtLink>
          <NuxtLink to="/community" class="text-gray-600 text-sm hover:text-blue-600 transition-colors">Community</NuxtLink>
          <NuxtLink to="/resources" class="text-blue-600 text-sm font-semibold">Resources</NuxtLink>
        </div>

        <div class="flex items-center gap-3">
          <template v-if="!user">
            <NuxtLink to="/login" class="text-gray-600 text-sm hover:text-blue-600">Login</NuxtLink>
            <NuxtLink to="/register" class="bg-blue-600 text-white text-sm font-semibold px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </NuxtLink>
          </template>
          <template v-else>
            <NuxtLink to="/dashboard" class="text-gray-600 text-sm hover:text-blue-600 transition-colors">Dashboard</NuxtLink>
            <div class="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
              {{ user.email?.charAt(0).toUpperCase() }}
            </div>
          </template>
        </div>
      </div>
    </header>

    <!-- MAIN -->
    <main class="flex-1 max-w-7xl mx-auto w-full px-6 py-8">

      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Resource Library</h1>
        <p class="text-gray-400 text-sm mt-1">Download lesson plans, templates, and study guides.</p>
      </div>

      <!-- Search + Filter -->
      <div class="flex flex-col sm:flex-row gap-3 mb-6">
        <div class="relative flex-1">
          <div class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search resources..."
            class="w-full bg-white border border-gray-200 pl-11 pr-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-blue-300"
          />
        </div>

        <!-- Filter tabs -->
        <div class="flex gap-2 overflow-x-auto">
          <button
            v-for="type in filterTypes"
            :key="type"
            @click="activeFilter = type"
            :class="activeFilter === type
              ? 'bg-blue-600 text-white'
              : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'"
            class="text-xs font-semibold px-4 py-2.5 rounded-xl whitespace-nowrap transition-colors"
          >
            {{ type }}
          </button>
        </div>
      </div>

      <!-- Loading -->
      <div v-if="isLoading" class="flex justify-center py-20">
        <div class="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"/>
      </div>

      <!-- Empty -->
      <div v-else-if="filteredResources.length === 0" class="text-center py-20 text-gray-400 text-sm">
        No resources found.
      </div>

      <!-- Resource Grid -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="resource in filteredResources"
          :key="resource.id"
          class="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
        >
          <!-- File type icon + badge -->
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
              :class="fileTypeColor(resource.file_type)"
            >
              {{ resource.file_type.toUpperCase() }}
            </div>
            <div class="min-w-0">
              <p class="text-xs font-semibold text-gray-400 uppercase tracking-wide">{{ resource.category }}</p>
            </div>
          </div>

          <h3 class="font-semibold text-sm text-gray-900 mb-1 leading-snug">{{ resource.title }}</h3>
          <p class="text-xs text-gray-400 mb-4 line-clamp-2 leading-relaxed">{{ resource.description }}</p>

          <div class="flex items-center justify-between">
            <span class="text-xs text-gray-400">{{ resource.file_size }}</span>
            
              <a :href="resource.file_url"
              target="_blank"
              download
              class="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
            >
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download
            </a>
          </div>
        </div>
      </div>

    </main>

    <footer class="text-center py-6 text-xs text-gray-400">
      © 2026 DigitalEd Hub. All rights reserved.
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

definePageMeta({ layout: false })

const supabase = useSupabaseClient()
const user     = useSupabaseUser()

const isLoading   = ref(true)
const searchQuery = ref('')
const activeFilter = ref('All')

const filterTypes = ['All', 'PDF', 'DOCX', 'PPTX', 'XLSX']

interface Resource {
  id:          string
  title:       string
  description: string
  file_url:    string
  file_type:   string
  file_size:   string
  category:    string
  created_at:  string
}

const resources = ref<Resource[]>([])

onMounted(async () => {
  const { data, error } = await supabase
    .from('resources')
    .select('*')
    .order('created_at', { ascending: false })

  if (!error) resources.value = data ?? []
  isLoading.value = false
})

const filteredResources = computed(() => {
  let list = resources.value

  if (activeFilter.value !== 'All') {
    list = list.filter(r => r.file_type.toLowerCase() === activeFilter.value.toLowerCase())
  }

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    list = list.filter(r =>
      r.title.toLowerCase().includes(q) ||
      r.description?.toLowerCase().includes(q) ||
      r.category?.toLowerCase().includes(q)
    )
  }

  return list
})

function fileTypeColor(type: string): string {
  const map: Record<string, string> = {
    pdf:  'bg-red-500',
    docx: 'bg-blue-500',
    pptx: 'bg-orange-500',
    xlsx: 'bg-green-600',
  }
  return map[type.toLowerCase()] ?? 'bg-gray-400'
}
</script>