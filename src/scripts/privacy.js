import messages from '@/data/lang'

export default {
  props: ['currentLang'],

  computed: {
    text() {
      return messages[this.currentLang].privacy
    }
  }
}