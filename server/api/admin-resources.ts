import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!,
  )

  const method = getMethod(event)

  // ── GET — fetch all resources ──────────
  if (method === 'GET') {
    const { data, error } = await supabase
      .from('resources')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw createError({ statusCode: 500, message: error.message })
    return data ?? []
  }

  // ── POST — add or delete ───────────────
  if (method === 'POST') {
    const body = await readBody(event)

    // Delete
    if (body.action === 'delete') {
      const { error } = await supabase
        .from('resources')
        .delete()
        .eq('id', body.id)

      if (error) throw createError({ statusCode: 500, message: error.message })
      return { deleted: true }
    }

    // Insert
    const { data, error } = await supabase
      .from('resources')
      .insert({
        title:       body.title,
        description: body.description,
        file_url:    body.file_url,
        file_type:   body.file_type,
        file_size:   body.file_size,
        category:    body.category,
      })
      .select()
      .single()

    if (error) throw createError({ statusCode: 500, message: error.message })
    return { resource: data }
  }

  throw createError({ statusCode: 405, message: 'Method not allowed' })
})