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
  background-image: url("/../img/desktop/yellow-desktop.jpg");
  margin-top: 60px;
  height: 270px;
  margin-left: 280px;
  background-size: contain;
}
.green {
  background-image: url("/../img/desktop/green-desktop.jpg");
  margin-top: 40px;
  height: 300px;
  background-size: cover;
}
.blue {
  background-image: url("/../img/desktop/blue-desktop.jpg");
  margin-top: 30px;
  height: 320px;
  background-size: contain;
}
.indigo{
  background-image: url("/../img/desktop/indigo-desktop.jpg");
  background-size: cover;
  margin-top: 10px;
  height: 350px;
}
.violet {
  background-image: url("/../img/desktop/violet-desktop.jpg");
  background-size: cover;
  margin-top: 10px;
  height: 350px;
}
.red {
  background-image: url("/../img/desktop/red-desktop.jpg");
  background-size: cover;
  background-position-x: 50%;
  height: 310px;
  margin-top: 40px;
}
.orange {
  background-image: url("/../img/desktop/orange-desktop.jpg");
  background-size: cover;
  margin-top: 50px;
  height: 280px;
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
    margin-left: 250px;
    background-size: cover;
  }
  .blue {
    background-size: cover;
  }
}
@media screen and (max-width: 998px) {
  .yellow {
    margin-left: 150px;
  }
}
@media screen and (max-width: 768px) {
  .yellow {
    margin-left: 0;
  }
  .yellow, .green, .blue, .indigo, .violet, .red, .orange {
    height: 220px;
  }
}
    
</style>