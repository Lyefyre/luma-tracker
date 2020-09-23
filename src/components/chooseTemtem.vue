<template>
  <div id="select">
    <b-dropdown aria-role="list">
      <button class="button is-dark" slot="trigger" @click="loadAsyncData()">
        <span>Resume existing hunt</span>
      </button>

      <b-dropdown-item
        aria-role="listitem"
        v-bind:key="object"
        v-for="object in data.results"
      >{{ object }}</b-dropdown-item>
    </b-dropdown>
    <b-button class="is-info">Start a new hunt</b-button>
    <div id="number">
      <p id="nick" :key="value" v-for="value in data.numbers">{{ value }}</p>
    </div>
    <div id="tracker">
      <div>
        <b-button class="is-danger button" size="is-large" @click="decrement2()">-2</b-button>
        <b-button class="is-danger button" size="is-large" @click="decrement1()" id="padding-red">-1</b-button>
        <b-button
          class="is-success button"
          size="is-large"
          @click="increment1()"
          id="padding-green"
        >+1</b-button>
        <b-button class="is-success button" size="is-large" @click="increment2()">+2</b-button>
      </div>
      <b-button class="is-dark button" size="is-large" @click="reset()">Reset Counter</b-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: {
        results: [],
        numbers: []
      },
      total: 0,
      value: 0
    };
  },
  methods: {
    loadAsyncData() {
      let host = `http://localhost:8000/counter/`;
      axios
        .get(`${host}`)
        .then(({ data }) => {
          this.total = data.count;
          console.log(this.total);
          this.data.results = [];
          data.results.forEach(item => {
            this.data.results.push(item.species);
            this.data.numbers.push(item.value)
          });
        })
        .catch(error => {
          this.data.results = "Error!";
          throw error;
        });
    },
    increment1() {
      this.value += 1;
    },
    increment2() {
      this.value += 2;
    },
    decrement1() {
      this.value -= 1;
    },
    decrement2() {
      this.value -= 2;
    },
    reset() {
      this.value = 0;
    }
  }
};
</script>

<style scoped>
#number {
  width: fit-content;
  height: fit-content;
  display: inline-block;
}

#nick {
  font-size: 102px;
}

#tracker {
  text-align: center;
  margin: auto;
}

#padding-red {
  margin-right: 15px;
  margin-left: 5px;
}

#padding-green {
  margin-left: 15px;
  margin-right: 5px;
}

.button {
  height: auto;
  width: auto;
}
</style>
