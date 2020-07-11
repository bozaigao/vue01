<!--
 * @Author: your name
 * @Date: 2020-07-11 15:27:33
 * @LastEditTime: 2020-07-11 18:11:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test/src/components/SiblingChild.vue
--> 
<template>
  <div>
    <p @click="sendMsgToParent">SiblingChild2</p>
    <p @click="$store.dispatch('updateMsg')">{{$store.state.msg}}</p>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  methods: {
    sendMsgToParent() {
      // this.$parent.$emit("parantEvent", "SiblingChild2");
      this.$dispatch("parantEvent", "SiblingChild2");
    }
  },
  mounted() {
    this.$parent.$on("parantEvent", msg => {
      if (msg !== "SiblingChild2") {
        console.log("来自siblingChild1的消息", msg);
      }
    });
  }
};
</script>

<style>
</style>