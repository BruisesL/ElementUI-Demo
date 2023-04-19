// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import user from './js/user.js'
// 导入axios
import axios from "axios";
// 配置请求的基本路径
// axios.defaults.baseURL = "https://www.fastmock.site/mock/f9fc3ea99258d2a64faed4b782c00b29/pethome/";
// 自定义一个vue的属性 将axios赋值给我们自定义的属性
Vue.prototype.$http = axios

Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

