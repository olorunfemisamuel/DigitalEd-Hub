// plugins/paystack.client.ts
// Loads the Paystack inline script once globally on the client side.
// This makes window.PaystackPop available anywhere in the app.

export default defineNuxtPlugin(() => {
  const script = document.createElement('script')
  script.src = 'https://js.paystack.co/v1/inline.js'
  script.async = true
  document.head.appendChild(script)
})