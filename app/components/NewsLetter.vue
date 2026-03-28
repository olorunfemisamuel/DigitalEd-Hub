<template>
  <section class="bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="bg-blue-600 rounded-3xl px-8 py-16 text-center">

        <h2 class="text-3xl font-bold text-white mb-3">Join our Teacher Community</h2>
        <p class="text-blue-100 text-sm leading-relaxed max-w-sm mx-auto mb-8">
          Get the weekly newsletter with free resources, teaching tips, and early access to new courses.
        </p>

        <!-- Success state — auto resets after 4s -->
        <div v-if="subscribed" class="max-w-md mx-auto">
          <div class="bg-white/20 rounded-xl px-6 py-4 flex items-center justify-center gap-3">
            <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <p class="text-white font-semibold text-sm">You're subscribed! Welcome aboard 🎉</p>
          </div>
        </div>

        <!-- Form — always shown when not in success state -->
        <div v-else class="flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            :disabled="isLoading"
            class="flex-1 bg-white text-gray-800 text-sm placeholder-gray-400 px-5 py-3 rounded-lg outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-60"
            @keydown.enter="subscribe"
          />
          <button
            @click="subscribe"
            :disabled="isLoading"
            class="bg-blue-500 hover:bg-blue-400 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold px-6 py-3 rounded-lg whitespace-nowrap transition-colors duration-200 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <svg v-if="isLoading" class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
            </svg>
            {{ isLoading ? 'Signing up...' : 'Sign Up Now' }}
          </button>
        </div>

        <!-- Error message -->
        <p v-if="errorMsg" class="text-red-200 text-xs mt-3">{{ errorMsg }}</p>

        <p v-if="!subscribed" class="text-blue-200 text-xs mt-4">We respect your privacy. No spam, ever.</p>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const supabase   = useSupabaseClient()
const email      = ref('')
const isLoading  = ref(false)
const subscribed = ref(false)
const errorMsg   = ref('')

async function subscribe() {
  errorMsg.value = ''

  // ✅ Allow click even when empty — show friendly error
  if (!email.value.trim()) {
    errorMsg.value = `Sorry, we can't add you without an email address.`
    return
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.value.trim())) {
    errorMsg.value = `Sorry, "${email.value.trim()}" doesn't look like a valid email.`
    return
  }

  isLoading.value = true

  const { error } = await supabase
    .from('newsletter_subscribers')
    .insert({ email: email.value.trim().toLowerCase() })

  if (error) {
    if (error.code === '23505') {
      // ✅ Already subscribed
      errorMsg.value = `"${email.value.trim()}" is already part of our community!`
    } else {
      errorMsg.value = 'Something went wrong. Please try again.'
      console.error('Newsletter error:', error.message)
    }
    isLoading.value = false
    return
  }

  // ✅ Show success then reset back to form after 4 seconds
  isLoading.value  = false
  subscribed.value = true
  email.value      = ''

  setTimeout(() => {
    subscribed.value = false
  }, 4000)
}
</script>