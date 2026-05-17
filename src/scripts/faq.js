export default {
  data() {
    return {
      openFaqs: []
    }
  },

  computed: {
    faqQuestions() {
      return this.$tm('home.faq.questions')
    }
  },

  watch: {
    '$i18n.locale'() {
      this.openFaqs = []
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