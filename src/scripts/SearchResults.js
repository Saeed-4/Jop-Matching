import { latestJobs } from '@/data/latestJobs'

export default {
  data() {
    return {
      currentPage: 1,
      perPage: 5
    }
  },

  computed: {
    jobs() {
      const lang = this.$i18n.locale

      return latestJobs.map(job => ({
        ...job,
        category: job.category[lang],
        title: job.title[lang],
        company: job.company[lang],
        description: job.description[lang],
        showMore: job.showMore[lang],
        tags: job.tags[lang],
        applyNow: job.applyNow[lang],
        date: job.date
      }))
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
    },

    paginatedJobs() {
      const start = (this.currentPage - 1) * this.perPage
      return this.filteredJobs.slice(start, start + this.perPage)
    },

    totalPages() {
      return Math.ceil(this.filteredJobs.length / this.perPage)
    },

    visiblePages() {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1)
    }
  },

  watch: {
    '$i18n.locale'() {
      this.currentPage = 1
    },

    '$route.query'() {
      this.currentPage = 1
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