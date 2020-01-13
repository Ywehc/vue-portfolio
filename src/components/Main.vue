<template>
  <div>
    <desktop-main v-if="windowWidth > 576"></desktop-main>
    <mobile-main v-else></mobile-main>
  </div>  
</template>

<script>
import DesktopMain from './DesktopMain.vue'
import MobileMain from './MobileMain.vue'

export default {
  components: {
    DesktopMain,
    MobileMain
  },
  data() {
    return {
      windowWidth: screen.width
    }
  }
}
</script>

