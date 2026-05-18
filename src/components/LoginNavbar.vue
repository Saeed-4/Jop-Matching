<template>
  <nav>
    <div class="nav">
      <div class="container">
        <div class="img-nav">
          <router-link to="/">
            <img class="logo-full" src="@/assets/Group 1000003994.png" alt="logo">
            <img class="logo-icon" src="@/assets/Group 1000003994444.png" alt="logo">
          </router-link>
          
        </div>
        <div class="nav-links2">
          <div class="lang-switch">
            <button @click="toggleLang">
              {{ currentLang === 'ar' ? 'EN' : 'AR' }}
            </button>
          </div>
        
          <div class="menu-toggle" @click="toggleMenu">
            ☰
          </div>
        </div>

        <div class="overlay" :class="{ active: isMenuOpen }" @click="toggleMenu"></div>

        <div class="mobile-menu" :class="{ active: isMenuOpen }">
          <div class="close-menu" @click="toggleMenu">✕</div>
        
          <ul>
            <li><router-link to="/">{{ $t('navbar.home') }}</router-link></li>
            <li><router-link to="/Operators">{{ $t('navbar.operators') }}</router-link></li>
            <li><router-link to="/JobOpportunities">{{ $t('navbar.jobOpportunities') }}</router-link></li>
            <li><router-link to="/GovernmentJobs">{{ $t('navbar.governmentJobs') }}</router-link></li>
          </ul>
        
          <button class="mobile-lang" @click="toggleLang">
            {{ currentLang === 'ar' ? 'EN' : 'AR' }}
          </button>

          <div class="login">
            <router-link :to="localizedPath('/login')"><p>{{ $t('navbar.login') }}</p></router-link>
          </div>

          <div class="new-user">
            <router-link :to="localizedPath('/signup')">{{ $t('navbar.newUser') }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import messages from '@/locales'
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const props = defineProps({
  currentLang: {
    type: String,
    default: 'en'
  }
})

const emit = defineEmits(['changeLang'])

const text = computed(() => messages[props.currentLang])

const changeLang = (lang) => {
  emit('changeLang', lang)
}

const toggleLang = () => {
  changeLang(props.currentLang === 'ar' ? 'en' : 'ar')
}
const localizedPath = (path) => {
  return props.currentLang === 'en' ? `/en${path}` : path
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.nav {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90px;
  padding: 10px;
  gap: 10px;
  background: #DD5C16;
}

.container {
  width: 90%;
  max-width: 1350px;
  height: 45px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.img-nav {
  display: flex;
  align-items: center;
}

.logo-full {
  width: 203.63px;
  height: 45px;
  object-fit: contain;
  display: block;
}

.logo-icon {
  width: 42px;
  height: 42px;
  object-fit: contain;
  display: none;
}

.nav-links2 {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: auto;
  height: 42px;
}

.lang-switch {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 43px;
  height: 42px;
  border: 0.5px solid #FFFFFF;
  border-radius: 30px;
  gap: 10px;
}

.lang-switch button {
  all: unset;
  font-weight: 600;
  font-size: 15px;
  line-height: 1.5;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.menu-toggle {
  display: none;
  font-size: 28px;
  color: #fff;
  cursor: pointer;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  opacity: 0;
  visibility: hidden;
  z-index: 99;
  transition: 0.3s;
}

.overlay.active {
  opacity: 1;
  visibility: visible;
}

.mobile-menu {
  position: fixed;
  top: 0;
  inset-inline-end: -100%;
  width: 82%;
  max-width: 340px;
  height: 100vh;
  background: #fff;
  z-index: 100;
  padding: 26px 22px;
  transition: 0.35s ease;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 30px rgba(0,0,0,0.12);
}

.mobile-menu.active {
  inset-inline-end: 0;
}

.close-menu {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  color: #DD5C16;
  font-size: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-menu ul {
  margin: 45px 0 30px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.mobile-menu li a {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: 14px;
  color: #111;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
}

.mobile-menu li a:hover {
  background: #fff2e9;
  color: #DD5C16;
}

.mobile-lang {
  margin-top: auto;
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 30px;
  background: #DD5C16;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
}

.mobile-menu .login,
.mobile-menu .new-user {
  width: 100%;
  margin-top: 12px;
}

.mobile-menu .login a,
.mobile-menu .new-user a {
  width: 100%;
  height: 44px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.mobile-menu .login a {
  background: #DD5C16;
  color: #fff;
}

.mobile-menu .login p {
  margin: 0;
  color: #fff;
  font-weight: 700;
}

.mobile-menu .new-user a {
  border: 1px solid #DD5C16;
  color: #DD5C16;
  font-weight: 700;
}

.close-menu {
  align-self: flex-end;
  font-size: 24px;
  cursor: pointer;
  color: #DD5C16;
}


@media (max-width: 991px) {
  .nav {
    height: 80px;
    padding: 8px 0;
  }

  .container {
    width: 92%;
    height: auto;
  }

  .logo-full {
    width: 170px;
    height: 40px;
  }
}

@media (max-width: 767.98px) {
  .nav {
    height: 74px;
  }

  .container {
    width: 92%;
    justify-content: space-between;
  }

  .logo-full {
    display: none;
  }

  .logo-icon {
    display: block;
    width: 38px;
    height: 38px;
  }

  .nav-links2 {
    display: flex;
    width: auto;
  }

  .lang-switch {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  .lang-switch button {
    font-size: 14px;
  }
}

@media (max-width: 575.98px) {
  .nav {
    height: 68px;
  }

  .container {
    width: 94%;
  }

  .logo-icon {
    width: 34px;
    height: 34px;
  }

  
}
</style>