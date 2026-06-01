import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'
import '@/styles/font.css'
import '@/styles/direction.css'
import '@/styles/_grids.css'
import { useAuthStore } from '@/stores/auth'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
const auth = useAuthStore(pinia)
auth.init()

app.use(pinia)
app.use(router)
app.use(i18n)
app.use(VueTelInput)
app.mount('#app')