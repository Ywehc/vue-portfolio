<template>
  <div class="outer-container">
    <div class="container">
      <Panels />
      <h1 class="main-heading">chris kieran</h1>
      <h2 class="sub-heading">full-stack web developer</h2>  
    </div>
    <div class="container">
      <ul>
        <li>about</li>
        <li>skills</li>
        <li>portfolio</li>
        <li>contact</li>
      </ul>
    </div>
  </div>    
</template>

<script>
import Panels from './Panels.vue'

export default {
  components: {
    Panels
  }
}
</script>

<style lang="scss" scoped>
.outer-container {
  background: $dark;
  padding-bottom: 30vh;
}

.main-heading {
  font-family: 'Heebo', sans-serif;
  color: white;
  font-size: 800%;
  position: absolute;
  margin-top: -400px;
}
.sub-heading {
  font-family: 'Heebo', sans-serif;
  color: white;
  margin-top: -180px;
  font-size: 260%;
}

</style>