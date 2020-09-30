<template>
  <div id="center">
    <div id="imageContainer">
      <p id="text">Luma Tracker!</p>
      <img src="../assets/spriole.png" alt="spriole" class="image" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#center {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, green, lightgreen);
}

.image {
  display: inline-block;
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
