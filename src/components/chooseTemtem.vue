<template>
  <div id=select>
      
        <b-dropdown aria-role="list">
            <button class="button is-primary" slot="trigger" @click="loadAsyncData()">
                <span>Select Temtem</span>
            </button>

            <b-dropdown-item aria-role="listitem">{{ this.data.results }}</b-dropdown-item>
        </b-dropdown>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: {
        results: []
      },
      total: 0
    }
  },
  methods: {
    loadAsyncData() {
      let host = `http://localhost:8000/counter/`;
      axios
        .get(`${host}`)
        .then((({ data }) => {
          this.total = data.count;
          console.log(this.total);
          this.data.results = [];
          data.results.forEach(item => {
            this.data.results.push(item);
          });
        }))
        .catch(error => {
          this.data.results = "Error!";
          throw error;
        });
    }
  }
}
</script>

<style>

</style>