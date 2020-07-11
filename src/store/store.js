/*
 * @Author: your name
 * @Date: 2020-07-11 17:05:30
 * @LastEditTime: 2020-07-11 19:56:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test/src/store/store.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        msg: '默认消息'
    },
    mutations: {
        updateMsg(state, msg = '') {
            console.log('执行了mutations')
            state.msg = msg;
        }
    },
    actions: {
        updateMsg(msg = '') {
            console.log('执行了actions')
            state.msg = msg;
        }
      }
})