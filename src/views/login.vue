<template>
  <div class="log-in">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="box-login">
            <div class="title-login">
              <h2>{{ $t('loginPage.title') }}</h2>
              <p>{{ $t('loginPage.subtitle') }}</p>
            </div>

            <div class="section-login">
              <form class="login-form" @submit.prevent="login">
                <div class="input-group">
                  <label>{{ $t('loginPage.phoneLabel') }}</label>

                  <div class="phone-box">
                    <input
                      type="text"
                      v-model="loginValue"
                      :placeholder="$t('loginPage.phonePlaceholder')"
                    />

                    <div class="country-box">
                      <img src="@/assets/image.png" alt="flag" />
                      <span class="icon-up-chevron_svgrepocom"></span>
                    </div>
                  </div>
                </div>

                <div class="input-group">
                  <label>{{ $t('loginPage.passwordLabel') }}</label>

                  <div class="password-box">
                    <span class="icon-hide"></span>
                    <input
                      type="password"
                      v-model="password"
                      :placeholder="$t('loginPage.passwordPlaceholder')"
                    />
                  </div>
                </div>

                <div class="login-options">
                  <label class="remember-me">
                    <span>{{ $t('loginPage.rememberMe') }}</span>
                    <input type="checkbox" />
                  </label>

                  <a href="#" class="forgot-password">
                    {{ $t('loginPage.forgotPassword') }}
                  </a>
                </div>

                <button type="submit" class="login-btn">
                  {{ $t('loginPage.loginBtn') }}
                </button>

                <p v-if="error" class="error-text">
                  {{ error }}
                </p>

                <p class="signup-text">
                  {{ $t('loginPage.noAccount') }}
                  <router-link to="/signup">
                    {{ $t('loginPage.createAccount') }}
                  </router-link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import login from '../scripts/login'
export default login
</script>
<style src="../styles/resposive/login-responsive.css"></style>
<style src="../styles/login.css"></style>