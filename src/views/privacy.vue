<template>
  <div class="privacy">
    <div class="header-Operators">
      <span class="decor-circle left-big"></span>
      <span class="decor-circle left-small"></span>
      <span class="decor-circle left-dot"></span>
      <span class="decor-circle right-big"></span>
      <span class="decor-circle right-small"></span>
      <span class="decor-circle right-dot"></span>

      <div class="container">
        <div class="title-Operators">
          <h2>{{ $t('privacy.title') }}</h2>
          <p>{{ $t('privacy.breadcrumb') }}</p>
        </div>
      </div>
    </div>

    <div class="container">
      <section class="privacy-page">
        <div class="privacy-content">
          <p class="privacy-intro">
            {{ $t('privacy.intro') }}
          </p>

          <div
            class="privacy-section"
            v-for="(section, index) in privacySections"
            :key="index"
          >
            <h2>{{ section.title }}</h2>

            <p v-if="section.content">
              {{ section.content }}
            </p>

            <ul v-if="section.items">
              <li v-for="(item, i) in section.items" :key="i">
                {{ item }}
              </li>
            </ul>

            <p v-if="section.content">
              {{ section.contented }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import privacy from '@/scripts/privacy'
export default privacy
</script>
<style src="../styles/resposive/privacy-responsive.css"></style>
<style src="../styles/privacy.css"></style>