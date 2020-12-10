import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue'),
    meta: { title: '首页', keepAlive: false }
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../views/add.vue'),
    meta: { title: '新增', keepAlive: false }
  },
  {
    path: '*',
    component: () => import('../views/index.vue'),
    meta: { title: '首页', keepAlive: false }
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior: () => ({ y: 0 })
})

export default router
