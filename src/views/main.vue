<template>
  <div id="main">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
    />
    <luma-header></luma-header>
    <div class="title">Luma-Tracker</div>
    <div>
      Welcome! This is the Luma Tracking App, made by Valentin Schär! Below, you
      can either start a new hunt or resume an already existing hunt.
    </div>
    <div>
      If you have any questions, please contact the creator of this website.
    </div>
    <div class="row">
      <div class="imgcontainer left">
        <img src="./../assets/LumaSkunch.png" style="width: 100%" />
      </div>
      <div class="imgcontainer">
        <img style="width: 100%" />
      </div>
      <div class="imgcontainer">
        <img style="width: 100%" />
      </div>
      <div class="imgcontainer right">
        <img src="./../assets/LumaZizare.webp" style="width: 100%" />
      </div>
    </div>
    <div class="buttons">
      <b-button
        class="button is-dark is-large"
        slot="trigger"
        @click="loadHunt()"
      >
        Resume existing hunt
      </b-button>
      <b-button class="is-info is-large" @click="routing()"
        >Start a new hunt</b-button
      >
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
  background: lightgray;
}

.title {
  font-size: 4em;
}

.buttons {
  margin: 20px;
  display: inline-block;
}

.right {
  height: 50%;
  float: right;
  width: 50%;
}

.left {
  height: 50%;
  display: inline-block;
  transform: scaleX(-1);
  width: 50%;
}

.imgcontainer {
  width: 25%;
  height: fit-content;
  float: left;
  margin: 0;
  padding: 5px;
}
</style>
