<template>
  <div>
      <TabCard :tabs="tabs" :initialTab="initialTab" class="tab-container">
          <template slot="tab-head-skills">
              skills
          </template>

          <template slot="tab-panel-skills">
              <h2 class="title">My Skills</h2>
              <p class="description"> {{ copy.skills.intro }} </p>
              <div class="skill-grid">
                <ul>
                    <li><i class="fab fa-js"></i>JavaScript</li>
                    <li><i class="fab fa-css3-alt"></i>CSS/SCSS</li>
                    <li><i class="fab fa-html5"></i>HTML</li>
                    <li><i class="fab fa-vuejs"></i>Vue.js</li>
                    <li><i class="fab fa-react"></i>React.js</li>
                    <li><i class="fas fa-code"></i>Bootstrap</li>
                    <li><i class="fab fa-git"></i>Version Control</li>
                    <li><i class="fas fa-server"></i>Hosting</li>
                    <li><i class="fab fa-aws"></i>AWS</li>
                    <li><i class="fas fa-search"></i>SEO</li>
                    <li><i class="fas fa-mobile-alt"></i>Responsive Design</li>
                    <li><i class="fas fa-universal-access"></i>Accessibile Interfaces</li>
                    <li><i class="fab fa-wordpress"></i>WordPress, Shopify, HubSpot</li>
                    <li><i class="fas fa-chart-pie"></i>Salesforce</li>
                    <li><i class="fab fa-adobe"></i>Photoshop</li>
                </ul>
              </div>
          </template>
          <template slot = "tab-head-about">
              about
          </template>

          <template slot ="tab-panel-about">
              <h2 class="title">About Me</h2>
              <p class="description"> {{ copy.about.intro }} </p>
              <img class="tab-img" src="https://lh3.googleusercontent.com/3Ky0Nz9dh3lpJ7BLo-EhaczltFNocSdn5c-y8Y6TaaT0tr8co6MabGmIgV51bo1nj6M36giSRL-yvJYREIuvszJAKJJuxtAvnPmrkeBkNfyPd9r__xNBTE6UipAPVjD1jdhtrSQdJwbmTp4KRR-zISI78TtF22Zs8tYtkX_KcRkCoCywbZZfpg8Ph7dyP6ZVeFmpD4yS2TKXSoX0mIPEnwvGwk0soU6Gy3JidojQu77jCfrjdUycEJh2vXAtqmGUN1EVaeFeZAlzHuynqybo8R0WuzlY_52EI6ztDtLahZ2TNPodehaP6WRct3aDzK3gpV0OtToBzbRj73kU93LKo5jwj6-n3zuh2jiQc-H8OEPRt37YYBg2-vemXfSBj7O5uOkRKQIqMtt4I1zc9don8K-UhnBaRzPb_X1h7F8cK9Nge2qoHzHXmNaGTbifPlWsLk8yzhZ1RMLOXvsk8vYwxMLN2Fv5IVwH-FWoalAtpPtLXFU5529633PNCRgcSlqvkxWU8MiPLbEUVNVz_16PVn32oA1kjqcJt2b_DPRg_tjt5ZtZ05DtzzdSMs0tsuc296MS4NJdcYL-n5IjIzgCZ5nlcfQlZDQtFbAd17PYcO40jADbjbCnJ-E8hdqWnJUW36s7sqU9wnqk7AYOc-oY3-_FRN6-SQekisYX4UXHNekDXGZmD-bVwajhuETDD2M684BzYjgTfbE92_JJ4yVCQbG3ubkYWgJO_SsC1Gj2FmP-xNqs=w834-h625-no">
              <p>{{ copy.about.interests }}</p>
              <p>{{ copy.about.techInterests }}</p>
          </template>

          

          <template slot="tab-head-projects">
              projects
          </template>

          <template slot="tab-panel-projects">
              <h2 class="title">No desc needed!</h2>
              <p class="description">
                  Lily J. Potter was a Bug
              </p>
          </template>

          <template slot="tab-head-contact">
              contact
          </template>

          <template slot="tab-panel-contact">
              <h2 class="title">No desc needed!</h2>
              <p class="description">
                 CONTACT
              </p>
          </template>

      </TabCard>

    </div>
</template>

<script>
import TabCard from './TabCard'
import copy from '../copy.js'

export default {
    components: {
        TabCard
    },
    data() {
        return {
            initialTab: 'about',
            tabs: ['about', 'skills', 'projects', 'contact'],
            copy
        };
    },  
};
</script>

<style lang="scss" scoped>

.tab-container {
    background-color: $palette2q4;
    color: blue;
}
.tab-img {
    width: 270px;
    border-radius: 50%;
}
.skill-grid ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
}
.skill-grid li {
    margin: 5px;
}
.fas, .fab {
    margin: 5px;
    color: $palette2q1;
}
</style>