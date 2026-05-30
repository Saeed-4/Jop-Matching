export default {
  data() {
    return {
      loginValue: '',
      password: '',
      error: ''
    }
  },

  computed: {
    loginText() {
      return this.$tm('loginPage')
    }
  },

  methods: {
    async login() {
      this.error = ''

      try {
        const response = await fetch('http://127.0.0.1:8000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            login: this.loginValue,
            password: this.password
          })
        })

        const data = await response.json()

        if (!response.ok) {
          this.error = data.message || this.$t('loginPage.loginError')
          return
        }

        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))

        if (data.user.role === 'job_seeker') {
          this.$router.push('/jobseeker-home')
        } else if (data.user.role === 'company') {
          this.$router.push('/companyHome') 
        }
      } catch (error) {
        console.error(error)
        this.error = this.$t('loginPage.serverError')
      }
    }
  }
}