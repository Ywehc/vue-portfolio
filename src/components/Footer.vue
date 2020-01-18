<template>
  <div class="footer">
    <ul class="nav-list">
      <router-link tag="li" to="/about">about</router-link>
      <router-link tag="li" to="/skills">skills</router-link>
      <router-link tag="li" to="/portfolio">portfolio</router-link>
      <router-link tag="li" to="/contact">contact</router-link>
    </ul>
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
            margin: 250px 50px;
        }
    }

    @media screen and (max-width: 768px) {
        .nav-list {
            li {
                margin: 200px 25px;
            }
        }
    }
</style>