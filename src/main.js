/*
 * @Author: your name
 * @Date: 2020-07-11 13:33:43
 * @LastEditTime: 2020-07-11 17:11:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test/src/main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
Vue.config.productionTip = false
Vue.prototype.$dispatch = function (event, data) {
  let parent = this.$parent;
  while (parent) {
    if (parent) {
      parent.$emit(event, data)
      parent = parent.$parent
    } else {
      break;
    }
  }
}

Vue.prototype.$boardcast = function (event, data) {
  boardcast.call(this.event, data)
}

function boardcast() {
  this.$children.forEach(child => {
    child.$emit(event, data)
    if (child.$children.length) {
      boardcast.call(child, event, data)
    }
  })
}

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  components: { App },
  template: '<App/>'
})
