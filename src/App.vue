<template>
  <div class="main">
    <app-header></app-header>

    <router-view></router-view>

    <aap-footer></aap-footer>
  </div>
</template>


<script>


import Header from "./components/Header";
import Footer from "./components/Footer";


export default {
  name: 'App',

  components: {
    appHeader: Header,
    aapFooter: Footer,

  },

  created() {
    this.$router.push({name: "home"});
  },
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    width: 100%;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 10px;
  min-height: 100vh;
}
</style>
