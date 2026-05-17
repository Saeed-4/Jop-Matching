import { latestJobs } from '@/data/latestJobs'

export default {
  data() {
    return {
      currentPage: 1,
      perPage: 5
    }
  },

  computed: {
    lang() {
      return this.$i18n.locale
    },

    jobs() {
      return latestJobs.map(job => ({
        ...job,
        category: job.category[this.lang],
        title: job.title[this.lang],
        company: job.company[this.lang],
        description: job.description[this.lang],
        showMore: job.showMore[this.lang],
        tags: job.tags[this.lang],
        applyNow: job.applyNow[this.lang],
        date: job.date,
        logo: job.logo
      }))
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

  watch: {
    '$i18n.locale'() {
      this.currentPage = 1
    }
  },

  methods: {
    goToPage(page) {
      this.currentPage = page
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}