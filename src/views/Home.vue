<template>
  <div>
    <navbar />
  </div>
    <div class="h-banner">
       <div class="bg-overlay">
       </div>
       <div class="banner-text">
         <h1>Join Top Talents Of the Future</h1>
         <p>Get the skills and Experience needed to thrive in today's crazy global market.</p>
         <button>Get Started </button>
       </div>
    </div>
    <div class="agu-aim">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="agulite-head">
                  <span class="head">AGULITE</span>
                  <div class="line"></div>
                </div>
                <div class="why">WHY CHOOSE AGULITE</div>  
            </div>
          </div>
          <div class="row service-bg">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div class="box-1">
                    <div class="title">
                      <span><i class="far fa-smile fn"></i></span>
                      <span class="h-text">100% remote learning</span>
                    </div>
                    <p class="details"><b>Agulite</b> offers top notch virtual classroom experience, helping you connect with fellow learners on the go</p>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div class="box-1">
                  <div class="title">
                      <span><i class="far fa-address-book fn"></i></span>
                      <span class="h-text">Access to professional skills</span>
                    </div>
                    <p class="details"><b>Agulite</b> offers top notch virtual classroom experience, helping you connect with fellow learners on the go</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
               <div class="box-1">
                  <div class="title">
                      <span><i class="fas fa-headset fa-lg fn"></i></span>
                      <span class="h-text">Build Your Portfolio</span>
                    </div>
                    <p class="details"><b>Agulite</b> offers top notch virtual classroom experience, helping you connect with fellow learners on the go</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div class="box-1">
                  <div class="title">
                      <span><i class="fas fa-user-friends fn"></i></span>
                      <span class="h-text">Access to dedicated coordinator</span>
                    </div>
                    <p class="details"><b>Agulite</b> offers top notch virtual classroom experience, helping you connect with fellow learners on the go</p>
              </div>
            </div>
          </div>
    </div>

  
</template>

<script>
import Navbar from '../components/navbar.vue'

export default {
  name: 'Home',
  components:{
    Navbar
  },
  setup(){

  }
  
}
</script>