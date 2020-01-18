<template>
    <div class="container">
        <h1 class="section-heading">Portfolio</h1>
        <br>
        <div class="row">
            <div class="col-2 icon-container">
                <a href="https://propertrust.chriskieran.com/" target="_blank">
                    <i class="fas fa-home"></i>
                </a>
            </div>
            <div class="col-10">
                <a href="https://propertrust.chriskieran.com/" target="_blank">
                    <strong class="highlight-blue">Real Estate Sales Agreement Generator</strong>
                </a>
                <p class="section-content"> {{ copy.portfolio.realEstate}} </p>
            </div>         
        </div> 
        <br>
        <div class="row">
            <div class="col-2 icon-container">
                <a href="https://limitless-journey-87149.herokuapp.com/" target="_blank">
                    <i class="fas fa-campground"></i>
                </a>
            </div>
            <div class="col-10">
                <a href="https://limitless-journey-87149.herokuapp.com/" target="_blank">
                    <strong class="highlight-blue">Campsite Review</strong>
                </a>
                <p class="section-content"> {{ copy.portfolio.campsite}} </p>
            </div>         
        </div>  
        <br>
        <div class="row">
            <div class="col-2 icon-container">
                <a href="https://codepen.io/Ywehc/full/BMQEQW" target="_blank">
                    <i class="fas fa-hockey-puck"></i>
                </a>          
            </div>
            <div class="col-10">
                <a href="https://codepen.io/Ywehc/full/BMQEQW" target="_blank">
                    <strong class="highlight-blue">Hockey Quotes</strong>
                </a>
                <p class="section-content"> {{ copy.portfolio.hockey}} </p>
            </div>         
        </div> 
        <br>
        <br>
        <br>
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
.icon-container {
    color: $darker;
    text-align:center;
    font-size: 340%;
}
.icon-container a {
    color: $darker;
}
.github-link {
    a {
        color: $darker;
        margin-left: 5px;
    }
}
.fa-github {
    margin-left: 10px;
}
</style>