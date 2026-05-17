export default {
  data() {
    return {
      showVideo1: false,
      showVideo2: false
    }
  },

  methods: {
    openVideo(type) {
      if (type === 1) this.showVideo1 = true
      if (type === 2) this.showVideo2 = true
    },

    closeVideo() {
      this.showVideo1 = false
      this.showVideo2 = false
    }
  }
}