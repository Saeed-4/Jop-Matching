import messages from '@/data/lang'

const AuthText = {
  props: ['text'],
  template: `
    <p class="bottom-auth-text">
      {{ text.auth.haveAccount }}
      <router-link to="/login">{{ text.auth.login }}</router-link>
    </p>
  `
}

export default {
  components: {
    AuthText
  },

  props: {
    currentLang: {
      type: String,
      default: 'ar'
    }
  },

  data() {
    return {
      currentStep: 1,
      cvFile: null,
      extracting: false,
      extracted: false,
      skills: ['الإدارة والإبداع', 'حل المشكلات', 'التفكير النقدي', 'إدارة الوقت'],
      form: {
        firstName: '',
        lastName: '',
        birthDate: '',
        idNumber: '',
        gender: '',
        phone: '',
        email: '',
        country: '',
        city: '',
        governorate: '',
        password: '',
        confirmPassword: ''
      }
    }
  },

  computed: {
    t() {
      return messages[this.currentLang].signupJobSeeker
    },

    cvSize() {
      if (!this.cvFile) return ''
      return `${(this.cvFile.size / 1024 / 1024).toFixed(2)} MB`
    }
  },

  methods: {
    nextStep() {
      if (this.currentStep < 6) {
        this.currentStep++
      }
    },

    handleBack() {
      if (this.currentStep > 1) {
        this.currentStep--
      } else {
        this.$router.push('/signup')
      }
    },

    handleCvUpload(e) {
      this.cvFile = e.target.files[0]
      this.extracted = false
    },

    removeCv() {
      this.cvFile = null
      this.extracting = false
      this.extracted = false
    },

    extractData() {
      if (!this.cvFile) return

      this.extracting = true
      this.extracted = false

      setTimeout(() => {
        this.extracting = false
        this.extracted = true

        setTimeout(() => {
          this.nextStep()
        }, 800)
      }, 1500)
    }
  }
}