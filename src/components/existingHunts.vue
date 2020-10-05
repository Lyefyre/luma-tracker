<template>
  <div id="existingHunts">
    <div v-if="temtemName == String">
      Select the Temtem, who's hunt you want to resume
    </div>
    <div class="container" v-if="temtemName == String">
      <div class="square" :key="key" v-for="key in this.results.name">
        <huntedTemtem
          @selectedTemtem="temtemName = $event"
          @selectedTemtemValue="temtemValue = $event"
          @getBackendID="backendID = $event"
          :count="amount++"
          :name="results.name"
          :image="results.image"
          :value="results.counter"
        ></huntedTemtem>
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
  </div>
</template>

<script>
import axios from "axios";
import huntedTemtem from "./../components/huntedTemtem.vue";
import tracker from "./../components/tracker.vue";
export default {
  components: {
    huntedTemtem,
    tracker
  },
  data() {
    return {
      results: {
        name: [],
        counter: [],
        image: []
      },

      temtemName: String,
      temtemValue: Number,
      backendID: Number,
      amount: 0,
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
#existingHunts {
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
  display: inline-block;
}

.tracker {
  display: inline-block;
}
</style>
