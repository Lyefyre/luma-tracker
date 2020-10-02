<template>
  <div id="tracker">
    <div>
      <b-button class="is-danger button" size="is-large" @click="decrement2()"
        >-2</b-button
      >
      <b-button
        class="is-danger button"
        size="is-large"
        @click="decrement1()"
        id="padding-red"
        >-1</b-button
      >

      <p>{{ value }}</p>

      <b-button
        class="is-success button"
        size="is-large"
        @click="increment1()"
        id="padding-green"
        >+1</b-button
      >
      <b-button class="is-success button" size="is-large" @click="increment2()"
        >+2</b-button
      >
    </div>
    <b-button class="is-dark button" size="is-large" @click="reset()"
      >Reset Counter</b-button
    >
  </div>
</template>

<script>
export default {
  props: ["temtemValue"],
  methods: {
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
  },

  data() {
    return {
      value: 0
    };
  },
  created() {
    this.value = this.temtemValue;
  }
};
</script>

<style scoped>
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
