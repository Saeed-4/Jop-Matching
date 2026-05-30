import { VueTelInput } from 'vue3-tel-input'
export default {
  components: {
    VueTelInput
  },
  data() {
    return {
      currentStep: 1,

      showSector: false,
      showCountry: false,
      showCity: false,
      showGovernorate: false,
      showCompanySize: false,

      form: {
        companyName: '',
        registrationNumber: '',
        phone: '',
        email: '',
        workSector: '',
        website: '',
        country: '',
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
      },

      errors: {},
      otp: ['', '', '', ''],
      otpError: '',
      timer: 180,
      timerInterval: null,

      phoneValid: false,
      fullPhone: '',
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
    },

    toggleSector() {
      this.showSector = !this.showSector
    },

    selectSector(value) {
      this.form.workSector = value
      this.showSector = false
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
    },

    toggleCompanySize() {
      this.showCompanySize = !this.showCompanySize
    },

    selectCompanySize(size) {
      this.form.companySize = size
      this.showCompanySize = false
    },

    onPhoneValidate(phoneObject) {
      this.phoneValid = phoneObject.valid
      this.fullPhone = phoneObject.number
        ? phoneObject.number.replace(/\s/g, '')
        : ''
    },

    startTimer() {
      clearInterval(this.timerInterval)

      this.timer = 180

      this.timerInterval = setInterval(() => {
        if (this.timer > 0) {
          this.timer--
        } else {
          clearInterval(this.timerInterval)
        }
      }, 1000)
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

    async resendOtp() {
      if (this.timer > 0) return
    
      this.otp = ['', '', '', '']
      this.otpError = ''
    
      await this.sendOtp()
    },

    async sendOtp() {
      this.errors = {}

      if (!this.form.companyName) {
        this.errors.company_name = 'اسم الشركة مطلوب'
      }
    
      if (!this.fullPhone) {
        this.errors.phone = 'رقم الهاتف مطلوب'
      }
    
      if (!this.form.email) {
        this.errors.email = 'البريد الإلكتروني مطلوب'
      }
    
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
      
        this.currentStep = 2
        this.startTimer()
      } catch (error) {
        console.error(error)
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
      
        this.currentStep = 3
      } catch (error) {
        console.error(error)
      }
    },

    async registerCompany() {
      console.log('LOGO:', this.form.logoFile)
      console.log('REG:', this.form.registrationFile)
      console.log('TAX:', this.form.taxFile)
      console.log('CHAMBER:', this.form.chamberFile)
      this.errors = {}

      if (!this.form.password) {
        this.errors.password = 'كلمة المرور مطلوبة'
      }
    
      if (this.form.password !== this.form.confirmPassword) {
        this.errors.password_confirmation = 'كلمات المرور غير متطابقة'
      }
    
      if (Object.keys(this.errors).length > 0) return
    
      try {
        const formData = new FormData()
      
        formData.append('company_name', this.form.companyName)
        formData.append('registration_number', this.form.registrationNumber)
        formData.append('phone', this.fullPhone || this.form.phone)
        formData.append('email', this.form.email)
        formData.append('work_sector', this.form.workSector)
        formData.append('website', this.form.website)
        formData.append('company_type', this.form.companyType)
        formData.append('city', this.form.city)
        formData.append('governorate', this.form.governorate)
        formData.append('address', this.form.address)
        formData.append('company_size', this.form.companySize)
        formData.append('description', this.form.description)
      
        formData.append('password', this.form.password)
        formData.append('password_confirmation', this.form.confirmPassword)
        formData.append('country', this.form.country)
      
        if (this.form.logoFile) {
          formData.append('logo', this.form.logoFile)
        }
      
        if (this.form.registrationFile) {
          formData.append('registration_file', this.form.registrationFile)
        }
      
        if (this.form.taxFile) {
          formData.append('tax_file', this.form.taxFile)
        }
      
        if (this.form.chamberFile) {
          formData.append('chamber_file', this.form.chamberFile)
        }
      
        const response = await fetch('http://127.0.0.1:8000/api/register/company', {
          method: 'POST',
          headers: {
            Accept: 'application/json'
          },
          body: formData
        })
      
        const data = await response.json()
      
        if (!response.ok) {
          console.log('Validation Error:', data)
          alert(JSON.stringify(data))
          return
        }
      
        this.currentStep = 5
      } catch (error) {
        console.error(error)
      }
    },

    handleLogo(e) {
      const file = e.target.files?.[0]
      if (!file) return
      this.form.logoFile = file
    },

    handleRegistration(e) {
      const file = e.target.files?.[0]
      if (!file) return
      this.form.registrationFile = file
    },

    handleTax(e) {
      const file = e.target.files?.[0]
      if (!file) return
      this.form.taxFile = file
    },

    handleChamber(e) {
      const file = e.target.files?.[0]
      if (!file) return
      this.form.chamberFile = file
    },
  },

  computed: {
    formattedTimer() {
      const minutes = String(Math.floor(this.timer / 60)).padStart(2, '0')
      const seconds = String(this.timer % 60).padStart(2, '0')

      return `${minutes}:${seconds}`
    }
  },
}