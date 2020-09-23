<template>
  <div id=select>
      
        <b-dropdown aria-role="list">
            <button class="button is-primary" slot="trigger" >
                <span>Select Temtem</span>
            </button>

            <b-dropdown-item aria-role="listitem" @click="get_info()">{{ info }}</b-dropdown-item>
        </b-dropdown>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null
    }
  },
  methods: {
    get_info() {
      const host = "localhost:8000"
      axios
        .get(`${host}/counter/`)
        .then(response => (this.info = response))
    }
  }
}
</script>

<style>

</style>