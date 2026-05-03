<template>
  <div class="signup-company" :dir="currentLang === 'ar' ? 'rtl' : 'ltr'" :class="currentLang === 'ar' ? 'rtl' : 'ltr'">
    <div class="container">
      <div class="signup-company-box">
        <div class="signup-company-header">
          <div class="back-link" @click="handleBack">
            <div class="vec">
              <span class="icon-arrow-1"></span>
            </div>
            <span>{{ t.back }}</span>
          </div>

          <div class="title-signup-company">
            <h2>{{ t.title }}</h2>
          </div>

          <div class="steps-indicator">
            <div class="step-item" :class="{ active: currentStep === 1 }">
              <div class="step-circle">1</div>
              <p>{{ t.steps.register }}</p>
            </div>

            <div class="step-line" :class="{ active: currentStep > 1 }"></div>

            <div class="step-item" :class="{ active: currentStep === 2 }">
              <div class="step-circle">2</div>
              <p>{{ t.steps.verify }}</p>
            </div>

            <div class="step-line" :class="{ active: currentStep > 2 }"></div>

            <div class="step-item" :class="{ active: currentStep === 3 }">
              <div class="step-circle">3</div>
              <p>{{ t.steps.companyProfile }}</p>
            </div>

            <div class="step-line" :class="{ active: currentStep > 3 }"></div>

            <div class="step-item" :class="{ active: currentStep === 4 }">
              <div class="step-circle">4</div>
              <p>{{ t.steps.password }}</p>
            </div>
          </div>
        </div>

        <div class="signup-company-body">
          <div v-if="currentStep === 1" class="step-content">
            <div class="form-group">
              <label>{{ t.fields.companyName }}</label>
              <input type="text" :placeholder="t.fields.companyName" v-model="form.companyName" />
            </div>
        
            <div class="form-group">
              <label>{{ t.fields.registrationNumber }}</label>
              <input type="text" placeholder="0000000" v-model="form.registrationNumber" />
            </div>
        
            <div class="form-group">
              <label>{{ t.fields.phone }}</label>
              <div class="phone-box">
                <input type="text" placeholder="972  00 000 0000" v-model="form.phone" />
            
                <div class="country-box">
                  <img src="@/assets/image.png" alt="flag" />
                  <span class="icon-arrow-1"></span>
                </div>
              </div>
            </div>
        
            <div class="form-group">
              <label>{{ t.fields.email }}</label>
              <input type="email" placeholder="example@email.com" v-model="form.email" />
            </div>
        
            <button class="next-btn" @click="nextStep">{{ t.buttons.next }}</button>
        
            <p class="bottom-auth-text">
              {{ t.auth.haveAccount }}
              <router-link to="/login">{{ t.auth.login }}</router-link>
            </p>
          </div>
      
          <div v-if="currentStep === 2" class="step-content">
            <div class="otp-box">
            
              <p class="otp-text">{{ t.otpText }}</p>
            
              <div class="otp-inputs">
                <input type="text" maxlength="1" />
                <input type="text" maxlength="1" />
                <input type="text" maxlength="1" />
                <input type="text" maxlength="1" />
              </div>
            
              <div class="otp-footer">
                <span class="resend">{{ t.resend }}</span>
                <span class="timer">02:59</span>
              </div>
            
              <button class="next-btn" @click="nextStep">{{ t.buttons.confirm }}</button>
            
              <p class="bottom-auth-text">
                {{ t.auth.haveAccount }}
                <router-link to="/login">{{ t.auth.login }}</router-link>
              </p>
            
            </div>
          </div>
      
          <div v-if="currentStep === 3" class="step-content company-step">

            <div class="form-group">
              <label>{{ t.fields.workSector }}</label>
              <input type="text" :placeholder="t.fields.workSector" v-model="form.workSector" />
            </div>
          
            <div class="form-group">
              <label>{{ t.fields.website }}</label>
              <input type="text" placeholder="companyname.org" v-model="form.website" />
            </div>
          
            <div class="form-group">
              <label>{{ t.fields.companyType }}</label>
              <input type="text" :placeholder="t.fields.companyType" v-model="form.companyType" />
            </div>
          
            <div class="form-row">
              <div class="form-group half">
                <label>{{ t.fields.city }}</label>
                <input type="text" :placeholder="t.fields.city" v-model="form.city" />
              </div>
            
              <div class="form-group half">
                <label>{{ t.fields.governorate }}</label>
                <input type="text" :placeholder="t.fields.governorate" v-model="form.governorate" />
              </div>
            </div>
          
            <div class="form-group">
              <label>{{ t.fields.address }}</label>
              <input type="text" placeholder="Ramallah - Al Ersal Street" v-model="form.address" />
            </div>
          
            <div class="form-group">
              <label>{{ t.fields.companySize }}</label>
              <input type="text" placeholder="50 - 100" v-model="form.companySize" />
            </div>
          
            <div class="form-group">
              <label>{{ t.fields.description }}</label>
              <textarea :placeholder="t.fields.description" v-model="form.description"></textarea>
            </div>
          
            <!-- Upload Files -->
            <div class="upload-section">
              <div class="upload-item">
                <label class="upload-title">{{ t.uploadTitles.logo }}</label>
              
                <label class="custom-upload">
                  <span class="icon-upload-files"></span>
                  <span>{{ t.uploadText }}</span>
                  <input type="file" @change="e => form.logoFile = e.target.files[0]" />
                </label>
              
                <p class="file-note">
                  {{ form.logoFile ? form.logoFile.name : t.noFiles }}
                </p>
              </div>
            
              <div class="upload-item">
                <label class="upload-title">{{ t.uploadTitles.files }}</label>
              
                <label class="custom-upload">
                  <span class="icon-upload-files"></span>
                  <span>{{ t.uploadText }}</span>
                  <input type="file" @change="e => form.registrationFile = e.target.files[0]" />
                </label>
              
                <p class="file-note">
                  {{ form.registrationFile ? form.registrationFile.name : t.noFiles }}
                </p>
              </div>
            
              <div class="upload-item">
                <label class="upload-title">{{ t.uploadTitles.certificate }}</label>
              
                <label class="custom-upload">
                  <span class="icon-upload-files"></span>
                  <span>{{ t.uploadText }}</span>
                  <input type="file" @change="e => form.taxFile = e.target.files[0]" />
                </label>
              
                <p class="file-note">
                  {{ form.taxFile ? form.taxFile.name : t.noFiles }}
                </p>
              </div>
            
              <div class="upload-item">
                <label class="upload-title">{{ t.uploadTitles.other }}</label>
              
                <label class="custom-upload">
                  <span class="icon-upload-files"></span>
                  <span>{{ t.uploadText }}</span>
                  <input type="file" @change="e => form.chamberFile = e.target.files[0]" />
                </label>
              
                <p class="file-note">
                  {{ form.chamberFile ? form.chamberFile.name : t.noFiles }}
                </p>
              </div>
            </div>
          
            <button class="next-btn" @click="nextStep">{{ t.buttons.create }}</button>
          
            <p class="bottom-auth-text">
              {{ t.auth.haveAccount }}
              <router-link to="/login">{{ t.auth.login }}</router-link>
            </p>
          
          </div>
      
          <div v-if="currentStep === 4" class="step-content password-step">
            <div class="password-title">
              <h3>{{ t.steps.password }}</h3>
              <p>{{ t.passwordDesc }}</p>
            </div>
          
            <div class="form-group password-field">
              <label>{{ t.fields.password }}</label>
              <div class="password-input">
                <span class="icon-hide"></span>
                <input type="password" :placeholder="t.fields.password" v-model="form.password" />
              </div>
            </div>
          
            <div class="form-group password-field">
              <label>{{ t.fields.confirmPassword }}</label>
              <div class="password-input">
                <span class="icon-hide"></span>
                <input type="password" :placeholder="t.fields.confirmPassword" v-model="form.confirmPassword" />
              </div>
            </div>
          
            <button class="next-btn" @click="nextStep">{{ t.buttons.next }}</button>
          
            <p class="bottom-auth-text">{{ t.auth.haveAccount }}<router-link to="/login">{{ t.auth.login }}</router-link>
            </p>
          </div>
          <div v-if="currentStep === 5" class="success-step">
            <div class="success-card">
              <svg class="done-svg" viewBox="0 0 24 24" fill="none">
                <circle class="done-bg" cx="12" cy="12" r="8" fill="#f2f5f8" fill-opacity="0.24"/>
                <path
                  class="done-circle"
                  d="M8.5 11L11.3939 13.8939C11.4525 13.9525 11.5475 13.9525 11.6061 13.8939L19.5 6"
                />
                <path
                  class="done-check"
                  d="M19.3578 10.5465C19.6899 12.2277 19.4363 13.9719 18.6391 15.4889C17.8419 17.0059 16.5439 18.2041 14.9763 18.8842C13.4033 19.5642 11.6449 19.6851 9.99369 19.2267C8.34247 18.7682 6.89803 17.7582 5.90077 16.3646C4.90351 14.9709 4.41358 13.2778 4.51251 11.567C4.61144 9.85619 5.29327 8.23085 6.44453 6.96147C7.59578 5.6921 9.14703 4.85527 10.8401 4.59024C12.5331 4.32521 14.2659 4.64797 15.75 5.50481"
                />
              </svg>
              <h3>{{ t.successTitle }}</h3>
              <p>{{ t.successDesc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import signupCompany from '@/scripts/signup-company';
export default signupCompany
</script>

<style src="../styles/signup-company.css"></style>
<style src="../styles/font.css"></style>