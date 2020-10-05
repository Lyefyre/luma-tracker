<template>
  <div id="tracker">
    <div>
      <div class="decrement">
        <b-button
          class="is-danger button padding-red"
          size="is-large"
          @click="decrement2()"
          >-2</b-button
        >
        <b-button
          class="is-danger button padding-red"
          size="is-large"
          @click="decrement1()"
          id="padding-red"
          >-1</b-button
        >
      </div>

      <p class="zahl">{{ value }}</p>
      <div class="increment">
        <b-button
          class="is-success button padding-green"
          size="is-large"
          @click="increment1()"
          >+1</b-button
        >
        <b-button
          class="is-success button padding-green"
          size="is-large"
          @click="increment2()"
          >+2</b-button
        >
      </div>
    </div>
    <b-button class="is-dark button reset" size="is-large" @click="reset()"
      >Reset Counter</b-button
    >
    <b-button class="is-info button reset" size="is-large" @click="save()"
      >Save Progress</b-button
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["temtemValue", "temtemName", "backendID"],
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
      this.$buefy.dialog.confirm({
        title: "Warning!",
        message:
          "This will reset your counter to 0! This means that unsaved progress will be lost! Are you sure you want to reset your counter?",
        cancelText: "No",
        confirmText: "Yes",
        onConfirm: () => (this.value = 0)
      });
    },
    save() {
      let host = `http://localhost:8000/counter/${this.backendID}/`;
      axios
        .patch(host, {
          value: this.value
        })
        .then(
          this.$buefy.dialog.confirm({
            title: "Save and reload?",
            message:
              "Your progress will be saved and you will be taken back to the Overview. Continue?",
            cancelText: "No",
            confirmText: "Yes",
            onConfirm: () => (
              console.log("Successfully updated with Number " + this.value),
              location.reload()
            )
          })
        )
        .catch(error => {
          this.data.results = "Error!";
          throw error;
        });
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
.increment {
  margin: 10px;
  display: inline-block;
}

.decrement {
  margin: 10px;
  display: inline-block;
}

.padding-red {
  margin: 5px;
}

.padding-green {
  margin: 5px;
}

.button {
  height: auto;
  width: auto;
}

.zahl {
  font-size: 8em;
  font-family: Arial, Helvetica, sans-serif;
  display: inline-block;
}

.reset {
  margin: 5px;
}
</style>
