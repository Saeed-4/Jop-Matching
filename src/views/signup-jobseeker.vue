<template>
  <div
    class="signup-jobseeker"
    :dir="currentLang === 'ar' ? 'rtl' : 'ltr'"
    :class="currentLang === 'ar' ? 'rtl' : 'ltr'"
  >
    <div class="container">
      <div class="signup-jobseeker-box">
        <div class="signup-header">
          <div class="back-link" @click="handleBack">
            <div class="vec">
              <span class="icon-arrow-1"></span>
            </div>
            <span>{{ t.back }}</span>
          </div>

          <h2>{{ t.title }}</h2>

          <div class="steps-indicator">
            <div class="step-item" :class="{ active: currentStep === 1 }">
              <div class="step-circle">1</div>
              <p>{{ t.steps.cv }}</p>
            </div>

            <div class="step-line" :class="{ active: currentStep > 1 }"></div>

            <div class="step-item" :class="{ active: currentStep === 2 }">
              <div class="step-circle">2</div>
              <p>{{ t.steps.personal }}</p>
            </div>

            <div class="step-line" :class="{ active: currentStep > 2 }"></div>

            <div class="step-item" :class="{ active: currentStep === 3 }">
              <div class="step-circle">3</div>
              <p>{{ t.steps.phone }}</p>
            </div>

            <div class="step-line" :class="{ active: currentStep > 3 }"></div>

            <div class="step-item" :class="{ active: currentStep === 4 }">
              <div class="step-circle">4</div>
              <p>{{ t.steps.professional }}</p>
            </div>

            <div class="step-line" :class="{ active: currentStep > 4 }"></div>

            <div class="step-item" :class="{ active: currentStep === 5 }">
              <div class="step-circle">5</div>
              <p>{{ t.steps.password }}</p>
            </div>
          </div>
        </div>

        <!-- STEP 1 -->
        <div v-if="currentStep === 1" class="step-content cv-step">
          <h3>{{ t.cv.title }}</h3>
          <p>{{ t.cv.desc }}</p>

          <label v-if="!cvFile && !extracting && !extracted" class="upload-cv-box">
            <span class="icon-upload-files-1 upload-big-icon"></span>
            <strong>{{ t.cv.uploadText }}</strong>
            <small>{{ t.cv.allowed }}</small>
            <input type="file" @change="handleCvUpload" />
          </label>

          <div v-if="cvFile" class="uploaded-file" :class="{ faded: extracting || extracted }">
            <div class="file-info">
              <span class="file-icon">📄</span>
              <div>
                <strong>{{ cvFile.name }}</strong>
                <small>{{ cvSize }}</small>
              </div>
            </div>

            <div class="file-actions">
              <button @click="removeCv">×</button>
              <button @click="extractData">⟳</button>
            </div>
          </div>

          <div v-if="extracting" class="extract-status">
            <div class="spinner"></div>
            <strong>{{ t.cv.extracting }}</strong>
          </div>

          <div v-if="extracted" class="extract-status success">
            <svg class="done-svg small" viewBox="0 0 24 24" fill="none">
              <circle class="done-bg" cx="12" cy="12" r="8" fill="#f2f5f8" fill-opacity="0.24"/>
              <path class="done-circle" d="M8.5 11L11.3939 13.8939C11.4525 13.9525 11.5475 13.9525 11.6061 13.8939L19.5 6"/>
              <path class="done-check" d="M19.3578 10.5465C19.6899 12.2277 19.4363 13.9719 18.6391 15.4889C17.8419 17.0059 16.5439 18.2041 14.9763 18.8842C13.4033 19.5642 11.6449 19.6851 9.99369 19.2267C8.34247 18.7682 6.89803 17.7582 5.90077 16.3646C4.90351 14.9709 4.41358 13.2778 4.51251 11.567C4.61144 9.85619 5.29327 8.23085 6.44453 6.96147C7.59578 5.6921 9.14703 4.85527 10.8401 4.59024C12.5331 4.32521 14.2659 4.64797 15.75 5.50481"/>
            </svg>
            <strong>{{ t.cv.done }}</strong>
          </div>

          <button class="main-btn" :disabled="!cvFile || extracting" @click="extractData">
            {{ t.buttons.confirmContinue }}
          </button>

          <div class="or-text">{{ t.or }}</div>

          <button class="outline-btn" @click="nextStep">
            {{ t.buttons.manual }}
          </button>

          <AuthText :text="t" />

          <p class="bottom-auth-text">
            {{ t.auth.haveAccount }}
            <router-link to="/login">{{ t.auth.login }}</router-link>
          </p>
        </div>

        <!-- STEP 2 -->
        <div v-if="currentStep === 2" class="step-content personal-step">
          <div class="form-row">
            <div class="form-group half">
              <label>{{ t.fields.firstName }}</label>
              <input v-model="form.firstName" :placeholder="t.fields.firstName" />
            </div>

            <div class="form-group half">
              <label>{{ t.fields.lastName }}</label>
              <input v-model="form.lastName" :placeholder="t.fields.lastName" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group half">
              <label>{{ t.fields.birthDate }}</label>
              <input v-model="form.birthDate" placeholder="DD / MM / YYYY" />
            </div>

            <div class="form-group half">
              <label>{{ t.fields.idNumber }}</label>
              <input v-model="form.idNumber" placeholder="0 0000 00 00" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group half">
              <label>{{ t.fields.gender }}</label>
              <select v-model="form.gender">
                <option value="">{{ t.fields.notSelected }}</option>
                <option>{{ t.fields.male }}</option>
                <option>{{ t.fields.female }}</option>
              </select>
            </div>

            <div class="form-group half">
              <label>{{ t.fields.phone }}</label>
              <div class="phone-box">
                <input v-model="form.phone" placeholder="972  00 000 0000" />
                <div class="country-box">
                  <img src="@/assets/image.png" alt="flag" />
                  <span class="icon-arrow-1"></span>
                </div>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group half">
              <label>{{ t.fields.email }}</label>
              <input v-model="form.email" placeholder="example@email.com" />
            </div>

            <div class="form-group half">
              <label>{{ t.fields.country }}</label>
              <select v-model="form.country">
                <option>{{ t.fields.palestine }}</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group half">
              <label>{{ t.fields.city }}</label>
              <input v-model="form.city" :placeholder="t.fields.city" />
            </div>

            <div class="form-group half">
              <label>{{ t.fields.governorate }}</label>
              <input v-model="form.governorate" :placeholder="t.fields.governorate" />
            </div>
          </div>

          <button class="main-btn" @click="nextStep">{{ t.buttons.next }}</button>
          <AuthText :text="t" />

          <p class="bottom-auth-text">
            {{ t.auth.haveAccount }}
            <router-link to="/login">{{ t.auth.login }}</router-link>
          </p>
        </div>

        <!-- STEP 3 -->
        <div v-if="currentStep === 3" class="step-content otp-step">
          <div class="otp-box">
            <p class="otp-text">{{ t.otpText }} <strong>0594498337</strong></p>

            <div class="otp-inputs">
              <input maxlength="1" placeholder="#" />
              <input maxlength="1" placeholder="#" />
              <input maxlength="1" placeholder="#" />
              <input maxlength="1" placeholder="#" />
            </div>

            <div class="otp-footer">
              <span>{{ t.resend }}</span>
              <span>02 : 59</span>
            </div>

            <button class="main-btn" @click="nextStep">{{ t.buttons.confirm }}</button>
            <AuthText :text="t" />
          </div>

          <p class="bottom-auth-text">
            {{ t.auth.haveAccount }}
            <router-link to="/login">{{ t.auth.login }}</router-link>
          </p>
        </div>

        <!-- STEP 4 -->
        <div v-if="currentStep === 4" class="step-content professional-step">
          <h3>{{ t.professional.title }}</h3>
          <p>{{ t.professional.desc }}</p>

          <div class="pro-card">
            <div class="pro-text">
              <strong>{{ t.professional.education }}</strong>
              <small>{{ t.professional.educationDesc }}</small>
            </div>
            <button class="plus-btn">+</button>
          </div>
        
          <div class="pro-card">
            <div class="pro-text">
              <strong>{{ t.professional.experience }}</strong>
              <small>{{ t.professional.experienceDesc }}</small>
            </div>
            <button class="plus-btn">+</button>
          </div>
        
          <label class="skills-title">{{ t.professional.skills }}</label>
        
          <div class="skills-box">
            <input :placeholder="t.professional.skillsPlaceholder" />
            <button class="add-skill">+</button>
          </div>
        
          <div class="tags">
            <span v-for="skill in skills" :key="skill">× {{ skill }}</span>
          </div>
        
          <div class="pro-card">
            <div class="pro-text">
              <strong>{{ t.professional.certificates }}</strong>
              <small>{{ t.professional.certificatesDesc }}</small>
            </div>
            <button class="plus-btn">+</button>
          </div>
        
          <button class="main-btn" @click="nextStep">{{ t.buttons.next }}</button>
        
          <p class="bottom-auth-text">
            {{ t.auth.haveAccount }}
            <router-link to="/login">{{ t.auth.login }}</router-link>
          </p>
        </div>

        <!-- STEP 5 -->
        <div v-if="currentStep === 5" class="step-content password-step">
          <h3>{{ t.steps.password }}</h3>
          <p>{{ t.passwordDesc }}</p>

          <div class="form-group">
            <label>{{ t.fields.password }}</label>
            <div class="password-input">
              <span class="icon-hide"></span>
              <input type="password" :placeholder="t.fields.password" v-model="form.password" />
            </div>
          </div>

          <div class="form-group">
            <label>{{ t.fields.confirmPassword }}</label>
            <div class="password-input">
              <span class="icon-hide"></span>
              <input type="password" :placeholder="t.fields.confirmPassword" v-model="form.confirmPassword" />
            </div>
          </div>

          <button class="main-btn" @click="nextStep">{{ t.buttons.next }}</button>
          <AuthText :text="t" />

          <p class="bottom-auth-text">
            {{ t.auth.haveAccount }}
            <router-link to="/login">{{ t.auth.login }}</router-link>
          </p>
        </div>

        <!-- SUCCESS -->
        <div v-if="currentStep === 6" class="success-step">
          <div class="success-card">
            <svg class="done-svg" viewBox="0 0 24 24" fill="none">
              <circle class="done-bg" cx="12" cy="12" r="8" fill="#f2f5f8" fill-opacity="0.24"/>
              <path class="done-circle" d="M8.5 11L11.3939 13.8939C11.4525 13.9525 11.5475 13.9525 11.6061 13.8939L19.5 6"/>
              <path class="done-check" d="M19.3578 10.5465C19.6899 12.2277 19.4363 13.9719 18.6391 15.4889C17.8419 17.0059 16.5439 18.2041 14.9763 18.8842C13.4033 19.5642 11.6449 19.6851 9.99369 19.2267C8.34247 18.7682 6.89803 17.7582 5.90077 16.3646C4.90351 14.9709 4.41358 13.2778 4.51251 11.567C4.61144 9.85619 5.29327 8.23085 6.44453 6.96147C7.59578 5.6921 9.14703 4.85527 10.8401 4.59024C12.5331 4.32521 14.2659 4.64797 15.75 5.50481"/>
            </svg>

            <h3>{{ t.successTitle }}</h3>
            <p>{{ t.successDesc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import signupJobseeker from '@/scripts/signup-jobseeker';
export default signupJobseeker
</script>

<style src="../styles/signup-jobseeker.css"></style>
<style src="../styles/font.css"></style>
<style src="../styles/resposive.css"></style>