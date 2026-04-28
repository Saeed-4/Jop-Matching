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
      return Math.ceil(this.jobs.length / this.perPage)
    },

    visiblePages() {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1)
    }
  },

  methods: {
    goToPage(page) {
      this.currentPage = page
    }
  }
}