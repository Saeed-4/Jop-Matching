<template>
    <div class="WorkDetails"  :dir="currentLang === 'ar' ? 'rtl' : 'ltr'"  :class="currentLang === 'ar' ? 'rtl' : 'ltr'">
        <div class="header-Operators">
          <span class="decor-circle left-big"></span>
          <span class="decor-circle left-small"></span>
          <span class="decor-circle left-dot"></span>
          <span class="decor-circle right-big"></span>
          <span class="decor-circle right-small"></span>
          <span class="decor-circle right-dot"></span>
          <div class="container">
            <div class="title-Operators">
              <h2>{{ t.workDetails.title }}</h2>
              <p>{{ t.workDetails.breadcrumb }}</p>
            </div>
          </div>
        </div>
        <section class="all">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-12">
                        <div class="header-WorkDetails">
                            <div class="img-WorkDetails">
                                <img src="@/assets/Rectangle 652 (4).png" alt="img">
                            </div>
                            <div class="titles-WorkDetails">
                                <div class="icon-WorkDetails">
                                    <span class="icon-Vector-14"></span>
                                    <span class="icon-Vector-15"></span>
                                    <span class="icon-warning"></span>
                                </div>
                                <div class="title-Work">
                                    <h1>{{ t.workDetails.title }}</h1>
                                    <p>{{ t.workDetails.company }}</p>
                                    <p><span class="icon-Vector"></span> {{ t.workDetails.location }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                        <div class="Application-period">
                            <div class="anAppointment">
                                 <p>{{ t.workDetails.applyFrom }}<span> 14 مارس 2026 </span>{{ t.workDetails.applyTo }}<span> 26 حزيران 2026 </span></p>
                            </div>
                            <div class="button-WorkDetails">
                                <button class="apply-btn">{{ t.workDetails.applyNow }}</button>
                                <div class="icon-save-Work">
                                    <span class="icon-save"></span>
                                </div>
                            </div>
                            <div class="Company-WorkDetails">
                                <p>
                                    {{ t.workDetails.source }}
                                    <img src="@/assets/image 10.png" alt="img">
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="all">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="about-WorkDetails">
                            <div class="back-1">
                                <h2>{{ t.workDetails.aboutCompanyTitle }}</h2>
                                <p>{{ t.workDetails.aboutCompanyDesc }}</p>
                            </div>
                            <div class="back-2">
                                <h3>{{ t.workDetails.announcementTitle }}</h3>
                                 <p>{{ t.workDetails.announcementDesc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="all">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="Job-requirements">
                            <h2>{{ t.workDetails.requirementsTitle }}</h2>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div class="about-Job-requirements">
                            <h2>{{ t.workDetails.langSkills }}</h2>
                            <p>{{ t.workDetails.langSkillsDesc }}</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div class="about-Job-requirements">
                            <h2>{{ t.workDetails.experience }} </h2>
                            <p>{{ t.workDetails.experienceDesc }}</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div class="about-Job-requirements">
                            <h2>{{ t.workDetails.education }}</h2>
                            <p>{{ t.workDetails.educationDesc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="all">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="Job-Skills">
                            <h2>{{ t.workDetails.skillsTitle }}</h2>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="about-Job-Skills">
                            <p v-for="skill in t.workDetails.skills" :key="skill">
                              {{ skill }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="all">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="Basic-responsibilities">
                            <h2>{{ t.workDetails.responsibilitiesTitle }}</h2>
                            <p v-for="item in t.workDetails.responsibilities" :key="item">
                              - {{ item }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="all">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="Submission-mechanism">
                            <h2>{{ t.workDetails.submissionTitle }}</h2>
                            <p>{{ t.workDetails.submissionDesc }}</p>                            
                            <p>{{ t.workDetails.note }}</p>
                            <p>{{ t.workDetails.finalWish }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import WorkDetails from '@/scripts/WorkDetails';
export default WorkDetails
</script>
<style scoped src="../styles/WorkDetails.css"></style>