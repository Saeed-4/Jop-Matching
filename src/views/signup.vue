<template>
  <div class="sign-up" :dir="currentLang === 'ar' ? 'rtl' : 'ltr'">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title-sign-up">
            <h2>{{ signupText.title }}</h2>
            <p>{{ signupText.subtitle }}</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="box-sign-up">
            <div class="icon-sign-up">
              <span class="icon-company"></span>
            </div>

            <div class="about-sign-up">
              <h3>{{ signupText.company.title }}</h3>
              <p>{{ signupText.company.description }}</p>
            </div>

            <div class="Create-sign-up">
              <router-link to="/signup-company">
                <p>{{ signupText.createAccount }}</p>
              </router-link>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="box-sign-up">
            <div class="icon-sign-up">
              <span class="icon-work"></span>
            </div>

            <div class="about-sign-up">
              <h3>{{ signupText.jobSeeker.title }}</h3>
              <p>{{ signupText.jobSeeker.description }}</p>
            </div>

            <div class="Create-sign-up">
              <router-link to="/signup-jobseeker">
                <p>{{ signupText.createAccount }}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import signup from '../scripts/signup'

export default signup
</script>

<style src="../styles/sugnup.css"></style>