import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicLayout from '../views/layouts/BasicLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: BasicLayout
  }
]

const router = new VueRouter({
  routes
})

export default router
