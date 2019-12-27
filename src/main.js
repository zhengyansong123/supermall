import Vue from 'vue'
import App from './App'
import router from './router'

import flexible from './assets/js/flexible.js'
Vue.config.productionTip = false

/* eslint-disable no-new */

// 全局导航守卫》》更改每个页面的title;

router.beforeEach((to,from,next) => {
  document.title=to.matched[0].meta.title;
  // console.log(to)
  next()
})

new Vue({
  el: '#app',
  router,
  mode: "history",
  render: h => h(App)
})
