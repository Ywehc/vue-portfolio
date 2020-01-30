<template>
    <div class="container">
      <Panels />
      <h1 class="main-heading">chris kieran</h1>
      <h2 class="sub-heading">frontend web developer</h2>
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
  font-size: 600%;
  position: absolute;
  margin-top: -470px;
}
.sub-heading {
  margin-top: -360px;
  font-size: 180%;
}
.main-heading, .sub-heading {
  font-family: 'Heebo', sans-serif;
  color: $light;
  margin-left: 140px;
}

@media screen and (max-width: 1200px) {
  .main-heading {
    font-size: 400%;
    margin-top: -450px;
  }
  .sub-heading {
    font-size: 200%;
    margin-top: -380px;
  }
}

@media screen and (max-width: 998px) {
  .main-heading {
    margin-top: -450px;
  }
  .sub-heading {
    margin-top: -380px;
  }
  .main-heading, .sub-heading {
    margin-left: 50px;
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