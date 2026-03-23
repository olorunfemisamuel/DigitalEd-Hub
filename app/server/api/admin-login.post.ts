export default defineEventHandler(async (event) => {
  const body   = await readBody(event)
  const config = useRuntimeConfig()

  if (
    body.email    !== config.adminEmail ||
    body.password !== config.adminPassword
  ) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }

  return { success: true }
})