<template>
  <div id="app">
    <router-view/>
    <!-- <bot></bot>
    <hed></hed> -->
  </div>
</template>

<script>
import bot from '@/components/common/bottom'
import hed from '@/components/common/header'
export default {
  name: "App",
  components: {
    bot,
    hed
  }
};
</script>

<style>
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  width: 100%;
}
body{
  margin: 0;
  float: left;
  width: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  float: left;
  width: 100%;
}
p{
  margin: 0;
}
</style>
