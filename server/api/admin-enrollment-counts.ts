import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const ids   = (query.ids as string)?.split(',').filter(Boolean) ?? []

  if (ids.length === 0) return {}

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!, // bypasses RLS
  )

  const { data, error } = await supabase
    .from('enrollments')
    .select('course_id')
    .in('course_id', ids)

  if (error) {
    console.error('Enrollment count error:', error.message)
    return {}
  }

  // Build count map
  const countMap: Record<string, number> = {}
  for (const row of data ?? []) {
    const cid = String(row.course_id)
    countMap[cid] = (countMap[cid] ?? 0) + 1
  }

  return countMap
})