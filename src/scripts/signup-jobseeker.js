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
      errors: {},
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
    t() {
      return messages[this.currentLang].signupJobSeeker
    },

    cvSize() {
      if (!this.cvFile) return ''
      return `${(this.cvFile.size / 1024 / 1024).toFixed(2)} MB`
    }
  },

  methods: {
    formatBirthDate() {
      const { birthDay, birthMonth, birthYear } = this.form

      if (!birthDay || !birthMonth || !birthYear) return null

      return `${birthYear}-${String(birthMonth).padStart(2, '0')}-${String(birthDay).padStart(2, '0')}`
    },

    nextStep() {
      this.errors = {}

      if (this.currentStep === 2) {
        if (!this.form.firstName) this.errors.first_name = 'الاسم الأول مطلوب'
        if (!this.form.lastName) this.errors.last_name = 'اسم العائلة مطلوب'
        if (!this.form.phone) this.errors.phone = 'رقم الهاتف مطلوب'
        if (!this.form.email) {
          this.errors.email = 'البريد الإلكتروني مطلوب'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
          this.errors.email = 'البريد الإلكتروني غير صحيح'
        }
      }
    
      if (this.currentStep === 5) {
        if (!this.form.password) this.errors.password = 'كلمة المرور مطلوبة'
        else if (this.form.password.length < 6) this.errors.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'
      
        if (!this.form.confirmPassword) this.errors.password_confirmation = 'تأكيد كلمة المرور مطلوب'
        else if (this.form.password !== this.form.confirmPassword) {
          this.errors.password_confirmation = 'كلمتا المرور غير متطابقتين'
        }
      }
    
      if (Object.keys(this.errors).length > 0) return
    
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
    },

    async registerJobSeeker() {
      console.log("clicked")
      this.errors = {}
        
      if (!this.form.password) this.errors.password = 'كلمة المرور مطلوبة'
      else if (this.form.password.length < 6) this.errors.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'
        
      if (!this.form.confirmPassword) this.errors.password_confirmation = 'تأكيد كلمة المرور مطلوب'
      else if (this.form.password !== this.form.confirmPassword) {
        this.errors.password_confirmation = 'كلمتا المرور غير متطابقتين'
      }
    
      if (Object.keys(this.errors).length > 0) return
    
      try {
        const formData = new FormData()
      
        formData.append('first_name', this.form.firstName)
        formData.append('last_name', this.form.lastName)
        formData.append('birth_date', this.form.birthDate || '')
        formData.append('id_number', this.form.idNumber || '')
        formData.append('gender', this.form.gender || '')
        formData.append('phone', this.form.phone)
        formData.append('email', this.form.email)
        formData.append('country', this.form.country || '')
        formData.append('city', this.form.city || '')
        formData.append('governorate', this.form.governorate || '')
        formData.append('password', this.form.password)
        formData.append('password_confirmation', this.form.confirmPassword)
      
        if (this.cvFile) {
          formData.append('cv', this.cvFile)
        }
      
        const response = await fetch('http://127.0.0.1:8000/api/register/job-seeker', {
          method: 'POST',
          headers: {
            Accept: 'application/json'
          },
          body: formData
        })
      
        const data = await response.json()
      
        if (!response.ok) {
          console.log(data)
        
          if (data.errors) {
            this.errors = {}
          
            Object.keys(data.errors).forEach((key) => {
              this.errors[key] = data.errors[key][0]
            })
          } else {
            alert(data.message || 'في خطأ بالبيانات')
          }
        
          return
        }
      
        this.currentStep = 6
      } catch (error) {
        console.error(error)
        alert('السيرفر غير شغال أو في مشكلة اتصال')
      }
    },

    addSkill() {
      const skill = this.form.skillInput.trim()

      if (!skill) return

      this.skills.push(skill)
      this.form.skillInput = ''
    },

    removeSkill(skill) {
      this.skills = this.skills.filter(item => item !== skill)
    },
  }
}