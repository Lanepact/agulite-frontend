<template>
    <div class="mobile-dashboard-section">
        <div class="mobile-nav d-flex d-lg-none">
              <div class="logo">
                <img src="@/assets/agulogo.png" alt="agulog"/>
            </div>
             <div id="menuBtn">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="#F5800C">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
        
        <div class="mobile-dashboard d-block d-lg-none" id="mobile-dashboard">
            <a href="/dashboard" class="db-item">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z" fill="white"/>
                </svg>
                <span>Dashboard</span>
            </a>
            <a href="/courses" class="db-item">
                <svg width="18" height="18" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.66683 6.99998H0.333496V30.3333C0.333496 32.1666 1.8335 33.6666 3.66683 33.6666H27.0002V30.3333H3.66683V6.99998ZM30.3335 0.333313H10.3335C8.50016 0.333313 7.00016 1.83331 7.00016 3.66665V23.6666C7.00016 25.5 8.50016 27 10.3335 27H30.3335C32.1668 27 33.6668 25.5 33.6668 23.6666V3.66665C33.6668 1.83331 32.1668 0.333313 30.3335 0.333313ZM28.6668 15.3333H12.0002V12H28.6668V15.3333ZM22.0002 22H12.0002V18.6666H22.0002V22ZM28.6668 8.66665H12.0002V5.33331H28.6668V8.66665Z" fill="white"/>
                </svg>
                <span>My Courses</span>
            </a>
            <a href="/signin" class="db-item">
                <svg width="18" height="18" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 19.375V20.625C40 21.3156 39.5525 21.875 39 21.875H21.5V25H26C27.1044 25 28 26.1195 28 27.5V37.5C28 38.8805 27.1044 40 26 40H14C12.8956 40 12 38.8805 12 37.5V27.5C12 26.1195 12.8956 25 14 25H18.5V21.875H1C0.4475 21.875 0 21.3156 0 20.625V19.375C0 18.6844 0.4475 18.125 1 18.125H7.5V15H4C2.89562 15 2 13.8805 2 12.5V2.5C2 1.11953 2.89562 0 4 0H14C15.1044 0 16 1.11953 16 2.5V12.5C16 13.8805 15.1044 15 14 15H10.5V18.125H29.5V15H26C24.8956 15 24 13.8805 24 12.5V2.5C24 1.11953 24.8956 0 26 0H36C37.1044 0 38 1.11953 38 2.5V12.5C38 13.8805 37.1044 15 36 15H32.5V18.125H39C39.5525 18.125 40 18.6844 40 19.375ZM16 30V35H24V30H16ZM12 5H6V10H12V5ZM34 5H28V10H34V5Z" fill="white"/>
                </svg>
                <span>Connections</span>
            </a>
            <a href="/profile" class="db-item profile">
                <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 21C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C15.1571 16.8434 16 18.8783 16 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12Z" fill="white"/>
                </svg>    
                <span>Profile</span>
            </a>
            <a href="/signin" class="db-item logout">
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 20C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H15C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1V4H14V2H2V18H14V16H16V19C16 19.2652 15.8946 19.5196 15.7071 19.7071C15.5196 19.8946 15.2652 20 15 20H1ZM14 14V11H7V9H14V6L19 10L14 14Z" fill="white"/>
                </svg>
                <span>Logout</span>
            </a>
        </div>
    </div>
    <div class="dashboard-section">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 d-none d-lg-block">
                    <div class="dashboard-items">
                        <div class="logo">
                            <img src="@/assets/agulogowhite.png" alt="agulog"/>
                        </div>
                        <a href="/dashboard" class="db-item">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z" fill="white"/>
                            </svg>
                            <span>Dashboard</span>
                        </a>
                         <a href="/courses" class="db-item">
                            <svg width="18" height="18" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.66683 6.99998H0.333496V30.3333C0.333496 32.1666 1.8335 33.6666 3.66683 33.6666H27.0002V30.3333H3.66683V6.99998ZM30.3335 0.333313H10.3335C8.50016 0.333313 7.00016 1.83331 7.00016 3.66665V23.6666C7.00016 25.5 8.50016 27 10.3335 27H30.3335C32.1668 27 33.6668 25.5 33.6668 23.6666V3.66665C33.6668 1.83331 32.1668 0.333313 30.3335 0.333313ZM28.6668 15.3333H12.0002V12H28.6668V15.3333ZM22.0002 22H12.0002V18.6666H22.0002V22ZM28.6668 8.66665H12.0002V5.33331H28.6668V8.66665Z" fill="white"/>
                            </svg>
                            <span>My Courses</span>
                        </a>
                         <a href="/signin" class="db-item">
                           <svg width="18" height="18" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M40 19.375V20.625C40 21.3156 39.5525 21.875 39 21.875H21.5V25H26C27.1044 25 28 26.1195 28 27.5V37.5C28 38.8805 27.1044 40 26 40H14C12.8956 40 12 38.8805 12 37.5V27.5C12 26.1195 12.8956 25 14 25H18.5V21.875H1C0.4475 21.875 0 21.3156 0 20.625V19.375C0 18.6844 0.4475 18.125 1 18.125H7.5V15H4C2.89562 15 2 13.8805 2 12.5V2.5C2 1.11953 2.89562 0 4 0H14C15.1044 0 16 1.11953 16 2.5V12.5C16 13.8805 15.1044 15 14 15H10.5V18.125H29.5V15H26C24.8956 15 24 13.8805 24 12.5V2.5C24 1.11953 24.8956 0 26 0H36C37.1044 0 38 1.11953 38 2.5V12.5C38 13.8805 37.1044 15 36 15H32.5V18.125H39C39.5525 18.125 40 18.6844 40 19.375ZM16 30V35H24V30H16ZM12 5H6V10H12V5ZM34 5H28V10H34V5Z" fill="white"/>
                            </svg>
                            <span>Connections</span>
                        </a>
                          <a href="/profile" class="db-item profile">
                               <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 21C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C15.1571 16.8434 16 18.8783 16 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12Z" fill="white"/>
                                </svg>    
                            <span>Profile</span>
                        </a>
                         <a href="/signin" class="db-item logout">
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
                        <div class="username">Profile</div>
                    </div>
                    <div class="d-none d-lg-block">
                        <div class="db-nav">
                             <div class="username">Profile</div>
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
                    <div class="container user-bio mt-4">
                       <div class="row">
                           <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                               <div class="profile-details">
                                   <div class="profile-icon"><img :src="agulite.image" class="img-fluid rounded-circle" alt="profile image"/></div>
                                   <div class="profile-name">{{ agulite.firstName }} {{ agulite.lastName }}</div>
                                   <div class="profile-skill">{{ agulite.interestField }} Apprentice</div>
                                </div>
                                <div class="comp-proj">
                                    <div class="title">Completed  Projects</div>
                                    <div class="all-proj">
                                        <div class="pro">
                                            <div class="pro-box">
                                                <span>All projects will appear here when you begin </span>
                                            </div>
                                            <hr class="hr-line"/>
                                        </div>
                                        <div class="pro-number"> 0 </div>

                                    </div>
                                    <div class="title">Total Earnings</div>
                                    <div class="all-proj2">
                                        <div class="pro">
                                            <div class="pro-box">
                                                 <span>No earnings yet</span>
                                            </div>
                                            <hr class="hr-line"/>
                                        </div>
                                        <div class="pro-number"> $0 </div>

                                    </div>
                                </div>
                           </div>
                             <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                               <div class="bio-details">
                                   <div class="title">Bio</div>
                                   <p class="text">{{ agulite.bio }}</p>
                                   <div class="bio-personal">Personal</div>
                                    <div class="bio-full-1">
                                        <div class="bio-full">
                                            <span class="tit">Join Date</span>
                                            <span class="date">{{ agulite.joinDate }}</span>
                                        </div>
                                        <div class="bio-full">
                                            <span class="tit">Birthday</span>
                                            <span class="date">{{ agulite.dateOfBirth }}</span>
                                        </div>
                                        <div class="bio-full">
                                            <span class="tit">Years of Experience</span>
                                            <span class="date">{{ agulite.yearsOfExperience }}</span>
                                        </div>
                                   </div>
                                    <div class="bio-full-2">
                                        <div class="bio-full">
                                            <span class="tit">Experience Level</span>
                                            <span class="date">{{ agulite.experienceLevel }}</span>
                                        </div>
                                        <div class="bio-full">
                                            <span class="tit">State Of Origin</span>
                                            <span class="date">{{ agulite.stateOfResidence }}</span>
                                        </div>
                                        <div class="bio-full">
                                            <span class="tit">Country Of Origin</span>
                                            <span class="date">{{ agulite.nationality }}</span>
                                        </div>
                                   </div>
                                  
                                    <div class="bio-full-4">
                                        <div class="bio-full">
                                            <span class="tit">Contact</span>
                                            <span class="date">{{ agulite.phoneNumber }}</span>
                                        </div>
                                        <div class="bio-full">
                                            <span class="tit">Email</span>
                                            <span class="date">{{ agulite.email }}</span>
                                        </div>
                                        <div class="bio-full">
                                            <span class="tit">Address</span>
                                            <span class="date">{{ agulite.residenceAddress }}</span>
                                        </div>
                                   </div>
                                   <div class="advanced-set">Advanced Settings</div>
                                </div>
                           </div> 
                        </div>
                    </div>   
                    <div class="container edit-bt">
                        <button class="edit-profile-button" @click="goToUpdateProfile">Edit</button>
                    </div>
                     
                </div>
            </div>
        </div>
</template>
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAgulite } from '../../composables'

export default {
    setup(){
        const router = useRouter()
        const { getAgulite } = useAgulite()

        const agulite = ref(getAgulite())
       
        const goToUpdateProfile = () => {
            router.push('/updateprofile')
        }

        return{
            agulite,
            goToUpdateProfile
        }
    }
}
</script>
<style>



</style>