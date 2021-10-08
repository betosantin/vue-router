import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Roberto from '../views/Roberto.vue'
import Teste from '../views/Teste.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/roberto/:dado',
    name: 'Roberto',
    component: Roberto
  },
  {
    path: '/teste',
    name: 'Teste',
    component: Teste,
    children: [{
      path: "testeFilho",
      name: "Filha",
      component: About
    }]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
