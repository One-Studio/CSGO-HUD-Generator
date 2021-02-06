import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    // component: Home
    component: () => import(/* webpackChunkName: "about" */ '../components/Index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/death-notice',
    name: 'DeathNotice',
    component: () => import(/* webpackChunkName: "about" */ '../components/DeathNotice.vue')
  }
  // {
  //   path: '/index',
  //   name: 'Index',
  //   component: () => import(/* webpackChunkName: "about" */ '../components/Index.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
