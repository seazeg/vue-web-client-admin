import Vue from 'vue'

import Cookies from 'js-cookie' // cookie操作库

/**
 * eg基础方法工具类 
 * API:https://github.com/seazeg/eg-utils/wiki/API
 */
import egUtils from 'eg-utils'  

import 'normalize.css/normalize.css' // css reset

import Element from 'element-ui'
import '@/assets/styles/element-variables.scss'

import '@/assets/styles/index.scss' // 全局重绘样式

import App from './App'
import store from './store'
import router from './router'

import i18n from './lang' // 语言库
import './assets/icons'// 图标
import './permission' // 权限中心
import './utils/error-log' // 错误日志

import * as filters from './filters' // 全局过滤器库

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
// import { mockXHR } from '../../mock'
// if (process.env.NODE_ENV === 'production') {
//   mockXHR()
// }

// 全局工具类挂载到vue原型
Vue.prototype.egu = egUtils

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
