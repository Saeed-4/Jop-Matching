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

    jobsList() {
      const cards = this.text?.jobOpportunities?.cards || []
      return cards.map(card => ({
        ...card,
        logo: companyLogo
      }))
    },

    totalPages() {
      return Math.ceil(this.jobsList.length / this.itemsPerPage)
    },

    paginatedJobs() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.jobsList.slice(start, end)
    },

    visiblePages() {
      const pages = []
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i)
      }
      return pages.reverse()
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
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }
}