<!--
 * @Author: your name
 * @Date: 2020-07-11 13:33:43
 * @LastEditTime: 2020-07-11 16:23:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test/src/App.vue
-->
<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <HelloWorld />
    <Child title="父传子" @getMsg="getFromChild" />
    <SiblingChild1/>
    <SiblingChild2/>
    <Parent/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Child from "./components/Child";
import SiblingChild1 from "./components/SiblingChild1";
import SiblingChild2 from "./components/SiblingChild2";
import Parent from './components/Parent.vue';
export default {
  name: 'App',
  provide:{
    parentInitData:'从父组件初始化的数据'
  },
  components: {
    Child,
    HelloWorld,
    SiblingChild1,
    SiblingChild2,
    Parent,
  },
  methods: {
    getFromChild(msg) {
      console.log(msg)
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
