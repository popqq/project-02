import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [{ //表示配置子组件/路由
      path: '/result', //要想访问/result, 先显示父页面HomeView整体
      component: () => import(/* webpackChunkName: "about" */ '../views/ResultView.vue') //找到父组件中的<router-view/>, 摆放子组件的内容
    }]
  }, {
    path: '/result', //要想访问result, 先显示父页面HomeView整体
    component: () => import(/* webpackChunkName: "about" */ '../views/ResultView.vue')
  }, {
    path: 'list', //要想访问/list, 先显示父页面HomeView整体
    component: () => import(/* webpackChunkName: "about" */ '../views/ListView.vue')
  },
  {
    path: '/reg',
    name: 'reg',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
