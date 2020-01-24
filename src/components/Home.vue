<template>
  <div class="global">
    <Header></Header>
    <router-view class="router-view"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.global {
  background-color: $dark;
}
.router-view {
  height: 970px;
}
@media screen and (max-width: 1200px) {
  .router-view {
    height: 870px;
  }
}
</style>
