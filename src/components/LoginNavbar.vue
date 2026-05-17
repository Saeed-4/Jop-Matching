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
    width: 40px;
    height: 40px;
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

  .lang-switch {
    width: 36px;
    height: 36px;
  }

  .lang-switch button {
    font-size: 13px;
  }
}
</style>