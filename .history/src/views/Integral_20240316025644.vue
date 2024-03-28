<template>
  <div class="center-container">
    <Row>
        <Col span="12">
          
        </Col>
        <Col span="12">

        </Col>
    </Row>
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
  margin: 0.5rem 1rem;
  // display: flex;
  // justify-content: center;
}
.sing-card{
  width:100%;
}
.sign{
  display: flex;
  justify-content: space-between; /* 让内容靠两侧 */
  align-items: center; /* 垂直居中 */
}
.sign-info {
  flex-grow: 1; /* 中间内容占据剩余空间 */
  margin-right: 1.7rem;
}
.sign-but{
  margin-left: auto;
}
</style>