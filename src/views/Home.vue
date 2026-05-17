<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="hero-right">
              <div class="title-decor">
                <h1>{{ $t('home.hero.title') }}</h1>
                <p>{{ $t('home.hero.subtitle') }}</p>
              </div>
            
              <div class="box-decor">
                <div class="title-box">
                  <h3>{{ $t('home.hero.description') }}</h3>
                </div>
              
                <div class="search-box">
                  <div class="input">
                    <div class="input-box">
                      <input
                        type="text"
                        :placeholder="$t('home.hero.searchJob')"
                        v-model="searchJob"
                      />
                      <span class="icon-search"></span>
                    </div>
                  
                    <div class="input-box select-box" @click="toggleDropdown">
                      <span class="icon-search"></span>
                                        
                      <div class="selected">
                        {{ searchLocation || $t('home.hero.searchLocation') }}
                      </div>
                    
                      <span class="icon-Polygon-1"></span>
                    
                      <ul v-if="showDropdown" class="dropdown">
                        <li
                          v-for="country in countriesList"
                          :key="country"
                          @click.stop="selectCountry(country)"
                        >
                          {{ country }}
                        </li>
                      </ul>
                    </div>
                  
                    <button @click="goToSearch">
                      {{ $t('home.hero.searchBtn') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="hero-left">
              <div class="person">
                <img src="@/assets/bigimg.png" alt="img">
              </div>
            </div>
          </div>
        </div>
        <div class="wave">
          <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
            <path
              d="M0,80 C300,150 1100,0 1440,80 L1440,150 L0,150 Z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="job-categories">
          <div class="row">
            <div class="col-12">
              <div class="categorie-title">
                <h2>{{ $t('home.categories.title') }}</h2>
                <p>{{ $t('home.categories.description') }}</p>
              </div>
            </div>
          </div>
        
          <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
              <router-link to="/Search-results" class="item">
                <div class="sent-icon">
                  <span class="icon-human-resources">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                    <span class="path4"></span>
                    <span class="path5"></span>
                  </span>
                </div>
                <p>{{ $t('home.categories.items.hr') }}</p>
              </router-link>
            </div>
          
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
              <router-link to="/Search-results" class="item">
                <div class="sent-icon">
                  <span class="icon-plane">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                  </span>
                </div>
                <p>{{ $t('home.categories.items.tourism') }}</p>
              </router-link>
            </div>
          
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
              <router-link to="/Search-results" class="item">
                <div class="sent-icon">
                  <span class="icon-fork-knife-on-a-plate">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </span>
                </div>
                <p>{{ $t('home.categories.items.restaurants') }}</p>
              </router-link>
            </div>
          
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
              <router-link to="/Search-results" class="item">
                <div class="sent-icon">
                  <span class="icon-customer-service"></span>
                </div>
                <p>{{ $t('home.categories.items.customerService') }}</p>
              </router-link>
            </div>
          
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
              <router-link to="/Search-results" class="item">
                <div class="sent-icon">
                  <span class="icon-art">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                    <span class="path4"></span>
                  </span>
                </div>
                <p>{{ $t('home.categories.items.arts') }}</p>
              </router-link>
            </div>
          
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
              <router-link to="/Search-results" class="item">
                <div class="sent-icon">
                  <span class="icon-finance">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </span>
                </div>
                <p>{{ $t('home.categories.items.finance') }}</p>
              </router-link>
            </div>
          
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
              <router-link to="/Search-results" class="item">
                <div class="sent-icon">
                  <span class="icon-logistics">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                  </span>
                </div>
                <p>{{ $t('home.categories.items.logistics') }}</p>
              </router-link>
            </div>
          
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
              <router-link to="/Search-results" class="item">
                <div class="sent-icon">
                  <span class="icon-world">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                  </span>
                </div>
                <p>{{ $t('home.categories.items.agriculture') }}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="about">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
              <div class="all-item">
                <div class="about-item orange">
                  <h1>137</h1>
                  <p>{{ $t('home.stats.jobs') }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
              <div class="all-item">
                <div class="about-item black">
                  <h1>48</h1>
                  <p>{{ $t('home.stats.sectors') }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
              <div class="all-item">
                <div class="about-item orange">
                  <h1>291</h1>
                  <p>{{ $t('home.stats.companies') }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
              <div class="all-item">
                <div class="about-item black">
                  <h1>46,000</h1>
                  <p>{{ $t('home.stats.beneficiaries') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="al">
      <div class="container">
        <div class="Key-partners">
          <div class="row">
            <div class="col-12">
              <div class="categorie-title">
                <h2>{{ $t('home.partners.title') }}</h2>
                <p>{{ $t('home.partners.description') }}</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <div class="all-partners">
                <div class="col-lg-5-custom col-md-3 col-sm-12 col-12">
                  <div class="about-partners">
                    <img class="img1" src="@/assets/img1partners.png" alt="img">
                    <p>{{ $t('home.partners.jobsCount') }}</p>
                  </div>
                </div>
                <div class="col-lg-5-custom col-md-3 col-sm-12 col-12">
                  <div class="about-partners">
                    <img class="img2" src="@/assets/img2partners.png" alt="img">
                    <p>{{ $t('home.partners.jobsCount') }}</p>
                  </div>
                </div>
                <div class="col-lg-5-custom col-md-3 col-sm-12 col-12">
                  <div class="about-partners">
                    <img class="img1" src="@/assets/img3partners.png" alt="img">
                    <p>{{ $t('home.partners.jobsCount') }}</p>
                  </div>
                </div>
                <div class="col-lg-5-custom col-md-3 col-sm-12 col-12">
                  <div class="about-partners">
                    <img class="img4" src="@/assets/img4partners.png" alt="img">
                    <p>{{ $t('home.partners.jobsCount') }}</p>
                  </div>
                </div>
                <div class="col-lg-5-custom col-md-3 col-sm-12 col-12">
                  <div class="about-partners">
                    <img class="img5" src="@/assets/img5partners.png" alt="img">
                    <p>{{ $t('home.partners.jobsCount') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="al">
      <div class="container">
        <div class="Choose-career">
          <div class="row">
            <div class="col-12">
              <div class="categorie-title">
                <h2>{{ $t('home.career.title') }}</h2>
                <p>{{ $t('home.career.description') }}</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <div class="card-company">
                <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div class="company-card">
                    <div class="card-content">
                      <router-link to="/signup-company">
                        <b class="small-title">{{ $t('home.career.companyCard.smallTitle') }}</b>
                      </router-link>
                      <h2>{{ $t('home.career.companyCard.title') }}</h2>
                      <p>{{ $t('home.career.companyCard.description') }}</p>
                    </div>
                    <div class="card-image">
                      <img src="@/assets/image27.png" alt="person" />
                    </div>
                    <span class="circle circle-top"></span>
                    <span class="circle circle-left"></span>
                    <span class="circle circle-right"></span>
                    <span class="circle circle-buttom"></span>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div class="company-card">
                    <div class="card-content">
                      <router-link to="/signup-jobseeker">
                        <b class="small-title">{{ $t('home.career.seekerCard.smallTitle') }}</b>
                      </router-link>
                      <h2>{{ $t('home.career.seekerCard.title') }}</h2>
                      <p>{{ $t('home.career.seekerCard.description') }}</p>
                    </div>
                    <div class="card-image">
                      <img src="@/assets/image26.png" alt="person" />
                    </div>
                    <span class="circle circle-top-l"></span>
                    <span class="circle circle-left-l"></span>
                    <span class="circle circle-right-l"></span>
                    <span class="circle circle-buttom-l"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="al">
      <div class="container">
        <div class="Latest-Jobs">
          <div class="row">
            <div class="col-12">
              <div class="Jobs">
                  <div class="col-lg-10 col-md-7 col-sm-12 col-12">
                    <div class="categorie-title">
                      <h2>{{ $t('home.latestJobs.title') }}</h2>
                      <p>{{ $t('home.latestJobs.description') }}</p>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-5 col-sm-12 col-12">
                    <div class="buttom-Latest-Jobs">
                      <router-link to="/LatestJobs">{{ $t('home.latestJobs.viewAll') }}</router-link>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div
              class="col-lg-6 col-md-12 col-sm-12 col-12"
              v-for="job in latestJobsList"
              :key="job.id"
            >
              <div class="Options-jop">
                <div class="img-Options">
                  <img :src="job.image" alt="img">
                </div>
              
                <div class="titles-Options">
                  <h2>{{ job.title }}</h2>
                
                  <div class="paragraph-Options">
                    <p class="color-Re">
                      <span class="icon-sector"></span>
                      {{ $t('home.latestJobs.sector') }}
                    </p>
                  
                    <p class="color-b">
                      <span class="icon-Vector"></span>
                      {{ job.location }}
                    </p>
                  </div>
                
                  <div class="Option">
                    <p>{{ $t('home.latestJobs.remote') }}</p>
                    <p>{{ $t('home.latestJobs.partTime') }}</p>
                    <p>{{ $t('home.latestJobs.advanced') }}</p>
                  </div>
                </div>
              
                <div class="icon-Options">
                  <span class="icon-save"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="al">
      <div class="container">
        <div class="Latest-government-jobs">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="categorie-title">
                <h2>{{ $t('home.governmentJobs.title') }}</h2>
                <p>{{ $t('home.governmentJobs.description') }}</p>
                <router-link to="/LatestJobs">{{ $t('home.governmentJobs.viewMore') }}</router-link>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="slider-wrapper">
              
                <div class="jobs-slider-preview side-card left-card">
                  <div class="top-jobs-slider-preview">
                    <div class="title-top-jobs">
                      <img src="@/assets/Rectangle 113.png" alt="img">
                      <h2>{{ jobs[prevIndex].company[$i18n.locale] }}</h2>
                    </div>
                    <span class="icon-warning"></span>
                  </div>
                
                  <div class="Center-jobs-slider-preview">
                    <div class="title-jobs-slider-preview">
                      <h1>{{ jobs[prevIndex].title[$i18n.locale] }}</h1>
                      <p>{{ jobs[prevIndex].time[$i18n.locale] }}</p>
                    </div>
                    <p>{{ jobs[prevIndex].desc[$i18n.locale] }}</p>
                  
                    <div class="Options-jobs-slider-preview">
                      <p>{{ $t('home.governmentJobs.tags.bonus') }}</p>
                      <p>{{ $t('home.governmentJobs.tags.hybrid') }}</p>
                    </div>
                  </div>
                
                  <div class="bottom-jobs-slider-preview">
                    <p>{{ $t('home.governmentJobs.deadline') }}</p>
                    <div class="Apply-now">
                      <router-link to="#">{{ $t('home.governmentJobs.applyNow') }}</router-link>
                      <p><span class="icon-save"></span></p>
                    </div>
                  </div>
                </div>
              
                <div class="jobs-slider-preview active-card">
                  <div class="top-jobs-slider-preview">
                    <div class="title-top-jobs">
                      <img src="@/assets/Rectangle 113.png" alt="img">
                      <h2>{{ jobs[currentIndex].company[$i18n.locale] }}</h2>
                    </div>
                    <span class="icon-warning"></span>
                  </div>
                
                  <div class="Center-jobs-slider-preview">
                    <div class="title-jobs-slider-preview">
                      <h1>{{ jobs[currentIndex].title[$i18n.locale] }}</h1>
                      <p>{{ jobs[currentIndex].time[$i18n.locale] }}</p>
                    </div>
                    <p>{{ jobs[currentIndex].desc[$i18n.locale] }}</p>
                  
                    <div class="Options-jobs-slider-preview">
                      <p>{{ $t('home.governmentJobs.tags.bonus') }}</p>
                      <p>{{ $t('home.governmentJobs.tags.hybrid') }}</p>
                    </div>
                  </div>
                
                  <div class="bottom-jobs-slider-preview">
                    <p>{{ $t('home.governmentJobs.deadline') }}</p>
                    <div class="Apply-now">
                      <router-link to="#">{{ $t('home.governmentJobs.applyNow') }}</router-link>
                      <p><span class="icon-save"></span></p>
                    </div>
                  </div>
                </div>
              
                <div class="jobs-slider-preview side-card right-card">
                  <div class="top-jobs-slider-preview">
                    <div class="title-top-jobs">
                      <img src="@/assets/Rectangle 113.png" alt="img">
                      <h2>{{ jobs[nextIndex].company[$i18n.locale] }}</h2>
                    </div>
                    <span class="icon-warning"></span>
                  </div>
                
                  <div class="Center-jobs-slider-preview">
                    <div class="title-jobs-slider-preview">
                      <h1>{{ jobs[nextIndex].title[$i18n.locale] }}</h1>
                      <p>{{ jobs[nextIndex].time[$i18n.locale] }}</p>
                    </div>
                    <p>{{ jobs[nextIndex].desc[$i18n.locale] }}</p>
                  
                    <div class="Options-jobs-slider-preview">
                      <p>{{ $t('home.governmentJobs.tags.bonus') }}</p>
                      <p>{{ $t('home.governmentJobs.tags.hybrid') }}</p>
                    </div>
                  </div>
                
                  <div class="bottom-jobs-slider-preview">
                    <p>{{ $t('home.governmentJobs.deadline') }}</p>
                    <div class="Apply-now">
                      <router-link to="#">{{ $t('home.governmentJobs.applyNow') }}</router-link>
                      <p><span class="icon-save"></span></p>
                    </div>
                  </div>
                </div>
              
                <button class="nav-btn prev" @click="prevSlide">
                  <span class="icon-arrow"></span>
                </button>
              
                <button class="nav-btn next" @click="nextSlide">
                  <span class="icon-arrow-1"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="News-events">
          <div class="row">
            <div class="col-12">
              <div class="categorie-title-or">
                <h2 class="color-or">{{ $t('home.news.sectionTitle') }}</h2>
                <p>{{ $t('home.news.sectionDescription') }}</p>
              </div>
            </div>
          </div>
        
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="categorie-title">
                <div class="title-width">
                  <b>{{ $t('home.news.date') }}</b>
                  <h2>{{ $t('home.news.title') }}</h2>
                  <p>{{ $t('home.news.description') }}</p>
                </div>
              </div>
            </div>
          
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="news-slider">
                <div class="slider-shape shape-one"></div>
                <div class="slider-shape shape-two"></div>
                <div class="slider-shape shape-three"></div>
                
                <div class="news-image-card">
                  <img :src="newsImages[newsCurrentIndex]" alt="news image">
                </div>
                
                <button class="news-arrow next" @click="nextNewsSlide">
                  <span class="icon-arrow"></span>
                </button>
              
                <div class="circle-decor big-circle"></div>
                <div class="circle-decor small-circle"></div>
                <div class="circle-decor dot-circle"></div>
                <div class="circle-decor x-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="Lots-of-jobs">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="img-Lots">
                <img src="@/assets/Rectangle1799.png" alt="img">
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="title-Lots">
                <h2><span>{{ $t('home.lotsOfJobs.title1') }}</span>{{ $t('home.lotsOfJobs.title3') }}</h2>
                <h2>{{ $t('home.lotsOfJobs.title2') }}</h2>
                <p>{{ $t('home.lotsOfJobs.description') }}</p>
                <p><img src="@/assets/Vector 89.png" alt="icon" />&nbsp;&nbsp;{{ $t('home.lotsOfJobs.point1') }}</p>
                <p><img src="@/assets/Vector 89.png" alt="icon" />&nbsp;&nbsp;{{ $t('home.lotsOfJobs.point2') }}</p>
                <p><img src="@/assets/Vector 89.png" alt="icon" />&nbsp;&nbsp;{{ $t('home.lotsOfJobs.point3') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="fqa">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="title-fqa">
                <span class="small-faq-title">{{ $t('home.faq.smallTitle') }}</span>
                <h2><span>{{ $t('home.faq.title1') }}</span> {{ $t('home.faq.title2') }}</h2>
                <p>{{ $t('home.faq.description') }}</p>
                <router-link to="/faq"><strong>{{ $t('home.faq.viewAll') }}</strong></router-link>
              </div>
            </div>
          
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="faq-accordion">
              
                <div class="faq-item" :class="{ active: openFaqs.includes(0) }">
                  <div class="faq-question" @click="toggleFaq(0)">
                    <span class="faq-mark">?</span>
                    <h3>{{ $t('home.faq.questions[0].q') }}</h3>
                    <span class="icon-arrow-1 vector" :class="{ rotated: openFaqs.includes(0) }"></span>
                  </div>
                  <div class="faq-answer" v-if="openFaqs.includes(0)">
                    <p>{{ $t('home.faq.questions[0].a') }}</p>
                  </div>
                </div>
              
                <div class="faq-item" :class="{ active: openFaqs.includes(1) }">
                  <div class="faq-question" @click="toggleFaq(1)">
                    <span class="faq-mark">?</span>
                    <h3>{{ $t('home.faq.questions[1].q') }}</h3>
                    <span class="icon-arrow-1 vector" :class="{ rotated: openFaqs.includes(1) }"></span>
                  </div>
                  <div class="faq-answer" v-if="openFaqs.includes(1)">
                    <p>{{ $t('home.faq.questions[1].a') }}</p>
                  </div>
                </div>
              
                <div class="faq-item" :class="{ active: openFaqs.includes(2) }">
                  <div class="faq-question" @click="toggleFaq(2)">
                    <span class="faq-mark">?</span>
                    <h3>{{ $t('home.faq.questions[2].q') }}</h3>
                    <span class="icon-arrow-1 vector" :class="{ rotated: openFaqs.includes(2) }"></span>
                  </div>
                  <div class="faq-answer" v-if="openFaqs.includes(2)">
                    <p>{{ $t('home.faq.questions[2].a') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="space"></div>
  </div>
</template>
<script>
import home from '../scripts/home.js'
import slider from '../scripts/slider.js'

export default {
  name: "Home",

  computed: {
    ...home.computed,
    ...slider.computed
  },

  data() {
    return {
      ...(typeof home.data === 'function' ? home.data.call(this) : {}),
      ...(typeof slider.data === 'function' ? slider.data.call(this) : {})
    }
  },

  methods: {
    ...home.methods,
    ...slider.methods
  }
}
</script>
<style src="../styles/resposive/home-responsive.css"></style>
<style src="../styles/home.css"></style>
<style src="../styles/icon.css"></style>