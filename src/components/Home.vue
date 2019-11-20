<template>
  <div>
    <Header>Test</Header>
    <Main></Main>
    <Footer>Test</Footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Main from './Main.vue'
import Footer from './Footer.vue'

export default {
  components: {
    Header,
    Footer,
    Main
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>