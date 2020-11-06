<template>
  <div id="overview">
    <luma-header></luma-header>
    <div class="container" v-if="temtemName == String">
      <div class="desc">Select the Temtem you want to hunt</div>
      <div class="square" :key="key" v-for="key in this.results.name">
        <new-temtem-list
          @selectedTemtem="temtemName = $event"
          @selectedTemtemValue="temtemValue = $event"
          @getBackendID="backendID = $event"
          :count="amount++"
          :name="results.name"
          :image="results.image"
          :value="results.counter"
        ></new-temtem-list>
      </div>
    </div>
    <tracker
      class="tracker"
      v-if="temtemName !== String"
      :temtemValue="temtemValue"
      :temtemName="temtemName"
      :backendID="backendID"
    ></tracker>
    <div v-if="temtemName !== String">Currently Hunting: {{ temtemName }}</div>
    <luma-footer></luma-footer>
  </div>
</template>

<script>
import lumaHeader from "./../components/lumaHeader.vue";
import lumaFooter from "./../components/lumaFooter.vue";
import newTemtemList from "./../components/newTemtemList.vue";
import tracker from "./../components/tracker.vue";
import axios from "axios";

export default {
  components: {
    lumaHeader,
    lumaFooter,
    newTemtemList,
    tracker
  },

  data() {
    return {
      results: {
        name: [],
        counter: [],
        image: []
      },
      amount: 0,
      temtemName: String,
      temtemValue: Number,
      backendID: Number,
      props: {
        count: Number,
        name: String,
        image: String,
        value: Number,
        temtemValue: Number,
        backendID: Number
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
        this.results.counter = [];
        data.results.forEach(item => {
          this.results.name.push(item.species.name);
          this.results.image.push(item.species.image_small);
          this.results.counter.push(item.value);
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
#overview {
  margin: 0px;
  text-align: center;
  background-color: #42516b;
}

.container {
  width: 100%;
  height: auto;
  padding: 5px;
  padding-bottom: 20px;
}

.square {
  display: inline-block;
}

.desc {
  color: lightcyan;
}
</style>
