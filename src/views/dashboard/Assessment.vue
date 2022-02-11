<template>
       <div class="courselist-single">
           <div class="m-nav d-flex d-lg-none">
               <div class="logo">
                    <img src="@/assets/agulogo.png" alt="agulog"/>
               </div> 
                <div id="lesToggleBtn" @click="showSide">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="#F5800C">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                </div>      
           </div>
          <transition name="fade">
               <div class="les-side-nav" v-if="slideNav">
                    <div class="side">
                        <a href="/dashboard" class="les-item">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z" fill="white"/>
                            </svg>
                            <span>Dashboard</span>
                        </a>
                        <a href="/" class="les-item l">
                            <span>Lesson 5</span>
                        </a>
                        <a href="/" class="les-item l">
                            <span>Lesson 6</span>
                        </a>
                        <a href="/" class="les-item l">
                            <span>Lesson 7</span>
                        </a>
                        <a href="/" class="les-item l">
                            <span>Lesson 8</span>
                        </a>
                        <a href="/" class="les-item l">
                            <span>Lesson 9</span>
                        </a>
                        <a href="/" class="les-item l">
                            <span>Lesson 10</span>
                        </a>
                        <a href="/" class="les-item l">
                            <span>Lesson 11</span>
                        </a>
                        <a href="/" class="les-item l">
                            <span>Lesson 12</span>
                        </a>
                   </div>     
             </div>   
          </transition> 
       </div>
       <div class="desk-courselist-single">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 d-none d-lg-block">
                    <div class="desk-les-items">
                        <div class="logo">
                            <img src="@/assets/agulogowhite.png" alt="agulog"/>
                        </div>
                        <a href="/dashboard" class="les-item">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z" fill="white"/>
                            </svg>
                            <span>Dashboard</span>
                        </a>
                         <a href="/" class="les-item l">
                            <span>Lesson 5</span>
                        </a>
                          <a href="/" class="les-item l">
                            <span>Lesson 6</span>
                        </a>
                          <a href="/" class="les-item l">
                            <span>Lesson 7</span>
                        </a>
                          <a href="/" class="les-item l">
                            <span>Lesson 8</span>
                        </a>
                        <a href="/" class="les-item l">
                            <span>Lesson 9</span>
                        </a>
                          <a href="/" class="les-item l">
                            <span>Lesson 10</span>
                        </a>
                          <a href="/" class="les-item l">
                            <span>Lesson 11</span>
                        </a>
                          <a href="/" class="les-item l">
                            <span>Lesson 12</span>
                        </a>
                    </div> 
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-9">
                    <div class="mobile-nav-info d-block d-lg-none">
                        <div class="nav-info">
                            <div class="notification">
                                <img src="@/assets/bell.png" class="img-fluid"/>
                            </div>
                            <div class="user-img">
                                <img src="@/assets/pro-im.png" class="img-fluid"/>
                            </div>
                        </div>
                    </div>
                    <div class="d-none d-lg-block">
                        <div class="db-nav">
                             <div class="username">Welcome back {{user}},</div>
                             <div class="notification">
                                <img src="@/assets/bell.png" class="img-fluid"/>
                            </div>
                            <div class="user-img">
                                <img src="@/assets/pro-im.png" class="img-fluid"/>
                            </div>                    
                        </div>  
                    </div>
                    <div class="container assessment mt-4">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="assessment-tab">
                                    <div class="week-title">Week 4</div>
                                    <div class="a-controls">
                                        <a href="#" class="prev">Back</a>
                                        <a href="#" class="next">Next</a>
                                    </div>
                                </div> 
                                <div class="assessment-tab-2">
                                    <div class="title">Assesment</div>
                                    <div class="title-date">Due November  21st 2021</div>
                                </div>
                                <div class="assessment-details">
                                    <p>lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed morbi placerat enim eu lacus. Odio congue elit, ultricies tortor ornare ultricies. Ac, integer maecenas malesuada non faucibus elementum in Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed morbi placerat enim eu lacus. Odio congue elit, ultricies 
                                        lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed morbi placerat enim eu lacus. Odio congue elit, ultricies tortor ornare ultricies. Ac, integer maecenas malesuada non faucibus elementum in Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed morbi placerat enim eu lacus. Odio congue elit, ultricies  
                                    </p>
                                </div>
                                <hr class="hr-line">
                                <div class="links">
                                    <a href="#" class="save">Save draft</a>
                                    <a href="#" class="upload">Upload file</a>
                                </div>
                                <div class="submit">
                                    <button class="btn btn-primary btn-lg btn-block">Submit your assignment</button>
                                </div>
                                <div class="next-mod">
                                    <button class="btn btn-primary btn-lg btn-block">Go to next module</button>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
       </div>
</template>

<script>
import { ref } from 'vue'
import {useRoute} from 'vue-router'
import SingleCourse from '../../components/Singlecourse'

export default {
    props: ['id'],
    components:{
        SingleCourse
    },
    setup(props){
        const route = useRoute()
        const course = ref(null)
        const p = ref(null)
        const slideNav = ref(false)
        const showSide = () => {
            slideNav.value = !slideNav.value
             console.log('u clicked me')
            p.value.classList.add('test')
        }   

        return {
            course,
            showSide,
            slideNav,
            p
        }
    }
}
</script>

<style>

</style>