<template>
    <div class="container">
        <h1 class="section-heading">About Me</h1>
        <div class="row">
            <div class="col-12 col-md-6">
                <p class="section-content"> {{ copy.about.intro }}</p>
                <p class="section-content"> {{ copy.about.work }}</p>
                <p class="section-content"> {{ copy.about.interests }}</p>
                <p class="section-content"> {{ copy.about.techInterests }}</p>
            </div>
            <div class="col-12 col-md-6  section-image-container">
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
  .section-image-container {
      margin-top: 60px;
  }
}
@media screen and (max-width: 970px) {
  .section-heading, .row {
      padding-left: $padding-1200;
  }
  .section-image-container {
      margin-top: 60px;
  }
  .section-content {
      font-size: 14px;
  }
}
@media screen and (max-width: 576px) {
  .section-heading {
      font-size: $mobile-heading-size;
      margin: $mobile-heading-margin;
  }
  .section-content {
      font-size: $mobile-content-size;
  }
  .section-image-container {
      margin-top: 10px;
      img {
          width: 40%;
      }
  }
  .section-heading, .row {
      padding-left: $padding-576;
      padding-right: $padding-576;
  }
}
</style>