<template>
  <div :dir="currentLang === 'ar' ? 'rtl' : 'ltr'" :class="currentLang">
    <LoginNavbar
      v-if="$route.meta.authLayout"
      :currentLang="currentLang"
      @changeLang="changeLang"
    />

    <UserNavbar
      v-else-if="$route.path.includes('jobseeker-home')"
      :currentLang="currentLang"
      @changeLang="changeLang"
    />

    <CompanyNavbar
      v-else-if="$route.name === 'companyHome'"
      :currentLang="currentLang"
      @changeLang="changeLang"
    />

    <Navbar
      v-else
      :currentLang="currentLang"
      @changeLang="changeLang"
    />

    <router-view
      :currentLang="currentLang"
      @changeLang="changeLang"
    />

    <Footer
      v-if="!$route.meta.authLayout"
      :currentLang="currentLang"
    />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import LoginNavbar from './components/LoginNavbar.vue'
import UserNavbar from './components/UserNavbar.vue'
import CompanyNavbar from './components/CompanyNavbar.vue'

export default {
  components: {
    Navbar,
    Footer,
    LoginNavbar,
    UserNavbar,
    CompanyNavbar
  },

  data() {
    return {
      currentLang: localStorage.getItem('lang') || 'ar'
    }
  },

  mounted() {
    this.$i18n.locale = this.currentLang
  },

  methods: {
    changeLang(lang) {
      this.currentLang = lang
      this.$i18n.locale = lang
      localStorage.setItem('lang', lang)
    }
  }
}
</script>