<template>
  <div id="app">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
    <luma-header></luma-header>
    <div>{{ number }}</div>
    <tracker></tracker>
    <luma-footer></luma-footer>
  </div>
</template>

<script>
import lumaHeader from "./components/lumaHeader.vue";
import lumaFooter from "./components/lumaFooter.vue";
import Tracker from "./components/Tracker.vue";

export default {
  name: "App",
  components: {
    lumaHeader,
    lumaFooter,
    Tracker
  },
  data() {
    return {
      number: 0 
    }
  }
};
</script>

<style scoped>
#app {
  text-align: center;
  margin: 0px;
}
</style>
