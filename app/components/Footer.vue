<template>
  <footer class="bg-white border-t border-gray-100">

    <!-- Top Section -->
    <div class="max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

      <!-- Brand Column -->
      <div class="lg:col-span-2 flex flex-col gap-4">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 w-fit">
          <div class="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="5" height="5" rx="1" fill="white"/>
              <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
              <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
              <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.4"/>
            </svg>
          </div>
          <span class="text-blue-600 font-bold text-base tracking-tight">DigitalEd Hub</span>
        </NuxtLink>

        <!-- Tagline -->
        <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
           DigitalEd Hub gives educators the tools,
            courses and community to teach online
            and earn consistently.
        </p>

        <!-- Social Icons -->
        <div class="flex items-center gap-3 mt-1">
          <!-- Instagram / Community -->
           <a
      href="https://www.instagram.com/digitaledhub/?hl=en"
      target="_blank"
      aria-label="Instagram"
      class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-300 transition-colors duration-200"
    >
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.5A5.5 5.5 0 1017.5 13 5.507 5.507 0 0012 7.5zm0 9A3.5 3.5 0 1115.5 13 3.504 3.504 0 0112 16.5zM18 6.75a1.25 1.25 0 10-1.25-1.25A1.25 1.25 0 0018 6.75z"/>
      </svg>
    </a>
          <!-- Whatsapp -->
          <a href="#" class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-300 transition-colors duration-200">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
              <polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
            </svg>
          </a>
          <!-- Email -->
          <a href="#" class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-300 transition-colors duration-200">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Platform Links -->
      <div class="flex flex-col gap-4">
        <h4 class="text-gray-900 font-semibold text-sm">Platform</h4>
        <ul class="flex flex-col gap-3">
          <li><NuxtLink to="/courses" class="text-gray-400 text-sm hover:text-gray-700 transition-colors duration-200">All Courses</NuxtLink></li>
          <li><a href ="#" class="text-gray-400 text-sm hover:text-gray-700 transition-colors duration-200">Free Resources</a></li>
          <li><a href ="#" class="text-gray-400 text-sm hover:text-gray-700 transition-colors duration-200">For Schools</a></li>
          <li><a href ="#" class="text-gray-400 text-sm hover:text-gray-700 transition-colors duration-200">Pricing Plans</a></li>
        </ul>
      </div>

      <!-- Company Links -->
      <div class="flex flex-col gap-4">
        <h4 class="text-gray-900 font-semibold text-sm">Company</h4>
        <ul class="flex flex-col gap-3">
          <li><NuxtLink to="/about" class="text-gray-400 text-sm hover:text-gray-700 transition-colors duration-200">About Us</NuxtLink></li>
          <li><a href = # class="text-gray-400 text-sm hover:text-gray-700 transition-colors duration-200">Our Mentors</a></li>
          <li><a href = #  class="text-gray-400 text-sm hover:text-gray-700 transition-colors duration-200">Careers</a></li>
          <li><a href = # class="text-gray-400 text-sm hover:text-gray-700 transition-colors duration-200">Blog</a></li>
        </ul>
      </div>

      <!-- Support Links -->
      <div class="flex flex-col gap-4">
        <h4 class="text-gray-900 font-semibold text-sm">Support</h4>
        <ul class="flex flex-col gap-3">
          <li><a href = # class="text-gray-400 text-sm hover:text-gray-700 transition-colors duration-200">Help Center</a></li>
          <li><a href = # class="text-gray-400 text-sm hover:text-gray-700 transition-colors duration-200">Terms of Service</a></li>
          <li><a href = #  class="text-gray-400 text-sm hover:text-gray-700 transition-colors duration-200">Privacy Policy</a></li>
          <li><NuxtLink to="/contact" class="text-gray-400 text-sm hover:text-gray-700 transition-colors duration-200">Contact Support</NuxtLink></li>
        </ul>
      </div>

    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <p class="text-gray-400 text-xs">© 2026 DigitalEd Hub. All rights reserved.</p>
        <div class="flex items-center gap-2 text-gray-400 text-xs">
          <span>English (US)</span>
          <span class="text-gray-200">|</span>
          <span>Kaduna, Nigeria</span>
        </div>
      </div>
    </div>

    <!-- Blue bottom accent line -->
    <!-- <div class="h-1 bg-blue-600 w-full"></div> -->

  </footer>
</template>