<template>
<div class="navbar-section" v-show="!authentication">
    <div class="logo">LOGO</div>
     <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
       <router-link to="/service">Our Services</router-link>
        <router-link to="/contact">Contact Us</router-link>
    </div>
     <div class="action-but">
       <button @click="goToSignin">SignIn</button>
       <button @click="goToSignUp">SignUp</button>
    </div>
  </div>

     
</template>
<script>
export default {
    data(){
        return{
            authentication: false
        }
    },
    methods:{
        goToSignin(){
            this.$router.push('/signin')
            this.authentication = true
           
        },
        goToSignUp(){
            this.$router.push('/signup')
            this.authentication = true
        }
            
        
    }
   
}
</script>