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

        <div class="user-actions">
          <div class="user-pill">
            <div @click="chooseImage">
              <img :src="userImage || defaultImage" alt="user" />
            </div>
            <span class="user-name">{{ user.name }}</span>
            <input type="file" ref="fileInput" @change="handleImage" hidden />
          </div>

          <button class="circle-btn notification-btn">
            <span class="icon-Vector-22"></span>
            <span class="badge">3</span>
          </button>

          <button class="circle-btn">
            <span class="icon-settings"></span>
          </button>

          <button class="circle-btn lang-btn" @click="toggleLang">
            {{ currentLang === 'ar' ? 'EN' : 'AR' }}
          </button>

          <button class="circle-btn" @click="logout">
            <span class="icon-logout-svgrepo-com"></span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import messages from '@/data/lang'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isMenuOpen = ref(false)
const userImage = ref(null)
const defaultImage = '@assets/Rectangle 1799.png'
const fileInput = ref(null)
const storedUser = localStorage.getItem('user')

const logout = async () => {
  const token = localStorage.getItem('token')

  try {
    await fetch('http://127.0.0.1:8000/api/logout', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      }
    })
  } catch (e) {}

  localStorage.removeItem('token')
  localStorage.removeItem('user')

  router.push('/login')
}

const user = ref(
  storedUser ? JSON.parse(storedUser) : { name: 'فارس القدومي' }
)
const chooseImage = () => {
  fileInput.value.click()
}
const handleImage = (e) => {
  const file = e.target.files[0]
  if (!file) return

  userImage.value = URL.createObjectURL(file)
}
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


.user-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.circle-btn {
  width: 45px;
  height: 45px;
  border: 1px solid #d9d9d9;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  font-size: 18px;
}

.lang-btn {
  font-weight: 700;
  font-size: 15px;
  color: #111;
}

.notification-btn .badge {
  position: absolute;
  top: -5px;
  right: -2px;
  width: 18px;
  height: 18px;
  background: #2354ff;
  color: #fff;
  border-radius: 50%;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-pill {
  height: 45px;
  padding: 4px 6px 4px 18px;
  background: #fff2ec;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-name {
  color: #e85b12;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
}

.user-pill img {
  width: 37px;
  height: 37px;
  border-radius: 50%;
  object-fit: cover;
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

[dir="ltr"] .icon-logout-svgrepo-com {
  transform: scaleX(-1);
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