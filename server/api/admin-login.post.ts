import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const body   = await readBody(event)
  const config = useRuntimeConfig()

  // ✅ Check credentials against .env
  if (
    body.email    !== config.adminEmail ||
    body.password !== config.adminPassword
  ) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }

  // ✅ Set a secure httpOnly cookie — no Supabase session involved
  setCookie(event, 'admin_session', 'authenticated', {
    httpOnly: true,
    secure:   process.env.NODE_ENV === 'production',
    maxAge:   60 * 60 * 24, // 24 hours
    path:     '/',
    sameSite: 'strict',
  })

  return { success: true }
})