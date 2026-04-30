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
      currentPage: 1,
      perPage: 5
    }
  },

  computed: {
    text() {
      return messages[this.currentLang]
    },

    jobs() {
      return this.text.latestJobsPage.jobs
    },

    paginatedJobs() {
      const start = (this.currentPage - 1) * this.perPage
      return this.jobs.slice(start, start + this.perPage)
    },

    totalPages() {
      return Math.ceil(this.filteredJobs.length / this.perPage)
    },

    visiblePages() {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1)
    },
    jobQuery() {
      return this.$route.query.job || ''
    },

    locationQuery() {
      return this.$route.query.location || ''
    },

    filteredJobs() {
      return this.jobs.filter(job => {
        const matchJob = this.jobQuery
          ? job.title.toLowerCase().includes(this.jobQuery.toLowerCase())
          : true
      
        const matchLocation = this.locationQuery
          ? job.tags.join(' ').toLowerCase().includes(this.locationQuery.toLowerCase())
          : true
      
        return matchJob && matchLocation
      })
    }
  },

  methods: {
    goToPage(page) {
      this.currentPage = page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}