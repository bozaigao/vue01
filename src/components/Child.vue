<!--
 * @Author: your name
 * @Date: 2020-07-11 13:39:32
 * @LastEditTime: 2020-07-11 16:06:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test/src/components/Child.vue
-->

<template>
  <div @click="sendMsgToParent">{{title}}</div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
     sendMsgToParent() {
      this.$emit('getMsg', '子传父')
    }
  }
}
</script>

<style>
</style>
