<template>
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
