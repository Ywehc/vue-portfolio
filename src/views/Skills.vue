<template>
    <div class="container">
        <h1 class="section-heading">My Skills</h1>
        <div class="row">
            <div class="col-12">
                <p class="section-content"> {{ copy.skills.intro }}</p>
                <p class="section-content"> {{ copy.skills.projects }}</p>
                <!-- <p class="section-content"> {{ copy.skills.soft }}</p> -->
            </div>    
        </div> 
        <br>
        <div class="skill-grid">
            <ul>
                <li><i class="fab fa-js"></i>JavaScript</li>
                <li><i class="fab fa-css3-alt"></i>CSS/CSS preprocessors</li>
                <li><i class="fab fa-vuejs"></i>Vue.js</li>
                <li><i class="fab fa-react"></i>React.js</li>
                <li><i class="fas fa-code"></i>Bootstrap</li>
                <li><i class="fab fa-git"></i>Version Control</li>
                <li><i class="fas fa-server"></i>Hosting</li>
                <li><i class="fab fa-aws"></i>AWS</li>
                <li><i class="fas fa-envelope-open-text"></i>Foundation/HTML Emails</li>
                <li><i class="fas fa-search"></i>SEO</li>
                <li><i class="fas fa-mobile-alt"></i>Responsive Design</li>
                <li><i class="fas fa-universal-access"></i>Accessibility</li>
                <li><i class="fab fa-wordpress"></i>WordPress/Shopify/HubSpot</li>
                <li><i class="fas fa-chart-pie"></i>Salesforce</li>
                <li><i class="fab fa-adobe"></i>Photoshop</li>
                <li><i class="fab fa-python"></i>Python</li>
                <li><i class="fas fa-book"></i>Documentation</li>
                <li><i class="fas fa-tachometer-alt"></i>Testing</li>
            </ul>
        </div>      
    </div>
</template>

<script>
import copy from '../copy.js'

export default {
    name: 'Skills',
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
    color: $light;
    font-size: 170%;
    .fab {
        color: $darker;
    }
    p {
        border:1px solid $darker;
        border-radius: 5px;
        width: 180px;
        margin: auto;
        padding: 3px;
        cursor: pointer;
    }
    p:hover {
        color: $dark;
        background: $lighter;
    }
    a {
        text-decoration: none;
        color: $light;
    }
}
.section-image-container img {
    width: 70%;
}
.skill-grid ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding-left: 0;
    justify-content: center;
}
.skill-grid li {
    margin: 15px;
    color: $light;
    font-size: 130%;
}
.fas, .fab {
    margin: 10px;
    color: $darker;
    font-size: 130%;
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
  .skill-grid li {
      margin: 8px;
  }
}
</style>