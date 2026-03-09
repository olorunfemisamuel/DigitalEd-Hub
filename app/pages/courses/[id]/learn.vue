```vue
<template>
<div class="min-h-screen bg-gray-50 flex flex-col">

<!-- =========================
NAVBAR
========================= -->

<header class="bg-white border-b border-gray-200">
<div class="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">

<!-- LEFT -->

<div class="flex items-center gap-6">

<NuxtLink to="/" class="flex items-center gap-2">

<div class="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
<div class="grid grid-cols-2 gap-[2px]">
<div class="w-2 h-2 bg-white rounded-sm"></div>
<div class="w-2 h-2 bg-white/80 rounded-sm"></div>
<div class="w-2 h-2 bg-white/80 rounded-sm"></div>
<div class="w-2 h-2 bg-white/60 rounded-sm"></div>
</div>
</div>

<span class="font-semibold text-gray-900 text-sm">DigitalEdHub</span>

</NuxtLink>

<nav class="hidden md:flex items-center gap-5 text-sm">

<NuxtLink to="/courses" class="text-gray-600 hover:text-gray-900">
My Courses
</NuxtLink>

<NuxtLink to="/community" class="text-gray-600 hover:text-gray-900">
Explore
</NuxtLink>

</nav>

</div>

<!-- RIGHT -->

<div class="flex items-center gap-3">

<!-- SEARCH -->

<div class="hidden sm:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1.5 w-44 md:w-56">

<svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<circle cx="11" cy="11" r="8"/>
<line x1="21" y1="21" x2="16.65" y2="16.65"/>
</svg>

<input
placeholder="Search lessons..."
class="bg-transparent outline-none text-sm w-full text-gray-500"
/>

</div>

<img src="https://i.pravatar.cc/40?img=5" class="w-8 h-8 rounded-full"/>

</div>

</div>
</header>


<!-- =========================
MAIN LAYOUT
========================= -->

<div class="flex flex-1 flex-col lg:flex-row">

<!-- =========================
VIDEO + LESSON CONTENT
========================= -->

<main class="flex-1 p-4 sm:p-6">

<!-- VIDEO PLAYER -->

<div class="bg-black rounded-lg overflow-hidden aspect-video relative">

<video
ref="videoEl"
class="w-full h-full object-contain"
@timeupdate="onTimeUpdate"
@loadedmetadata="onMetaLoaded"
>
<source src="https://www.w3schools.com/html/mov_bbb.mp4"/>
</video>

<!-- PLAY BUTTON -->

<button
v-if="!isPlaying"
@click="togglePlay"
class="absolute inset-0 flex items-center justify-center"
>

<div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600 flex items-center justify-center">

<svg class="w-5 h-5 sm:w-6 sm:h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
<polygon points="5,3 19,12 5,21"/>
</svg>

</div>

</button>

<!-- VIDEO CONTROLS -->

<div class="absolute bottom-0 left-0 right-0 bg-black/70 px-4 py-3">

<div
class="h-1 bg-white/40 rounded mb-3 cursor-pointer"
@click="seekTo"
>

<div
class="h-1 bg-blue-500 rounded"
:style="{ width: progressPercent + '%' }"
></div>

</div>

<div class="flex items-center justify-between text-white text-xs">

<div class="flex items-center gap-3">

<button @click="togglePlay">

<svg v-if="!isPlaying" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
<polygon points="5,3 19,12 5,21"/>
</svg>

<svg v-else class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
<rect x="6" y="4" width="4" height="16"/>
<rect x="14" y="4" width="4" height="16"/>
</svg>

</button>

<span>{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</span>

</div>

<button @click="toggleFullscreen">

<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<polyline points="15 3 21 3 21 9"/>
<polyline points="9 21 3 21 3 15"/>
</svg>

</button>

</div>

</div>

</div>


<!-- LESSON HEADER -->

<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">

<div>

<h1 class="text-lg font-semibold text-gray-900">
Introduction to Digital Teaching
</h1>

<p class="text-sm text-gray-500">Dr. Sarah Chen</p>

</div>

<button
class="bg-green-600 text-white text-sm px-4 py-2 rounded-md font-medium w-full sm:w-auto"
>

Mark as Complete

</button>

</div>


<!-- TABS -->

<div class="flex gap-6 border-b mt-6 text-sm overflow-x-auto">

<button
@click="activeTab = 'Overview'"
:class="activeTab === 'Overview'
? 'text-blue-600 border-b-2 border-blue-600 pb-2'
: 'text-gray-500 pb-2'"
>

Overview

</button>

<button
@click="activeTab = 'Notes'"
:class="activeTab === 'Notes'
? 'text-blue-600 border-b-2 border-blue-600 pb-2'
: 'text-gray-500 pb-2'"
>

Notes

</button>

</div>


<!-- TAB CONTENT -->

<div class="mt-5 text-sm text-gray-600 leading-relaxed max-w-3xl">

<div v-if="activeTab === 'Overview'">

<h3 class="font-semibold text-gray-900 mb-2">
About this lesson
</h3>

<p>
This lesson covers the fundamentals of digital teaching,
focusing on pedagogy and technology integration in the modern classroom.
</p>

<ul class="mt-3 space-y-1 list-disc ml-5">

<li>Understanding the digital native landscape</li>
<li>Mapping pedagogy to modern tools</li>
<li>Creating a sustainable digital workflow</li>

</ul>

</div>

<div v-if="activeTab === 'Notes'">

<textarea
v-model="notes"
placeholder="Write notes..."
class="w-full border rounded-lg p-3"
/>

</div>

</div>

</main>


<!-- =========================
SIDEBAR
========================= -->

<aside
class="w-full lg:w-[320px] border-t lg:border-t-0 lg:border-l bg-white flex flex-col"
>

<!-- HEADER -->

<div class="p-5 border-b">

<h2 class="font-semibold text-gray-900 text-sm mb-2">
Full Stack Educator Masterclass
</h2>

<div class="flex justify-between text-xs text-gray-500 mb-2">

<span>{{ completedCount }} of {{ lessons.length }} lessons completed</span>

<span>{{ Math.round((completedCount/lessons.length)*100) }}%</span>

</div>

<div class="h-1 bg-gray-200 rounded">

<div
class="h-1 bg-blue-600 rounded"
:style="{ width: (completedCount/lessons.length*100)+'%' }"
></div>

</div>

</div>


<!-- LESSON LIST -->

<div class="flex-1 overflow-y-auto max-h-[50vh] lg:max-h-none">

<div
v-for="lesson in lessons"
:key="lesson.id"
@click="selectLesson(lesson)"
class="flex items-center gap-3 px-5 py-4 border-b cursor-pointer hover:bg-gray-50"
:class="currentLesson.id === lesson.id ? 'bg-gray-100' : ''"
>

<div class="w-5 h-5 rounded-full border flex items-center justify-center text-xs">

<span v-if="lesson.completed">✓</span>

</div>

<div>

<p class="text-sm font-medium text-gray-800">

{{ lesson.id }}. {{ lesson.title }}

</p>

<p class="text-xs text-gray-400">

{{ lesson.duration }}

</p>

</div>

</div>

</div>

</aside>

</div>

</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({ layout:false })

const videoEl = ref<HTMLVideoElement | null>(null)

const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)

const activeTab = ref('Overview')
const notes = ref('')

const lessons = ref([
{id:1,title:'Course Foundations',duration:'12:30',completed:true},
{id:2,title:'Hardware Essentials',duration:'10:15',completed:true},
{id:3,title:'Setting up your Studio',duration:'04:32',completed:false},
{id:4,title:'Engaging your Students',duration:'05:15',completed:false},
{id:5,title:'Content Planning',duration:'22:00',completed:false}
])

const currentLesson = ref(lessons.value[2]!)

const completedCount = computed(() =>
lessons.value.filter(l=>l.completed).length
)

const progressPercent = computed(() =>
duration.value ? (currentTime.value/duration.value)*100 : 0
)

function togglePlay(){
if(!videoEl.value) return
if(isPlaying.value){
videoEl.value.pause()
isPlaying.value=false
}else{
videoEl.value.play()
isPlaying.value=true
}
}

function onTimeUpdate(){
if(videoEl.value) currentTime.value = videoEl.value.currentTime
}

function onMetaLoaded(){
if(videoEl.value) duration.value = videoEl.value.duration
}

function seekTo(e:MouseEvent){
const bar = e.currentTarget as HTMLElement
const rect = bar.getBoundingClientRect()
const ratio = (e.clientX-rect.left)/rect.width
if(videoEl.value) videoEl.value.currentTime = ratio*duration.value
}

function toggleFullscreen(){
videoEl.value?.requestFullscreen()
}

function formatTime(secs:number){
const m=Math.floor(secs/60)
const s=Math.floor(secs%60)
return `${m}:${s.toString().padStart(2,'0')}`
}

function selectLesson(lesson:any){
currentLesson.value=lesson
}
</script>
```
