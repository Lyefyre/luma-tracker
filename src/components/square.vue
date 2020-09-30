<template>
  <div id="square">
    <img v-bind:src="image[count]" />
    <b-button class="is-dark space">{{ name[count] }}</b-button>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  props: ["count", "name", "image"],

  data() {
    return {
      amount: 0,
      results: {
        name: [],
        image: []
      }
    };
  }
};
</script>

<style scoped></style>
