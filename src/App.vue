<template>
  <div :dir="currentLang === 'ar' ? 'rtl' : 'ltr'" :class="currentLang">
    <LoginNavbar
      v-if="isAuthPage"
      :currentLang="currentLang"
      @changeLang="changeLang"
    />

    <Navbar
      v-else
      :currentLang="currentLang"
      @changeLang="changeLang"
    />

    <router-view :currentLang="currentLang" />

    <Footer v-if="!isAuthPage" :currentLang="currentLang" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import LoginNavbar from './components/LoginNavbar.vue'

export default {
  components: {
    Navbar,
    Footer,
    LoginNavbar
  },

  data() {
    return {
      currentLang: localStorage.getItem('lang') || 'ar'
    }
  },

  computed: {
    isAuthPage() {
      return ['login', 'signup'].includes(this.$route.name)
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