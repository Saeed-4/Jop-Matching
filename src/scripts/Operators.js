import messages from '@/data/lang'
import operatorLogo from '@/assets/Rectangle 652 (2).png'

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
      itemsPerPage: 9
    }
  },

  computed: {
    text() {
      return messages[this.currentLang]
    },

    operatorsList() {
      return this.text.operators.cards.map(card => ({
        ...card,
        logo: operatorLogo
      }))
    },

    totalPages() {
      return Math.ceil(this.operatorsList.length / this.itemsPerPage)
    },

    paginatedOperators() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.operatorsList.slice(start, end)
    },

    visiblePages() {
      const pages = []
      const total = this.totalPages
      const current = this.currentPage

      if (total <= 5) {
        for (let i = 1; i <= total; i++) pages.push(i)
      } else {
        if (current <= 3) {
          pages.push(1, 2, 3, '...', total)
        } else if (current >= total - 2) {
          pages.push(1, '...', total - 2, total - 1, total)
        } else {
          pages.push(1, '...', current, '...', total)
        }
      }

      return pages
    }
  },

  methods: {
    goToPage(page) {
      if (page === '...') return
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