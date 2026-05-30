<template>
  <div class="companyHome">
    <div class="container">

      <!-- معلومات الشركة -->
      <div class="all-Corp-Solutions">
        <div class="about-Corp">
          <div class="row">
            <div class="col-lg-10 col-md-8 col-sm-6 col-12">
              <div class="Corp-Solutions-Technology">
                <img src="@/assets/Container.png" alt="img">
                <div class="information-Corp">
                  <h2>{{ $t('companyHome.companyName') }} <span class="icon-true"></span></h2>
                  <div class="location-Corp-Solutions">
                    <p><span class="icon-construction"></span>&nbsp;{{ $t('companyHome.sector') }}</p>
                    <p><span class="icon-Vector"></span>&nbsp;{{ $t('companyHome.location') }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 col-12">
              <div class="Button-Corp-Solutions">
                <div class="Edit-company-file">
                  <span class="icon-edit-profile-svgrepo-com"></span>
                  <h4>{{ $t('companyHome.editProfile') }}</h4>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="Paragraphs">
                <h2>{{ $t('companyHome.companyDesc1') }}</h2>
                <p>{{ $t('companyHome.companyDesc2') }}</p>
                <b>{{ $t('companyHome.companyDesc3') }}</b>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- قائمة العرض -->
      <div class="Display-list">
        <h2>{{ $t('companyHome.displayList.title') }}</h2>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-12 col-12">
            <div class="Menu-information">
              <div class="icon-Menu">
                <span class="icon-three-circles-svgrepo-com"></span>
                <span class="icon-Container-4">
                  <span class="path1"></span><span class="path2"></span>
                  <span class="path3"></span><span class="path4"></span><span class="path5"></span>
                </span>
              </div>
              <p>{{ $t('companyHome.displayList.compatible') }}</p>
              <span>89</span>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 col-12">
            <div class="Menu-information">
              <div class="icon-Menu">
                <span class="icon-person-2-fill-svgrepo-com"></span>
                <span class="icon-Container-5">
                  <span class="path1"></span><span class="path2"></span>
                  <span class="path3"></span><span class="path4"></span><span class="path5"></span>
                </span>
              </div>
              <p>{{ $t('companyHome.displayList.qualified') }}</p>
              <span>247</span>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 col-12">
            <div class="Menu-information">
              <div class="icon-Menu">
                <span class="icon-paper-svgrepo-com"></span>
                <span class="icon-Container-6">
                  <span class="path1"></span><span class="path2"></span>
                  <span class="path3"></span><span class="path4"></span><span class="path5"></span>
                </span>
              </div>
              <p>{{ $t('companyHome.displayList.received') }}</p>
              <span>5</span>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 col-12">
            <div class="Menu-information">
              <div class="icon-Menu">
                <span class="icon-suitcase-svgrepo-com"></span>
                <span class="icon-Container-7">
                  <span class="path1"></span><span class="path2"></span>
                  <span class="path3"></span><span class="path4"></span><span class="path5"></span>
                </span>
              </div>
              <p>{{ $t('companyHome.displayList.activeJobs') }}</p>
              <span>12</span>
            </div>
          </div>
        </div>
      </div>

      <!-- الوظائف المقدمة -->
      <div class="Jobs-offered">
        <div class="row">
          <div class="col-lg-10 col-md-8 col-sm-12 col-12">
            <div class="title-Jobs-offered">
              <h2>{{ $t('companyHome.jobsOffered.title') }}</h2>
              <p>{{ $t('companyHome.jobsOffered.desc') }}</p>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-12 col-12">
            <div class="Button"><p>{{ $t('companyHome.jobsOffered.viewAll') }}</p></div>
          </div>

          <!-- كارد وظيفة (مكرر 3 مرات) -->
          <div v-for="n in 3" :key="n" class="col-lg-4 col-md-6 col-sm-12 col-12">
            <div class="about-Jobs-offered">
              <div class="title">
                <h2>محلل بيانات</h2>
                <div class="active"><p>{{ $t('companyHome.jobsOffered.active') }}</p></div>
              </div>
              <div class="Published">
                <p><span class="icon-calender"></span> {{ $t('companyHome.jobsOffered.published') }} : 1 أبريل 2025</p>
                <p><span class="icon-calender"></span> {{ $t('companyHome.jobsOffered.deadline') }} : 1 أبريل 2025</p>
              </div>
              <div class="Number-of-people">
                <div class="section">
                  <span class="icon-person-2-fill-svgrepo-com"></span>
                  <div class="Number">
                    <p>30</p>
                    <h4>{{ $t('companyHome.jobsOffered.applicants') }}</h4>
                  </div>
                </div>
                <div class="section">
                  <span class="icon-three-circles-svgrepo-com"></span>
                  <div class="Number">
                    <p>10</p>
                    <h4>{{ $t('companyHome.jobsOffered.match') }}</h4>
                  </div>
                </div>
              </div>
              <div class="icon-Number-of-people">
                <div class="stop">
                  <span class="icon-media-pause-outline"></span>
                  <p>{{ $t('companyHome.jobsOffered.pause') }}</p>
                </div>
                <div class="eye">
                  <span class="icon-eye"></span>
                  <p>{{ $t('companyHome.jobsOffered.viewApplicants') }}</p>
                </div>
                <div class="edit">
                  <span class="icon-edit-svgrepo-com"></span>
                  <p>{{ $t('companyHome.jobsOffered.edit') }}</p>
                </div>
                <div class="delet">
                  <span class="icon-trash"></span>
                  <p>{{ $t('companyHome.jobsOffered.delete') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- المتقدمين - الأكثر والأقل توافقاً -->
      <div class="Job-applicants">
        <div class="row">
          <div class="col-lg-10 col-md-8 col-sm-12 col-12">
            <div class="title-Jobs-offered">
              <h2>{{ $t('companyHome.candidates.title') }}</h2>
              <p>{{ $t('companyHome.candidates.desc') }}</p>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-12 col-12">
            <div class="Button"><p>{{ $t('companyHome.jobsOffered.viewAll') }}</p></div>
          </div>
        </div>

        <h3 class="section-title">{{ $t('companyHome.candidates.mostCompatible') }}</h3>
        <div class="row">
          <div v-for="c in mostCompatible" :key="c.id" class="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div class="candidate-card">
              <div class="card-header-candidate">
                <div class="avatar">{{ c.name.charAt(0) }}</div>
                <div class="name-block">
                  <h4 class="candidate-name">{{ c.name }}</h4>
                  <p class="candidate-role">{{ c.role }}</p>
                </div>
              </div>
              <div class="skills">
                <span v-for="skill in c.skills" :key="skill" class="skill-badge">{{ skill }}</span>
              </div>
              <div class="meta">
                <p><span class="icon-Vector"></span>{{ c.location }}</p>
                <p><span class="icon-suitcase-svgrepo-com"></span> {{ c.experience }} {{ $t('companyHome.candidates.years') }}</p>
              </div>
              <div class="card-actions">
                <button class="btn-view"><span class="icon-eye"></span> {{ $t('companyHome.candidates.viewProfile') }}</button>
                <button class="btn-save"><span class="icon-save"></span> {{ $t('companyHome.candidates.list') }}</button>
              </div>
            </div>
          </div>
        </div>

        <h3 class="section-title">{{ $t('companyHome.candidates.leastCompatible') }}</h3>
        <div class="row">
          <div v-for="c in leastCompatible" :key="c.id" class="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div class="candidate-card">
              <div class="card-header-candidate">
                <div class="avatar">{{ c.name.charAt(0) }}</div>
                <div class="name-block">
                  <h4 class="candidate-name">{{ c.name }}</h4>
                  <p class="candidate-role">{{ c.role }}</p>
                </div>
              </div>
              <div class="skills">
                <span v-for="skill in c.skills" :key="skill" class="skill-badge">{{ skill }}</span>
              </div>
              <div class="meta">
                <p><span class="icon-Vector"></span>{{ c.location }}</p>
                <p><span class="icon-suitcase-svgrepo-com"></span> {{ c.experience }} {{ $t('companyHome.candidates.years') }}</p>
              </div>
              <div class="card-actions">
                <button class="btn-view"><span class="icon-eye"></span> {{ $t('companyHome.candidates.viewProfile') }}</button>
                <button class="btn-save"><span class="icon-save"></span> {{ $t('companyHome.candidates.list') }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- جدول المتقدمين -->
      <div class="Job-applicants">
        <div class="row">
          <div class="col-lg-10 col-md-8 col-sm-12 col-12">
            <div class="title-Jobs-offered">
              <h2>{{ $t('companyHome.table.title') }}</h2>
              <p>{{ $t('companyHome.table.desc') }}</p>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-12 col-12">
            <div class="Button"><p>{{ $t('companyHome.table.viewAll') }}</p></div>
          </div>
        </div>
        <div class="candidates-table">
          <table>
            <thead>
              <tr>
                <th>{{ $t('companyHome.table.name') }}</th>
                <th>{{ $t('companyHome.table.job') }}</th>
                <th>{{ $t('companyHome.table.date') }}</th>
                <th>{{ $t('companyHome.table.status') }}</th>
                <th>{{ $t('companyHome.table.actions') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="c in candidates" :key="c.id">
                <td class="name-cell">
                  <div class="avatar">{{ c.name.charAt(0) }}</div>
                  <span>{{ c.name }}</span>
                </td>
                <td>{{ c.job }}</td>
                <td>{{ c.date }}</td>
                <td>
                  <span class="status-badge" :class="c.statusClass">{{ c.status }}</span>
                </td>
                <td class="actions-cell">
                  <span class="icon-eye action-icon"></span>
                  <span class="icon-x action-icon red"></span>
                  <span class="icon-checkmark action-icon green"></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- الاحصائيات -->
      <div class="Statistics">
        <div class="row">
          <div class="col-12">
            <div class="title-Jobs-offered">
              <h2>{{ $t('companyHome.stats.title') }}</h2>
              <p>{{ $t('companyHome.stats.desc') }}</p>
            </div>
          </div>
        </div>
        <div class="dashboard">
          <div class="card">
            <div class="card-header">
              <h3>{{ $t('companyHome.stats.workChart') }}</h3>
              <select><option>{{ $t('companyHome.stats.month') }}</option></select>
            </div>
            <canvas id="workChart"></canvas>
          </div>
          <div class="card">
            <div class="card-header">
              <h3>{{ $t('companyHome.stats.jobsChart') }}</h3>
              <select><option>{{ $t('companyHome.stats.month') }}</option></select>
            </div>
            <canvas id="jobsChart"></canvas>
          </div>
        </div>
      </div>

      <!-- الأخبار والفعاليات -->
      <div class="News-events">
        <div class="row">
          <div class="col-12">
            <div class="title-Jobs-offered">
              <h2>{{ $t('companyHome.news.title') }}</h2>
              <p>{{ $t('companyHome.news.desc') }}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="categorie-title">
              <div class="title-width">
                <b>{{ $t('companyHome.news.date') }}</b>
                <h2>{{ $t('companyHome.news.newsTitle') }}</h2>
                <p>{{ $t('companyHome.news.newsDesc') }}</p>
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
  </div>
</template>

<script>
import { Chart } from 'chart.js/auto'
import slider from '../scripts/slider.js'
import home from '../scripts/home.js'
import companyHome from '@/scripts/companyHome.js'
export default companyHome
</script>

<style scoped src="../styles/companyHome.css"></style>