<template>
  <div id="overview">
    <luma-header></luma-header>
    <div class="container">
      <div class="square" :key="key" v-for="key in this.results.name">
        <square
          :count="amount++"
          :name="results.name"
          :image="results.image"
        ></square>
      </div>
    </div>
    <luma-footer></luma-footer>
  </div>
</template>

<script>
import lumaHeader from "./../components/lumaHeader.vue";
import lumaFooter from "./../components/lumaFooter.vue";
import square from "./../components/square.vue";
import axios from "axios";

export default {
  components: {
    lumaHeader,
    lumaFooter,
    square
  },

  data() {
    return {
      results: {
        name: [],
        image: []
      },
      amount: 0,
      props: {
        count: Number,
        name: String,
        image: String
      }
    };
  },
  created() {
    let host = `http://localhost:8000/counter/`;
    axios
      .get(`${host}`)
      .then(({ data }) => {
        this.results.name = [];
        this.results.image = [];
        data.results.forEach(item => {
          this.results.name.push(item.species.name);
          this.results.image.push(item.species.image_small);
        });
      })
      .catch(error => {
        this.data.results = "Error!";
        throw error;
      });
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
