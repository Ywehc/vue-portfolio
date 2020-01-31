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
  font-size: 450%;
  position: absolute;
  margin-top: -70px;
}
.sub-heading {
  font-size: 180%;
  margin-top: 10px;
}
.main-heading, .sub-heading {
  font-family: 'Heebo', sans-serif;
  color: $light;
  margin-left: 140px;
}

@media screen and (max-width: 1200px) {
  .main-heading {
    font-size: 400%;
  }
  .sub-heading {
    font-size: 180%;
    margin-top: 0;
  }
}

@media screen and (max-width: 998px) {
  .main-heading, .sub-heading {
    margin-left: 50px;
  }
}

@media screen and (max-width: 768px) {
  .container {
    justify-content: center;
  }
  .main-heading {
    margin: auto;
    position: relative;
    text-align: center;
  }
  .sub-heading {
    margin-top: 0;
    margin-left: 0;
    text-align: center;
  }
}

</style>