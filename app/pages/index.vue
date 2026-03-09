<template>
<div>

<!-- HERO SECTION -->
<section class="min-h-screen bg-gray-50 flex items-center">
  <div class="max-w-7xl mx-auto px-6 md:px-12 w-full py-20 md:py-0">
    <div class="grid md:grid-cols-2 gap-12 items-center">

      <!-- LEFT -->
      <div class="flex flex-col gap-6">

        <span class="bg-blue-100 text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full w-fit">
          For Educators, By Educators
        </span>

        <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Learn. Teach. Earn.<br>
          <span class="text-blue-600">The Educator's</span><br>
          <span class="text-blue-600">Community</span>
        </h1>

        <p class="text-gray-500 max-w-md">
          DigitalEd Hub gives educators the tools, courses and community
          to teach online and earn consistently.
        </p>

        <div class="flex gap-4 flex-wrap">

          <!-- ✅ Smart button: /courses if logged in, /register if not -->
          <button
            @click="exploreCourses"
            class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Explore Courses →
          </button>

          <!-- ✅ Smart button: same logic -->
          <button
            @click="exploreCourses"
            class="border border-gray-300 hover:border-gray-400 text-gray-800 text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            See How It Works
          </button>

        </div>

      </div>

      <!-- RIGHT IMAGE -->
      <div class="flex justify-center md:justify-end">
        <div class="rounded-3xl overflow-hidden shadow-lg max-w-md">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
            class="w-full h-full object-cover"
            alt="Educators in a classroom"
          >
        </div>
      </div>

    </div>
  </div>
</section>


<!-- FEATURED COURSES COMPONENT -->

<!-- TESTIMONIALS SECTION COMPONENT -->

<!-- NEWSLETTER COMPONENT -->


</div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()

function exploreCourses() {
  if (user.value) {
    navigateTo('/courses')    // ✅ logged in  → go straight to courses
  } else {
    navigateTo('/register')   // ✅ not logged in → go to register
  }
}
</script>