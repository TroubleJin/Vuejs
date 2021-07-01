import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import About from "../components/About";
// import User from "../components/User";
Vue.use(VueRouter)
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home'),
    meta: {
      title: '首页'
    },
    children: [{
      name: '消息',
      path: '/home/news',
      component: () => import('../components/News'),
      },
      {
        name: '新闻',
        path: '/home/messages',
        component: () => import('../components/Messages'),
      },
      {
        name: '新闻',
        path: '',
        redirect: '/home/news',
      }
    ]
  },
  {
    path: '/user/:userId',
    name: 'User',
    component: () => import('../components/User'),
    meta: {
      title: '用户'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About'),
    meta: {
      title: '关于'
    }
  },
  //  默认首页
  {
    path: '',
    name: 'Home',
    redirect: 'home',

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  document.title = to.matched[0].meta.title
  console.log(to);
  next()
})

router.afterEach((to,from) => {
  console.log('after')
})
export default router
