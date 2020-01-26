<template>
  <div class="mobile-container">
    <h1 class="main-heading">chris kieran</h1>
    <h2 class="sub-heading">full-stack web developer</h2>
    <mobile-panels></mobile-panels>
  </div>
</template>

<script>
import MobilePanels from './MobilePanels.vue'

export default {
  components: {
    MobilePanels,
  }
}
</script>

<style lang="scss" scoped>
.mobile-container {
    background: $dark;
    padding-top: 70px;
    display: flex;
    flex-direction: column;
}
.main-heading {
  font-size: 230%;
}
.sub-heading {
  font-size: 125%;
}
.main-heading, .sub-heading {
  font-family: 'Heebo', sans-serif;
  color: $light;
  // margin-left: 80px;
  margin: auto;
}

</style>