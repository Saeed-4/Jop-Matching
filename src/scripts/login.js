import messages from '@/data/lang'

export default {
  props: {
    currentLang: {
      type: String,
      default: 'ar'
    }
  },

  data() {
    return {
      phone: '',
      password: ''
    }
  },

  computed: {
    loginText() {
      return messages[this.currentLang].loginPage
    }
  },

  methods: {
    async login() {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            phone: this.phone,
            password: this.password
          })
        })

        const data = await response.json()

        if (!response.ok) {
          alert(data.message || 'خطأ في تسجيل الدخول')
          return
        }

        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))

        if (data.user.role === 'job_seeker') {
          this.$router.push('/jobseeker-home')
        } else if (data.user.role === 'company') {
          this.$router.push('/company-home')
        }
      } catch (error) {
        console.error(error)
        alert('السيرفر غير شغال أو في مشكلة اتصال')
      }
    }
  }
}