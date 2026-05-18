export default {
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
      }
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
    }
  }
}