import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  if (!config.supabaseServiceKey) {
    throw createError({ statusCode: 500, message: 'Missing SUPABASE_SERVICE_KEY' })
  }

  const supabase = createClient(
    config.public.supabaseUrl,
    config.supabaseServiceKey,
  )

  // ✅ Get all users from Supabase Auth
  const { data: authData, error: authError } = await supabase.auth.admin.listUsers()
  if (authError) throw createError({ statusCode: 500, message: authError.message })

  const adminEmail = config.adminEmail
  const users = (authData?.users ?? []).filter(u => u.email !== adminEmail)

  // ✅ Get enrollment counts per user
  const { data: enrollments } = await supabase
    .from('enrollments')
    .select('user_id')

  const enrollmentMap: Record<string, number> = {}
  for (const e of enrollments ?? []) {
    enrollmentMap[e.user_id] = (enrollmentMap[e.user_id] ?? 0) + 1
  }

  // ✅ Build student list
  const students = users.map(u => ({
    id:              u.id,
    email:           u.email ?? '',
    created_at:      u.created_at,
    enrollmentCount: enrollmentMap[u.id] ?? 0,
  }))

  // Sort by most recent first
  students.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

  return students
})