import { useAuthStore } from '@/stores/auth'

export async function requireAuth(to) {
  const auth = useAuthStore()
  if (!auth.initialized) {
    await auth.init()
  }
  if (!auth.token) {
    return '/login'
  }
  if (!auth.user) {
    return '/login'
  }
  if (to.meta.role && auth.user.role !== to.meta.role) {
    return '/'
  }
  return true
}