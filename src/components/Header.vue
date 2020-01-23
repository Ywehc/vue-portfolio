<template>
  <div class="header">
    <router-link tag="h2" to="/home">chris kieran</router-link>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.header {
  background-color: $dark;
}
.header h2 {
    font-family: 'Libre Barcode 128 Text', cursive;
    font-size: 62px;
    font-weight: lighter;
    color: $light;
    text-align: center;
    padding: 50px;
    margin-bottom: 0;
  }
.header h2:hover {
  color: $darker;
  cursor: pointer;
}
</style>