import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home',
      component: () => import('../views/home/home/Home')
    },
    {
      path: '/home',
      component: () => import('../views/home/home/Home')
    },
    {
      path: '/cart',
      component: () => import('../views/home/cart/Cart')
    },
    {
      path: '/category',
      component: () => import('../views/home/category/Category')
    },
    {
      path: '/profile',
      component: () => import('../views/home/profile/Profile')
    }
  ]
})
