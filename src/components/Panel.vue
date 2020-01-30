<template>
    <div class="panel">
    </div>
</template>

<style lang="scss" scoped>
.panel {
    width: 60px;
    margin: 6px;
    background-repeat: no-repeat;
    border-radius: 5px;
}
.panel:hover {
    animation: shake 5s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
    }

@keyframes shake {
    10%, 90% {
        transform: translate3d(0, -1px, 0);
    }
    
    20%, 80% {
        transform: translate3d(0, 2px, 0);
    }

    30%, 50%, 70% {
        transform: translate3d(0, -4px, 0);
    }

    40%, 60% {
        transform: translate3d(0, 4px, 0);
    }
}

@media screen and (max-width: 1200px) {
  .panel {
      width: 50px;
  }
}
</style>