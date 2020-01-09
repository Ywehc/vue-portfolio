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
    background: black;
}
.mobile-panel {
    height: 400px;
    width: 70px;
    background-size: 900%;
}
.yellow{
  background-image: url("/../img/forest-yellow.jpg");
  margin-right: 5px;
}
.green {
  background-image: url("/../img/forest.jpg");
  background-position: top;
  margin: 5px;
}
.blue {
  background-image: url("/../img/blue-forest.jpg");
  margin: 5px;
}
.indigo{
  background-image: url("/../img/indigo-forest.jpg");
  background-position: bottom;
  margin: 5px;
}
.violet {
  background-image: url("/../img/violet-forest.jpg");
  margin: 5px;
}
.red {
  background-image: url("/../img/red-forest.jpg");
  background-position: center;
  margin: 5px;
}
.orange {
  background-image: url("/../img/orange-forest.jpg");
  background-position: center;
  margin-left: 5px;
}

</style>