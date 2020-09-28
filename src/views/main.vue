<template>
  <div id="main">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" />
    <luma-header></luma-header>
    <selector></selector>
    <luma-footer></luma-footer>
  </div>
</template>

<script>
import lumaHeader from "../components/lumaHeader.vue";
import lumaFooter from "../components/lumaFooter.vue";
import Selector from "../components/chooseTemtem.vue";

export default {

  components: {
    lumaHeader,
    lumaFooter,
    Selector
  },
  data() {
    return {
      number: 0
    };
  }
};
</script>

<style scoped>
#main {
  text-align: center;
  margin: 0px;
}
</style>
