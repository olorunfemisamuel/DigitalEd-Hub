export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
  ],

  css: ['~/assets/css/main.css'],

  supabase: {
  redirect: false,
  redirectOptions: {
    login: '/login',
    callback: '/confirm',
    exclude: [
      '/',
      '/register',
      '/login',
      '/admin/login',
      '/confirm',
      '/about',
      '/courses',
      '/courses/**',
      '/community',
    ],
  },
  url: process.env.SUPABASE_URL,
  key: process.env.SUPABASE_ANON_KEY,
},

  runtimeConfig: {
  adminEmail:    process.env.ADMIN_EMAIL,
  adminPassword: process.env.ADMIN_PASSWORD,
    supabaseServiceKey: process.env.SUPABASE_SERVICE_KEY,
    paystackSecretKey:  process.env.PAYSTACK_SECRET_KEY,
    public: {
      paystackPublicKey: process.env.PAYSTACK_PUBLIC_KEY ?? '',
        adminEmail:        process.env.ADMIN_EMAIL ?? '',
    }
  }
})