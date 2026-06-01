import { defineStore } from 'pinia'
import api from '@/api/http'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    initialized: false
  }),

  getters: {
    role: (state) => state.user?.role || null,
    isLoggedIn: (state) => !!state.token
  },

  actions: {
    async init() {
      const token = localStorage.getItem('token')
      if (!token) {
        this.initialized = true
        return
      }
      this.token = token
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      await this.fetchUser()
      this.initialized = true
    },

    async login(credentials) {
      const { data } = await api.post('/auth/login', credentials)

      this.token = data.token
      this.user = data.user

      localStorage.setItem('token', data.token)

      if (this.user.role === 'job_seeker') return '/jobseeker-home'
      if (this.user.role === 'company') return '/companyHome'

      return '/'
    },

    async fetchUser() {
      try {
        const { data } = await api.get('/me')
    
        this.user = data.user
        localStorage.setItem('user', JSON.stringify(data.user))
    
        return this.user
      } catch (e) {
        this.user = null
        this.token = null
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        return null
      }
    },

    async logout() {
      try {
        await api.post('/logout')
      } catch (e) {}

      this.user = null
      this.token = null

      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }
  }
})