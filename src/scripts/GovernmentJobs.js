import { governmentJobs } from '@/data/governmentJobs'

export default {
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 4
    }
  },

  computed: {
    governmentJobsList() {
      const lang = this.$i18n.locale

      return governmentJobs.map(job => ({
        ...job,
        category: job.category[lang],
        title: job.title[lang],
        company: job.company[lang],
        description: job.description[lang],
        showMore: job.showMore[lang],
        tags: job.tags[lang],
        applyNow: job.applyNow[lang]
      }))
    },

    totalPages() {
      return Math.ceil(this.governmentJobsList.length / this.itemsPerPage)
    },

    paginatedGovernmentJobs() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      return this.governmentJobsList.slice(start, start + this.itemsPerPage)
    },

    visiblePages() {
      const pages = []
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i)
      }
      return pages
    }
  },

  watch: {
    '$i18n.locale'() {
      this.currentPage = 1
    },

    totalPages(newVal) {
      if (this.currentPage > newVal) {
        this.currentPage = 1
      }
    }
  },

  methods: {
    goToPage(page) {
      this.currentPage = page
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}