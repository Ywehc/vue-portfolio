<template>
  <div class="mobile-nav">
    <router-link 
      tag="button" 
      class="btn btn-outline-light"
      to="/about">about</router-link>
    <router-link 
      tag="button" 
      class="btn btn-outline-light"
      to="/skills">skills</router-link>
    <router-link 
      tag="button" 
      class="btn btn-outline-light"
      to="skills">portfolio</router-link>
    <router-link 
      tag="button" 
      class="btn btn-outline-light"
      to="/skills">contact</router-link>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.mobile-nav {
    color: $light;
    background: $dark;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    .btn {
        padding: 10px;
        font-size: 120%;
        margin: 5px;
        min-width: 120px;
    }
}

</style>