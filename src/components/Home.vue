<template>
  <div>
    <Header></Header>
    <Main v-if="windowWidth > 576"></Main>
    <mobile-main else></mobile-main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Main from './Main.vue'
import Footer from './Footer.vue'
import MobileMain from './MobileMain.vue'

export default {
  components: {
    Header,
    Footer,
    Main,
    MobileMain
  },
  data() {
    return {
      windowWidth: screen.width
    }
  }
}
</script>
