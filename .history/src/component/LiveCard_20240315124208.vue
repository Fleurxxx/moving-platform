<template>
  <div >
    const cardList = ref([
  {
    image: require('@/assets/image/common/视频1.png'),
    exactDate: '2024-03-15',
    startTime: '10:00 AM',
    sumTime: 60,
    reserved: 158,
    title: '标题1',
    describe: '描述1',
    position: '位置1'
  },
  {
    image: require('@/assets/image/common/视频2.png'),
    exactDate: '2024-03-16',
    startTime: '11:00 AM',
    sumTime: 30,
    reserved: 100,
    title: '标题2',
    describe: '描述2',
    position: '位置2'
  }
  // 可以继续添加更多数据项
])
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
</style>