<template>
    <div class="mobile-dashboard-section">
        <div class="mobile-nav d-flex d-lg-none">
              <div class="logo">
                <img src="@/assets/agulogo.png" alt="agulog"/>
             </div>
             <div id="menuBtn" @click="openSideBar">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="#F5800C">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
        <div ref="sidebar" class="mobile-dashboard d-block d-lg-none" id="mobile-dashboard">
             <a href="/user/dashboard" class="db-item">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z" fill="white"/>
                            </svg>
                            <span>Dashboard</span>
                        </a>
                         <a href="/user/courses" class="db-item">
                            <svg width="18" height="18" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.66683 6.99998H0.333496V30.3333C0.333496 32.1666 1.8335 33.6666 3.66683 33.6666H27.0002V30.3333H3.66683V6.99998ZM30.3335 0.333313H10.3335C8.50016 0.333313 7.00016 1.83331 7.00016 3.66665V23.6666C7.00016 25.5 8.50016 27 10.3335 27H30.3335C32.1668 27 33.6668 25.5 33.6668 23.6666V3.66665C33.6668 1.83331 32.1668 0.333313 30.3335 0.333313ZM28.6668 15.3333H12.0002V12H28.6668V15.3333ZM22.0002 22H12.0002V18.6666H22.0002V22ZM28.6668 8.66665H12.0002V5.33331H28.6668V8.66665Z" fill="white"/>
                            </svg>
                            <span>My Courses</span>
                        </a>
                         <a href="/user/connection" class="db-item">
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
                         <a href="/signout" class="db-item logout">
                              <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 20C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H15C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1V4H14V2H2V18H14V16H16V19C16 19.2652 15.8946 19.5196 15.7071 19.7071C15.5196 19.8946 15.2652 20 15 20H1ZM14 14V11H7V9H14V6L19 10L14 14Z" fill="white"/>
                                </svg>
                            <span>Logout</span>
                 </a>
        </div>
    </div>
   
</template>
<script>
import { onMounted, ref } from 'vue'
export default {
    name:'Sidebar',
    setup(){
        const user = ref('Esther')
         const sidebar = ref(null)

     const openSideBar = () => {
        //   sidebar.value.classList.add('bgred')

        console.log(sidebar.value.style)

        if(sidebar.value.style.left == "-250px"){
            sidebar.value.style.left ="0px";
        }else{
            sidebar.value.style.left ="-250px";
        }
     }

     onMounted(() => {
         sidebar.value.classList.add('mobile-dashboard')
        // sidebar.value.style.position = "fixed"
        // sidebar.value.style.left = "-250px"
        // sidebar.value.style.width = "250px"
        // sidebar.value.style.height = "100vh"
        // sidebar.value.style.left = "-250px"
        // sidebar.value.style.zIndex = "2"
        // sidebar.value.style.transition = "1.5s"
        // sidebar.value.style.backgroundColor = "red"


     })
      
      return{
          sidebar,
          openSideBar
      }
    }

}
</script>
