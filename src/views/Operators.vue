<template>
  <div class="Operators" :dir="currentLang === 'ar' ? 'rtl' : 'ltr'">
    <div class="header-Operators">
      <span class="decor-circle left-big"></span>
      <span class="decor-circle left-small"></span>
      <span class="decor-circle left-dot"></span>
      <span class="decor-circle right-big"></span>
      <span class="decor-circle right-small"></span>
      <span class="decor-circle right-dot"></span>

      <div class="container">
        <div class="title-Operators">
          <h2>{{ text.operators.header.title }}</h2>
          <p>{{ text.operators.header.breadcrumb }}</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="filters-bar">
            <div class="filter-box large search-box">
              <input type="text" :placeholder="text.operators.filters.searchPlaceholder" />
              <span class="icon-search"></span>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
          <div class="filters-bar">
            <div class="filter-box small">
              <span class="filter-text">{{ text.operators.filters.sector }}</span>
              <div class="down">
                <span class="icon-arrow-1"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
          <div class="filters-bar">
            <div class="filter-box small">
              <span class="filter-text">{{ text.operators.filters.companySize }}</span>
              <div class="down">
                <span class="icon-arrow-1"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-sm-12 col-12"
          v-for="(operator, index) in paginatedOperators"
          :key="index"
        >
          <div class="section-operators">
            <div class="top-section">
              <div class="img-section">
                <img :src="operator.logo" :alt="operator.name" />
              </div>
            </div>

            <div class="name-section">
              <p class="operator-name">{{ operator.name }}</p>
              <p class="operator-location">
                <span class="icon-Vector"></span>
                {{ operator.location }}
              </p>
            </div>

            <div class="about-section">
              <p>{{ operator.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="pagination-box">
        <button class="page-btn arrow" @click="prevPage" :disabled="currentPage === 1">
          <span class="icon-arrow-1"></span>
        </button>

        <button
          v-for="(page, index) in visiblePages"
          :key="index"
          class="page-btn"
          :class="{ active: currentPage === page, dots: page === '...' }"
          @click="goToPage(page)"
          :disabled="page === '...'"
        >
          {{ page }}
        </button>

        <button class="page-btn arrow  vect" @click="nextPage" :disabled="currentPage === totalPages">
          <span class="icon-arrow-1"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Operators from '../scripts/Operators.js'

export default Operators
</script>

<style src="../styles/Operators.css"></style>
<style src="../styles/font.css"></style>
<style src="../styles/header.css"></style>
<style src="../styles/resposive.css"></style>