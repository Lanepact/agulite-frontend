<template>
  <!-- <div>
    <navbar />
  </div> -->
  <router-view />

  
</template>

<script>
import Navbar from './components/navbar.vue'
export default {
  name: 'App',
  components:{
    Navbar
  
  },
  setup(){

  }
  
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}


.navbar-section{
  padding: 20px 10px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px !important;
  text-decoration: none !important;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.action-but button{
  margin-left: 10px;
}
</style>
