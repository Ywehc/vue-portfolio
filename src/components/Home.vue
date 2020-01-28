<template>
  <div class="global">
    <Header class="header"></Header>
    <router-view class="router-view"></router-view>
    <Footer class="footer"></Footer>
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
  height: 650px;
}

@media screen and (max-width: 576px) {
  .router-view {
    height: auto;
    min-height: 510px;
  }
  .header {
    background: $dark;
  }
}
</style>
