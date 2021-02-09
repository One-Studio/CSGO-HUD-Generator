import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    // component: Home
    component: () => import(/* webpackChunkName: "about" */ '../views/index/Index.vue')
  },
  {
    path: '/death-notice',
    name: 'DeathNotice',
    component: () => import(/* webpackChunkName: "about" */ '../components/DeathNotice.vue')
  },
  {
    path: '/crosshair',
    name: 'Crosshair',
    component: () => import(/* webpackChunkName: "about" */ '../components/Crosshair.vue')
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
