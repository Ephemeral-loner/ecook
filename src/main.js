// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/rem'
import MintUI from 'mint-ui'//引入minit-ui有三行代码
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import Router from 'vue-router'//解决路由报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}//解决路由报错

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
