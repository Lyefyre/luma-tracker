<template>
  <div id="overview">
    <luma-header></luma-header>
    <div class="container">
      <div class="square" :key="key" v-for="key in this.species.name">
        <img
          id="Oree"
          src="https://static.wikia.nocookie.net/temtem_gamepedia_en/images/9/99/Oree.png"
        />
        <b-button class="is-dark space">{{ species.name[count] }}</b-button>
      </div>
      <div @click="increment()">HEY</div>
    </div>
    <luma-footer></luma-footer>
  </div>
</template>

<script>
import lumaHeader from "./../components/lumaHeader.vue";
import lumaFooter from "./../components/lumaFooter.vue";
//import Axios from "axios";

export default {
  components: {
    lumaHeader,
    lumaFooter
  },

  data() {
    return {
      species: {
          name: ["Oree", "Zaobian", "Kaku", "Saku"]
      },
      count: 0
    };
  },

  methods: {
    increment() {
      this.count += 1;
    }
  }
};
</script>

<style scoped>
#id {
  width: 130px;
  height: 130px;
}

#overview {
  margin: 0px;
  text-align: center;
}

.container {
  width: 100%;
  height: auto;
  padding: 5px;
  padding-bottom: 20px;
}

.square {
  border: solid;
  width: 150px;
  height: 150px;
  padding: 5px;
  margin: 15px;
  display: inline-block;
}

.space {
  width: 90px;
  height: 30px;
  margin: 5px;
}
</style>