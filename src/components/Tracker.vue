<template>
  <div id="tracker">
    <b-button class="is-danger" @click="decrement2">-2</b-button>
    <b-button class="is-danger" @click="decrement1" id="padding-red">-1</b-button>
    <b-button class="is-success" @click="increment1" id="padding-green">+1</b-button>
    <b-button class="is-success" @click="increment2">+2</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0
    };
  },
  methods: {
    increment1() {
      this.number += 1;
      this.emit();
    },
    increment2() {
      this.number += 2;
      this.emit();
    },
    decrement1() {
      this.number -= 1;
      this.emit();
    },
    decrement2() {
      this.number -= 2;
      this.emit();
    },
    emit() {
      this.$emit("numberChanged", this.number);
    }
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
</style>