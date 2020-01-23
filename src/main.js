import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



let main = require('./components/Main.vue').default;
let landing = require('./components/Landing.vue').default;
let about = require('./views/About.vue').default;
let skills = require('./views/Skills.vue').default;
let portfolio = require('./views/Portfolio.vue').default;
let contact = require('./views/Contact.vue').default;

const routes = [{
  path: '/',
  component: main
},
{
  path: '/home',
  component: main
},
{
  path: '/about',
  component: about
},
{
  path: '/skills',
  component: skills
},
{
  path: '/portfolio',
  component: portfolio
},
{
  path: '/contact',
  component: contact
},
{
  path: '/landing',
  component: landing
}
];

const router = new Router
({
  mode:'history',
  routes
})

Vue.use(Router)
Vue.use(BootstrapVue)


library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

export default router;
