export default defineNuxtRouteMiddleware(async (to) => {
  const publicRoutes = [
    '/admin/login',
    '/login',
    '/register',
    '/community',
    '/about',
    '/confirm',
    '/reset-password',
  ]

  if (publicRoutes.some(route => to.path === route || to.path.startsWith(route + '/'))) return

  // ✅ Admin routes — protected by cookie check on the page itself
  // Middleware does NOT handle admin routes at all
  if (to.path.startsWith('/admin')) return

  // ✅ Student routes — Supabase only
  const user     = useSupabaseUser()
  const supabase = useSupabaseClient()

  if (!user.value) {
    const { data } = await supabase.auth.getSession()
    if (!data.session) {
      if (to.path.startsWith('/dashboard') || to.path.startsWith('/courses')) {
        return navigateTo('/login')
      }
    }
  }
})