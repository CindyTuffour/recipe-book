import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Drink from './views/Drink.vue'
import Food from './views/Food.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/food',
      name: 'food',
      component: Food
      }, 
    {
      path: '/drink',
      name: 'drink',
      component: Drink
    }
  ]
})
