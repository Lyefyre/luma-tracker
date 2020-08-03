<template>
  <div id="tracker">
    <b-button class="is-danger" @click="decrement2">-2</b-button>
    <b-button class="is-danger" @click="decrement1">-1</b-button>
    <b-button class="is-success" @click="increment1">+1</b-button>
    <b-button class="is-success" @click="increment2">+2</b-button>
    {{ number }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      number: 0
    }
  },
  methods: {
    increment1() {
      this.number += 1;
    },
    increment2() {
      this.number += 2; 
    },
    decrement1() {
      this.number -= 1;
    },
    decrement2() {
      this.number -= 2;
    }
  }
}
</script>

<style scoped>
#tracker {
    text-align: center;
    margin: auto;
}
</style>