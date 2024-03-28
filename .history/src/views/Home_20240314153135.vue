<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-12 22:37:26
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-14 15:30:29
 * @FilePath: \moving-platform\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div >
    <el-backtop :right="100" :bottom="100" />
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <div>
      <div class="swiper-pagination swiper-pagination-bullets">
        <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
/**
* 仓库
*/
const store = useStore();
/**
* 路由对象
*/
const route = useRoute();
/**
* 路由实例
*/
const router = useRouter();
//console.log('1-开始创建组件-setup')
/**
* 数据部分
*/
const data = reactive({})
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(()=>{
})
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})

</script>
<style scoped lang='less'>
.
</style>