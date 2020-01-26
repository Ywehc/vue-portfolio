<template>
  <div class="footer">
    <!-- <ul class="nav-list">
      <router-link tag="li" to="/about">about</router-link>
      <router-link tag="li" to="/skills">skills</router-link>
      <router-link tag="li" to="/portfolio">portfolio</router-link>
      <router-link tag="li" to="/contact">contact</router-link>
    </ul> -->
    <div class="icon-container">
      <i class="fab fa-github"></i>
      <i class="fab fa-linkedin"></i>
      <i class="fas fa-envelope"></i>
    </div>
    <p>&#x24B8; 2019 Chris Kieran</p>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.footer {
  background-color: $dark;
  color: $main-text-color;
  text-align: center;
  font-weight: bold;
}
li:hover {
  color: $darker;
  cursor: pointer;
}
.icon-container {
  display: none;
}
.nav-list {
        list-style-type: none;
        padding-left: 0;
        color: $light;
        font-size: 150%;
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: center;
        li {
            margin: 100px 50px;
        }
    }

@media screen and (max-width: 768px) {
  .nav-list {
      li {
          margin: 160px 25px;
      }
  }
}

@media screen and (max-width: 576px) {
  .nav-list {
      li {
          margin: 5px;
          border: 2px solid $light;
          border-radius: 5px;
          padding: 5px;
      }
      margin-top: 20px;
      font-size: 180%;
      font-family: 'Libre Barcode 128 Text', cursive;
      font-weight: lighter;
      color: $light;
      text-align: center;
  }
  .icon-container {
    font-size: 160%;
    display: block;
    margin: 20px auto;
  }
  .fab, .fas {
    margin: 8px;
  }
  p {
    color: $darker;
    padding-bottom: 20px;
  }
}
</style>