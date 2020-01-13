<template>
  <div class="outer-container">
    <div class="container">
      <Panels />
      <h1 class="main-heading">chris kieran</h1>
      <h2 class="sub-heading">full-stack web developer</h2>
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

@media screen and (max-width: 1200px) {
  .main-heading {
    font-size: 600%;
  }
  .sub-heading {
    font-size: 200%;
  }
}

@media screen and (max-width: 998px) {
  .outer-container {
    padding-bottom: 20px;
  }
  .main-heading {
    margin-top: -500px;
    font-size: 500%;
  }
  .sub-heading {
    margin-top: -280px;
  }
}

@media screen and (max-width: 768px) {
  .main-heading {
    font-size: 400%;
  }
  .sub-heading {
    font-size: 200%;
    margin-top: -320px;
  }
}

</style>