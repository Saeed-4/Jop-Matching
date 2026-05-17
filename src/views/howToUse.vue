<template>
  <div class="how-use-page">
    <section class="how-use-hero">
      <div class="image-overlay"></div>

      <div class="title-overlay">
        <div class="container">
          <div class="top-text">
            <h2>{{ $t('howUse.title') }}</h2>
            <p>{{ $t('howUse.breadcrumb') }}</p>
          </div>
        </div>

        <span class="circles c1"></span>
        <span class="circle2 c2"></span>
        <span class="circle2 c3"></span>
      </div>

      <div class="video-content">
        <button class="play-btn" @click="openVideo(1)">
          <span class="icon-play"></span>
        </button>

        <h3>{{ $t('howUse.heroTitle') }}</h3>
        <p>{{ $t('howUse.heroDesc') }}</p>
      </div>

      <div v-if="showVideo1" class="video-modal">
        <button class="close-video" @click="closeVideo">×</button>

        <video class="video-player" controls autoplay>
          <source src="@/assets/videos/Employers.i8g-LZYJ-1777274242190.mp4" type="video/mp4" />
        </video>
      </div>
    </section>

    <section class="back">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="title-how-use-hero">
              <h2>{{ $t('howUse.aboutTitle') }}</h2>
              <p>{{ $t('howUse.aboutDesc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="all">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="Simple-steps">
              <h2>{{ $t('howUse.stepsTitle') }}</h2>
              <p>{{ $t('howUse.stepsDesc') }}</p>
            </div>
          </div>

          <div class="col-lg-6 col-md-4 col-sm-2 col-12">
            <div class="section1">
              <img src="@/assets/Frame (5).png" alt="img">
            </div>
          </div>

          <div class="col-lg-6 col-md-8 col-sm-10 col-12">
            <div class="section2">
              <b>1</b>
              <h3>{{ $tm('howUse.steps')[0].title }}</h3>
              <p>{{ $tm('howUse.steps')[0].desc }}</p>
            </div>
          </div>

          <div class="col-lg-6 col-md-8 col-sm-10 col-12">
            <div class="section1">
              <b>2</b>
              <h3>{{ $tm('howUse.steps')[1].title }}</h3>
              <p>{{ $tm('howUse.steps')[1].desc }}</p>
            </div>
          </div>

          <div class="col-lg-6 col-md-4 col-sm-2 col-12">
            <div class="section2">
              <img src="@/assets/Frame (1).png" alt="img">
            </div>
          </div>

          <div class="col-lg-6 col-md-4 col-sm-2 col-12">
            <div class="section1">
              <img src="@/assets/Frame (2).png" alt="img">
            </div>
          </div>

          <div class="col-lg-6 col-md-8 col-sm-10 col-12">
            <div class="section2">
              <b>3</b>
              <h3>{{ $tm('howUse.steps')[2].title }}</h3>
              <p>{{ $tm('howUse.steps')[2].desc }}</p>
            </div>
          </div>

          <div class="col-lg-6 col-md-8 col-sm-10 col-12">
            <div class="section1">
              <b>4</b>
              <h3>{{ $tm('howUse.steps')[3].title }}</h3>
              <p>{{ $tm('howUse.steps')[3].desc }}</p>
            </div>
          </div>

          <div class="col-lg-6 col-md-4 col-sm-2 col-12">
            <div class="section2">
              <img src="@/assets/Frame (3).png" alt="img">
            </div>
          </div>

          <div class="col-lg-6 col-md-4 col-sm-2 col-12">
            <div class="section1">
              <img src="@/assets/Frame (4).png" alt="img">
            </div>
          </div>

          <div class="col-lg-6 col-md-8 col-sm-10 col-12">
            <div class="section2">
              <b>5</b>
              <h3>{{ $tm('howUse.steps')[4].title }}</h3>
              <p>{{ $tm('howUse.steps')[4].desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="all">
      <div class="See-works">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-8 col-12">
            <div class="color-bak1"></div>
          </div>
          <div class="col-lg-9 col-md-6 col-sm-4 col-12">
            <div class="color-bak2"></div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="title-See-works">
                <h3>{{ $t('howUse.videoSection.title') }}</h3>
                <p>{{ $t('howUse.videoSection.desc') }}</p>

                <ul>
                  <li v-for="(point, index) in $tm('howUse.videoSection.points')" :key="index">
                    {{ point }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="video-See-works">
                <div class="video-box" @click="openVideo(2)">
                  <img src="@/assets/b8d69c9313185f1ed6814a6225bbfeaf05e056d8.png" alt="video preview" />

                  <button class="play-btn">
                    <span class="icon-play"></span>
                  </button>
                </div>
              </div>

              <div v-if="showVideo2" class="video-modal">
                <button class="close-video" @click="closeVideo">×</button>

                <video controls autoplay class="video-player">
                  <source src="@/assets/videos/Jobseekers.CN9eYB01-1777274242190.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-9 col-md-6 col-sm-4 col-12">
            <div class="color-bak2"></div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-8 col-12">
            <div class="color-bak1"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="all">
      <div class="slidar-See-works">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="title-slidar">
                <h2>{{ $t('howUse.platform.title') }}</h2>
                <p>{{ $t('howUse.platform.desc') }}</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
              <div class="platform-card">
                <div class="card-img">
                  <img src="@/assets/3c1417033d73b669f457b25dc627f2900cc2dcd9.png" alt="img">
                </div>
                <div class="card-contente">
                  <h3>{{ $tm('howUse.platform.cards')[0].title }}</h3>
                  <p>{{ $tm('howUse.platform.cards')[0].desc }}</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
              <div class="platform-card">
                <div class="card-img">
                  <img src="@/assets/e1a8a69636cbfb8a005933dee242971c63fc77a6.png" alt="img">
                </div>
                <div class="card-contente">
                  <h3>{{ $tm('howUse.platform.cards')[1].title }}</h3>
                  <p>{{ $tm('howUse.platform.cards')[1].desc }}</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
              <div class="platform-card">
                <div class="card-img">
                  <img src="@/assets/d01393906a220742a4b2e45e8efd484701dac1eb.png" alt="img">
                </div>
                <div class="card-contente">
                  <h3>{{ $tm('howUse.platform.cards')[2].title }}</h3>
                  <p>{{ $tm('howUse.platform.cards')[2].desc }}</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
              <div class="platform-card">
                <div class="card-img">
                  <img src="@/assets/15d42f30a1ec4ca871b9578e8d031c2b0ffa2161.png" alt="img">
                </div>
                <div class="card-contente">
                  <h3>{{ $tm('howUse.platform.cards')[3].title }}</h3>
                  <p>{{ $tm('howUse.platform.cards')[3].desc }}</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
              <div class="platform-card">
                <div class="card-img">
                  <img src="@/assets/c14d7d1ca35d961e3bf1c2cc48206784f749aa7b.png" alt="img">
                </div>
                <div class="card-contente">
                  <h3>{{ $tm('howUse.platform.cards')[4].title }}</h3>
                  <p>{{ $tm('howUse.platform.cards')[4].desc }}</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
              <div class="platform-card">
                <div class="card-img">
                  <img src="@/assets/a98c48a78eeaecbbefeb85f1601b5442915225d8.png" alt="img">
                </div>
                <div class="card-contente">
                  <h3>{{ $tm('howUse.platform.cards')[5].title }}</h3>
                  <p>{{ $tm('howUse.platform.cards')[5].desc }}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-overlay"></div>

      <img class="bg-left main" src="@/assets/company.png" alt="">
      <img class="bg-center second" src="@/assets/Vector (6).png" alt="">
      <img class="bg-right" src="@/assets/jobs.png" alt="">

      <div class="container">
        <div class="cta-content">
          <h2>{{ $t('howUse.cta.title') }}</h2>
          <p>{{ $t('howUse.cta.desc') }}</p>
          <div class="cta-buttons">
            <router-link to="/signup">{{ $t('howUse.cta.btn1') }}</router-link>
            <router-link to="/JobOpportunities">{{ $t('howUse.cta.btn2') }}</router-link>
          </div>
          <span class="cta-note">{{ $t('howUse.cta.note') }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import howToUse from '@/scripts/howToUse'
export default howToUse
</script>
<style src="../styles/resposive/howUse-responsive.css"></style>
<style src="../styles/howToUse.css"></style>