<template>
  <div class="signup-jobseeker">
    <div class="container">
      <div class="signup-jobseeker-box">
        <div class="signup-header">
          <div class="back-link" @click="handleBack">
            <div class="vec">
              <span class="icon-arrow-1"></span>
            </div>
            <span>{{ $t('signupJobSeeker.back') }}</span>
          </div>

          <h2>{{ $t('signupJobSeeker.title') }}</h2>

          <div class="steps-indicator">
            <div class="step-item" :class="{ active: currentStep === 1 }">
              <div class="step-circle">1</div>
              <p>{{ $t('signupJobSeeker.steps.cv') }}</p>
            </div>

            <div class="step-line" :class="{ active: currentStep > 1 }"></div>

            <div class="step-item" :class="{ active: currentStep === 2 }">
              <div class="step-circle">2</div>
              <p>{{ $t('signupJobSeeker.steps.personal') }}</p>
            </div>

            <div class="step-line" :class="{ active: currentStep > 2 }"></div>

            <div class="step-item" :class="{ active: currentStep === 3 }">
              <div class="step-circle">3</div>
              <p>{{ $t('signupJobSeeker.steps.phone') }}</p>
            </div>

            <div class="step-line" :class="{ active: currentStep > 3 }"></div>

            <div class="step-item" :class="{ active: currentStep === 4 }">
              <div class="step-circle">4</div>
              <p>{{ $t('signupJobSeeker.steps.professional') }}</p>
            </div>

            <div class="step-line" :class="{ active: currentStep > 4 }"></div>

            <div class="step-item" :class="{ active: currentStep === 5 }">
              <div class="step-circle">5</div>
              <p>{{ $t('signupJobSeeker.steps.password') }}</p>
            </div>
          </div>
        </div>

        <div v-if="currentStep === 1" class="step-content cv-step">
          <h3>{{ $t('signupJobSeeker.cv.title') }}</h3>
          <p>{{ $t('signupJobSeeker.cv.desc') }}</p>

          <label v-if="!cvFile && !extracting && !extracted" class="upload-cv-box">
            <span class="icon-upload-files-1 upload-big-icon"></span>
            <strong>{{ $t('signupJobSeeker.cv.uploadText') }}</strong>
            <small>{{ $t('signupJobSeeker.cv.allowed') }}</small>
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
            <strong>{{ $t('signupJobSeeker.cv.extracting') }}</strong>
          </div>

          <div v-if="extracted" class="extract-status success">
            <svg class="done-svg small" viewBox="0 0 24 24" fill="none">
              <circle class="done-bg" cx="12" cy="12" r="8" fill="#f2f5f8" fill-opacity="0.24"/>
              <path class="done-circle" d="M8.5 11L11.3939 13.8939C11.4525 13.9525 11.5475 13.9525 11.6061 13.8939L19.5 6"/>
              <path class="done-check" d="M19.3578 10.5465C19.6899 12.2277 19.4363 13.9719 18.6391 15.4889C17.8419 17.0059 16.5439 18.2041 14.9763 18.8842C13.4033 19.5642 11.6449 19.6851 9.99369 19.2267C8.34247 18.7682 6.89803 17.7582 5.90077 16.3646C4.90351 14.9709 4.41358 13.2778 4.51251 11.567C4.61144 9.85619 5.29327 8.23085 6.44453 6.96147C7.59578 5.6921 9.14703 4.85527 10.8401 4.59024C12.5331 4.32521 14.2659 4.64797 15.75 5.50481"/>
            </svg>
            <strong>{{ $t('signupJobSeeker.cv.done') }}</strong>
          </div>

          <button class="main-btn" :disabled="!cvFile || extracting" @click="extractData">
            {{ $t('signupJobSeeker.buttons.confirmContinue') }}
          </button>

          <div class="or-text">{{ $t('signupJobSeeker.or') }}</div>

          <button class="outline-btn" @click="nextStep">
            {{ $t('signupJobSeeker.buttons.manual') }}
          </button>

          <p class="bottom-auth-text">
            {{ $t('signupJobSeeker.auth.haveAccount') }}
            <router-link to="/login">{{ $t('signupJobSeeker.auth.login') }}</router-link>
          </p>
        </div>

        <div v-if="currentStep === 2" class="step-content personal-step">
          <div class="form-row">
            <div class="form-group half">
              <label>{{ $t('signupJobSeeker.fields.firstName') }}</label>
              <input v-model="form.firstName" :placeholder="$t('signupJobSeeker.fields.firstName')" />
              <small v-if="errors.first_name" class="error-text">{{ errors.first_name }}</small>
            </div>

            <div class="form-group half">
              <label>{{ $t('signupJobSeeker.fields.lastName') }}</label>
              <input v-model="form.lastName" :placeholder="$t('signupJobSeeker.fields.lastName')" />
              <small v-if="errors.last_name" class="error-text">{{ errors.last_name }}</small>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group half">
              <label>{{ $t('signupJobSeeker.fields.birthDate') }}</label>
              <div class="date-box-Date">
                <input type="date" v-model="form.birthDate" ref="dateInput" />
                <span class="icon-calender" @click="openDate"></span>
              </div>
              <small v-if="errors.birth_date" class="error-text">{{ errors.birth_date }}</small>
            </div>

            <div class="form-group half">
              <label>{{ $t('signupJobSeeker.fields.idNumber') }}</label>
              <input v-model="form.idNumber" placeholder="0 0000 00 00" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group half">
              <label>{{ $t('signupJobSeeker.fields.gender') }}</label>

              <div class="select-box custom-select" @click="toggleGender">
                <div class="selected-value">
                  {{ form.gender || $t('signupJobSeeker.fields.notSelected') }}
                </div>
              
                <span
                  class="icon-up-chevron_svgrepocom"
                  :class="{ rotate: showGender }"
                ></span>
              
                <ul v-if="showGender" class="select-dropdown">
                  <li @click.stop="selectGender('ذكر')">
                    {{ $t('signupJobSeeker.fields.male') }}
                  </li>
                
                  <li @click.stop="selectGender('أنثى')">
                    {{ $t('signupJobSeeker.fields.female') }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="form-group half">
              <label>{{ $t('signupJobSeeker.fields.phone') }}</label>
              <VueTelInput
                v-model="form.phone"
                mode="international"
                :defaultCountry="'PS'"
                :autoDefaultCountry="false"
                :inputOptions="{
                  placeholder: $t('signupJobSeeker.fields.phone')
                }"
                @validate="onPhoneValidate"
              />
              <small v-if="errors.phone" class="error-text">
                {{ errors.phone }}
              </small>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group half">
              <label>{{ $t('signupJobSeeker.fields.email') }}</label>
              <input v-model="form.email" placeholder="example@email.com" />
              <small v-if="errors.email" class="error-text">{{ errors.email }}</small>
            </div>

            <div class="form-group half">
              <label>{{ $t('signupJobSeeker.fields.country') }}</label>
              <div class="select-box custom-select" @click="toggleCountry">
                <div class="selected-value">
                  {{
                    form.workSector ||
                    $t('signupJobSeeker.fields.select')
                  }}
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
                    {{
                      form.governorate ||
                      $t('signupCompany.fields.governorate')
                    }}
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
          <button class="main-btn" @click="sendOtp">{{ $t('signupJobSeeker.buttons.next') }}</button>

          <p class="bottom-auth-text">
            {{ $t('signupJobSeeker.auth.haveAccount') }}
            <router-link to="/login">{{ $t('signupJobSeeker.auth.login') }}</router-link>
          </p>
        </div>

        <div v-if="currentStep === 3" class="step-content otp-step">
          <div class="otp-box">
            <p class="otp-text">{{ $t('signupJobSeeker.otpText') }} <strong>{{ form.phone }}</strong></p>

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
              <span>{{ formattedTimer }}</span>
              <span @click="resendOtp">
                {{ $t('signupJobSeeker.resend') }}
              </span>
            </div>

            <button class="main-btn" @click="verifyOtp">{{ $t('signupJobSeeker.buttons.confirm') }}</button>

            <p class="bottom-auth-text">
              {{ $t('signupJobSeeker.auth.haveAccount') }}
              <router-link to="/login">{{ $t('signupJobSeeker.auth.login') }}</router-link>
            </p>
          </div>
        </div>

        <div v-if="currentStep === 4" class="step-content professional-step">
          <h3>{{ $t('signupJobSeeker.professional.title') }}</h3>
          <p>{{ $t('signupJobSeeker.professional.desc') }}</p>

          <div class="pro-card">
            <div class="pro-text">
              <strong>{{ $t('signupJobSeeker.professional.education') }}</strong>
              <small>
                {{ form.educationFile ? form.educationFile.name : $t('signupJobSeeker.professional.educationDesc') }}
              </small>
            </div>

            <label class="plus-btn">
              +
              <input type="file" hidden @change="e => form.educationFile = e.target.files[0]" />
            </label>
          </div>

          <div class="pro-card">
            <div class="pro-text">
              <strong>{{ $t('signupJobSeeker.professional.experience') }}</strong>
              <small>
                {{ form.experienceFile ? form.experienceFile.name : $t('signupJobSeeker.professional.experienceDesc') }}
              </small>
            </div>

            <label class="plus-btn">
              +
              <input type="file" hidden @change="e => form.experienceFile = e.target.files[0]" />
            </label>
          </div>

          <label class="skills-title">{{ $t('signupJobSeeker.professional.skills') }}</label>

          <div class="skills-box">
            <input
              v-model="form.skillInput"
              :placeholder="$t('signupJobSeeker.professional.skillsPlaceholder')"
            />
                    
            <label class="add-skill">
              +
              <input
                type="file"
                hidden
                @change="handleFileUpload"
              />
            </label>
          </div>

          <div class="tags">
            <span v-for="skill in skills" :key="skill" @click="removeSkill(skill)">
              × {{ skill }}
            </span>
          </div>

          <div class="pro-card">
            <div class="pro-text">
              <strong>{{ $t('signupJobSeeker.professional.certificates') }}</strong>
              <small>
                {{ form.certificateFile ? form.certificateFile.name : $t('signupJobSeeker.professional.certificatesDesc') }}
              </small>
            </div>

            <label class="plus-btn">
              +
              <input type="file" hidden @change="e => form.certificateFile = e.target.files[0]" />
            </label>
          </div>

          <button class="main-btn" @click="nextStep">{{ $t('signupJobSeeker.buttons.next') }}</button>

          <p class="bottom-auth-text">
            {{ $t('signupJobSeeker.auth.haveAccount') }}
            <router-link to="/login">{{ $t('signupJobSeeker.auth.login') }}</router-link>
          </p>
        </div>

        <div v-if="currentStep === 5" class="step-content password-step">
          <h3>{{ $t('signupJobSeeker.steps.password') }}</h3>
          <p>{{ $t('signupJobSeeker.passwordDesc') }}</p>

          <div class="form-group password-field">
            <label>{{ $t('signupCompany.fields.password') }}</label>
            <div class="password-input">
              <input type="password" :placeholder="$t('signupCompany.fields.password')" v-model="form.password" />
              <span class="icon-hide"></span>
            </div>
            <small v-if="errors.password" class="error-text">{{ errors.password }}</small>
          </div>
          <div class="form-group password-field">
            <label>{{ $t('signupCompany.fields.confirmPassword') }}</label>
            <div class="password-input">
              <input type="password" :placeholder="$t('signupCompany.fields.confirmPassword')" v-model="form.confirmPassword" />
              <span class="icon-hide"></span>
            </div>
            <small v-if="errors.password_confirmation" class="error-text">{{ errors.password_confirmation }}</small>
          </div>

          <button class="main-btn" @click="registerJobSeeker">{{ $t('signupJobSeeker.buttons.next') }}</button>

          <p class="bottom-auth-text">
            {{ $t('signupJobSeeker.auth.haveAccount') }}
            <router-link to="/login">{{ $t('signupJobSeeker.auth.login') }}</router-link>
          </p>
        </div>

        <div v-if="currentStep === 6" class="success-step">
          <div class="success-card">
            <svg class="done-svg" viewBox="0 0 24 24" fill="none">
              <circle class="done-bg" cx="12" cy="12" r="8" fill="#f2f5f8" fill-opacity="0.24"/>
              <path class="done-circle" d="M8.5 11L11.3939 13.8939C11.4525 13.9525 11.5475 13.9525 11.6061 13.8939L19.5 6"/>
              <path class="done-check" d="M19.3578 10.5465C19.6899 12.2277 19.4363 13.9719 18.6391 15.4889C17.8419 17.0059 16.5439 18.2041 14.9763 18.8842C13.4033 19.5642 11.6449 19.6851 9.99369 19.2267C8.34247 18.7682 6.89803 17.7582 5.90077 16.3646C4.90351 14.9709 4.41358 13.2778 4.51251 11.567C4.61144 9.85619 5.29327 8.23085 6.44453 6.96147C7.59578 5.6921 9.14703 4.85527 10.8401 4.59024C12.5331 4.32521 14.2659 4.64797 15.75 5.50481"/>
            </svg>

            <h3>{{ $t('signupJobSeeker.successTitle') }}</h3>
            <p>{{ $t('signupJobSeeker.successDesc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import signupJobseeker from '@/scripts/signup-jobseeker'
export default signupJobseeker
</script>
<style src="../styles/resposive/signup-jobseeker-responsive.css"></style>
<style src="../styles/signup-jobseeker.css"></style>


