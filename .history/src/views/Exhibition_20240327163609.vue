<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-27 14:38:02
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-27 16:30:01
 * @FilePath: \moving-platform\src\views\Exhibition.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="container">
    <Title />
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import Title from '@/component/Title'

const store = useStore();
const route = useRoute();
const router = useRouter();
const data = reactive({
    name1:'安恒信息'
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
.container{
    width:100%;
    height:100vh;
    background-image: url('@/assets/image/common/20240326205247.png');
}

</style>