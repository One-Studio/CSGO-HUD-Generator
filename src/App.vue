<template>
  <div id="app">
    <DeathNotice/>
<!--    <NavBar />-->
  </div>
</template>

<script>
// import NavBar from './components/navBar.vue'
import DeathNotice from './components/DeathNotice.vue'

export default {
  name: 'app',
  components: {
    // NavBar: NavBar
    DeathNotice: DeathNotice
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
