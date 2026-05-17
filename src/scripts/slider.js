import { governmentSliderJobs } from '@/data/jobs'

export default {
  data() {
    return {
      currentIndex: 0,
      jobs: governmentSliderJobs,

      newsCurrentIndex: 0,
      newsImages: [
        new URL('@/assets/Group1000003989.png', import.meta.url).href,
        new URL('@/assets/images.png', import.meta.url).href,
        new URL('@/assets/pngtree-business.jpg', import.meta.url).href
      ]
    }
  },

  computed: {
    prevIndex() {
      return (this.currentIndex - 1 + this.jobs.length) % this.jobs.length
    },

    nextIndex() {
      return (this.currentIndex + 1) % this.jobs.length
    }
  },

  methods: {
    nextSlide() {
      this.currentIndex = this.nextIndex
    },

    prevSlide() {
      this.currentIndex = this.prevIndex
    },

    nextNewsSlide() {
      this.newsCurrentIndex =
        (this.newsCurrentIndex + 1) % this.newsImages.length
    },

    prevNewsSlide() {
      this.newsCurrentIndex =
        (this.newsCurrentIndex - 1 + this.newsImages.length) % this.newsImages.length
    }
  }
}