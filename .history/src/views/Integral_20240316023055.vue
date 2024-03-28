<template>
  <div class="center-container">
    <el-card style="max-width: 480px">
      <Space>
        <h3>签到任务</h3>
        <span>已经连续签到</span>&nbsp;<span>{{ data.cntTime }}</span>&nbsp;<span>天</span>
        <el-button class="but" type="warning">签到</el-button>
      </Space>
      
      
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { Space } from 'view-ui-plus';
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
const data = reactive({
  cntTime: 0,

})
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
  // display: flex;
  // justify-content: center;
}
.but{
  position: relative;
  right: 0;
}
</style>