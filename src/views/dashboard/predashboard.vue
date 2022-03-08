<template>
    <div>
        <sidebar2 />
    </div>
    <div class="dashboard-section">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 d-none d-lg-block">
                    <div class="dashboard-items">
                        <div class="logo">
                            <img src="@/assets/agulogowhite.png" alt="agulog"/>
                        </div>
                        <a href="/" class="db-item">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z" fill="white"/>
                            </svg>
                            <span>Home</span>
                        </a>
                         <a href="/course" class="db-item">
                            <svg width="18" height="18" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.66683 6.99998H0.333496V30.3333C0.333496 32.1666 1.8335 33.6666 3.66683 33.6666H27.0002V30.3333H3.66683V6.99998ZM30.3335 0.333313H10.3335C8.50016 0.333313 7.00016 1.83331 7.00016 3.66665V23.6666C7.00016 25.5 8.50016 27 10.3335 27H30.3335C32.1668 27 33.6668 25.5 33.6668 23.6666V3.66665C33.6668 1.83331 32.1668 0.333313 30.3335 0.333313ZM28.6668 15.3333H12.0002V12H28.6668V15.3333ZM22.0002 22H12.0002V18.6666H22.0002V22ZM28.6668 8.66665H12.0002V5.33331H28.6668V8.66665Z" fill="white"/>
                            </svg>
                            <span>Catalogue</span>
                        </a>
                        <a href="/profile" class="db-item profile">
                               <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 21C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C15.1571 16.8434 16 18.8783 16 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12Z" fill="white"/>
                                </svg>    
                            <span>Profile</span>
                        </a>
                        <a href="/signout" class="db-item logout">
                              <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 20C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H15C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1V4H14V2H2V18H14V16H16V19C16 19.2652 15.8946 19.5196 15.7071 19.7071C15.5196 19.8946 15.2652 20 15 20H1ZM14 14V11H7V9H14V6L19 10L14 14Z" fill="white"/>
                                </svg>
                            <span>Logout</span>
                        </a>
                    </div> 
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-9">
                    <div class="mobile-nav-info d-block d-lg-none">
                        <div class="nav-info">
                            <div class="username">Welcome {{user}},</div>
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
                    <div class="welc">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="content">
                                    <div class="con-up">
                                        <h2 class="welc-tit">Welcome!</h2>
                                        <p class="welc-para">Countdown to start of cohort</p>
                                    </div>
                                    <div class="block-1">
                                        <h2>Introduction to Blockchain</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eveniet ipsum sed, dolores saepe quidem earum iste tempore autem dolor!</p>
                                    </div>
                                      <div class="block-1">
                                        <h2>Introduction to Blockchain</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eveniet ipsum sed, dolores saepe quidem earum iste tempore autem dolor!</p>
                                    </div>
                                      <div class="block-1">
                                        <h2>Introduction to Blockchain</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eveniet ipsum sed, dolores saepe quidem earum iste tempore autem dolor!</p>
                                    </div>
                                      <div class="block-1">
                                        <h2>Introduction to Blockchain</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eveniet ipsum sed, dolores saepe quidem earum iste tempore autem dolor!</p>
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
import Sidebar2 from '../../components/sidebar2.vue'
export default {
    name:'Dashboard',
    components:{
        Sidebar2
    },
    setup(){
       const user = ref('Esther')
    }
}
</script>
