<template>
  <div class="min-h-screen bg-white font-sans">

    <!-- NAVBAR -->
    <header class="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="5" height="5" rx="1" fill="white"/>
              <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
              <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
              <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.4"/>
            </svg>
          </div>
          <span class="font-bold text-blue-600 text-sm tracking-tight">DigitalEd Hub</span>
        </NuxtLink>

        <!-- Desktop nav links -->
        <nav class="hidden md:flex items-center gap-7">
          <NuxtLink to="/" class="text-gray-600 text-sm hover:text-blue-600 transition-colors">Home</NuxtLink>
          <NuxtLink to="/courses" class="text-gray-600 text-sm hover:text-blue-600 transition-colors">Courses</NuxtLink>
          <NuxtLink to="/community" class="text-gray-600 text-sm hover:text-blue-600 transition-colors">Community</NuxtLink>
          <NuxtLink to="/about" class="text-blue-600 text-sm font-semibold">About</NuxtLink>
        </nav>

        <!-- Desktop right -->
        <div class="hidden md:flex items-center gap-3">
          <template v-if="!user">
            <NuxtLink to="/login" class="text-gray-600 text-sm hover:text-blue-600 transition-colors">Login</NuxtLink>
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

        <!-- Mobile right: Get Started or Avatar + Hamburger -->
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

    <!-- MOBILE SIDEBAR -->
    <Teleport to="body">

      <Transition name="fade">
        <div
          v-if="sidebarOpen"
          class="fixed inset-0 bg-black/40 z-[60]"
          @click="closeMenu"
        />
      </Transition>

      <Transition name="slide">
        <div
          v-if="sidebarOpen"
          class="fixed top-0 right-0 h-full w-72 bg-white z-[70] shadow-2xl flex flex-col"
        >
          <!-- Sidebar header -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <NuxtLink to="/" @click="closeMenu" class="flex items-center gap-2">
              <div class="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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

          <!-- User info — logged in only -->
          <div v-if="user" class="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              {{ user.email?.charAt(0).toUpperCase() }}
            </div>
            <div class="min-w-0">
              <p class="text-sm font-semibold text-gray-900 truncate">{{ user.email }}</p>
              <p class="text-xs text-gray-400">Educator</p>
            </div>
          </div>

          <!-- Nav links -->
          <div class="flex flex-col px-6 py-4 gap-1 flex-1">
            <NuxtLink to="/" @click="closeMenu" class="text-sm text-gray-700 font-medium py-2.5 hover:text-blue-600 border-b border-gray-50">Home</NuxtLink>
            <NuxtLink to="/courses" @click="closeMenu" class="text-sm text-gray-700 font-medium py-2.5 hover:text-blue-600 border-b border-gray-50">Courses</NuxtLink>
            <NuxtLink to="/community" @click="closeMenu" class="text-sm text-gray-700 font-medium py-2.5 hover:text-blue-600 border-b border-gray-50">Community</NuxtLink>
            <NuxtLink to="/about" @click="closeMenu" class="text-sm text-blue-600 font-semibold py-2.5 border-b border-gray-50">About</NuxtLink>
          </div>

          <!-- Bottom auth -->
          <div class="px-6 py-4 border-t border-gray-100 flex flex-col gap-3">
            <template v-if="!user">
              <NuxtLink
                to="/login"
                @click="closeMenu"
                class="text-sm text-gray-700 font-medium hover:text-blue-600 transition-colors"
              >
                Login
              </NuxtLink>
              <NuxtLink
                to="/register"
                @click="closeMenu"
                class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors text-center"
              >
                Get Started
              </NuxtLink>
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

    <!-- FOUNDER SECTION -->
    <section class="max-w-7xl mx-auto px-6 py-16 md:py-20">

      <p class="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-6">Our Founder</p>

      <div class="grid md:grid-cols-2 gap-12 items-start">

        <!-- Left: Text -->
        <div>
          <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Meet Mrs. Ufedo Laura Obochi
          </h1>
          <p class="text-blue-600 text-sm font-medium italic mb-6">"We educate educators to teaching educators."</p>

          <div class="space-y-4 text-gray-500 text-sm leading-relaxed">
            <p>
              Mrs. Ufedo Laura Obochi is a pioneering force in digital education. With over 15 years of experience,
              she has dedicated her career to transforming the way teachers engage with digital tools. She believes
              that the best way to serve students is by empowering those who teach them.
            </p>
            <p>
              With a background in EdTech and Instructional Design, she founded DigitalEd Hub to give every
              educator — regardless of location or budget — access to world-class training and a thriving global
              community.
            </p>
          </div>

          <button class="mt-8 text-blue-600 text-sm font-semibold border border-blue-600 rounded-lg px-5 py-2.5 hover:bg-blue-50 transition-colors">
            ↓ Read full bio
          </button>
        </div>

        <!-- Right: Photo -->
        <div class="flex justify-center md:justify-end">
          <div class="w-full max-w-sm rounded-2xl overflow-hidden shadow-md">
            <img
              :src="mommaIMG"
              alt="Mrs. Ufedo Laura Obochi"
              class="w-full h-80 object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>

    <!-- OUR MISSION -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-6">

        <div class="flex items-center gap-2 mb-8">
          <div class="w-5 h-5 rounded bg-blue-600 flex items-center justify-center">
            <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
            </svg>
          </div>
          <h2 class="text-xl font-extrabold text-gray-900">Our Mission</h2>
        </div>

        <p class="text-gray-700 text-base italic font-medium max-w-3xl mb-12 leading-relaxed">
          "To empower educators worldwide with the tools, community, and knowledge to transform the future of
          their classrooms. We believe that by supporting teachers, we uplift the entire educational ecosystem."
        </p>

        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <p class="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2">Empowerment</p>
            <p class="text-gray-500 text-sm leading-relaxed">
              We provide educators with cutting-edge tools and resources that remove barriers and make
              world-class teaching accessible for everyone.
            </p>
          </div>
          <div>
            <p class="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2">Community</p>
            <p class="text-gray-500 text-sm leading-relaxed">
              A thriving global network where teachers collaborate, share ideas, and lift each other up.
              No educator should ever feel alone in their journey.
            </p>
          </div>
          <div>
            <p class="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2">Innovation</p>
            <p class="text-gray-500 text-sm leading-relaxed">
              We constantly evolve our platform to reflect the latest in pedagogy and technology, keeping
              our educators ahead of a fast-changing world.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- THE STORY BEHIND THE PLATFORM -->
    <section class="max-w-7xl mx-auto px-6 py-16 md:py-20">

      <div class="grid md:grid-cols-2 gap-12 items-center">

        <!-- Left: Story -->
        <div>
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            The Story Behind the Platform
          </h2>

          <div class="space-y-4 text-gray-500 text-sm leading-relaxed">
            <p>
              Mrs. Ufedo Laura Obochi spent years watching something painful unfold in classrooms around her —
              talented, passionate teachers burning out. Not from lack of love for the job, but from financial
              pressure, limited resources, and a system that gave so much yet returned so little.
            </p>
            <p>
              She believed teachers deserved better. That the same knowledge and skill they poured into their
              students every day could also build them a sustainable income online — on their own terms, from
              anywhere in the world.
            </p>
            <p>
              That belief became DigitalEd Hub. A platform built so educators can do exactly what its slogan
              promises:
            </p>
            <p class="text-blue-600 font-bold text-base tracking-wide">
              Learn. Teach. Earn.
            </p>
          </div>

          <NuxtLink
            to="/register"
            class="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Join Our Community →
          </NuxtLink>
        </div>

        <!-- Right: Image collage -->
        <div class="grid grid-cols-2 gap-3">
          <div class="rounded-xl overflow-hidden shadow-md col-span-2">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
              alt="Educators collaborating"
              class="w-full h-52 object-cover"
            />
          </div>
          <div class="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80"
              alt="Teaching online"
              class="w-full h-36 object-cover"
            />
          </div>
          <div class="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=400&q=80"
              alt="Students learning"
              class="w-full h-36 object-cover"
            />
          </div>
        </div>

      </div>
    </section>

    <!-- FOOTER -->
    <footer class="border-t border-gray-100 py-6">
      <p class="text-center text-gray-400 text-xs">© 2026 DigitalEd Hub. The Educators' Community.</p>
    </footer>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import mommaIMG from '~/assets/IMGS/mommaIMG.jpg'

definePageMeta({ layout: false })

const supabase    = useSupabaseClient()
const user        = useSupabaseUser()
const sidebarOpen = ref(false)

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