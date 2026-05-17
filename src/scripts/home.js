import { latestHomeJobs } from '@/data/jobs'

export default {
  data() {
    return {
      searchJob: '',
      searchLocation: '',
      showDropdown: false,
      openFaqs: []
    }
  },

  computed: {
    latestJobsList() {
      const lang = this.$i18n.locale

      return latestHomeJobs.map(job => ({
        ...job,
        title: job.title[lang],
        location: job.location[lang]
      }))
    },

    countriesList() {
      return this.$tm('jobOpportunities.filters.countries')
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
    }
  }
}