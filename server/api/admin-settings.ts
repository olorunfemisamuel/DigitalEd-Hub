import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!,
  )

  const method = getMethod(event)

  // ── GET — load all settings ───────────
  if (method === 'GET') {
    const { data, error } = await supabase
      .from('settings')
      .select('key, value')

    if (error) throw createError({ statusCode: 500, message: error.message })

    // Convert array to key/value object
    const result: Record<string, string> = {}
    for (const row of data ?? []) {
      result[row.key] = row.value
    }

    return result
  }

  // ── POST — save settings ──────────────
  if (method === 'POST') {
    const body = await readBody(event)
    const { platform_name, platform_slogan, support_email } = body

    const updates = [
      { key: 'platform_name',   value: platform_name   ?? '' },
      { key: 'platform_slogan', value: platform_slogan ?? '' },
      { key: 'support_email',   value: support_email   ?? '' },
    ]

    for (const update of updates) {
      const { error } = await supabase
        .from('settings')
        .upsert(
          { key: update.key, value: update.value, updated_at: new Date().toISOString() },
          { onConflict: 'key' }
        )

      if (error) throw createError({ statusCode: 500, message: error.message })
    }

    return { success: true }
  }

  throw createError({ statusCode: 405, message: 'Method not allowed' })
})