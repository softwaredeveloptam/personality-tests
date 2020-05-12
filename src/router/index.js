import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import CreateTest from '../views/CreateTest.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/createtest',
    name: 'CreateTest',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateTest.vue')
  },
  {
    path: '/presettests',
    name: 'PresetTests',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PresetTests.vue')
  },
  {
    path: '/chocolatetest',
    name: 'ChocolateTest',
    component: () => import('../components/quiz/ChocolateTest.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
