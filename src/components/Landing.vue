<template>
  <div class="outer-container">
    <div class="header-container">
        <header>
            <h1>chris kieran</h1>        
        </header>
    </div> 
    <h2>web development</h2> 
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  * {
    text-align: center;
  }
  h1 {
    font-family: 'Libre Barcode 128 Text', cursive;
    font-size: 52px;
    font-weight: lighter;
    color: $dark;
    padding-top: 30px;
  }
  h1:hover{
      color: $main-highlight-color;
      cursor: pointer;
  }
  h2 {
      color: $main-highlight-color;
      margin-top: 5em;
      font-family: 'Quicksand', sans-serif; 
      font-size: 20px;
      font-weight: lighter;
  }
  .header-container {
    position: relative;
    height: 200px;
}

header::before, header::after, header {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

header {
  width: 296px;
  height: 120px;
  margin: 10em auto;
  background: $light;
  color: $main-highlight-color;
  box-shadow: inset 0 0 0 1px $main-highlight-color;
}
header::before, header::after {
  content: "";
  z-index: -1;
  margin: -5%;
  box-shadow: inset 0 0 0 2px;
  animation: clipMe 8s linear infinite;
}
header::before {
  animation-delay: -4s;
}
header:hover::after, header:hover::before {
  background-color: $main-highlight-color;
}

@keyframes clipMe {
  0%, 100% {
    clip: rect(0px, 220px, 2px, 0px);
  }
  25% {
    clip: rect(0px, 2px, 220px, 0px);
  }
  50% {
    clip: rect(218px, 220px, 220px, 0px);
  }
  75% {
    clip: rect(0px, 220px, 220px, 218px);
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>