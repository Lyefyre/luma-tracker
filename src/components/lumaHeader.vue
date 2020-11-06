<template>
  <div id="bar">
    <b-navbar id="center">
      <template slot="start">
        <b-navbar-item href="main" class="text">
          Main Page
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#bar {
  width: 100%;
  height: 100%;
  display: inline-block;
  margin: auto;
}

#center {
  background-image: linear-gradient(90deg, black, darkgray);
}

.text {
  color: lightgray;
  font-weight: bold;
}

#imageContainer {
  width: 100%;
}

#text {
  width: 100%;
  height: 100%;
  font-size: 32px;
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
}
</style>
