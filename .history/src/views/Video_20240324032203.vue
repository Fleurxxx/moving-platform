<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-18 14:41:15
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-24 03:21:09
 * @FilePath: \moving-platform\src\views\Video.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="center-container">
    <div class="video-box">
      <div class="video-box-left">
        <Video class="video"/>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import Video from '@/component/Video.vue'
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
.center-container{
  position: relative;
  margin: 1rem 3rem;
}
.video-box{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.video-box-left{
  width:8rem;
  background-color: blue;
}
</style>