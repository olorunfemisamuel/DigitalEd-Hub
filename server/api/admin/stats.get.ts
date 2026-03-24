import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  // ✅ Use config for ALL env vars — not process.env
  if (!config.supabaseServiceKey) {
    throw createError({ statusCode: 500, message: 'Missing SUPABASE_SERVICE_KEY' })
  }

  if (!config.public.supabaseUrl) {
    throw createError({ statusCode: 500, message: 'Missing SUPABASE_URL' })
  }

  const supabase = createClient(
    config.public.supabaseUrl,        // ✅ from config, not process.env
    config.supabaseServiceKey,
  )

  // ──────────────────────────────────────────
  // TOTAL STUDENTS — from Supabase Auth directly
  // No profiles table needed
  // ──────────────────────────────────────────
  const { data: authData, error: authError } = await supabase.auth.admin.listUsers()

  if (authError) {
    console.error('Auth listUsers error:', authError.message)
  }

  const allUsers   = authData?.users ?? []
  const adminEmail = config.adminEmail

  // Exclude the admin account from student count
  const students      = allUsers.filter(u => u.email !== adminEmail)
  const totalStudents = students.length

  const startOfMonth = new Date()
  startOfMonth.setDate(1)
  startOfMonth.setHours(0, 0, 0, 0)

  const newThisMonth = students.filter(
    u => new Date(u.created_at) >= startOfMonth
  ).length

  // ──────────────────────────────────────────
  // TOTAL COURSES
  // ──────────────────────────────────────────
  const { count: totalCourses, error: coursesError } = await supabase
    .from('courses')
    .select('*', { count: 'exact', head: true })

  if (coursesError) console.error('Courses error:', coursesError.message)

  // ──────────────────────────────────────────
  // TOTAL EARNINGS
  // ──────────────────────────────────────────
  const { data: enrollments, error: enrollmentsError } = await supabase
    .from('enrollments')
    .select('amount')

  if (enrollmentsError) console.error('Enrollments error:', enrollmentsError.message)

  const totalEarnings = (enrollments ?? []).reduce(
    (sum, e) => sum + (Number(e.amount) || 0), 0
  )

  // ──────────────────────────────────────────
  // COMMUNITY POSTS COUNT
  // ──────────────────────────────────────────
  const { count: communityPosts, error: postsCountError } = await supabase
    .from('community_posts')
    .select('*', { count: 'exact', head: true })

  if (postsCountError) console.error('Community posts count error:', postsCountError.message)

  // ──────────────────────────────────────────
  // ENROLLMENT GROWTH — last 30 days
  // ──────────────────────────────────────────
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

  const { data: enrollmentGrowth, error: growthError } = await supabase
    .from('enrollments')
    .select('created_at')
    .gte('created_at', thirtyDaysAgo.toISOString())
    .order('created_at', { ascending: true })

  if (growthError) console.error('Enrollment growth error:', growthError.message)

  // ──────────────────────────────────────────
  // LATEST COMMUNITY POSTS
  // ──────────────────────────────────────────
  const { data: latestPosts, error: latestPostsError } = await supabase
    .from('community_posts')
    .select('id, user_email, text, created_at')
    .order('created_at', { ascending: false })
    .limit(5)

  if (latestPostsError) console.error('Latest posts error:', latestPostsError.message)

  // ──────────────────────────────────────────
  // LATEST ENROLLMENTS
  // Build from Auth users + enrollments joined manually
  // since enrollments may not have user_email column
  // ──────────────────────────────────────────
const { data: recentEnrollments, error: recentError } = await supabase
  .from('enrollments')
  .select('id, user_id, course_title, amount, created_at')
  .order('created_at', { ascending: false })
  .limit(5)

  if (recentError) console.error('Recent enrollments error:', recentError.message)

  // Enrich enrollments with email from Auth users
const latestEnrollments = (recentEnrollments ?? []).map(e => {
  const matchedUser = allUsers.find(u => u.id === e.user_id)
  return {
    id:           e.id,
    user_id:      e.user_id,
    user_email:   matchedUser?.email ?? 'Unknown',
    course_title: e.course_title,   // ✅ real course name
    amount:       e.amount,
    created_at:   e.created_at,
  }
})

  return {
    totalStudents,
    newThisMonth,
    totalCourses:      totalCourses      ?? 0,
    totalEarnings,
    communityPosts:    communityPosts    ?? 0,
    enrollmentGrowth:  enrollmentGrowth  ?? [],
    latestPosts:       latestPosts       ?? [],
    latestEnrollments,
  }
})