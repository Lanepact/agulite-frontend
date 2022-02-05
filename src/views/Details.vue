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
                            <div class="search-box">
                                <span class="search-icon border-0 pl-3"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.33333 0.333496C9.64533 0.333496 12.3333 3.0215 12.3333 6.3335C12.3333 9.6455 9.64533 12.3335 6.33333 12.3335C3.02133 12.3335 0.333328 9.6455 0.333328 6.3335C0.333328 3.0215 3.02133 0.333496 6.33333 0.333496ZM6.33333 11.0002C8.91133 11.0002 11 8.9115 11 6.3335C11 3.75483 8.91133 1.66683 6.33333 1.66683C3.75466 1.66683 1.66666 3.75483 1.66666 6.3335C1.66666 8.9115 3.75466 11.0002 6.33333 11.0002ZM11.99 11.0475L13.876 12.9328L12.9327 13.8762L11.0473 11.9902L11.99 11.0475Z" fill="#F5800C"/>
                                    </svg>
                                </span>
                                <input type="text">
                            </div>
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
                    <div class="container active-course mt-4">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-8">
                                <div class="active-course-left">
                                    <div class="details">
                                        <div class="week">Week 4 </div>
                                        <div class="title">Introduction to user interaction design</div>
                                        <div class="video">
                                            <video width="420" height="340" controls>
                                                <source src="@/assets/test.mp4" type="video/mp4">
                                            </video>
                                        </div>
                                    </div>
                                     <hr class="hr-line" />
                                    <div class="transcript-info">
                                        <h2 class="mb-3">Transcript</h2>
                                        <p>lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed morbi placerat enim eu lacus. Odio congue elit, ultricies tortor ornare ultricies. Ac, integer maecenas malesuada non faucibus elementum in Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed morbi placerat enim eu lacus. Odio congue elit, ultricies tortor ornare ultricies. Ac, integer maecenas malesuada non faucibus elementum in</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                 <div class="active-course-right">
                                    <div class="controls">
                                        <a href="#">Back</a>
                                        <a href="#">Next</a>
                                    </div>
                                    <div class="notes">
                                        <div class="note-title">Your Notes</div>
                                        <div class="note-space mb-4"></div>
                                        <button type="button" class="btn btn-primary note-btn">Save</button>
                                        <a href="/assessment" class="note-access">Assesment for the week</a>
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
import { ref } from 'vue'
import {useRoute} from 'vue-router'
import SingleCourse from '../components/Singlecourse'

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