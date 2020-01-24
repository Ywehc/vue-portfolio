<template>
    <div class="container">
        <h1 class="section-heading">About Me</h1>
        <div class="row">
            <div class="col-6 col-sm-12">
                <p class="section-content"> {{ copy.about.intro }}</p>
                <br>
                <p class="section-content"> {{ copy.about.interests }}</p>
                <br>
                <p class="section-content"> {{ copy.about.techInterests }}</p>
            </div>
            <div class="col-6 col-sm-12 section-image-container">
                <img src="../../public/img/chewychris.jpg" alt="">
            </div>
        </div> 
    </div>
</template>

<script>
import copy from '../copy.js'

export default {
    name: 'About',
    data() {
        return {
            copy
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    padding: $section-container-padding;
    font-family: $main-font;
}
.section-heading {
    font-size: $section-heading-size;
    margin: $section-heading-margin;
}
.section-content {
    font-size: $section-content-size;
}
.section-heading, .section-content {
    color: $light;
}
.section-image-container {
    text-align: center;
    padding: 20px;
}
.section-image-container img {
    width: 60%;
    border-radius: 5px;
}
.about-img {
    text-align: center;
    margin-top: 150px;
}
.about-img img {
    width: 150px;
    border-radius: 5px;
}

@media screen and (max-width: 1200px) {
  .section-heading, .row {
      padding-left: $padding-1200;
  }
}
@media screen and (max-width: 1200px) {
  .section-image-container {
      margin-top: 60px;
  }
}
</style>