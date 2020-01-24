<template>
  <div class="mobile-panels">
        <div class="yellow mobile-panel"></div>
        <div class="green mobile-panel"></div>  
        <div class="blue mobile-panel"></div>
        <div class="indigo mobile-panel"></div> 
        <div class="violet mobile-panel"></div>  
        <div class="red mobile-panel"></div>  
        <div class="orange mobile-panel"></div> 
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.mobile-panels {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: $dark;
}
.mobile-panel {
    height: 300px;
    width: 70px;
    background-size: 900%;
    border-radius: 5px;
}
.yellow{
  background-image: url("/../img/forest-yellow.jpg");
  margin: 4px 4px 4px 0px;
}
.green {
  background-image: url("/../img/forest.jpg");
  background-position: top;
  margin: 4px;
}
.blue {
  background-image: url("/../img/blue-forest.jpg");
  margin: 4px;
}
.indigo{
  background-image: url("/../img/indigo-forest.jpg");
  background-position: bottom;
  margin: 4px;
}
.violet {
  background-image: url("/../img/violet-forest.jpg");
  margin: 4px;
}
.red {
  background-image: url("/../img/red-forest.jpg");
  background-position: center;
  margin: 4px;
}
.orange {
  background-image: url("/../img/orange-forest.jpg");
  background-position: center;
  margin:  4px 0px 4px 4px;
}

</style>