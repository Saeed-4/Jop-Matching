<template>
  <div class="GovernmentJobs">
    <div class="header-Operators">
      <span class="decor-circle left-big"></span>
      <span class="decor-circle left-small"></span>
      <span class="decor-circle left-dot"></span>
      <span class="decor-circle right-big"></span>
      <span class="decor-circle right-small"></span>
      <span class="decor-circle right-dot"></span>

      <div class="container">
        <div class="title-Operators">
          <h2>{{ $t('governmentJobsPage.header.title') }}</h2>
          <p>{{ $t('governmentJobsPage.header.breadcrumb') }}</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="GovernmentJobs-box search-job-box">
            <input
              type="text"
              :placeholder="$t('governmentJobsPage.searchPlaceholder')"
            />
          </div>
        </div>

        <div class="col-12">
          <div class="government-list">
            <div
              class="government-card-wide"
              v-for="(job, index) in paginatedGovernmentJobs"
              :key="index"
            >
              <div class="government-card-top">
                <span class="government-category">{{ job.category }}</span>
              </div>

              <div class="government-card-body">
                <div class="government-card-content">
                  <div class="government-card-head">
                    <h2>{{ job.title }}</h2>
                    <span class="government-date">{{ job.date }}</span>
                  </div>

                  <div class="government-company">
                    <img :src="job.logo" alt="company logo" />
                    <span>{{ job.company }}</span>
                  </div>

                  <p class="government-description">
                    {{ job.description }}
                    <span class="show-more">{{ job.showMore }}</span>
                  </p>

                  <div class="government-tags">
                    <span v-for="(tag, tagIndex) in job.tags" :key="tagIndex">
                      {{ tag }}
                    </span>
                  </div>
                </div>

                <div class="government-card-action">
                  <button class="apply-btn">
                    {{ job.applyNow }}
                    <span class="icon-arrow-right-svgrepo-com"></span>
                  </button>
                  <div class="Source">
                    <p>{{ $t('governmentJobsPage.source') }}:</p>
                    <img :src="job.imglogo" alt="company logo">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="government-pagination">
            <button
              v-for="page in visiblePages"
              :key="page"
              class="government-page-btn"
              :class="{ active: currentPage === page }"
              @click="goToPage(page)"
            >
              {{ page }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GovernmentJobs from '../scripts/GovernmentJobs.js'
export default GovernmentJobs
</script>
<style src="../styles/resposive/government-jobs-responsive.css"></style>
<style src="../styles/header.css"></style>
<style src="../styles/GovernmentJobs.css"></style>
