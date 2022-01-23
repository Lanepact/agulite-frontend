<template>
   <h1>{{ title }}</h1>
   <button class="btn btn-danger">Check</button>
   <!-- <input type="text" ref="name">
   <button @click="handleClick">click me </button> -->
  
</template>

<script>


export default {
  name: 'App',
  components:{
  
  },
  data(){
    return{
      title: 'My first vue application'
    }
  },
  methods:{
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    }
  }
}
</script>











<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  display:inline-block;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
