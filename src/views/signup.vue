<template>
  <div class="sign-up">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title-sign-up">
            <h2>انشاء حساب</h2>
            <p>قم باختيار نوع الحساب الذي تريد القيام بانشاؤه</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="box-sign-up">
            <div class="icon-sign-up">
              <span class="icon-company"></span>
            </div>
            <div class="about-sign-up">
              <h3>شركة / مؤسسة توظيف</h3>
              <p>انشاء حساب توظيف يمكنك من خلاله نشر فرص عمل او منح او تدريب عملي</p>
            </div>
            <div class="Create-sign-up">
              <router-link to="/signup-company">
                <p>انشاء حساب</p>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="box-sign-up">
            <div class="icon-sign-up">
              <span class="icon-work"></span>
            </div>
            <div class="about-sign-up">
              <h3>باحث عن عمل</h3>
              <p>انشاء حساب باحث عن عمل  يمكنك من خلاله نشر فرص عمل او منح او تدريب عملي تقدمه الشركه</p>
            </div>
            <div class="Create-sign-up">
              <router-link to="/signup-jobseeker">
                <p>انشاء حساب</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="../styles/sugnup.css"></style>