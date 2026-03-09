export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
  ],

  css: ['~/assets/css/main.css'],

  supabase: {
    redirect: false,
    url: 'https://ttqysorngmhbnbjtiwno.supabase.co',        // hardcoded temporarily
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0cXlzb3JuZ21oYm5ianRpd25vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5OTYyNTQsImV4cCI6MjA4ODU3MjI1NH0.60CLeCfh7s2iWLTsLWG4sTMOsrQXCorgPc8TKOK1wp8',  // hardcoded temporarily
  },

  runtimeConfig: {
    supabaseServiceKey: process.env.SUPABASE_SERVICE_KEY,
    paystackSecretKey: process.env.PAYSTACK_SECRET_KEY,
    public: {
      paystackPublicKey: process.env.PAYSTACK_PUBLIC_KEY,
    }
  }
})