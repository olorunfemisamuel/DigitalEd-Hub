<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center">
      <div class="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
      <p class="text-sm text-gray-500">Signing you in...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const supabase = useSupabaseClient()

onMounted(async () => {
  // Give Supabase a moment to exchange the OAuth token for a session
  await supabase.auth.getSession()
  await navigateTo('/dashboard')
})
</script>