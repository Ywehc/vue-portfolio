<template>
  <div class="header-container">
    <router-link class="desktop-header" tag="h2" to="/home">chris kieran</router-link>
    <div class="radial-helper"></div>
    <radial-menu
      class="nav-menu"
      :itemSize="80"
      :radius="100"
      :angle-restriction="180">
        <radial-menu-item 
          v-for="(item, index) in items" 
          :key="index" 
          class="nav-item"
          style="background-color: white" 
          @click="() => handleClick(item)">
          <span>{{item}}</span>
        </radial-menu-item>
      </radial-menu>
      <!-- <div style="color: white; margin-top: 16px;">{{ lastClicked }}</div> -->
  </div>
</template>

<script>
import { RadialMenu,  RadialMenuItem } from 'vue-radial-menu'

export default {
  name: 'app',
  components: {
    RadialMenu,
    RadialMenuItem
  },
  data () {
    return {
      items: ['home', 'about', 'portfolio', 'contact'],
      lastClicked: 'click on something!'
    }
  },
  methods: {
    handleClick (item) {
      this.lastClicked = item;
      this.$router.push(item)
    }
  }
}
</script>

<style lang="scss" scoped>
.desktop-header {
  font-size: 62px;
  h2 {
    padding: 50px;
  }
}
.desktop-header{
    font-family: 'Libre Barcode 128 Text', cursive;
    font-weight: lighter;
    color: $light;
    text-align: center;
    margin-bottom: 0;
  }
.desktop-header h2:hover {
  color: $darker;
  cursor: pointer;
}

@media screen and (max-width: 576px) {
  .radial-helper {
    height:10px;
    background: $dark;
  }
  .nav-menu {
    margin: auto; 
    margin-top: 120px; 
    background-color: $light;
    font-family: $main-font;
  }
  .nav-item {
    margin-left: -30px;
    background: $darker!important;
    color: $light;
  }
  .desktop-header {
    padding: 20px;
    font-size: 240%;
    display: none;
  }
}
</style>