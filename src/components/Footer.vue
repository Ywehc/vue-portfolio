<template>
  <div class="footer">
    <ul class="nav-list">
      <router-link tag="li" to="/home">home</router-link>
      <router-link tag="li" to="/about">about</router-link>
      <router-link tag="li" to="/skills">skills</router-link>
      <router-link tag="li" to="/portfolio">portfolio</router-link>
      <router-link tag="li" to="/contact">contact</router-link>
    </ul>
    <div class="icon-container">
      <a href="https://github.com/ywehc" target="_blank"><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/chris-kieran/" target="_blank"><i class="fab fa-linkedin"></i></a>
      <router-link tag="i" to="/contact" class="fas fa-envelope"></router-link>
    </div>
    <p>&#x24B8; 2020 Chris Kieran</p>
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
  min-height: 550px;
}
li:hover {
  color: $darker;
  cursor: pointer;
}
.icon-container {
  color: $darker;
  margin-top: 100px;
  font-size: 200%;
  .fab, .fas {
    margin: 8px;
  }
}
.icon-container a {
  color: $darker;
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
            margin: 50px 30px;
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
  .footer {
    min-height: 110px;
  }
  .nav-list {
    display: none;
  }
  .icon-container {
    font-size: 160%;
    display: block;
    margin: 20px auto;
  }
  p {
    color: $darker;
  }
}
</style>