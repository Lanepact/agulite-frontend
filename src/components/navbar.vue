<template>
<div class="navbar-section d-none d-lg-flex" v-show="!authentication">
    <div class="logo">
        <img src="@/assets/agulogo.png" class="img-fluid"/>
    </div>
     <div class="action-links">
       <a href="/blockchain-development">Developer</a>
       <a :href="whitepaperlink" target="_blank">White Paper</a>
       <a :href="expertlink" target="_blank">Expert</a>
       <a href="#" @click="goToSocials">Community</a>
    </div>
  </div>
  <div class="mobile-navbar-section d-flex d-lg-none">
       <div class="logo">
        <img src="@/assets/agulogo.png" class="img-fluid"/>
      </div>
       <div id="menuBtn" @click="openNavbar">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="#F5800C">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
       </div>
        <div ref="navBarMobile" class="mobile-navbar d-block d-lg-none" id="mobile-navbar">
             <a href="/blockchain-development">Developer</a>
            <a :href="whitepaperlink" target="_blank">White Paper</a>
            <a :href="expertlink" target="_blank">Expert</a>
            <a href="#" @click="goToSocials">Community</a>
        </div>

  </div>

     
</template>
<script>
import { onMounted, ref } from 'vue'
export default {
    name:'navBarMobile',
    props:['goToCommunity'],
    setup(props){
        const authentication = ref(false)
         const navBarMobile = ref(null)
         const whitepaperlink = ref("https://agulite.gitbook.io/agulite")
         const expertlink = ref("https://expert.agulite.com")
        
        const goToSocials = () => {
            props.goToCommunity()
        }
     const openNavbar = () => {
        //   sidebar.value.classList.add('bgred')

        console.log(navBarMobile.value.style)

        if(navBarMobile.value.style.left == "-250px"){
            navBarMobile.value.style.left ="0px";
        }else{
            navBarMobile.value.style.left ="-250px";
        }
     }

     onMounted(() => {
         navBarMobile.value.classList.add('mobile-navbar')
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
          navBarMobile,
          openNavbar,
          whitepaperlink,
          expertlink,
          goToSocials
      }
    }

}
</script>

