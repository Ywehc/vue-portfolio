<template>
    <div class="container">
        <home-panel class="yellow fade-in-yellow"></home-panel>    
        <home-panel class="green fade-in-green"></home-panel>  
        <home-panel class="blue fade-in-blue"></home-panel>
        <home-panel class="indigo fade-in-indigo"></home-panel> 
        <home-panel class="violet fade-in-violet"></home-panel>  
        <home-panel class="red fade-in-red"></home-panel>  
        <home-panel class="orange fade-in-orange"></home-panel> 
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
  background: $dark;
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

.fade-in-yellow {
  animation: fadeInYellow ease 7s;
  -webkit-animation: fadeInYellow ease 7s;
  -moz-animation: fadeInYellow ease 7s;
  -o-animation: fadeInYellow ease 7s;
  -ms-animation: fadeInYellow ease 7s;
}
@keyframes fadeInYellow {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-moz-keyframes fadeInYellow {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-webkit-keyframes fadeInYellow {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-o-keyframes fadeInYellow {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-ms-keyframes fadeInYellow {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

.fade-in-green {
  animation: fadeInGreen ease 3s;
  -webkit-animation: fadeInGreen ease 3s;
  -moz-animation: fadeInGreen ease 3s;
  -o-animation: fadeInGreen ease 3s;
  -ms-animation: fadeInGreen ease 3s;
}
@keyframes fadeInGreen {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-moz-keyframes fadeInGreen {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-webkit-keyframes fadeInGreen {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-o-keyframes fadeInGreen {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-ms-keyframes fadeInGreen {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

.fade-in-blue {
  animation: fadeInBlue ease 9s;
  -webkit-animation: fadeInBlue ease 9s;
  -moz-animation: fadeInBlue ease 9s;
  -o-animation: fadeInBlue ease 9s;
  -ms-animation: fadeInBlue ease 9s;
}
@keyframes fadeInBlue {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-moz-keyframes fadeInBlue {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-webkit-keyframes fadeInBlue {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-o-keyframes fadeInBlue {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-ms-keyframes fadeInBlue {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

.fade-in-indigo {
  animation: fadeInIndigo ease 5s;
  -webkit-animation: fadeInIndigo ease 5s;
  -moz-animation: fadeInIndigo ease 5s;
  -o-animation: fadeInIndigo ease 5s;
  -ms-animation: fadeInIndigo ease 5s;
}
@keyframes fadeInIndigo {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-moz-keyframes fadeInIndigo {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-webkit-keyframes fadeInIndigo {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-o-keyframes fadeInIndigo {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-ms-keyframes fadeInIndigo {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

.fade-in-violet {
  animation: fadeInViolet ease 11s;
  -webkit-animation: fadeInViolet ease 11s;
  -moz-animation: fadeInViolet ease 11s;
  -o-animation: fadeInViolet ease 11s;
  -ms-animation: fadeInViolet ease 11s;
}
@keyframes fadeInViolet {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-moz-keyframes fadeInViolet {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-webkit-keyframes fadeInViolet {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-o-keyframes fadeInViolet {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-ms-keyframes fadeInViolet {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

.fade-in-red {
  animation: fadeInRed ease 1s;
  -webkit-animation: fadeInRed ease 1s;
  -moz-animation: fadeInRed ease 1s;
  -o-animation: fadeInRed ease 1s;
  -ms-animation: fadeInRed ease 1s;
}
@keyframes fadeInRed {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-moz-keyframes fadeInRed {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-webkit-keyframes fadeInRed {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-o-keyframes fadeInRed{
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-ms-keyframes fadeInRed {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

.fade-in-orange {
  animation: fadeInOrange ease 13s;
  -webkit-animation: fadeInOrange ease 13s;
  -moz-animation: fadeInOrange ease 13s;
  -o-animation: fadeInOrange ease 13s;
  -ms-animation: fadeInOrange ease 13s;
}
@keyframes fadeInOrange {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-moz-keyframes fadeInOrange {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-webkit-keyframes fadeInOrange {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-o-keyframes fadeInOrange{
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-ms-keyframes fadeInOrange {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@media screen and (max-width: 1200px) {
  .yellow {
    margin-left: 200px;
    margin-top: 140px;
  }
  .green {
    margin-top: 120px;
  }
  .blue {
    margin-top: 100px;
  }
  .indigo {
    margin-top: 110px;
  }
  .violet {
    margin-top: 90px;
  }
  .red {
    margin-top: 120px;
  }
  .orange {
    margin-top: 160px;
  }
}
@media screen and (max-width: 998px) {
  .indigo {
    margin-top: 0;
  }
  .orange {
    margin-top: 40px;
  }
}
@media screen and (max-width: 768px) {
  .yellow {
    margin-left: 0;
  }
  .indigo {
    margin-top: -50px;
  }
  .orange {
    margin-top: 50px;
  }
}
    
</style>