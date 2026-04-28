<template>
  <div class="contact" :dir="currentLang === 'ar' ? 'rtl' : 'ltr'">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="about-contact">
            <h1>{{ t.contact.title1 }}</h1>
            <h2>{{ t.contact.title2 }}</h2>
            <p>{{ t.contact.desc }}</p>
            <div class="social">
              <ul>
                <li><router-link to="#"><span class="icon-Vector-3"></span></router-link></li>
                <li><router-link to="#"><span class="icon-Vector-4"></span></router-link></li>
                <li><router-link to="#"><span class="icon-Vector-5"></span></router-link></li>
                <li><router-link to="#"><span class="icon-Vector-6"></span></router-link></li>
              </ul>
            </div>
            <p class="contact-link">
              {{ t.contact.contactInfoText }}
              <a href="https://branches.mol.pna.ps/" target="_blank">
                https://branches.mol.pna.ps/
              </a>
            </p>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="box-contact">
            <div class="form-group">
              <label>{{ t.contact.name }}</label>
              <input type="text" :placeholder="t.contact.namePlaceholder">
            </div>
            <div class="form-group">
              <label>{{ t.contact.phone }}</label>
              <div class="phone-box">
                <div class="country-box">
                  <img src="@/assets/image.png" alt="flag">
                  <span class="icon-arrow-1"></span>
                </div>
                <input type="text" placeholder="972  00 000 0000">
              </div>
            </div>
            <div class="form-group">
              <label>{{ t.contact.email }}</label>
              <input type="email" :placeholder="t.contact.emailPlaceholder">
            </div>
            <div class="form-group">
              <label>{{ t.contact.message }}</label>
              <textarea :placeholder="t.contact.messagePlaceholder"></textarea>
            </div>
            <button class="send-btn">{{ t.contact.send }}</button>
            <div class="contact-info">
              <div class="info-item">
                <span class="icon-Vector-7"></span>
                <span>{{ t.contact.location }}</span>
              </div>
              <div class="info-item">
                <span class="icon-Vector-8"></span>
                <span>{{ t.contact.phoneNumber }}</span>
              </div>
              <div class="info-item">
                <span class="icon-Vector-9"></span>
                <span>{{ t.contact.emailAddress }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import messages from '@/data/lang'

export default {
  props: {
    currentLang: {
      type: String,
      default: 'ar'
    }
  },

  computed: {
    t() {
      return messages[this.currentLang]
    }
  }
}
</script>
<style scoped src="../styles/contact.css"></style>