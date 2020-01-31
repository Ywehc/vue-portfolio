<template>
  <div class="mobile-panels">
        <div class="yellow mobile-panel fade-in-yellow"></div>
        <div class="green mobile-panel fade-in-green"></div>  
        <div class="blue mobile-panel fade-in-blue"></div>
        <div class="indigo mobile-panel fade-in-indigo"></div> 
        <div class="violet mobile-panel fade-in-violet"></div>  
        <div class="red mobile-panel fade-in-red"></div>  
        <div class="orange mobile-panel fade-in-orange"></div> 
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.mobile-panels {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: $dark;
}
.mobile-panel {
    width: 24px;
    border-radius: 5px;
    background-size: cover;
}
.yellow{
  background-image: url("/../img/mobile/yellow-mobile.jpg");
  margin: 4px;
  height: 165px;
}
.green {
  background-image: url("/../img/mobile/green-mobile.jpg");
  background-position: top;
  margin: 4px;
  height: 170px;
}
.blue {
  background-image: url("/../img/mobile/blue-mobile.jpg");
  margin: 4px;
  height: 190px;
}
.indigo{
  background-image: url("/../img/mobile/indigo-mobile.jpg");
  background-position: bottom;
  margin: 4px;
  height: 230px;
}
.violet {
  background-image: url("/../img/mobile/violet-mobile.jpg");
  margin: 4px;
  height: 220px;
}
.red {
  background-image: url("/../img/mobile/red-mobile.jpg");
  background-position: center;
  margin: 4px;
  height: 210px
}
.orange {
  background-image: url("/../img/mobile/orange-mobile.jpg");
  background-position: center;
  margin: 4px;
  height: 180px
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

</style>