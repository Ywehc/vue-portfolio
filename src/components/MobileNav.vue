<template>
  <div class="mobile-nav">
          <button class="btn btn-outline-light">about</button>
          <button class="btn btn-outline-light">skills</button>
          <button class="btn btn-outline-light">portfolio</button>
          <button class="btn btn-outline-light">contact</button>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.mobile-nav {
    color: white;
    background: black;
    padding: 40px;
    display: flex;
    flex-direction: column;
    .btn {
        padding: 10px;
        font-size: 160%;
        margin: 20px auto;
        min-width: 220px;
    }
}

</style>