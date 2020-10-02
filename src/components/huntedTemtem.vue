<template>
  <div v-if="this.huntValue > 0">
    <div id="square">
      <img v-bind:src="image[count]" />
      <b-button class="is-dark space" @click="resumeHunt()">{{
        name[count]
      }}</b-button>
      <div>{{ "Counter: " + value[count] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["count", "name", "image", "value"],

  data() {
    return {
      huntName: String,
      huntValue: Number
    };
  },

  methods: {
    resumeHunt() {
      console.log("Resuming hunt of: " + this.huntName);
      this.$emit("selectedTemtem", this.huntName);
      this.$emit("selectedTemtemValue", this.huntValue);
    }
  },
  created() {
    this.huntName = this.name[this.count];
    this.huntValue = this.value[this.count];
  }
};
</script>

<style scoped>
.space {
  width: 90px;
  height: 30px;
  margin: 5px;
}

#square {
  border: solid;
  width: 130px;
  height: 130px;
  padding: 5px;
  margin: 15px;
  display: inline-block;
}
</style>
