import messages from '@/data/lang'
import companyLogo from '@/assets/Rectangle 652 (2).png'

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
      itemsPerPage: 4
    }
  },

  computed: {
    text() {
      return messages[this.currentLang]
    },

    governmentJobsList() {
      const cards = this.text?.governmentJobsPage?.cards || []
      return cards.map(card => ({
        ...card,
        logo: companyLogo
      }))
    },

    totalPages() {
      return Math.ceil(this.governmentJobsList.length / this.itemsPerPage)
    },

    paginatedGovernmentJobs() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.governmentJobsList.slice(start, end)
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
    currentLang() {
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