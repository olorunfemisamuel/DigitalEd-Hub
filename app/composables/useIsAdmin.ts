export function useIsAdmin() {
  const isAdmin = ref(false)

  const checkAdmin = async () => {
    try {
      const result = await $fetch<{ isAdmin: boolean }>('/api/admin-check')
      isAdmin.value = result.isAdmin
    } catch {
      isAdmin.value = false
    }
  }

  if (import.meta.client) {
    checkAdmin()
  }

  return { isAdmin, checkAdmin }
}