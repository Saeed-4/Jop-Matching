export default {
  data() {
    return {
      currentIndex: 0,
      jobs: [
        {
          title: {
            ar: 'محاسب اداري',
            en: 'Administrative Accountant'
          },
          company: {
            ar: 'سلطة النقد الفلسطينية',
            en: 'Palestinian Monetary Authority'
          },
          time: {
            ar: 'منذ يومين',
            en: '2 days ago'
          },
          desc: {
            ar: 'نبحث عن مطور تطبيقات مبتكر لتطوير تطبيقات ذات أداء عالٍ.',
            en: 'We are looking for an innovative applications developer to build high-performance apps.'
          }
        },
        {
          title: {
            ar: 'محاسب مالي',
            en: 'Financial Accountant'
          },
          company: {
            ar: 'وزارة المالية',
            en: 'Ministry of Finance'
          },
          time: {
            ar: 'منذ 3 أيام',
            en: '3 days ago'
          },
          desc: {
            ar: 'فرصة مميزة للعمل ضمن فريق محترف.',
            en: 'A great opportunity to work within a professional team.'
          }
        },
        {
          title: {
            ar: 'مدير مشروع',
            en: 'Project Manager'
          },
          company: {
            ar: 'بلدية نابلس',
            en: 'Nablus Municipality'
          },
          time: {
            ar: 'منذ أسبوع',
            en: 'A week ago'
          },
          desc: {
            ar: 'إدارة مشاريع تقنية متقدمة.',
            en: 'Managing advanced technical projects.'
          }
        }
      ],
      newsCurrentIndex: 0,
      newsImages: [
        new URL('@/assets/Group 1000003989.png', import.meta.url).href,
        new URL('@/assets/images.png', import.meta.url).href,
        new URL('@/assets/pngtree-business-meetings-at-a-conference-table-with-silhouettes-of-workers-and-image_2961694.jpg', import.meta.url).href
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
      this.currentIndex = (this.currentIndex + 1) % this.jobs.length
    },

    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.jobs.length) % this.jobs.length
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