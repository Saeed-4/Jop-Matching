import messages from '@/data/lang'

export default {
  props: {
    currentLang: {
      type: String,
      default: 'ar'
    }
  },

  computed: {
    loginText() {
      return messages[this.currentLang].loginPage
    }
  }
}