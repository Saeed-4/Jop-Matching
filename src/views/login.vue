<template>
  <div class="log-in" :dir="currentLang === 'ar' ? 'rtl' : 'ltr'">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="box-login">
            <div class="title-login">
              <h2>{{ loginText.title }}</h2>
              <p>{{ loginText.subtitle }}</p>
            </div>

            <div class="section-login">
              <form class="login-form" @submit.prevent="login">
                <div class="input-group">
                  <label>{{ loginText.phoneLabel }}</label>

                  <div class="phone-box">
                    <input
                      type="text"
                      v-model="phone"
                      :placeholder="loginText.phonePlaceholder"
                    />

                    <div class="country-box">
                      <img src="@/assets/image.png" alt="flag" />
                      <span class="icon-arrow-1"></span>
                    </div>
                  </div>
                </div>

                <div class="input-group">
                  <label>{{ loginText.passwordLabel }}</label>

                  <div class="password-box">
                    <span class="icon-hide"></span>
                    <input
                      type="password"
                      v-model="password"
                      :placeholder="loginText.passwordPlaceholder"
                    />
                  </div>
                </div>

                <div class="login-options">
                  <label class="remember-me">
                    <span>{{ loginText.rememberMe }}</span>
                    <input type="checkbox" />
                  </label>

                  <a href="#" class="forgot-password">
                    {{ loginText.forgotPassword }}
                  </a>
                </div>

                <button type="submit" class="login-btn">
                  {{ loginText.loginBtn }}
                </button>

                <p class="signup-text">
                  {{ loginText.noAccount }}
                  <a href="#">{{ loginText.createAccount }}</a>
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
<style src="../styles/login.css"></style>
<style src="../styles/font.css"></style>