<template>
  <div class="mobile-container">
    <mobile-panels></mobile-panels>
    <h1 class="main-heading">chris kieran</h1>
    <h2 class="sub-heading">full-stack web developer</h2>
    <mobile-nav></mobile-nav>
  </div>
</template>

<script>
import MobilePanels from './MobilePanels.vue'
import MobileNav from './MobileNav.vue'

export default {
  components: {
    MobilePanels,
    MobileNav
  }
}
</script>

<style lang="scss" scoped>
.mobile-container {
    background: black;
    text-align: center;
}
.main-heading {
  font-family: 'Heebo', sans-serif;
  color: white;
  font-size: 400%;
  margin-top: 40px;
}
.sub-heading {
  font-family: 'Heebo', sans-serif;
  color: white;
}

</style>