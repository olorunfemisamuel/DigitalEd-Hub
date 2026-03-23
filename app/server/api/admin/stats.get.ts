import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    config.supabaseServiceKey!, // service key bypasses RLS
  )

  // Total students (all registered users)
  const { count: totalStudents } = await supabase
    .from('profiles')
    .select('*', { count: 'exact', head: true })

  // Students who joined this month
  const startOfMonth = new Date()
  startOfMonth.setDate(1)
  startOfMonth.setHours(0, 0, 0, 0)

  const { count: newThisMonth } = await supabase
    .from('profiles')
    .select('*', { count: 'exact', head: true })
    .gte('created_at', startOfMonth.toISOString())

  // Total courses
  const { count: totalCourses } = await supabase
    .from('courses')
    .select('*', { count: 'exact', head: true })

  // Total earnings (sum of all enrollment amounts)
  const { data: enrollments } = await supabase
    .from('enrollments')
    .select('amount')

  const totalEarnings = enrollments?.reduce((sum, e) => sum + (e.amount ?? 0), 0) ?? 0

  // Active community posts
  const { count: communityPosts } = await supabase
    .from('community_posts')
    .select('*', { count: 'exact', head: true })

  // Enrollment growth — last 30 days grouped by day
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

  const { data: enrollmentGrowth } = await supabase
    .from('enrollments')
    .select('created_at')
    .gte('created_at', thirtyDaysAgo.toISOString())
    .order('created_at', { ascending: true })

  // Latest interactions (last 10 community posts + enrollments merged)
  const { data: latestPosts } = await supabase
    .from('community_posts')
    .select('id, user_email, text, created_at')
    .order('created_at', { ascending: false })
    .limit(5)

  const { data: latestEnrollments } = await supabase
    .from('enrollments')
    .select('id, user_email, course_id, amount, created_at')
    .order('created_at', { ascending: false })
    .limit(5)

  return {
    totalStudents:  totalStudents  ?? 0,
    newThisMonth:   newThisMonth   ?? 0,
    totalCourses:   totalCourses   ?? 0,
    totalEarnings,
    communityPosts: communityPosts ?? 0,
    enrollmentGrowth: enrollmentGrowth ?? [],
    latestPosts:       latestPosts      ?? [],
    latestEnrollments: latestEnrollments ?? [],
  }
})