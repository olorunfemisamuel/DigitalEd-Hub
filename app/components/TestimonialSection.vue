<template>


<!-- ═══════════════════════════════════════
       TRUSTED BY EDUCATORS — TESTIMONIALS
  ════════════════════════════════════════ -->
  <section class="bg-gray-50 py-20">
    <div class="max-w-7xl mx-auto px-6 md:px-12">

      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-3">Trusted by Educators Worldwide</h2>
        <p class="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
          Join a growing community of thousands of teachers who have transformed
          their teaching careers through EduTrain.
        </p>
      </div>

      <!-- Testimonial Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <!-- Card 1 -->
        <div class="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
          <!-- Stars -->
          <div class="flex items-center gap-1 mb-5">
            <svg v-for="i in 5" :key="i" class="w-4 h-4 fill-gray-300" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <!-- Quote -->
          <p class="text-gray-700 text-sm leading-relaxed mb-6">
            "DigitalEd Hub completely changed how I approach my virtual classroom. The strategies I learned from Mrs. Ufedo Obochi were immediately applicable and my students love the new tools."
          </p>
          <!-- Author -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
            <div>
              <p class="text-gray-900 font-semibold text-sm">Mariam Yusuf</p>
              <p class="text-gray-400 text-xs">High School Teacher, Lagos</p>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
          <!-- Stars -->
          <div class="flex items-center gap-1 mb-5">
            <svg v-for="i in 5" :key="i" class="w-4 h-4 fill-gray-300" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <!-- Quote -->
          <p class="text-gray-700 text-sm leading-relaxed mb-6">
            "The curriculum design course is world-class. It gave me the framework I needed to redesign our department's entire syllabus for the new academic year."
          </p>
          <!-- Author -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
            <div>
              <p class="text-gray-900 font-semibold text-sm">David Chen</p>
              <p class="text-gray-400 text-xs">Head of Academics, Nairobi</p>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
          <!-- Stars -->
          <div class="flex items-center gap-1 mb-5">
            <svg v-for="i in 5" :key="i" class="w-4 h-4 fill-gray-300" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <!-- Quote -->
          <p class="text-gray-700 text-sm leading-relaxed mb-6">
            "Finally, a professional development platform that actually understands the modern teacher's workload. High quality, bite-sized lessons that make sense."
          </p>
          <!-- Author -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
            <div>
              <p class="text-gray-900 font-semibold text-sm">Amara Diofor</p>
              <p class="text-gray-400 text-xs">Primary School Lead, Abuja</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>