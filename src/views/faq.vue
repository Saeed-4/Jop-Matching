<template>
    <div class="FQA">
        <div class="header-Operators">
          <span class="decor-circle left-big"></span>
          <span class="decor-circle left-small"></span>
          <span class="decor-circle left-dot"></span>
          <span class="decor-circle right-big"></span>
          <span class="decor-circle right-small"></span>
          <span class="decor-circle right-dot"></span>

          <div class="container">
            <div class="title-Operators">
              <h2>الأسئلة الشائعة</h2>
              <p>الرئيسية-الأسئلة الشائعة</p>
            </div>
          </div>
        </div>

        <div class="container">
            <div class="all-faq">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="title-fqa">
                          <span class="small-faq-title">{{ text.home.faq.smallTitle }}</span>
                          <h2><span>{{ text.home.faq.title1 }}</span> {{ text.home.faq.title2 }}</h2>
                          <p>{{ text.home.faq.description }}</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="faq-accordion">
                            <div class="faq-item" v-for="(item, index) in text.home.faq.questions" :key="index" :class="{ active: openFaqs.includes(index) }">
                                <div class="faq-question" @click="toggleFaq(index)">
                                    <span class="faq-mark">?</span>
                                    <h3>{{ item.q }}</h3>
                                    <span class="icon-arrow-1 vector" :class="{ rotated: openFaqs.includes(index) }"></span>
                                </div>
                            
                                <div class="faq-answer" v-if="openFaqs.includes(index)">
                                  <p>{{ item.a }}</p>
                                </div>
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

  data() {
    return {
      openFaqs: []
    }
  },

  computed: {
    text() {
      return messages[this.currentLang]
    }
  },

  methods: {
    toggleFaq(index) {
      if (this.openFaqs.includes(index)) {
        this.openFaqs = this.openFaqs.filter(item => item !== index)
      } else {
        this.openFaqs.push(index)
      }
    }
  }
}
</script>
<style src="../styles/home.css"></style>
