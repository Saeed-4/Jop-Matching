import { getCurrentUser } from '@/services/auth'

export async function requireAuth(to, from, next) {
  const token = localStorage.getItem('token')

  if (!token) {
    next('/login')
    return
  }

  const user = await getCurrentUser()

  if (!user) {
    next('/login')
    return
  }

  next()
}