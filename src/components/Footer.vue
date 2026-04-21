<template>
  <div class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="nav-links">
              <ul>
                <li><router-link to="/faq"><p>{{ text.footer.faq }}</p></router-link></li>
                <li><router-link to="/howToUse"><p>{{ text.footer.howToUse }}</p></router-link></li>
                <li><router-link to="/contact"><p>{{ text.footer.contact }}</p></router-link></li>
                <li><router-link to="/privacy"><p>{{ text.footer.privacy }}</p></router-link></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="StayWithUs">
              <div class="subscribe-section">
                <div class="title">
                  <h2>{{ text.footer.stayInTouch }}</h2> 
                </div>


                <div class="subscribe-box">
                  <input type="email" :placeholder="text.footer.emailPlaceholder" />

                  <button class="arrow-btn">
                    <span><img src="@/assets/Vector.png" alt="logo"></span>
                  </button>
                </div>
              </div>
              <div class="icon-footer">
                <img src="@/assets/iconFooter.png" alt="logo">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-under">
      <div class="container">
        <div class="col-lg-4 col-md-12 col-sm-12 col-12">
          <div class="JM">
            <p>©2025 JM {{ text.footer.rights }}</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 col-12">
          <div class="social">
            <ul>
              <li><router-link to="#"><img src="@/assets/Vector (1).png" alt="img"></router-link></li>
              <li><router-link to="#"><img src="@/assets/Vector (2).png" alt="img"></router-link></li>
              <li><router-link to="#"><img src="@/assets/Vector (3).png" alt="img"></router-link></li>
              <li><router-link to="#"><img src="@/assets/Social Media Icon.png" alt="img"></router-link></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 col-12">
          <div class="development">
            <div class="dev-h">
              <h2>{{ text.footer.developedBy }}</h2>
            </div>
            <div class="dev-img">
              <router-link to="#"><img src="@/assets/Group 1000005954.png" alt="img"></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import messages from '@/data/lang'

const props = defineProps({
  currentLang: {
    type: String,
    default: 'en'
  }
})

const text = computed(() => messages[props.currentLang])
</script>

<style scoped>
ul {
  list-style: none;
  padding: 18px 0px;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 20px;
}

li {
  display: inline-block;
}

.footer {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.footer-top {
  width: 100%;
  padding: 20px 0;
}

.container {
  width: 90%;
  max-width: 1350px;
  margin: auto;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
}

.nav-links ul li p {
  font-family: 'Tajawal', sans-serif;
  font-size: 15px;
  line-height: 100%;
  font-weight: 400;
  color: #DD5C16;
  margin: 0;
  white-space: nowrap;
}

.StayWithUs {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  justify-content: flex-end;
}

.subscribe-section {
  display: flex;
  align-items: center;
  gap: 18px;
}

.title {
  width: auto;
  height: auto;
}

.title h2 {
  font-family: 'Tajawal', sans-serif;
  margin: 0;
  color: #DD5C16;
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
}

.subscribe-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  border-radius: 31px;
  border: 0.5px solid #B2B2B2;
  background: transparent;

  padding: 0 4px 0 4px;
}

.subscribe-box input {
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-family: 'Tajawal', sans-serif;
  font-weight: 400;
  font-size: 15px;
  text-align: right;
  color: #999;
}

.subscribe-box input::placeholder {
  color: #D9D9D9;
}

.arrow-btn {
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: #DD5C16;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  flex-shrink: 0;
  padding: 0;
}

.arrow-btn span {
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow-btn img {
  width: 14px;
  height: 14px;
  object-fit: contain;
}

.icon-footer {
  width: 33px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-footer img {
  width: 45px;
  height: 45px;
  object-fit: contain;
}

.footer-under {
  width: 100%;
  height: auto;
  background-color: #DD5C16;
  display: flex;
  align-items: center;
}

.footer-under .container {
  width: 90%;
  max-width: 1350px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 0px;
}

.JM{
  display: flex;
}

.JM p {
  margin: 0;
  font-family: 'Tajawal', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 100%;
  color: #FFFFFF;
  white-space: nowrap;
}

.social ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
}

.social ul li a {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.social ul li a img {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.development {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    justify-content: flex-end;
}

.dev-h h2 {
  margin: 0;
  font-family: 'Tajawal', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: #FFFFFF;
  white-space: nowrap;
}

.dev-img img {
  width: 54px;
  height: auto;
  object-fit: contain;
}

@font-face {
  font-family: 'Tajawal';
  src: url('@/assets/fonts/Tajawal/Tajawal-Regular.ttf') format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'Tajawal';
  src: url('@/assets/fonts/Tajawal/Tajawal-Bold.ttf') format('truetype');
  font-weight: 700;
}

@media (max-width: 767.98px) {
  .development{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    justify-content: center;
  }

   .footer-top .row {
    flex-direction: column;
    gap: 20px;
  }

  .footer-top .container {
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  /* الروابط */
  .nav-links ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0;
    align-items: center;
  }

  .nav-links li {
    list-style: none;
  }

  /* قسم الاشتراك */
  .StayWithUs {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .subscribe-section {
    width: 100%;
    max-width: 320px;
    display: block;
  }

  .subscribe-box {
    display: flex;
    width: 100%;
    gap: 8px;
  }

  .subscribe-box input {
    flex: 1;
    height: 42px;
    padding: 0 10px;
  }

  .subscribe-box button {
    width: 45px;
    height: 42px;
  }

  /* الأيقونة */
  .icon-footer img {
    max-width: 120px;
    margin-top: 10px;
  }
}
    
</style>