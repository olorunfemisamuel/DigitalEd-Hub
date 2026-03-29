import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const { courseId } = await readBody(event)

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!,
  )

  // Delete enrollments first (FK constraint)
  await supabase.from('enrollments').delete().eq('course_id', courseId)

  // Delete the course
  const { error } = await supabase
    .from('courses')
    .delete()
    .eq('id', courseId)

  if (error) {
    console.error('Course delete error:', error.message)
    throw createError({ statusCode: 500, message: error.message })
  }

  return { deleted: true }
})