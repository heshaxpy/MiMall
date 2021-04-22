import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'

//根据前端的跨域方式做调整  /a/b : /api/a/b => /a/b
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000    //设置超时，用户体验

//接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})

Vue.use(VueAxios, axios)
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false    //生产环境的提示, vue底层的信息会打印出来

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
