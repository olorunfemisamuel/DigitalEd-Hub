export default defineNuxtRouteMiddleware(async (to) => {
  const user = useSupabaseUser()
  const supabase = useSupabaseClient()

  // Wait for Supabase to finish processing the OAuth callback
  // This handles the case where user lands back from Google redirect
  if (!user.value) {
    const { data } = await supabase.auth.getSession()
    if (!data.session) {
      const protectedRoutes = ['/dashboard', '/courses/']
      const isProtected = protectedRoutes.some(route => to.path.startsWith(route))
      if (isProtected) return navigateTo('/login')
    }
  }
})