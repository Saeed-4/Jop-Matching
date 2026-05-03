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
              <h2>سياسة الخصوصية والشروط والأحكام</h2>
              <p>الرئيسية- سياسة الخصوصية والشروط والأحكام</p>
            </div>
          </div>
        </div>
    </div>
    <div class="container">
        <section class="privacy-page">
          <div class="container">
            <div class="privacy-content">
              <h1>{{ text.title }}</h1>
            
              <p class="privacy-intro">
                {{ text.intro }}
              </p>
          
              <div
                class="privacy-section"
                v-for="(section, index) in text.sections"
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
              </div>
            </div>
          </div>
        </section>
    </div>
</template>
<script>
import privacy from '@/scripts/privacy';
export default privacy
</script>
<style src="../styles/privacy.css"></style>