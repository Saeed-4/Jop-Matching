<template>
  <div class="LatestJobs">
    <div class="header-Operators">
      <span class="decor-circle left-big"></span>
      <span class="decor-circle left-small"></span>
      <span class="decor-circle left-dot"></span>
      <span class="decor-circle right-big"></span>
      <span class="decor-circle right-small"></span>
      <span class="decor-circle right-dot"></span>

      <div class="container">
        <div class="title-Operators">
          <h2>{{ $t('latestJobsPage.title') }}</h2>
          <p>{{ $t('latestJobsPage.breadcrumb') }}</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row filter-job-row">
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <div class="job-filter-box search-job-box">
            <input type="text" :placeholder="$t('jobOpportunities.filters.searchPlaceholder')" />
            <button class="search-btn-job">
              <span class="icon-search-1"></span>
            </button>
          </div>
        </div>

        <div class="col-lg-2 col-md-3 col-sm-12 col-12">
          <div class="job-filter-box small-job-box">
            <span class="filter-label">{{ $t('jobOpportunities.filters.country') }}</span>
            <span class="icon-arrow-1 filter-arrow"></span>
          </div>
        </div>

        <div class="col-lg-2 col-md-3 col-sm-12 col-12">
          <div class="job-filter-box small-job-box">
            <span class="filter-label">{{ $t('jobOpportunities.filters.sector') }}</span>
            <span class="icon-arrow-1 filter-arrow"></span>
          </div>
        </div>

        <div class="col-lg-2 col-md-3 col-sm-12 col-12">
          <div class="job-filter-box small-job-box">
            <span class="filter-label">{{ $t('jobOpportunities.filters.educationLevel') }}</span>
            <span class="icon-arrow-1 filter-arrow"></span>
          </div>
        </div>

        <div class="col-lg-2 col-md-3 col-sm-12 col-12">
          <div class="job-filter-box small-job-box">
            <span class="filter-label">{{ $t('jobOpportunities.filters.workType') }}</span>
            <span class="icon-arrow-1 filter-arrow"></span>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="job-list">
            <div class="job-card-wide" v-for="(job, index) in paginatedJobs" :key="index">
              <div class="job-card-top">
                <span class="job-category">{{ job.category }}</span>
              </div>

              <div class="job-card-body">
                <div class="job-card-content">
                  <div class="job-card-head">
                    <h2>{{ job.title }}</h2>
                    <span class="job-date">{{ job.date }}</span>
                  </div>

                  <div class="job-company">
                    <img :src="job.logo" alt="company logo" />
                    <span>{{ job.company }}</span>
                  </div>

                  <p class="job-description">
                    {{ job.description }}
                    <span class="show-more">{{ job.showMore }}</span>
                  </p>

                  <div class="job-tags">
                    <span v-for="(tag, tagIndex) in job.tags" :key="tagIndex">
                      {{ tag }}
                    </span>
                  </div>
                </div>

                <div class="job-card-action">
                  <button class="apply-btn">
                    {{ job.applyNow }}
                    <span class="icon-arrow"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="job-pagination">
            <button
              v-for="page in visiblePages"
              :key="page"
              class="job-page-btn"
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
import latestJobs from '@/scripts/LatestJobs.js'
export default latestJobs
</script>

<style src="../styles/JobOpportunities.css"></style>