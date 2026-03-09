// plugins/paystack.client.ts
// Loads Paystack inline script and waits for it to be ready
// before the app tries to use window.PaystackPop

export default defineNuxtPlugin(() => {
  return new Promise<void>((resolve) => {

    // Already loaded — skip
    if ((window as any).PaystackPop) {
      resolve()
      return
    }

    const script    = document.createElement('script')
    script.src      = 'https://js.paystack.co/v1/inline.js'
    script.async    = true

    // ✅ Only resolve AFTER the script has fully loaded
    script.onload  = () => resolve()
    script.onerror = () => resolve() // resolve anyway so app doesn't hang

    document.head.appendChild(script)
  })
})