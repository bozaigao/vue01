<!--
 * @Author: your name
 * @Date: 2020-07-11 15:27:33
 * @LastEditTime: 2020-07-11 18:20:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test/src/components/SiblingChild.vue
--> 
<template>
  <div>
    <p @click="sendMsgToParent">SiblingChild1</p>
    <p @click="$store.commit('updateMsg')">{{$store.state.msg}}</p>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  methods: {
    sendMsgToParent() {
      // this.$parent.$emit("parantEvent", "SiblingChild1");
      this.$dispatch("parantEvent", "SiblingChild1");
    }
  },
  mounted() {
    console.log("哈", this.$store);
    this.$parent.$on("parantEvent", msg => {
      if (msg !== "SiblingChild1") {
        console.log("来自siblingChild2的消息", msg);
      }
    });
  }
};
</script>

<style>
</style>