<template>
  <div class="box">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <div class="logo-box">
        <img class="logo" src="@/assets/image/common/logo.png">
      </div>
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">大会议程</el-menu-item>
      <el-menu-item index="3">关于大会</el-menu-item>
      <el-menu-item index="4">大咖云集</el-menu-item>
      <el-menu-item index="5">精彩活动</el-menu-item>
      <el-menu-item index="6">展商风采</el-menu-item>
      <el-menu-item index="7">成果发布</el-menu-item>
      <el-menu-item index="8">媒体中心</el-menu-item>
      <el-menu-item index="9">大会直播</el-menu-item>
      
    </el-menu>
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
.box{
  height: 100%;
}
.el-form-item {
  text-align: center;
}
.logo-box{
  height: 100%;
  align-items: center;
  .logo{
    height: 80px;
    // display: flex;
    // justify-content: center;
    // align-items: center;
  }
}

</style>