export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
  ],

  css: ['~/assets/css/main.css'],

supabase: {
  redirect: true,
  redirectOptions: {
    login: '/login',
    callback: '/confirm',
    exclude: [
      '/',
      '/register',
      '/login',
      '/confirm',
      '/about',
      '/courses',
      '/courses/**',   // ✅ wildcard for individual course pages
      '/community',
    ],
  },
  url: process.env.SUPABASE_URL,
  key: process.env.SUPABASE_ANON_KEY,
},
  runtimeConfig: {
    supabaseServiceKey: process.env.SUPABASE_SERVICE_KEY,
    paystackSecretKey:  process.env.PAYSTACK_SECRET_KEY,
    public: {
      // ✅ Empty string as default — Nuxt will replace with .env value at runtime
      paystackPublicKey: process.env.PAYSTACK_PUBLIC_KEY ?? '',
    }
  }
})