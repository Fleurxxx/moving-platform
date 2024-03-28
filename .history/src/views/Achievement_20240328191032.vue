<template>
  <div >
    <div class="header">
      <h1>成果发布</h1>
      <img class="banner-img" src="@/assets/image/common/banner1.png" />
    </div>
    <div>
      <h1>成品发布</h1>
      <h1>???</h1>
      <h1>???</h1>
      <h1>???</h1>
      <h1>???</h1>
      <h1>???</h1>
      <h1>???</h1>
      <h1>???</h1>
      <h1>???</h1>
      <h1>???</h1>
      <h1>???</h1>
    </div>
    <div class="foot">
      <img class="banner-img" src="@/assets/image/common/banner4.png" />
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
.header{
  h1{
    position: absolute;
    left: 20%;
    top:10%;
  }
}
.banner-img{
  width:100%;
  height: 3.5rem;
}

.foot{
  position: relative;
  bottom:0;
}
</style>