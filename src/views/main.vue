<template>
  <div id="main">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
    />
    <luma-header></luma-header>
    <div class="buttons">
      <b-button class="button is-dark" slot="trigger" @click="loadHunt()">
        Resume existing hunt
      </b-button>
      <b-button class="is-info" @click="routing()">Start a new hunt</b-button>
    </div>
    <existingHunt v-if="hunt == true"></existingHunt>
    <luma-footer></luma-footer>
  </div>
</template>

<script>
import lumaHeader from "../components/lumaHeader.vue";
import lumaFooter from "../components/lumaFooter.vue";
import existingHunt from "../components/existingHunts.vue";
export default {
  components: {
    lumaHeader,
    lumaFooter,
    existingHunt
  },
  data() {
    return {
      hunt: false
    };
  },
  methods: {
    loadHunt() {
      this.hunt = true;
    },
    routing() {
      this.$router.push("Overview");
    }
  }
};
</script>

<style scoped>
#main {
  text-align: center;
  margin: 0px;
}

.buttons {
  margin: 20px;
  display: inline-block;
}
</style>
