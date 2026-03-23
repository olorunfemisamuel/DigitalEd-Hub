export default defineNuxtRouteMiddleware(async (to) => {
  // ✅ Exit immediately for all public/auth pages
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

  const user = useSupabaseUser()
  const supabase = useSupabaseClient()

  if (!user.value) {
    const { data } = await supabase.auth.getSession()

    if (!data.session) {
      if (to.path.startsWith('/admin')) {
        return navigateTo('/admin/login')
      }

      if (to.path.startsWith('/dashboard') || to.path.startsWith('/courses')) {
        return navigateTo('/login')
      }
    }
  }
})