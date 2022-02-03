<template>
<div class="navbar-section" v-show="!authentication">
    <div class="logo">
        <img src="@/assets/agulogo.png" class="img-fluid"/>
    </div>
     <div class="action-but">
       <button @click="goToSignin">Get Started</button>
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