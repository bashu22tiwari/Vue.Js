import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import About from './components/About'
import Setting from './components/Setting'
import User from './components/User'
Vue.use(VueRouter);

const routes = [
  {path:'/',component:Home},
  {path:'/about',component:About},
  {path:'/setting',component:Setting},
  {path:'/user/:id',component:User}
];

const router = new VueRouter({
  routes
})



Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
  