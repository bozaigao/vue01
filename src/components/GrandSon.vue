<!--
 * @Author: your name
 * @Date: 2020-07-11 15:54:06
 * @LastEditTime: 2020-07-11 16:20:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test/src/components/GrandSon.vue
--> 
<template>
  <p>{{parentInitDataAlias}}</p>
</template>

<script>
export default {
  inject: {
    parentInitDataAlias: {
      from: "parentInitData",
      default: ""
    }
  }
};
</script>

<style>
</style>