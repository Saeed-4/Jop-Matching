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
      currentStep: 1,
      form: {
        companyName: '',
        registrationNumber: '',
        phone: '',
        email: '',
        workSector: '',
        website: '',
        companyType: '',
        city: '',
        governorate: '',
        address: '',
        companySize: '',
        description: '',
        logoFile: null,
        registrationFile: null,
        taxFile: null,
        chamberFile: null,
        password: '',
        confirmPassword: ''
      }
    }
  },

  computed: {
    t() {
      return messages[this.currentLang].signupCompany
    }
  },

  methods: {
    nextStep() {
      if (this.currentStep < 5) {
        this.currentStep++
      }
    },

    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--
      }
    },

    handleBack() {
      if (this.currentStep > 1) {
        this.currentStep--
      } else {
        this.$router.push('/signup')
      }
    }
  }
}