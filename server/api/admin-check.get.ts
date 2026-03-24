export default defineEventHandler(async (event) => {
  const cookie = getCookie(event, 'admin_session')
  return { isAdmin: cookie === 'authenticated' }
})