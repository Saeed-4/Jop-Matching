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
      openFaqs: []
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
        this.openFaqs = this.openFaqs.filter(item => item !== index)
      } else {
        this.openFaqs.push(index)
      }
    }
  }
}