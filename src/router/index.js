import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/home',
      component: ()=> import("../pages/home/Home.vue"),
      meta: {
        title: "首页"
      }
    },
    {
      path: '/category',
      component: () => import("../pages/category/Category.vue"),
      meta: {
        title: "分类"
      }
    },
    {
      path: '/cart',
      component: () => import("../pages/cart/Cart.vue"),
      meta: {
        title: "购物车"
      }
    },
    {
      path: '/profile',
      component: () => import("../pages/profile/Profile.vue"),
      meta: {
        title: "我的"
      }
    }
  ]
})


