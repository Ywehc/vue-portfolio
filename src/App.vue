<template>
  <div id="app">
      <Landing 
        v-if="introClicked == false"  
        @click="toggleIntro()"
      ></Landing>
      <Home v-else></Home>

    
  </div>
</template>

<script>
import Landing from './components/Landing.vue'
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Landing,
    Home
  },
  data: function() {
    return {
    introClicked: false
    }
  },
  methods: {
    toggleIntro: function () {
      this.introClicked == !this.introClicked;
    }
  }
}
</script>

<style>
.testClass {
  border: 2px solid green;
}
</style>
