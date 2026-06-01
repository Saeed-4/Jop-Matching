import { useAuthStore } from '@/stores/auth'

export default {
  data() {
    return {
      loginValue: '',
      password: '',
      error: '',
      loading: false
    }
  },

  methods: {
    async login() {
      this.error = ''
      this.loading = true

      if (!this.loginValue || !this.password) {
        this.error = 'Please fill all fields'
        this.loading = false
        return
      }

      try {
        const auth = useAuthStore()

        const route = await auth.login({
          login: this.loginValue,
          password: this.password
        })

        this.$router.push(route)

      } catch (error) {
        console.log(error)

        this.error =
          error?.response?.data?.message ||
          error?.message ||
          this.$t('loginPage.serverError')

      } finally {
        this.loading = false
      }
    }
  }
}