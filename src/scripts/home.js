import messages from '@/data/lang'

export default {
  props: {
    currentLang: {
      type: String,
      default: 'en'
    }
  },

  data() {
    return {
      openFaqs: [],
      searchJob: '',
      searchLocation: '',
      showDropdown: false,
    }
  },

  computed: {
    text() {
      return messages[this.currentLang]
    }
  },

  methods: {
    toggleFaq(index) {
      if (this.openFaqs.includes(index)) {
        this.openFaqs = this.openFaqs.filter(i => i !== index)
      } else {
        this.openFaqs.push(index)
      }
    },

    goToSearch() {
      this.$router.push({
        name: 'SearchResults',
        query: {
          job: this.searchJob,
          location: this.searchLocation
        }
      })
    },

    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    },

    selectCountry(country) {
      this.searchLocation = country
      this.showDropdown = false
    },

  }
}