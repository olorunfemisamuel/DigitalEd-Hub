export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
  ],

  css: ['~/assets/css/main.css'],

  supabase: {
    redirect: false
  },

  runtimeConfig: {
    // Remove supabaseUrl and supabaseAnonKey from here completely
    supabaseServiceKey: process.env.SUPABASE_SERVICE_KEY,
    paystackSecretKey: process.env.PAYSTACK_SECRET_KEY,
    public: {
      paystackPublicKey: process.env.PAYSTACK_PUBLIC_KEY,
    }
  }
})