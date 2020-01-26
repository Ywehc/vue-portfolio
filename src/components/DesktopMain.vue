<template>
    <div class="container">
      <Panels />
      <h1 class="main-heading">chris kieran</h1>
      <h2 class="sub-heading">full-stack web developer</h2>
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

.main-heading {
  font-family: 'Heebo', sans-serif;
  color: $light;
  font-size: 800%;
  position: absolute;
  margin-top: -400px;
}
.sub-heading {
  font-family: 'Heebo', sans-serif;
  color: $light;
  margin-top: -180px;
  font-size: 260%;
}

@media screen and (max-width: 1200px) {
  .main-heading {
    font-size: 500%;
    padding-left: 50px;
    margin-top: -350px;
  }
  .sub-heading {
    font-size: 200%;
    padding-left: 50px;
  }
}

@media screen and (max-width: 998px) {
  .main-heading {
    margin-top: -420px;
    font-size: 400%;
  }
  .sub-heading {
    margin-top: -280px;
  }
}

@media screen and (max-width: 768px) {
  .main-heading {
    font-size: 400%;
    margin-top: -200px;
    padding-left: 0;
  }
  .sub-heading {
    font-size: 200%;
    margin-top: -120px;
    padding-left: 0;
  }
}

</style>