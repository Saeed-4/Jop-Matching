import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Operators from '@/views/Operators.vue'
import JobOpportunities from '@/views/JobOpportunities.vue'
import GovernmentJobs from '@/views/GovernmentJobs.vue'
import login from '@/views/login.vue'
import signup from '@/views/signup.vue'
import faq from '@/views/faq.vue'
import privacy from '@/views/privacy.vue'
import howToUse from '@/views/howToUse.vue'
import contact from '@/views/contact.vue'

const routes = [
  {
    path:'/',
    name:'home',
    component:Home,
  },
  {
    path:'/Operators',
    name:'Operators',
    component:Operators,
  },
  {
    path:'/JobOpportunities',
    name:'JobOpportunities',
    component:JobOpportunities,
  },
  {
    path:'/GovernmentJobs',
    name:'GovernmentJobs',
    component:GovernmentJobs,
  },
  {
    path:'/login',
    name:'login',
    component: () => import('../views/login.vue')
  },
  {
    path:'/signup',
    name:'signup',
    component:signup,
  },
  {
    path:'/faq',
    name:'faq',
    component:faq,
  },
  {
    path:'/howToUse',
    name:'howToUse',
    component:howToUse,
  },
  {
    path:'/contact',
    name:'contact',
    component:contact,
  },
  {
    path:'/privacy',
    name:'privacy',
    component:privacy,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
