import { createRouter, createWebHistory } from 'vue-router'
import i18n from '@/i18n'

import Home from '../views/Home.vue'
import Operators from '@/views/Operators.vue'
import JobOpportunities from '@/views/JobOpportunities.vue'
import GovernmentJobs from '@/views/GovernmentJobs.vue'
import faq from '@/views/faq.vue'
import privacy from '@/views/privacy.vue'
import howToUse from '@/views/howToUse.vue'
import contact from '@/views/contact.vue'
import LatestJobs from '@/views/LatestJobs.vue'
import WorkDetails from '@/views/WorkDetails.vue'
import SearchResults from '@/views/SearchResults.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { locale: 'ar' }
  },

  {
    path: '/en',
    name: 'home-en',
    component: Home,
    meta: { locale: 'en' }
  },

  {
    path: '/Operators',
    name: 'Operators',
    component: Operators
  },

  {
    path: '/Operators/en',
    name: 'Operators-en',
    component: Operators
  },

  {
    path: '/JobOpportunities',
    name: 'JobOpportunities',
    component: JobOpportunities
  },

  {
    path: '/JobOpportunities/en',
    name: 'JobOpportunities-en',
    component: JobOpportunities
  },

  {
    path: '/GovernmentJobs',
    name: 'GovernmentJobs',
    component: GovernmentJobs
  },

  {
    path: '/GovernmentJobs/en',
    name: 'GovernmentJobs-en',
    component: GovernmentJobs
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      authLayout: true
    }
  },

  {
    path: '/login/en',
    name: 'login-en',
    component: () => import('@/views/login.vue'),
    meta: {
      authLayout: true
    }
  },

  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/signup.vue'),
    meta: {
      authLayout: true
    }
  },

  {
    path: '/signup/en',
    name: 'signup-en',
    component: () => import('@/views/signup.vue'),
    meta: {
      authLayout: true
    }
  },

  {
    path: '/signup-company',
    name: 'signup-company',
    component: () => import('@/views/signup-company.vue'),
    meta: { authLayout: true }
  },

  {
    path: '/signup-company/en',
    name: 'signup-company-en',
    component: () => import('@/views/signup-company.vue'),
    meta: { authLayout: true }
  },

  {
    path: '/signup-jobseeker',
    name: 'signup-jobseeker',
    component: () => import('@/views/signup-jobseeker.vue'),
    meta: { authLayout: true }
  },

  {
    path: '/signup-jobseeker/en',
    name: 'signup-jobseeker-en',
    component: () => import('@/views/signup-jobseeker.vue'),
    meta: { authLayout: true }
  },

  {
    path: '/faq',
    name: 'faq',
    component: faq
  },

  {
    path: '/faq/en',
    name: 'faq-en',
    component: faq
  },

  {
    path: '/howToUse',
    name: 'howToUse',
    component: howToUse
  },

  {
    path: '/howToUse/en',
    name: 'howToUse-en',
    component: howToUse
  },

  {
    path: '/contact',
    name: 'contact',
    component: contact
  },

  {
    path: '/contact/en',
    name: 'contact-en',
    component: contact
  },

  {
    path: '/privacy',
    name: 'privacy',
    component: privacy
  },

  {
    path: '/privacy/en',
    name: 'privacy-en',
    component: privacy
  },

  {
    path: '/LatestJobs',
    name: 'LatestJobs',
    component: LatestJobs
  },

  {
    path: '/LatestJobs/en',
    name: 'LatestJobs-en',
    component: LatestJobs
  },

  {
    path: '/work-details',
    name: 'WorkDetails',
    component: WorkDetails
  },

  {
    path: '/work-details/en',
    name: 'WorkDetails-en',
    component: WorkDetails
  },

  {
    path: '/Search-results',
    name: 'SearchResults',
    component: SearchResults
  },

  {
    path: '/Search-results/en',
    name: 'SearchResults-en',
    component: SearchResults
  },

  {
    path: '/jobseeker-home',
    name: 'JobSeekerHome',
    component: () => import('@/views/JobSeekerHome.vue'),
    meta: {
      userNavbar: true
    }
  },

  {
    path: '/jobseeker-home/en',
    name: 'JobSeekerHome-en',
    component: () => import('@/views/JobSeekerHome.vue'),
    meta: {
      userNavbar: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const locale = to.path.endsWith('/en') || to.path === '/en'
  ? 'en'
  : 'ar'

  i18n.global.locale.value = locale

  document.documentElement.lang = locale
  document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'

  next()
})

export default router