<template>
  <nav>
    <div class="nav">
      <div class="container">
        <div class="img-nav">
          <router-link to="/">
            <img src="@/assets/Group 3.png" alt="logo">
          </router-link>
        </div>

          <div class="menu-toggle" @click="toggleMenu">☰</div>

          <div :class="['overlay', { active: isMenuOpen }]" @click="toggleMenu"></div>

          <div :class="['mobile-menu', { active: isMenuOpen }]">
          
            <div class="close-menu" @click="toggleMenu">✕</div>
          
            <ul>
              <li><router-link to="/">{{ text.navbar.home }}</router-link></li>
              <li><router-link to="/operators">{{ text.navbar.operators }}</router-link></li>
              <li><router-link to="/JobOpportunities">{{ text.navbar.jobOpportunities }}</router-link></li>
              <li><router-link to="/GovernmentJobs">{{ text.navbar.governmentJobs }}</router-link></li>
            </ul>
          
            <div class="mobile-actions">
              <button @click="toggleLang">
                {{ currentLang === 'ar' ? 'EN' : 'AR' }}
              </button>
            
              <router-link to="/login" class="mobile-btn login-btn">
                {{ text.navbar.login }}
              </router-link>
            
              <router-link to="/signup" class="mobile-btn signup-btn">
                {{ text.navbar.newUser }}
              </router-link>
            </div>
          
          </div>

        <div class="nav-links">
          <ul>
            <li><router-link to="/">{{ text.navbar.home }}</router-link></li>
            <li><router-link to="/operators">{{ text.navbar.operators }}</router-link></li>
            <li><router-link to="/JobOpportunities">{{ text.navbar.jobOpportunities }}</router-link></li>
            <li><router-link to="/GovernmentJobs">{{ text.navbar.governmentJobs }}</router-link></li>
          </ul>
        </div>

        <div class="nav-links2">
          <div class="icon-research">
            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 101 101" id="search">
              <path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"></path>
            </svg>
          </div>

          <div class="lang-switch">
            <button @click="toggleLang">
              {{ currentLang === 'ar' ? 'EN' : 'AR' }}
            </button>
          </div>

          <div class="login">
            <router-link to="/login"><p>{{ text.navbar.login }}</p></router-link>
          </div>

          <div class="new-user">
            <router-link to="/signup">{{ text.navbar.newUser }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import messages from '@/data/lang'
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
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Tajawal', sans-serif;
}

ul {
  list-style: none;      
  padding: 0;
  margin: 0;
  display: flex;         
  align-items: center;   
  gap: 20px;             
}

li {
  display: inline-block; 
}


.nav {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90px;
  padding: 10px;
  gap: 10px;
  background: #FFFFFF;
}


.container {
  width: 90%;
  max-width: 1350px;
  height: 45px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.img-nav img {
  width: 203.63px;
  height: 45px;
}

.nav-links{
  display: flex;
}

.nav-links ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  max-width: 565px;
  width: 100%;
}

.nav-links a {
  text-decoration: none;
  color: black;

  font-family: 'Tajawal', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;

  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 30px;
  padding: 0 10px;
}

.nav-links2 {
  display: flex;
  justify-content: space-between;
  width: 439px;
  height: 42px;
}


.icon-research {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border: 0.5px solid #00000080;
  border-radius: 30px;
  gap: 10px;
}

.icon-research svg{
  width: 24px;
  height: 24px;
}

.lang-switch {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 43px;
  height: 42px;
  border: 0.5px solid #00000080;
  border-radius: 30px;
  gap: 10px;
}

.lang-switch button {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 1.5;
  letter-spacing: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  all: unset;    
}

.login a {
  border: 2px solid #DD5C16;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 161px;
  height: 42px;
  text-align: center;
  background-color: #DD5C16;
  text-decoration: none;
}

.login a p{
  font-family: 'Tajawal', sans-serif;
  color: #FFFFFF;
  font-weight: 700;
  font-size: 15px;
  line-height: 194.69px;
  letter-spacing: 0%;
}

.new-user {
  display: flex;
  width: 161px;
  height: 42px;
  border: 1px solid #000000;
  border-radius: 31px;
  gap: 10px;
}

.new-user a {
  font-family: 'Tajawal', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  line-height: 194.69px;
  letter-spacing: 0%;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #000000;
}

.menu-toggle {
  display: none;
  font-size: 28px;
  cursor: pointer;
  z-index: 101;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(4px);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  z-index: 99;
}

.overlay.active {
  opacity: 1;
  visibility: visible;
}


.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 75%;
  max-width: 320px;
  height: 100vh;
  background: #fff;
  padding: 30px 20px;
  transition: 0.4s ease;
  z-index: 100;
  display: flex;
  flex-direction: column;
}

.mobile-menu.active {
  right: 0;
}

.close-menu {
  font-size: 26px;
  cursor: pointer;
  align-self: flex-end;
}

.mobile-menu ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
}

.mobile-menu a {
  font-size: 18px;
  text-decoration: none;
  color: #000;
}

.mobile-menu a {
  font-size: 18px;
  text-decoration: none;
  color: #000;
}

.mobile-actions {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.mobile-btn {
  text-align: center;
  padding: 12px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
}

.login-btn {
  background: #DD5C16;
  color: #fff;
}

.signup-btn {
  border: 1px solid #000;
  color: #000;
}

@media (max-width: 991px) {

  .nav-links,
  .nav-links2 {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .login,
  .new-user,
  .lang-switch,
  .icon-research {
    display: none !important;
  }
}


@font-face {
  font-family: 'Tajawal';
  src: url('@/assets/fonts/Tajawal/Tajawal-Regular.ttf') format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'Tajawal';
  src: url('@/assets/fonts/Tajawal/Tajawal-Bold.ttf') format('truetype');
  font-weight: 700;
}

@font-face {
  font-family: 'Poppins';
  src: url('@/assets/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'Poppins';
  src: url('@/assets/fonts/Poppins/Poppins-SemiBold.ttf') format('truetype');
  font-weight: 600;
}

</style>