<template>
  <div id="app">
      <Landing 
        @click.native="toggleIntro()" 
        v-if="introClicked === false"
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
      this.introClicked = true; 
    }
  }
}
</script>

