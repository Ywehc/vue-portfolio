<template>
  <div class="palette-grid">
    <div class="palette">
        <div id="palette-1">
            <div class="quadrant-1"></div>
            <div class="quadrant-2"></div>
            <div class="quadrant-3"></div>
            <div class="quadrant-4"></div>
        </div>
    </div>
    <div class="palette">
        <div id="palette-2">
            <div class="quadrant-1"></div>
            <div class="quadrant-2"></div>
            <div class="quadrant-3"></div>
            <div class="quadrant-4"></div>
        </div>
    </div>
    <div class="palette">
        <div id="palette-3">
            <div class="quadrant-1"></div>
            <div class="quadrant-2"></div>
            <div class="quadrant-3"></div>
            <div class="quadrant-4"></div>
        </div>
    </div>
    <div class="palette">
        <div id="palette-4">
            <div class="quadrant-1"></div>
            <div class="quadrant-2"></div>
            <div class="quadrant-3"></div>
            <div class="quadrant-4"></div>
        </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.palette-grid {
    display: flex;
    justify-content: space-between; 
    padding:15px;
    background-color: $main-text-color;
}
.quadrant-1, .quadrant-2, .quadrant-3, .quadrant-4 {
    width: 30px;
    height: 30px;
}
#palette-1, #palette-2, #palette-3, #palette-4 {
    display: flex;
    flex-wrap: wrap;
    width: 60px;
}
#palette-1 {
    .quadrant-1 {
        background-color: $palette1q1;
    }
    .quadrant-2 {
        background-color: $palette1q2;
    }
    .quadrant-3 {
        background-color: $palette1q3;
    }
    .quadrant-4 {
        background-color: $palette1q4;
    }

}
#palette-2 {
    .quadrant-1 {
        background-color: $palette2q1;
    }
    .quadrant-2 {
        background-color: $palette2q2;
    }
    .quadrant-3 {
        background-color: $palette2q3;
    }
    .quadrant-4 {
        background-color: $palette2q5;
    }

}
#palette-3 {
    .quadrant-1 {
        background-color: $palette3q1;
    }
    .quadrant-2 {
        background-color: $palette3q2;
    }
    .quadrant-3 {
        background-color: $palette3q3;
    }
    .quadrant-4 {
        background-color: $palette3q5;
    }

}
#palette-4 {
    .quadrant-1 {
        background-color: $palette4q1;
    }
    .quadrant-2 {
        background-color: $palette4q2;
    }
    .quadrant-3 {
        background-color: $palette4q3;
    }
    .quadrant-4 {
        background-color: $palette4q5;
    }

}
</style>