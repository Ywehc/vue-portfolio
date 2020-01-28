<template>
    <div class="container">
        <h1 class="section-heading">Portfolio</h1>
        <br>
        <div class="row">
            <div class="col-2 col-md-2 col-sm-3 icon-container">
                <a href="https://propertrust.chriskieran.com/" target="_blank">
                    <i class="fas fa-home"></i>
                </a>
            </div>
            <div class="col-10 col-md-10 col-sm-9">
                <a href="https://propertrust.chriskieran.com/" target="_blank">
                    <strong class="highlight-blue">Real Estate Sales Agreement Generator</strong>
                </a>
                <p class="section-content"> {{ copy.portfolio.realEstate}} </p>
            </div>         
        </div> 
        <div class="row">
            <div class="col-2 col-md-2 col-sm-3 icon-container">
                <a href="https://limitless-journey-87149.herokuapp.com/" target="_blank">
                    <i class="fas fa-campground"></i>
                </a>
            </div>
            <div class="col-10 col-md-10 col-sm-9">
                <a href="https://limitless-journey-87149.herokuapp.com/" target="_blank">
                    <strong class="highlight-blue">Campsite Review</strong>
                </a>
                <p class="section-content"> {{ copy.portfolio.campsite}} </p>
            </div>         
        </div>  
        <div class="row">
            <div class="col-2 col-md-2 col-sm-3 icon-container">
                <a href="https://codepen.io/Ywehc/full/BMQEQW" target="_blank">
                    <i class="fas fa-hockey-puck"></i>
                </a>          
            </div>
            <div class="col-10 col-md-10 col-sm-9">
                <a href="https://codepen.io/Ywehc/full/BMQEQW" target="_blank">
                    <strong class="highlight-blue">Hockey Quotes</strong>
                </a>
                <p class="section-content"> {{ copy.portfolio.hockey}} </p>
            </div>         
        </div> 
        <br>
        <p class="section-content github-link"> See more of my code on 
            <a href="https://github.com/Ywehc" target="_blank">
                Github<i class="fab fa-github"></i>
            </a>
        </p>     
    </div>
</template>

<script>
import copy from '../copy.js'

export default {
    name: 'Portfolio',
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
    a {
        text-decoration: none;
    }
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
.highlight-blue {
    color: $darker;
    font-size: 30px;
}
.highlight-blue:hover {
    color: $lighter;
}
.icon-container {
    color: $darker;
    text-align:left;
    font-size: 280%;
}
.icon-container a {
    color: $darker;
}
.icon-container a:hover {
    color: $light;
}
.github-link {
    text-align: center;
    a {
        color: $darker;
        margin-left: 5px;
    }
    a:hover {
        color: $light;
    }
}
.fa-github {
    margin-left: 10px;
}

@media screen and (max-width: 1200px) {
  .section-heading {
      padding-left: $padding-1200;
  }
  .row {
      padding: 0 $padding-1200;
  }
}
@media screen and (max-width: 768px) {
    .highlight-blue {
        font-size: 26px;
    }
    .section-content {
        font-size: 22px;
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
  }
  .section-heading, .row {
      padding-left: $padding-576;
      padding-right: $padding-576;
  }
  .fas, .fab {
      font-size: 80%;
      color: $lighter;
  }
  .row {
      margin-top: -30px;
  }
  .highlight-blue {
        font-size: 22px;
    }
}
</style>