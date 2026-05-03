import messages from '@/data/lang'

export default {
  props: {
    currentLang: {
      type: String,
      default: 'ar'
    }
  },

  computed: {
    signupText() {
      return messages[this.currentLang].signupPage
    }
  }
}