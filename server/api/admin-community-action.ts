import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // ✅ Use process.env directly — Nuxt Supabase module claims SUPABASE_URL
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!,
  )

  const { action, postId, text, adminEmail } = body

  if (action === 'getAdminLikes') {
    const { data, error } = await supabase
      .from('post_likes')
      .select('post_id')
      .eq('user_id', '00000000-0000-0000-0000-000000000000')

    if (error) throw createError({ statusCode: 500, message: error.message })
    return { likedPostIds: (data ?? []).map((l: any) => String(l.post_id)) }
  }

 if (action === 'like') {
  const { data: existing } = await supabase
    .from('post_likes')
    .select('id')
    .eq('post_id', postId)
    .eq('user_id', '00000000-0000-0000-0000-000000000000')
    .maybeSingle()

  if (existing) {
    await supabase.from('post_likes').delete().eq('id', existing.id)
    // ✅ Use Postgres function to decrement safely
    await supabase.rpc('decrement_likes', { post_id: postId })
    return { liked: false }
  } else {
    await supabase.from('post_likes').insert({
      post_id: postId,
      user_id: '00000000-0000-0000-0000-000000000000',
    })
    // ✅ Use Postgres function to increment safely
    await supabase.rpc('increment_likes', { post_id: postId })
    return { liked: true }
  }
}

 if (action === 'reply') {
  console.log('Inserting reply:', { postId, adminEmail, text })

  const { data, error } = await supabase
    .from('post_replies')
    .insert({
      post_id:    postId,
      user_id:    '00000000-0000-0000-0000-000000000000',
      user_email: adminEmail,
      text,
      is_admin:   true,
    })
    .select()
    .single()

  if (error) {
    console.error('Reply insert error:', JSON.stringify(error, null, 2))
    throw createError({ statusCode: 500, message: error.message })
  }

  return { reply: data }
}
  throw createError({ statusCode: 400, message: 'Unknown action' })
})