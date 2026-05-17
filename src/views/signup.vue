<template>
  <div class="sign-up">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title-sign-up">
            <h2>{{ $t('signupPage.title') }}</h2>
            <p>{{ $t('signupPage.subtitle') }}</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="box-sign-up company-card">

            <div class="hover-stats stat-1">
              <strong>100</strong>
              <span>{{ $t('signupPage.stats.workSector') }}</span>
            </div>

            <div class="hover-stats stat-2">
              <strong>1020</strong>
              <span>{{ $t('signupPage.stats.cv') }}</span>
            </div>

            <div class="hover-stats stat-3">
              <strong>250</strong>
              <span>{{ $t('signupPage.stats.specialty') }}</span>
            </div>
          
            <div class="icon-sign-up">
              <img src="@/assets/company (1).png" alt="imgcompany">
            </div>

            <div class="about-sign-up">
              <h3>{{ $t('signupPage.company.title') }}</h3>
              <p>{{ $t('signupPage.company.description') }}</p>
            </div>

            <div class="Create-sign-up">
              <router-link to="/signup-company">
                <p>{{ $t('signupPage.createAccount') }}</p>
              </router-link>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="box-sign-up seeker-card">

              <div class="hover-stats stat-1">
                <strong>50+</strong>
                <span>{{ $t('signupPage.stats.workSector') }}</span>
              </div>
              
              <div class="hover-stats stat-2">
                <strong>150+</strong>
                <span>{{ $t('signupPage.stats.availableJobs') }}</span>
              </div>
              
              <div class="hover-stats stat-3">
                <strong>250</strong>
                <span>{{ $t('signupPage.stats.employers') }}</span>
              </div>
            
              <div class="icon-sign-up">
                <img src="@/assets/work.png" alt="imgwork">
              </div>

            <div class="about-sign-up">
              <h3>{{ $t('signupPage.jobSeeker.title') }}</h3>
              <p>{{ $t('signupPage.jobSeeker.description') }}</p>
            </div>

            <div class="Create-sign-up">
              <router-link to="/signup-jobseeker">
                <p>{{ $t('signupPage.createAccount') }}</p>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-12">
          <p class="signup-text">
            {{ $t('loginPage.thisAccont') }}
            <router-link to="/login">
              <p>{{ $t('loginPage.title') }}</p>
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import signup from '../scripts/signup'
export default signup
</script>
<style src="../styles/resposive/signup-responsive.css"></style>
<style src="../styles/sugnup.css"></style>