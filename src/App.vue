<template>
  <!-- <div class="left">
    <img alt="Vue logo" src="../src/assets/logo.png" style=" width: 35px; height:35px;">
    <h3><pre>Elias Moura</pre></h3>
  </div> -->
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>


// <script>
// import { mapActions } from 'vuex';

// export default {
//   methods: {
//     ...mapActions(['readToken', 'closeSession'])
//   },
//   created(){
//     this.readToken()
//   }
// };
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
.left{
  float: left;
  display: flex;
  justify-content: center;
}
.left h3{
  margin: 5px 5px 5px 10px ;
}
</style>
