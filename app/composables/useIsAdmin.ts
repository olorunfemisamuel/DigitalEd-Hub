export function useIsAdmin() {
  const user   = useSupabaseUser()
  const config = useRuntimeConfig()

  const isAdmin = computed(() =>
    !!user.value && user.value.email === config.public.adminEmail
  )

  return { isAdmin }
}