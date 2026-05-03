import messages from '@/data/lang'

export default {
  props: {
    currentLang: {
      type: String,
      default: 'ar'
    }
  },

  computed: {
    t() {
      return messages[this.currentLang]
    }
  }
}