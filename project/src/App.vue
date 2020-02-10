<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import home from "@/components/home";
import mainBusiness from "@/components/mainBusiness"
export default { 
  name: "App",
  components: {

  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  list-style: none;
  padding: 0.1px;
}
</style>
