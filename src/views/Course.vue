<template>
   <div class="advert">
       <div class="row">
           <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
               <div class="text-center advert-bg">Welcome to Agulite! Claim your personal discount now. Explore programs and use within 7days. <a href="#">Learn more</a></div>
           </div>
        </div>
   </div>
   <div class="navc">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                 <div class="cr-nav">
                    <div class="logo">
                        <img src="@/assets/agulogo.png" class="img-fluid"/>
                    </div>
                    <div class="action-but">
                        <button @click="goToSignin">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="courses-bannner">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="c-banner">
                    <div class="c-banner-info">
                        <div class="title">Become a Blockchain Developer</div>
                        <div class="details">Demand for blockchain developers in skyrocketing in this program, you'll work with tthe Bitcoin and ethereum protocols, build projects and real wordd application. </div>
                        <div class="action-buttons">
                            <button class="b1">LEARN MORE </button>
                            <button class="b2" @click="moveUp">ENROLL NOW </button>
                        </div>
                        <div class="countdown">
                            <div class="day">
                                <span class="numb">06</span>
                                <span class="text">DAYS</span>
                            </div>
                            <div class="hrs">
                                <span class="numb">10</span>
                                <span class="text">HRS</span>
                            </div>
                            <div class="min">
                                <span class="numb">49</span>
                                <span class="text">MIN</span>
                            </div>
                             <div class="sec">
                                <span class="numb">42</span>
                                <span class="text">SEC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="courses-sect">
        <div class="sect">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="sect-all">
                        <div class="sect-left">
                            <img src="@/assets/cbanner.jpg" alt="course image" class="img-fluid" width=""/>
                            <div class="sect-buttons">
                                <button class="bA">Program Details </button>
                                <button class="bB">Download Syllabus </button>
                            </div>
                        </div>
                        <div class="sect-right">
                            <h2 class="course-tit">Data Scientist</h2>
                            <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos expedita necessitatibus consequatur fugit veritatis blanditiis est dolores. Nobis, ducimus laborum.</p>
                            <div class="level-block">
                                <span><i class="fas fa-signal"></i> Intermediate</span>
                                <span><i class="far fa-clock"></i> 5 months </span>
                            </div>
                            <div class="skills-covered">
                                <h2>SKILLS COVERED </h2>
                                <p>Data modelling, Data pipeline, Data lakes, Airflow</p>
                            </div>
                            <div class="prerequesites">
                                <h2>PREREQUESITES </h2>
                                <p>Python, Sql</p>
                            </div>
                        </div>
                    </div>   
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                   <div class="sect-all">
                        <div class="sect-left">
                            <img src="@/assets/cbanner.jpg" alt="course image" class="img-fluid" width=""/>
                            <div class="sect-buttons">
                                <button class="bA">Program Details </button>
                                <button class="bB" @click="isOpen = true">Download Syllabus </button>
                                <Modal :open="isOpen" @close="isOpen = !isOpen" class="modal1">
                                    <div class="text-center m-tit">
                                        <h3>Request detailed syllabus</h3>
                                        <small class="small">Fill in the form to receive more information about the course.</small>
                                    </div>
                                  <form>
                                    <div class="form-group">
                                        <label>Firstname</label>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input type="email" class="form-control" id="" >
                                    </div>
                                    <p>By providing your information and clicking "Download Syllabus", you consent and agree to receive marketing emails from Udacity, and that your information will be used in accordance with the Udacity Terms of Use and Privacy Policy, including relevant opt out provisions therein.</p>
                                     <div class="m-but"><button disabled type="submit" class="btn btn-primary">Download Syllabus</button></div>
                                    </form>
                                </Modal>
                            </div>
                        </div>
                        <div class="sect-right">
                            <h2 class="course-tit">Data Scientist</h2>
                            <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos expedita necessitatibus consequatur fugit veritatis blanditiis est dolores. Nobis, ducimus laborum.</p>
                            <div class="level-block">
                                <span><i class="fas fa-signal"></i> Intermediate</span>
                                <span><i class="far fa-clock"></i> 5 months </span>
                            </div>
                            <div class="skills-covered">
                                <h2>SKILLS COVERED </h2>
                                <p>Data modelling, Data pipeline, Data lakes, Airflow</p>
                            </div>
                            <div class="prerequesites">
                                <h2>PREREQUESITES </h2>
                                <p>Python, Sql</p>
                            </div>
                        </div>
                    </div>    
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="sect-all">
                        <div class="sect-left">
                            <img src="@/assets/cbanner.jpg" alt="course image" class="img-fluid" width=""/>
                            <div class="sect-buttons">
                                <button class="bA">Program Details </button>
                                <button class="bB">Download Syllabus </button>
                                
                            </div>
                        </div>
                        <div class="sect-right">
                            <h2 class="course-tit">Data Scientist</h2>
                            <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos expedita necessitatibus consequatur fugit veritatis blanditiis est dolores. Nobis, ducimus laborum.</p>
                            <div class="level-block">
                                <span><i class="fas fa-signal"></i> Intermediate</span>
                                <span><i class="far fa-clock"></i> 5 months </span>
                            </div>
                            <div class="skills-covered">
                                <h2>SKILLS COVERED </h2>
                                <p>Data modelling, Data pipeline, Data lakes, Airflow</p>
                            </div>
                            <div class="prerequesites">
                                <h2>PREREQUESITES </h2>
                                <p>Python, Sql</p>
                            </div>
                        </div>
                    </div>   
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="sect-all">
                        <div class="sect-left">
                            <img src="@/assets/cbanner.jpg" alt="course image" class="img-fluid" width=""/>
                            <div class="sect-buttons">
                                <button class="bA">Program Details </button>
                                <button class="bB">Download Syllabus </button>
                            </div>
                        </div>
                        <div class="sect-right">
                            <h2 class="course-tit">Data Scientist</h2>
                            <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos expedita necessitatibus consequatur fugit veritatis blanditiis est dolores. Nobis, ducimus laborum.</p>
                            <div class="level-block">
                                <span><i class="fas fa-signal"></i> Intermediate</span>
                                <span><i class="far fa-clock"></i> 5 months </span>
                            </div>
                            <div class="skills-covered">
                                <h2>SKILLS COVERED </h2>
                                <p>Data modelling, Data pipeline, Data lakes, Airflow</p>
                            </div>
                            <div class="prerequesites">
                                <h2>PREREQUESITES </h2>
                                <p>Python, Sql</p>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </div>
    
    <div>
      <Footer />
    </div>
       
            
</template>

<script>
import { ref } from 'vue'
import Modal from '../components/modal.vue'
import Footer from '../components/footer.vue'
export default {
     components:{
        Modal,
        Footer
  },
  setup(){
      const isOpen = ref(false)
       const  moveUp = () => {
          window.scrollTo(0,950);
    }

      return{
          isOpen,
          moveUp
      }
  }
}
</script>

<style>

</style>