<template>
  <div :dir="currentLang === 'ar' ? 'rtl' : 'ltr'" :class="currentLang">
    <Navbar :currentLang="currentLang" @changeLang="changeLang" />
    <router-view :currentLang="currentLang" />
    <Footer :currentLang="currentLang" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },

  data() {
    return {
      currentLang: localStorage.getItem('lang') || 'ar'
    }
  },

  methods: {
    changeLang(lang) {
      this.currentLang = lang
      localStorage.setItem('lang', lang)
    }
  }
}
</script>