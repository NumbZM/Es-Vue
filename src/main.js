import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/reset.css'
import './assets/css/common.css'
import api from './request/api' // 导入api接口
import 'amfe-flexible/index.min.js'
import store from './store'
import animated from 'animate.css'
import Cookies from 'js-cookie'
// import login from './methods/login'
import 'video.js/dist/video-js.css'
Vue.use(animated)
Vue.config.productionTip = false
Vue.prototype.$api = api// 将api挂载到vue的原型上
Vue.prototype.$Cookies = Cookies;// 定义 cookies 组件
Vue.prototype.VUE_APP_BASE_URL = process.env.VUE_APP_BASE_URL;// 定义 BASE_URL
window.router=router

router.beforeEach((to,from, next) => {
  document.title = to.meta.title
  if(!Cookies.get('_uid_')){
    // login()
    next()
  }else{
    next()
  }
})

export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
