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
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mt-3">
              <div>
                <button class="get-start">Get Started </button>
              </div>
            </div>
          </div>
    </div>
      <div class="l-path">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="l-head">
                  <span class="head">BUILD A CAREER IN</span>
                  <div class="line"></div>
                </div>
                <div class="why">LEARNING PATH WE OFFER</div>  
            </div>
          </div>
          <div class="row l-offers">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div class="box-1">
                    <div class="title">
                      Product Management
                    </div>
                    <p class="details">Understand role and functions responsible for the overall success of a product or project</p>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div class="box-1">
                  <div class="title">
                    UI/UX Design
                    </div>
                    <p class="details">Learn how to use flexible and scalable design to portray users ideas to great product designs</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
               <div class="box-1">
                  <div class="title">
                      Graphics Design and Video animation
                    </div>
                    <p class="details">earn the craft of creating visual content to communicate user messages in an excellent way</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div class="box-1">
                   <div class="title">
                      Frontend Software Engineering
                    </div>
                    <p class="details">earn the craft of creating visual content to communicate user messages in an excellent way</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div class="box-1">
                   <div class="title">
                      Backend Software Engineering
                    </div>
                    <p class="details">earn the craft of creating visual content to communicate user messages in an excellent way</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div class="box-1">
                   <div class="title">
                      Mobile App Dev
                    </div>
                    <p class="details">earn the craft of creating visual content to communicate user messages in an excellent way</p>
              </div>
            </div>
          </div>
    </div>
     <div class="contact-section">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <div class="contact-head">
              <span class="head">TESTIMONIALS</span>
              <div class="line"></div>
          </div>
          <div class="why">TESTIMONIALS</div>  
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Carousel :autoplay="5000" :items-to-show="2.5" :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="item in items" :key="item">
               <div class="caro-itm">
                  <div class="profile">
                    <div class="image"><img :src="item.src" class="img-fluid"/></div>
                    <div class="profile-info">
                      <span class="mb-2 name"><b>{{item.name}}</b></span>
                      <span class="mb-4 skill">{{item.skill}}</span>
                        <div class="story">{{item.story}}</div>
                    </div>
                   
                  </div>
                
               </div>
            </Slide>

            <template #addons>
              <Pagination />
            </template>
          </Carousel>

        </div>
      </div>
         
    </div>
    <div class="l-faq">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div class="faq-head">
              <span class="head">F.A.Q</span>
              <div class="line"></div>
            </div>
            <div class="why">FREQUENTLY ASKED QUESTIONS</div>  
        </div>
      </div>
      <div class="row faq-bg-section">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <div class="faq-img">
            <img src="@/assets/faq-img.jpg" class="img-fluid"/>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <div class="faq-overview">
            <div class="info">
              Are you starting from scratch or looking to improve your skills? You can become a qualified designer, software developer, product manager, or business development in a few months, competenet enough work for a company or startup anywhere in the world.
            </div>
            <div class="list-bg mt-4">
              <div @click="showDetails" class="drpdn">
                <span class="quest"><b>01 What does Agulite do?</b></span>
                <span><i class="fas fa-arrow-circle-down"></i></span>
              </div>
              <transition name="fade">
                <div v-if="information" class="content pt-4 pb-4">
                  <p class="mb-4">Agulite addresses unemployment by empowering top talents of the future with the skills and experience needed to kick-start your career in today's global market.</p>
                  <p class="mb-4">Are you starting from scratch or looking to improve your skills? You can become a qualified designer, software developer, product manager, or business development in a few months, competenet enough work for a company or startup anywhere in the world.</p>
                  <p>We specialize in following three core areas:</p>
                  <p>1. Product Design</p>
                  <p>i. Graphics Design and Video animation</p>
                  <p>ii. UI/UX Design</p>
                  <p class="mt-4">2. Product Development</p>
                  <p>i. Product Management</p>
                  <p>ii. Software Engineering (Web and Mobile)</p>
                  <p>iii. DevOps Engineering</p>
                  <p>iv. Cloud Computing</p>
                  <p>v. Blockchain</p>
                  <p>vi. Data Science and</p>
                  <p>vii. Quality Assurance Engineering</p>
                </div>
              </transition>
            </div>
             <div class="list-bg mt-4">
              <div @click="showDetails2" class="drpdn">
                <span class="quest"><b>02 How do I become a Agulite?</b></span>
                <span><i class="fas fa-arrow-circle-down"></i></span>
              </div>
              <transition name="fade">
                <div v-if="information2" class="content pt-4 pb-4">
                  <p>Our registration process is straightforward. Complete this form, choose your desired learning path and fill in your details to begin your journey.</p>
                </div>
              </transition>
            </div>
            <div class="list-bg mt-4">
              <div @click="showDetails3" class="drpdn">
                <span class="quest"><b>03 How long is Agulite's training Programme?</b></span>
                <span><i class="fas fa-arrow-circle-down"></i></span>
              </div>
              <transition name="fade">
                <div v-if="information3" class="content pt-4 pb-4">
                  <p>The program runs for a period of 5 months which is but the beginning to your amazing journey as an Agulite.</p>
                </div>
              </transition>
            </div>
             <div class="list-bg mt-4">
              <div @click="showDetails4" class="drpdn">
                <span class="quest"><b>04 How much does the program cost?</b></span>
                <span><i class="fas fa-arrow-circle-down"></i></span>
              </div>
              <transition name="fade">
                <div v-if="information4" class="content pt-4 pb-4">
                  <p class="mb-4">You can start with our 14 days free access to any desired learning path.</p>
                  <p>With a 30 days money-back guarantee, and upon completing the 14 days free access to your desired learning path, continue as follows:</p>
                  <p>ESSENTIAL ₦16,495 ($29.99) inclusive of VAT which covers, learning resources, assess to team coordinators and network.</p>
                  <p>or</p>
                  <p>STANDARD ₦65,980 ($119.96) for complete payment path (i.e 5 months) and save 20% inclusive of VAT which covers, learning resources and assess to team coordinators and network</p>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-section">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <div class="contact-head">
              <span class="head">CONTACT</span>
              <div class="line"></div>
          </div>
          <div class="why">CONTACT US</div>  
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-4">
              <div class="address">
                <span><i class="fas fa-map-marker ic"></i></span>
                <span class="tit">Our Address</span>
                <span>Abeokuta, Ogun, Nigeria</span>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div class="mail">
                <span><i class="far fa-envelope ic"></i></span>
                <span class="tit">Email Us</span>
                <span>info@agulite.com</span>
                <span>chi@agulite.com</span>
              </div>
            </div>
             <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="phone">
                <span><i class="fas fa-phone ic"></i></span>
                <span class="tit">Call Us</span>
                <span>+234 704 347 6118</span>
                <span>+234 902 537 2508</span>
              </div>
            </div>
          </div>
        </div>
         <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
           <div class="contact-form">
              <form>
                  <input type="text" placeholder="Your Name" style="width:48%; margin-right: 10px !important;"> 
                  <input type="text" placeholder="Your Email" style="width:48%" class="">
                  <div class="form-group">
                    <input type="email" style="width:98%" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                 <div class="form-group">
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                </div>
                <div class="c-but"><button>Get Started </button></div>
              </form>
            </div>
        </div>
      </div>
    </div>
    <div>
      <Footer />
    </div>
   
  
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { ref } from 'vue'
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import imageA from '@/assets/pro-im.png'


export default {
  name: 'Home',
  components:{
    Navbar,
    Footer,
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  setup(){
    const information = ref(false)
    const information2 = ref(false)
    const information3 = ref(false)
    const information4 = ref(false)

    const items = ref([
        {id:1, story:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem autem, dolor inventore eveniet nulla quae omnis vel eius itaque accusantium, tempora culpa amet quam esse eos illum iure numquam ullam? Ab, impedit illum ut deserunt maiores voluptatum? Sequi, temporibus?", name:"Amadi Patrick", skill:"Fullstack dev", src:imageA},
        {id:2, story:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem autem, dolor inventore eveniet nulla quae omnis vel eius itaque accusantium, tempora culpa amet quam esse eos illum iure numquam ullam? Ab, impedit illum ut deserunt maiores voluptatum? Sequi, temporibus?", name:"Richard", skill:"Mobile dev", src:imageA},
        {id:3, story:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem autem, dolor inventore eveniet nulla quae omnis vel eius itaque accusantium, tempora culpa amet quam esse eos illum iure numquam ullam? Ab, impedit illum ut deserunt maiores voluptatum? Sequi, temporibus?", name:"Beloved Maximus", skill:"Digital marketter", src:imageA},
         {id:3, story:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem autem, dolor inventore eveniet nulla quae omnis vel eius itaque accusantium, tempora culpa amet quam esse eos illum iure numquam ullam? Ab, impedit illum ut deserunt maiores voluptatum? Sequi, temporibus?", name:"Stanley Agu", skill:"Backend dev", src:imageA}
    ])
    const settings = ref({
      itemsToShow: 1,
      snapAlign: 'left',
    })
     const breakpoints = ref({
      480: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      1024: {
        itemsToShow: 2,
        snapAlign: 'start',
      },
      })
    const showDetails = () => {
        information.value = !information.value
    }
     const showDetails2 = () => {
         information2.value = !information2.value
    }
    const showDetails3 = () => {
         information3.value = !information3.value
    }
     const showDetails4 = () => {
         information4.value = !information4.value
    }
       return {
            information,
            information2,
            information3,
            information4,
            showDetails,
            showDetails2,
            showDetails3,
            showDetails4,
            items,
            breakpoints,
            settings


        }

  }
  
}
</script>