import { VueTelInput } from 'vue3-tel-input'

export default {
  components: {
    VueTelInput
  },

  data() {
    return {
      currentStep: 1,
      cvFile: null,
      extracting: false,
      extracted: false,
      skills: [],
      errors: {},
      showGender: false,
      showCountry: false,
      showCity: false,
      showGovernorate: false,

      phoneValid: false,
      fullPhone: '',

      otp: ['', '', '', ''],
      otpError: '',
      timer: 180,
      timerInterval: null,

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
        confirmPassword: '',
        educationFile: null,
        experienceFile: null,
        certificateFile: null,
        skillInput: ''
      }
    }
  },

  computed: {
    cvSize() {
      if (!this.cvFile) return ''
      return `${(this.cvFile.size / 1024 / 1024).toFixed(2)} MB`
    },

    formattedTimer() {
      const minutes = String(Math.floor(this.timer / 60)).padStart(2, '0')
      const seconds = String(this.timer % 60).padStart(2, '0')
      return `${minutes} : ${seconds}`
    }
  },

  created() {
    this.setDefaultSkills()
  },

  watch: {
    '$i18n.locale'() {
      this.setDefaultSkills()
      this.errors = {}
    }
  },

  methods: {
    setDefaultSkills() {
      this.skills = [...this.$tm('signupJobSeeker.defaultSkills')]
    },

    onPhoneValidate(phoneObject) {
      this.phoneValid = phoneObject.valid
      this.fullPhone = phoneObject.number ? phoneObject.number.replace(/\s/g, '') : ''
    },

    openDate() {
      const input = this.$refs.dateInput
      if (input?.showPicker) input.showPicker()
      else if (input) {
        input.focus()
        input.click()
      }
    },

    nextStep() {
      this.errors = {}

      if (this.currentStep === 2) {
        if (!this.form.firstName) this.errors.first_name = this.$t('signupJobSeeker.validation.firstNameRequired')
        if (!this.form.lastName) this.errors.last_name = this.$t('signupJobSeeker.validation.lastNameRequired')
        if (!this.fullPhone) this.errors.phone = this.$t('signupJobSeeker.validation.phoneRequired')

        if (!this.form.email) {
          this.errors.email = this.$t('signupJobSeeker.validation.emailRequired')
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
          this.errors.email = this.$t('signupJobSeeker.validation.emailInvalid')
        }
      }

      if (Object.keys(this.errors).length > 0) return

      if (this.currentStep < 6) {
        this.currentStep++
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },

    async sendOtp() {
      this.errors = {}

      if (!this.form.firstName) this.errors.first_name = this.$t('signupJobSeeker.validation.firstNameRequired')
      if (!this.form.lastName) this.errors.last_name = this.$t('signupJobSeeker.validation.lastNameRequired')
      if (!this.fullPhone) this.errors.phone = this.$t('signupJobSeeker.validation.phoneRequired')
      if (!this.form.email) this.errors.email = this.$t('signupJobSeeker.validation.emailRequired')

      if (Object.keys(this.errors).length > 0) return

      try {
        const response = await fetch('http://127.0.0.1:8000/api/send-otp', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            phone: this.fullPhone
          })
        })

        const data = await response.json()

        if (!response.ok) {
          alert(data.message)
          return
        }

        console.log('OTP:', data.otp)

        this.currentStep = 3
        this.startTimer()
      } catch (error) {
        console.error(error)
        alert(this.$t('signupJobSeeker.alerts.server'))
      }
    },

    async verifyOtp() {
      this.otpError = ''

      const otpCode = this.otp.join('')

      if (otpCode.length !== 4) {
        this.otpError = 'أدخل رمز التحقق كامل'
        return
      }

      try {
        const response = await fetch('http://127.0.0.1:8000/api/verify-otp', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            phone: this.fullPhone,
            otp_code: otpCode
          })
        })

        const data = await response.json()

        if (!response.ok) {
          this.otpError = data.message
          return
        }

        this.nextStep()
      } catch (error) {
        console.error(error)
        this.otpError = 'حدث خطأ أثناء التحقق'
      }
    },

    startTimer() {
      clearInterval(this.timerInterval)
      this.timer = 180

      this.timerInterval = setInterval(() => {
        if (this.timer > 0) this.timer--
        else clearInterval(this.timerInterval)
      }, 1000)
    },

    async resendOtp() {
      if (this.timer > 0) return

      this.otp = ['', '', '', '']
      this.otpError = ''

      await this.sendOtp()
    },

    moveOtp(index, event) {
      const value = event.target.value

      if (!/^[0-9]?$/.test(value)) {
        this.otp[index] = ''
        return
      }

      const inputs = event.target.parentElement.querySelectorAll('input')

      if (value && index < inputs.length - 1) {
        inputs[index + 1].focus()
      }
    },

    handleBack() {
      if (this.currentStep > 1) this.currentStep--
      else this.$router.push('/signup')
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
    },

    addSkill() {
      const skill = this.form.skillInput.trim()
      if (!skill) return

      if (!this.skills.includes(skill)) this.skills.push(skill)

      this.form.skillInput = ''
    },

    removeSkill(skill) {
      this.skills = this.skills.filter(item => item !== skill)
    },

    async registerJobSeeker() {
      this.errors = {}

      if (!this.form.password) {
        this.errors.password = this.$t('signupJobSeeker.validation.passwordRequired')
      } else if (this.form.password.length < 6) {
        this.errors.password = this.$t('signupJobSeeker.validation.passwordMin')
      }

      if (!this.form.confirmPassword) {
        this.errors.password_confirmation = this.$t('signupJobSeeker.validation.confirmPasswordRequired')
      } else if (this.form.password !== this.form.confirmPassword) {
        this.errors.password_confirmation = this.$t('signupJobSeeker.validation.passwordMismatch')
      }

      if (Object.keys(this.errors).length > 0) return

      try {
        const formData = new FormData()

        formData.append('first_name', this.form.firstName)
        formData.append('last_name', this.form.lastName)
        formData.append('birth_date', this.form.birthDate || '')
        formData.append('id_number', this.form.idNumber || '')
        formData.append('gender', this.form.gender || '')
        formData.append('phone', this.fullPhone || this.form.phone)
        formData.append('email', this.form.email)
        formData.append('country', this.form.country || '')
        formData.append('city', this.form.city || '')
        formData.append('governorate', this.form.governorate || '')
        formData.append('password', this.form.password)
        formData.append('password_confirmation', this.form.confirmPassword)

        this.skills.forEach(skill => {
          formData.append('skills[]', skill)
        })

        if (this.cvFile) formData.append('cv', this.cvFile)
        if (this.form.educationFile) formData.append('education_file', this.form.educationFile)
        if (this.form.experienceFile) formData.append('experience_file', this.form.experienceFile)
        if (this.form.certificateFile) formData.append('certificate_file', this.form.certificateFile)

        const response = await fetch('http://127.0.0.1:8000/api/register/job-seeker', {
          method: 'POST',
          headers: {
            Accept: 'application/json'
          },
          body: formData
        })

        const data = await response.json()

        if (!response.ok) {
          if (data.errors) {
            this.errors = {}
            Object.keys(data.errors).forEach(key => {
              this.errors[key] = data.errors[key][0]
            })
          } else {
            alert(data.message || this.$t('signupJobSeeker.alerts.error'))
          }

          return
        }

        this.currentStep = 6
      } catch (error) {
        console.error(error)
        alert(this.$t('signupJobSeeker.alerts.server'))
      }
    },

    toggleGender() {
      this.showGender = !this.showGender
    },

    selectGender(value) {
      this.form.gender = value
      this.showGender = false
    },

    toggleCountry() {
      this.showCountry = !this.showCountry
    },

    selectCountry(country) {
      this.form.country = country
      this.showCountry = false
    },

    toggleCity() {
      this.showCity = !this.showCity
    },

    selectCity(city) {
      this.form.city = city
      this.showCity = false
    },

    toggleGovernorate() {
      this.showGovernorate = !this.showGovernorate
    },

    selectGovernorate(governorate) {
      this.form.governorate = governorate
      this.showGovernorate = false
    }
  }
}