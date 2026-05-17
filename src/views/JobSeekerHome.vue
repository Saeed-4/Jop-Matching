<template>
  <div class="home-2">
    <UserNavbar :currentLang="currentLang" @changeLang="$emit('changeLang', $event)" />
    <section class="hero-2">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="hero-all">
              <h1 v-if="profile"> مرحباً {{ profile.first_name }}</h1>
              <p>{{ text.jobSeekerHome.heroDesc }}</p>

              <div class="search-box-2">
                <select>
                  <option>{{ text.jobSeekerHome.sector }}</option>
                </select>
                <select>
                  <option>{{ text.jobSeekerHome.country }}</option>
                </select>
                <div class="search-input">
                  <input type="text" :placeholder="text.jobSeekerHome.searchPlaceholder" />
                  <span class="icon-search"></span>
                </div>
              </div>
          
              <div class="suggested-box">
                <div class="suggested-header">
                  <h2>{{ text.jobSeekerHome.suggestedTitle }}</h2>
                  <button>{{ text.jobSeekerHome.viewAll }}</button>
                </div>
            
                <div class="jobs-list">
                  <div class="job-card" v-for="job in suggestedJobs" :key="job.id">
                    <div class="row">
                      <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                        <div class="job-info">
                          <div class="job-top">
                            <div>
                              <span class="company-sector"><span class="icon-sector1"></span>{{ text.jobSeekerHome.sectorName }} </span>
                            </div>
                          
                            <div class="icons">
                              <span class="icon-Vector-14"></span>
                              <span class="icon-Vector-15"></span>
                              <span class="icon-warning"></span>
                            </div>
                          </div>
                        
                          <h3>{{ job.title }}</h3>
                          <p class="job-desc">{{ text.jobSeekerHome.jobDesc }}</p>
                        
                          <div class="job-meta">
                            <div class="img-job-meta">
                              <img src="@/assets/Rectangle 652 (2).png" alt="img">
                              <span class="company-name"><strong>Blue ltd.</strong></span>
                            </div>
                            <div class="location-job-meta">
                              <span class="icon-location1"></span>
                              <p>{{ text.jobSeekerHome.location }}</p>
                            </div>
                            <div class="date-job-meta">
                              <span class="icon-posting"></span>
                              <p>{{ text.jobSeekerHome.postDate }}</p>
                            </div>
                            <div class="date-job-meta red">
                              <span class="icon-stopwatch-watch-deadline-svgrepo-com"></span>
                              <p><strong>{{ text.jobSeekerHome.deadline }}</strong></p>
                            </div>
                          </div>
                        
                          <div class="job-tags">
                            <span>{{ text.jobSeekerHome.tags.remote }}</span>
                            <span>{{ text.jobSeekerHome.tags.fullTime }}</span>
                            <span>{{ text.jobSeekerHome.tags.level }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div class="match-card">
                          <div class="circle-progress" :style="{ '--percent': job.match }">
                            <span>{{ job.match }}<small>%</small></span>
                          </div>
                          <div class="match-text">
                            <h4>{{ text.jobSeekerHome.matchTitle }}</h4>
                            <p>{{ text.jobSeekerHome.matchDesc }}</p>
                          </div>
                          <button class="apply-btn">
                            <span class="text">{{ text.jobSeekerHome.applyNow }}</span>
                            <span class="icon-arrow-right-svgrepo-com flip-icon icon"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wave">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path
            d="M0,80 C300,150 1100,0 1440,80 L1440,150 L0,150 Z"
            fill="#F7F7F7"
          />
        </svg>
      </div>
    </section>
    <div class="Distance"></div>
    <section class="all">
      <div class="container">
        <div class="job-categories">
          <div class="row">
            <div class="col-12">
              <div class="categorie-title">
                <h2>{{ text.home.categories.title }}</h2>
                <p>{{ text.home.categories.description }}</p>
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
                <p>{{ text.home.categories.items.hr }}</p>
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
                <p>{{ text.home.categories.items.tourism }}</p>
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
                <p>{{ text.home.categories.items.restaurants }}</p>
              </router-link>
            </div>
          
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
              <router-link to="/Search-results" class="item">
                <div class="sent-icon">
                  <span class="icon-customer-service"></span>
                </div>
                <p>{{ text.home.categories.items.customerService }}</p>
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
                <p>{{ text.home.categories.items.arts }}</p>
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
                <p>{{ text.home.categories.items.finance }}</p>
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
                <p>{{ text.home.categories.items.logistics }}</p>
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
                <p>{{ text.home.categories.items.agriculture }}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="all">
      <div class="container">
        <div class="about">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
              <div class="all-item">
                <div class="about-item orange">
                  <h1>137</h1>
                  <p>{{ text.home.stats.jobs }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
              <div class="all-item">
                <div class="about-item black">
                  <h1>48</h1>
                  <p>{{ text.home.stats.sectors }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
              <div class="all-item">
                <div class="about-item orange">
                  <h1>291</h1>
                  <p>{{ text.home.stats.companies }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
              <div class="all-item">
                <div class="about-item black">
                  <h1>46,000</h1>
                  <p>{{ text.home.stats.beneficiaries }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="all">
      <div class="container">
        <div class="Key-partners">
          <div class="row">
            <div class="col-12">
              <div class="categorie-title">
                <h2>{{ text.home.partners.title }}</h2>
                <p>{{ text.home.partners.description }}</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <div class="all-partners">
                <div class="col-lg-5-custom col-md-3 col-sm-12 col-12">
                  <div class="about-partners">
                    <img class="img1" src="@/assets/شعار ديوان الموظفين.png" alt="img">
                    <p>{{ text.home.partners.jobsCount }}</p>
                  </div>
                </div>
                <div class="col-lg-5-custom col-md-3 col-sm-12 col-12">
                  <div class="about-partners">
                    <img class="img2" src="@/assets/image 10.png" alt="img">
                    <p>{{ text.home.partners.jobsCount }}</p>
                  </div>
                </div>
                <div class="col-lg-5-custom col-md-3 col-sm-12 col-12">
                  <div class="about-partners">
                    <img class="img1" src="@/assets/joby.png" alt="img">
                    <p>{{ text.home.partners.jobsCount }}</p>
                  </div>
                </div>
                <div class="col-lg-5-custom col-md-3 col-sm-12 col-12">
                  <div class="about-partners">
                    <img class="img4" src="@/assets/image 8.png" alt="img">
                    <p>{{ text.home.partners.jobsCount }}</p>
                  </div>
                </div>
                <div class="col-lg-5-custom col-md-3 col-sm-12 col-12">
                  <div class="about-partners">
                    <img class="img5" src="@/assets/Group.png" alt="img">
                    <p>{{ text.home.partners.jobsCount }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="all">
      <div class="container">
        <div class="Latest-Jobs">
          <div class="row">
            <div class="col-12">
              <div class="Jobs">
                  <div class="col-lg-9 col-md-7 col-sm-12 col-12">
                    <div class="categorie-title">
                      <h2>{{ text.home.latestJobs.title }}</h2>
                      <p>{{ text.home.latestJobs.description }}</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-5 col-sm-12 col-12">
                    <div class="buttom-Latest-Jobs">
                      <router-link to="/LatestJobs">{{ text.home.latestJobs.viewAll }}</router-link>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="Options-jop">
                <div class="img-Options">
                  <img src="@/assets/Rectangle 652 (1).png" alt="img">
                </div>
                <div class="titles-Options">
                  <h2>{{ text.home.latestJobs.jobs[0].title }}</h2>
                  <div class="paragraph-Options">
                    <p class="color-Re"><span class="icon-sector"></span>{{ text.home.latestJobs.sector }}</p>
                    <p class="color-b"><span class="icon-Vector"></span>{{ text.home.latestJobs.jobs[0].location }}</p>
                  </div>
                  <div class="Option">
                    <p>{{ text.home.latestJobs.remote }}</p>
                    <p>{{ text.home.latestJobs.partTime }}</p>
                    <p>{{ text.home.latestJobs.advanced }}</p>
                  </div>
                </div>
                <div class="icon-Options">
                  <span class="icon-save"></span>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="Options-jop">
                <div class="img-Options">
                  <img src="@/assets/Rectangle 652 (2).png" alt="img">
                </div>
                <div class="titles-Options">
                  <h2>{{ text.home.latestJobs.jobs[1].title }}</h2>
                  <div class="paragraph-Options">
                    <p class="color-Re"><span class="icon-sector"></span>{{ text.home.latestJobs.sector }}</p>
                    <p class="color-b"><span class="icon-Vector"></span>{{ text.home.latestJobs.jobs[1].location }}</p>
                  </div>
                  <div class="Option">
                    <p>{{ text.home.latestJobs.remote }}</p>
                    <p>{{ text.home.latestJobs.partTime }}</p>
                    <p>{{ text.home.latestJobs.advanced }}</p>
                  </div>
                </div>
                <div class="icon-Options">
                  <span class="icon-save"></span>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="Options-jop">
                <div class="img-Options">
                  <img src="@/assets/Rectangle 652 (3).png" alt="img">
                </div>
                <div class="titles-Options">
                  <h2>{{ text.home.latestJobs.jobs[2].title }}</h2>
                  <div class="paragraph-Options">
                    <p class="color-Re"><span class="icon-sector"></span>{{ text.home.latestJobs.sector }}</p>
                    <p class="color-b"><span class="icon-Vector"></span>{{ text.home.latestJobs.jobs[2].location }}</p>
                  </div>
                  <div class="Option">
                    <p>{{ text.home.latestJobs.remote }}</p>
                    <p>{{ text.home.latestJobs.partTime }}</p>
                    <p>{{ text.home.latestJobs.advanced }}</p>
                  </div>
                </div>
                <div class="icon-Options">
                  <span class="icon-save"></span>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="Options-jop">
                <div class="img-Options">
                  <img src="@/assets/Rectangle 652 (3).png" alt="img">
                </div>
                <div class="titles-Options">
                  <h2>{{ text.home.latestJobs.jobs[3].title }}</h2>
                  <div class="paragraph-Options">
                    <p class="color-Re"><span class="icon-sector"></span>{{ text.home.latestJobs.sector }}</p>
                    <p class="color-b"><span class="icon-Vector"></span>{{ text.home.latestJobs.jobs[3].location }}</p>
                  </div>
                  <div class="Option">
                    <p>{{ text.home.latestJobs.remote }}</p>
                    <p>{{ text.home.latestJobs.partTime }}</p>
                    <p>{{ text.home.latestJobs.advanced }}</p>
                  </div>
                </div>
                <div class="icon-Options">
                  <span class="icon-save"></span>
                </div>
              </div>
            </div>         
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="Options-jop">
                <div class="img-Options">
                  <img src="@/assets/Rectangle 652 (2).png" alt="img">
                </div>
                <div class="titles-Options">
                  <h2>{{ text.home.latestJobs.jobs[4].title }}</h2>
                  <div class="paragraph-Options">
                    <p class="color-Re"><span class="icon-sector"></span>{{ text.home.latestJobs.sector }}</p>
                    <p class="color-b"><span class="icon-Vector"></span>{{ text.home.latestJobs.jobs[4].location }}</p>
                  </div>
                  <div class="Option">
                    <p>{{ text.home.latestJobs.remote }}</p>
                    <p>{{ text.home.latestJobs.partTime }}</p>
                    <p>{{ text.home.latestJobs.advanced }}</p>
                  </div>
                </div>
                <div class="icon-Options">
                  <span class="icon-save"></span>
                </div>
              </div>
            </div>         
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="Options-jop">
                <div class="img-Options">
                  <img src="@/assets/Rectangle 652 (1).png" alt="img">
                </div>
                <div class="titles-Options">
                  <h2>{{ text.home.latestJobs.jobs[5].title }}</h2>
                  <div class="paragraph-Options">
                    <p class="color-Re"><span class="icon-sector"></span>{{ text.home.latestJobs.sector }}</p>
                    <p class="color-b"><span class="icon-Vector"></span>{{ text.home.latestJobs.jobs[5].location }}</p>
                  </div>
                  <div class="Option">
                    <p>{{ text.home.latestJobs.remote }}</p>
                    <p>{{ text.home.latestJobs.partTime }}</p>
                    <p>{{ text.home.latestJobs.advanced }}</p>
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
    <section class="all">
      <div class="container">
        <div class="Latest-government-jobs">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="categorie-title">
                <h2>{{ text.home.governmentJobs.title }}</h2>
                <p>{{ text.home.governmentJobs.description }}</p>
                <router-link to="/LatestJobs">{{ text.home.governmentJobs.viewMore }}</router-link>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="slider-wrapper">
              
                <div class="jobs-slider-preview side-card left-card">
                  <div class="top-jobs-slider-preview">
                    <div class="title-top-jobs">
                      <img src="@/assets/Rectangle 113.png" alt="img">
                      <h2>{{ jobs[prevIndex].company[currentLang] }}</h2>
                    </div>
                    <span class="icon-warning"></span>
                  </div>
                
                  <div class="Center-jobs-slider-preview">
                    <div class="title-jobs-slider-preview">
                      <h1>{{ jobs[prevIndex].title[currentLang] }}</h1>
                      <p>{{ jobs[prevIndex].time[currentLang] }}</p>
                    </div>
                    <p>{{ jobs[prevIndex].desc[currentLang] }}</p>
                  
                    <div class="Options-jobs-slider-preview">
                      <p>{{ text.home.governmentJobs.tags.bonus }}</p>
                      <p>{{ text.home.governmentJobs.tags.hybrid }}</p>
                    </div>
                  </div>
                
                  <div class="bottom-jobs-slider-preview">
                    <p>{{ text.home.governmentJobs.deadline }}</p>
                    <div class="Apply-now">
                      <router-link to="#">{{ text.home.governmentJobs.applyNow }}</router-link>
                      <p><span class="icon-save"></span></p>
                    </div>
                  </div>
                </div>
              
                <div class="jobs-slider-preview active-card">
                  <div class="top-jobs-slider-preview">
                    <div class="title-top-jobs">
                      <img src="@/assets/Rectangle 113.png" alt="img">
                      <h2>{{ jobs[currentIndex].company[currentLang] }}</h2>
                    </div>
                    <span class="icon-warning"></span>
                  </div>
                
                  <div class="Center-jobs-slider-preview">
                    <div class="title-jobs-slider-preview">
                      <h1>{{ jobs[currentIndex].title[currentLang] }}</h1>
                      <p>{{ jobs[currentIndex].time[currentLang] }}</p>
                    </div>
                    <p>{{ jobs[currentIndex].desc[currentLang] }}</p>
                  
                    <div class="Options-jobs-slider-preview">
                      <p>{{ text.home.governmentJobs.tags.bonus }}</p>
                      <p>{{ text.home.governmentJobs.tags.hybrid }}</p>
                    </div>
                  </div>
                
                  <div class="bottom-jobs-slider-preview">
                    <p>{{ text.home.governmentJobs.deadline }}</p>
                    <div class="Apply-now">
                      <router-link to="#">{{ text.home.governmentJobs.applyNow }}</router-link>
                      <p><span class="icon-save"></span></p>
                    </div>
                  </div>
                </div>
              
                <!-- الكرت اليمين -->
                <div class="jobs-slider-preview side-card right-card">
                  <div class="top-jobs-slider-preview">
                    <div class="title-top-jobs">
                      <img src="@/assets/Rectangle 113.png" alt="img">
                      <h2>{{ jobs[nextIndex].company[currentLang] }}</h2>
                    </div>
                    <span class="icon-warning"></span>
                  </div>
                
                  <div class="Center-jobs-slider-preview">
                    <div class="title-jobs-slider-preview">
                      <h1>{{ jobs[nextIndex].title[currentLang] }}</h1>
                      <p>{{ jobs[nextIndex].time[currentLang] }}</p>
                    </div>
                    <p>{{ jobs[nextIndex].desc[currentLang] }}</p>
                  
                    <div class="Options-jobs-slider-preview">
                      <p>{{ text.home.governmentJobs.tags.bonus }}</p>
                      <p>{{ text.home.governmentJobs.tags.hybrid }}</p>
                    </div>
                  </div>
                
                  <div class="bottom-jobs-slider-preview">
                    <p>{{ text.home.governmentJobs.deadline }}</p>
                    <div class="Apply-now">
                      <router-link to="#">{{ text.home.governmentJobs.applyNow }}</router-link>
                      <p><span class="icon-save"></span></p>
                    </div>
                  </div>
                </div>
              
                <!-- الأسهم -->
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
    <section class="all">
      <div class="container">
        <div class="News-events">
          <div class="row">
            <div class="col-12">
              <div class="categorie-title-or">
                <h2 class="color-or">{{ text.home.news.sectionTitle }}</h2>
                <p>{{ text.home.news.sectionDescription }}</p>
              </div>
            </div>
          </div>
        
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="categorie-title">
                <div class="title-width">
                  <b>{{ text.home.news.date }}</b>
                  <h2>{{ text.home.news.title }}</h2>
                  <p>{{ text.home.news.description }}</p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="all">
      <div class="container">
        <div class="fqa">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="title-fqa">
                <span class="small-faq-title">{{ text.home.faq.smallTitle }}</span>
                <h2><span>{{ text.home.faq.title1 }}</span> {{ text.home.faq.title2 }}</h2>
                <p>{{ text.home.faq.description }}</p>
                <router-link to="/faq">{{ text.home.faq.viewAll }}</router-link>
              </div>
            </div>
          
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="faq-accordion">
              
                <div class="faq-item" :class="{ active: openFaqs.includes(0) }">
                  <div class="faq-question" @click="toggleFaq(0)">
                    <span class="faq-mark">?</span>
                    <h3>{{ text.home.faq.questions[0].q }}</h3>
                    <span class="icon-arrow-1 vector" :class="{ rotated: openFaqs.includes(0) }"></span>
                  </div>
                  <div class="faq-answer" v-if="openFaqs.includes(0)">
                    <p>{{ text.home.faq.questions[0].a }}</p>
                  </div>
                </div>
              
                <div class="faq-item" :class="{ active: openFaqs.includes(1) }">
                  <div class="faq-question" @click="toggleFaq(1)">
                    <span class="faq-mark">?</span>
                    <h3>{{ text.home.faq.questions[1].q }}</h3>
                    <span class="icon-arrow-1 vector" :class="{ rotated: openFaqs.includes(1) }"></span>
                  </div>
                  <div class="faq-answer" v-if="openFaqs.includes(1)">
                    <p>{{ text.home.faq.questions[1].a }}</p>
                  </div>
                </div>
              
                <div class="faq-item" :class="{ active: openFaqs.includes(2) }">
                  <div class="faq-question" @click="toggleFaq(2)">
                    <span class="faq-mark">?</span>
                    <h3>{{ text.home.faq.questions[2].q }}</h3>
                    <span class="icon-arrow-1 vector" :class="{ rotated: openFaqs.includes(2) }"></span>
                  </div>
                  <div class="faq-answer" v-if="openFaqs.includes(2)">
                    <p>{{ text.home.faq.questions[2].a }}</p>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import UserNavbar from '@/components/UserNavbar.vue'
import home from '../scripts/home.js'
import slider from '../scripts/slider.js'

export default {
  name: "Home",

  props: home.props,

  emits: ['changeLang'],
  
  components: {
     UserNavbar
  },
  computed: {
    ...home.computed,
    ...slider.computed
  },

  data() {
    return {
      user: null,
      profile: null,
      suggestedJobs: [
        {
          id: 1,
          title: 'Senior UX/UI Designer with Specialization in User Research',
          match: 88
        },
        {
          id: 2,
          title: 'Software Developer with a Background in QA and Networks',
          match: 75
        },
        {
          id: 3,
          title: 'Software Developer with a Background in QA and Networks',
          match: 58
        }
      ],

      ...(typeof home.data === 'function' ? home.data.call(this) : {}),
      ...(typeof slider.data === 'function' ? slider.data.call(this) : {})
    }
  },

  async mounted() {
    const token = localStorage.getItem('token')

    if (!token) {
      this.$router.push('/login')
      return
    }

    const response = await fetch('http://127.0.0.1:8000/api/me', {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    const data = await response.json()

    if (!response.ok) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.$router.push('/login')
      return
    }

    this.user = data.user
    this.profile = data.user.job_seeker_profile
    localStorage.setItem('user', JSON.stringify(data.user))
  },

  methods: {
    ...home.methods,
    ...slider.methods
  }
}
</script>
<style src="../styles/home.css"></style>
<style src="../styles/JobSeekerHome.css"></style>
<style src="../styles/icon.css"></style>