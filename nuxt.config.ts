export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',        // ← add this
  ],

  css: ['~/assets/css/main.css'],

  supabase: {
    redirect: false            // ← we'll handle redirects manually
  },

  runtimeConfig: {
    supabaseServiceKey: process.env.SUPABASE_SERVICE_KEY,
    paystackSecretKey: process.env.PAYSTACK_SECRET_KEY,
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
      paystackPublicKey: process.env.PAYSTACK_PUBLIC_KEY,
    }
  }
})