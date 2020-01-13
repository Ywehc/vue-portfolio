import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

let main = require('./components/Main.vue').default;
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
}
];

const router = new Router
({
  mode:'history',
  routes
})

Vue.use(Router)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

export default router;
