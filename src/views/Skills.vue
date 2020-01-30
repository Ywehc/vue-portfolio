<template>
    <div class="container">
        <h1 class="section-heading">My Skills</h1>
        <div class="row">
            <div class="col-12">
                <p class="section-content"> {{ copy.skills.intro }}</p>
                <p class="section-content"> {{ copy.skills.projects }}</p>
            </div>    
        </div> 
        <br>
        <div class="skill-grid row">
            <div class="col-12 col-sm-3 skill-column">
                <div class="skill"><i class="fab fa-js"></i>JavaScript</div>
                <div class="skill"><i class="fab fa-css3-alt"></i>CSS/CSS preprocessors</div>
                <div class="skill"><i class="fab fa-vuejs"></i>Vue.js</div>
                <div class="skill"><i class="fab fa-react"></i>React.js</div>
                <div class="skill"><i class="fas fa-code"></i>Bootstrap</div>
            </div>  
            <div class="col-12 col-sm-3 skill-column">
                <div class="skill"><i class="fab fa-python"></i>Python</div>
                <div class="skill"><i class="fab fa-git"></i>Version Control</div>
                <div class="skill"><i class="fas fa-server"></i>Hosting</div>  
                <div class="skill"><i class="fab fa-aws"></i>AWS</div> 
                <div class="skill"><i class="fab fa-wordpress"></i>WordPress/Shopify/HubSpot</div>                        
            </div>            
            <div class="col-12 col-sm-3 skill-column">
                <div class="skill"><i class="fas fa-envelope-open-text"></i>Foundation/HTML Emails</div> 
                <div class="skill"><i class="fas fa-book"></i>Documentation</div>           
                <div class="skill"><i class="fas fa-mobile-alt"></i>Responsive Design</div>
                <div class="skill"><i class="fas fa-universal-access"></i>Accessibility</div>
            </div>
            <div class="col-12 col-sm-3 skill-column">
                <div class="skill"><i class="fas fa-search"></i>SEO</div>
                <div class="skill"><i class="fas fa-chart-pie"></i>Salesforce</div>
                <div class="skill"><i class="fab fa-adobe"></i>Photoshop</div>
                <div class="skill"><i class="fas fa-tachometer-alt"></i>Testing</div>
            </div>
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

.skill {
    margin: 5px;
    color: $light;
}
.fas, .fab {
    margin: 5px;
    color: $darker;
}

@media screen and (max-width: 970px) {
  .skill, .fas, .fab {
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
  .section-heading, .row {
      padding-left: $padding-576;
      padding-right: $padding-576;
  }
  .skill-grid ul {
      justify-content: left;
  }
  .skill-grid li {
      font-size: 14px;
  }
}
</style>