<template>
    <div class="container">
        <home-panel class="yellow"></home-panel>
        <home-panel class="green"></home-panel>  
        <home-panel class="blue"></home-panel>
        <home-panel class="indigo"></home-panel> 
        <home-panel class="violet"></home-panel>  
        <home-panel class="red"></home-panel>  
        <home-panel class="orange"></home-panel> 
    </div>
</template>
<script>
import Panel from './Panel.vue'

export default {
    components: {
        homePanel: Panel
    }
}
</script>

<style lang="scss" scoped>
.container {
  background: black;
  display: flex;
}
.yellow{
  background-image: url("/../img/forest-yellow.jpg");
  background-size: 600%;
  margin-top: 240px;
  height: 450px;
  margin-left: 400px;
}
.green {
  background-image: url("/../img/forest.jpg");
  background-size: 600%;
  margin-top: 220px;
  height: 500px;
}
.blue {
  background-image: url("/../img/blue-forest.jpg");
  background-size: 800%;
  margin-top: 200px;
  height: 550px;
}
.indigo{
  background-image: url("/../img/indigo-forest.jpg");
  background-size: 300%;
  background-position-y: bottom;
  margin-top: 210px;
  height: 400px;
}
.violet {
  background-image: url("/../img/violet-forest.jpg");
  background-size: 1000%;
  margin-top: 190px;
}
.red {
  background-image: url("/../img/red-forest.jpg");
  background-size: 800%;
  background-position-x: 50%;
  height: 400px;
  margin-top: 220px;
}
.orange {
  background-image: url("/../img/orange-forest.jpg");
  background-position-y: bottom;
  background-size: 600%;
  margin-top: 260px;
  height: 300px;
}
    
</style>