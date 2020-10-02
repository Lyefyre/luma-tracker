<template>
  <div id="counter">
    <luma-header></luma-header>
    <div class="corner">
      <b-button class="is-dark">Meine Meinung</b-button>
    </div>
    <luma-footer></luma-footer>
  </div>
</template>

<script>
import lumaHeader from "./../components/lumaHeader.vue";
import lumaFooter from "./../components/lumaFooter.vue";
export default {
  components: {
    lumaHeader,
    lumaFooter
  }
};
</script>

<style scoped>
#counter {
  margin: 0px;
  text-align: center;
}

.corner {
  margin: 10px;
  width: 50%;
  display: inline-block;
}

.message {
  margin: 20px;
  width: 70%;
  height: 100%;
  display: inline-block;
}
</style>
