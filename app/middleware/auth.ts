export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  // Protected routes — only logged-in users can access
  const protectedRoutes = [
    '/dashboard',
    '/courses',
  ]

  const isProtected = protectedRoutes.some(route =>
    to.path.startsWith(route)
  )

  if (isProtected && !user.value) {
    return navigateTo('/login')
  }
})