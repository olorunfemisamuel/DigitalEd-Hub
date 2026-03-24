export default defineNuxtRouteMiddleware(async (to) => {
  // ✅ Always allow these through — no checks at all
  const publicRoutes = [
    '/admin/login',
    '/login',
    '/register',
    '/community',
    '/about',
    '/confirm',
    '/reset-password',
    '/',
  ]

  if (publicRoutes.some(route => to.path === route || to.path.startsWith(route + '/'))) return

  // ✅ Admin routes — checked by cookie only
  if (to.path.startsWith('/admin')) return

  // ✅ Student protected routes — check Supabase session
  const supabase = useSupabaseClient()
  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    if (
      to.path.startsWith('/dashboard') ||
      to.path.startsWith('/courses')
    ) {
      return navigateTo('/login')
    }
  }
})