<template>
  <div class="signup-company">
    <div class="container">
      <div class="signup-company-box">
        <div class="signup-company-header">
          <div class="back-link" @click="handleBack">
            <div class="vec">
              <span class="icon-arrow-1"></span>
            </div>
            <span>{{ $t('signupCompany.back') }}</span>
          </div>

          <div class="title-signup-company">
            <h2>{{ $t('signupCompany.title') }}</h2>
          </div>

          <div class="steps-indicator">
            <div class="step-item" :class="{ active: currentStep === 1 }">
              <div class="step-circle">1</div>
              <p>{{ $t('signupCompany.steps.register') }}</p>
            </div>

            <div class="step-line" :class="{ active: currentStep > 1 }"></div>

            <div class="step-item" :class="{ active: currentStep === 2 }">
              <div class="step-circle">2</div>
              <p>{{ $t('signupCompany.steps.verify') }}</p>
            </div>

            <div class="step-line" :class="{ active: currentStep > 2 }"></div>

            <div class="step-item" :class="{ active: currentStep === 3 }">
              <div class="step-circle">3</div>
              <p>{{ $t('signupCompany.steps.companyProfile') }}</p>
            </div>

            <div class="step-line" :class="{ active: currentStep > 3 }"></div>

            <div class="step-item" :class="{ active: currentStep === 4 }">
              <div class="step-circle">4</div>
              <p>{{ $t('signupCompany.steps.password') }}</p>
            </div>
          </div>
        </div>

        <div class="signup-company-body">
          <div v-if="currentStep === 1" class="step-content">
            <div class="form-group">
              <label>{{ $t('signupCompany.fields.companyName') }}</label>
              <input type="text" :placeholder="$t('signupCompany.fields.companyName')" v-model="form.companyName" />
            </div>

            <div class="form-group">
              <label>{{ $t('signupCompany.fields.registrationNumber') }}</label>
              <input type="text" placeholder="0000000" v-model="form.registrationNumber" />
            </div>

            <div class="form-group">
              <label>{{ $t('signupCompany.fields.phone') }}</label>
                        
              <VueTelInput
                v-model="form.phone"
                mode="international"
                :defaultCountry="'PS'"
                :autoDefaultCountry="false"
                :inputOptions="{
                  placeholder: $t('signupCompany.fields.phone')
                }"
                @validate="onPhoneValidate"
              />
              
              <small v-if="errors.phone" class="error-text">
                {{ errors.phone }}
              </small>
            </div>

            <div class="form-group">
              <label>{{ $t('signupCompany.fields.email') }}</label>
              <input type="email" placeholder="example@email.com" v-model="form.email" />
            </div>

            <button class="next-btn" @click="sendOtp">{{ $t('signupCompany.buttons.next') }}</button>

            <p class="bottom-auth-text">
              {{ $t('signupCompany.auth.haveAccount') }}
              <router-link to="/login">{{ $t('signupCompany.auth.login') }}</router-link>
            </p>
          </div>

          <div v-if="currentStep === 2" class="step-content">
            <div class="otp-box">
              <p class="otp-text">{{ $t('signupCompany.otpText') }}</p>

              <div class="otp-inputs">
                <input
                  v-for="(digit, index) in otp"
                  :key="index"
                  maxlength="1"
                  placeholder="#"
                  v-model="otp[index]"
                  @input="moveOtp(index, $event)"
                />
                <small v-if="otpError" class="error-text">{{ otpError }}</small>
              </div>

              <div class="otp-footer">
                <span class="timer">{{ formattedTimer }}</span>
                <span class="resend" @click="resendOtp">{{ $t('signupCompany.resend') }}</span>
              </div>

              <button class="next-btn" @click="verifyOtp">{{ $t('signupCompany.buttons.confirm') }}</button>

              <p class="bottom-auth-text">
                {{ $t('signupCompany.auth.haveAccount') }}
                <router-link to="/login">{{ $t('signupCompany.auth.login') }}</router-link>
              </p>
            </div>
          </div>

          <div v-if="currentStep === 3" class="step-content company-step">
            <div class="form-group">
              <label>{{ $t('signupCompany.fields.workSector') }}</label>
              <div class="select-box custom-select" @click="toggleSector">
                <div class="selected-value">
                  {{ form.workSector || $t('signupCompany.fields.workSector') }}
                </div>
              
                <span
                  class="icon-up-chevron_svgrepocom"
                  :class="{ rotate: showSector }"
                ></span>
              
                <ul v-if="showSector" class="select-dropdown">
                  <li @click.stop="selectSector('IT')">IT</li>
                  <li @click.stop="selectSector('Marketing')">Marketing</li>
                  <li @click.stop="selectSector('Design')">Design</li>
                </ul>
              </div>
            </div>

            <div class="form-group">
              <label>{{ $t('signupCompany.fields.website') }}</label>
              <input type="text" placeholder="companyname.org" v-model="form.website" />
            </div>

            <div class="form-group">
              <label>{{ $t('signupJobSeeker.fields.country') }}</label>
              <div class="select-box custom-select" @click="toggleCountry">
                <div class="selected-value">
                  {{ form.country || $t('signupJobSeeker.fields.select') }}
                </div>
              
                <span
                  class="icon-up-chevron_svgrepocom"
                  :class="{ rotate: showCountry }"
                ></span>
              
                <ul v-if="showCountry" class="select-dropdown">
                  <li
                    v-for="country in $tm('jobOpportunities.filters.countries')"
                    :key="country"
                    @click.stop="selectCountry(country)"
                  >
                    {{ country }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group half">
                <label>{{ $t('signupCompany.fields.city') }}</label>
              
                <div class="select-box custom-select" @click="toggleCity">
                  <div class="selected-value">
                    {{ form.city || $t('signupCompany.fields.city') }}
                  </div>
                
                  <span
                    class="icon-up-chevron_svgrepocom"
                    :class="{ rotate: showCity }"
                  ></span>
                
                  <ul v-if="showCity" class="select-dropdown">
                    <li
                      v-for="city in $tm('signupCompany.cities')"
                      :key="city"
                      @click.stop="selectCity(city)"
                    >
                      {{ city }}
                    </li>
                  </ul>
                </div>
              </div>
            
              <div class="form-group half">
                <label>{{ $t('signupCompany.fields.governorate') }}</label>
              
                <div class="select-box custom-select" @click="toggleGovernorate">
                  <div class="selected-value">
                    {{ form.governorate || $t('signupCompany.fields.governorate') }}
                  </div>
                
                  <span
                    class="icon-up-chevron_svgrepocom"
                    :class="{ rotate: showGovernorate }"
                  ></span>
                
                  <ul v-if="showGovernorate" class="select-dropdown">
                    <li
                      v-for="governorate in $tm('signupCompany.governorates')"
                      :key="governorate"
                      @click.stop="selectGovernorate(governorate)"
                    >
                      {{ governorate }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label>{{ $t('signupCompany.fields.address') }}</label>
              <input type="text" :placeholder="$t('signupCompany.fields.Adescription')" v-model="form.companyType" />
            </div>

            <div class="form-group">
              <label>{{ $t('signupCompany.fields.companySize') }}</label>

              <div class="select-box custom-select" @click="toggleCompanySize">
                <div class="selected-value">
                  {{ form.companySize || $t('signupCompany.fields.companySize') }}
                </div>
              
                <span
                  class="icon-up-chevron_svgrepocom"
                  :class="{ rotate: showCompanySize }"
                ></span>
              
                <ul v-if="showCompanySize" class="select-dropdown">
                  <li
                    v-for="size in $tm('signupCompany.companySizes')"
                    :key="size"
                    @click.stop="selectCompanySize(size)"
                  >
                    {{ size }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="form-group">
              <label>{{ $t('signupCompany.fields.description') }}</label>
              <textarea class="CompanyDescription" :placeholder="$t('signupCompany.fields.descriptionAbout')" v-model="form.description"></textarea>
            </div>

            <div class="upload-section">
              <div class="upload-item">
                <label class="upload-title">{{ $t('signupCompany.uploadTitles.logo') }}</label>

                <label class="custom-upload">
                  <span>{{ $t('signupCompany.uploadText') }}</span>
                  <span class="icon-upload-files"></span>
                  <input type="file" @change="handleLogo" />
                </label>

                <p class="file-note">
                  {{ form.logoFile ? form.logoFile.name : $t('signupCompany.noFiles') }}
                </p>
              </div>

              <div class="upload-item">
                <label class="upload-title">{{ $t('signupCompany.uploadTitles.files') }}</label>

                <label class="custom-upload">
                  <span>{{ $t('signupCompany.uploadText') }}</span>
                  <span class="icon-upload-files"></span>
                  <input type="file" @change="handleRegistration" />
                </label>

                <p class="file-note">
                  {{ form.registrationFile ? form.registrationFile.name : $t('signupCompany.noFiles') }}
                </p>
              </div>

              <div class="upload-item">
                <label class="upload-title">{{ $t('signupCompany.uploadTitles.certificate') }}</label>

                <label class="custom-upload">
                  <span>{{ $t('signupCompany.uploadText') }}</span>
                  <span class="icon-upload-files"></span>
                  <input type="file" @change="handleTax" />
                </label>

                <p class="file-note">
                  {{ form.taxFile ? form.taxFile.name : $t('signupCompany.noFiles') }}
                </p>
              </div>

              <div class="upload-item">
                <label class="upload-title">{{ $t('signupCompany.uploadTitles.other') }}</label>

                <label class="custom-upload">
                  <span>{{ $t('signupCompany.uploadText') }}</span>
                  <span class="icon-upload-files"></span>
                  <input type="file" @change="handleChamber" />
                </label>

                <p class="file-note">
                  {{ form.chamberFile ? form.chamberFile.name : $t('signupCompany.noFiles') }}
                </p>
              </div>
            </div>

            <button class="next-btn" @click="nextStep">{{ $t('signupCompany.buttons.next') }}</button>

            <p class="bottom-auth-text">
              {{ $t('signupCompany.auth.haveAccount') }}
              <router-link to="/login">{{ $t('signupCompany.auth.login') }}</router-link>
            </p>
          </div>

          <div v-if="currentStep === 4" class="step-content password-step">
            <div class="password-title">
              <h3>{{ $t('signupCompany.steps.password') }}</h3>
              <p>{{ $t('signupCompany.passwordDesc') }}</p>
            </div>

            <div class="form-group password-field">
              <label>{{ $t('signupCompany.fields.password') }}</label>
              <div class="password-input">
                <input type="password" :placeholder="$t('signupCompany.fields.password')" v-model="form.password" />
                <span class="icon-hide"></span>
              </div>
            </div>

            <div class="form-group password-field">
              <label>{{ $t('signupCompany.fields.confirmPassword') }}</label>
              <div class="password-input">
                <input type="password" :placeholder="$t('signupCompany.fields.confirmPassword')" v-model="form.confirmPassword" />
                <span class="icon-hide"></span>
              </div>
            </div>

            <button class="next-btn" @click="registerCompany">{{ $t('signupCompany.buttons.create') }}</button>

            <p class="bottom-auth-text">
              {{ $t('signupCompany.auth.haveAccount') }}
              <router-link to="/login">{{ $t('signupCompany.auth.login') }}</router-link>
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
              <h3>{{ $t('signupCompany.successTitle') }}</h3>
              <p>{{ $t('signupCompany.successDesc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import signupCompany from '@/scripts/signup-company'
export default signupCompany
</script>
<style src="../styles/resposive/signup-company-responsive.css"></style>
<style src="../styles/signup-company.css"></style>