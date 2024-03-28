<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-27 14:38:02
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-27 16:52:19
 * @FilePath: \moving-platform\src\views\Exhibition.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="container">
    <Title class="t_postiion1" :name="data.name1"/>
    <Title class="t_postiion2" :name="data.name2"/>
    <Title class="t_postiion3" :name="data.name3"/>
    <Title class="t_postiion4" :name="data.name4"/>
    <Title class="t_postiion5" :name="data.name5"/>
    <Title class="t_postiion6" :name="data.name6"/>
    <Title class="t_postiion7" :name="data.name7"/>
    <Title class="t_postiion8" :name="data.name8"/>
    <Title class="t_postiion9" :name="data.name9"/>
    <Title class="t_postiion10" :name="data.name10"/>
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
    name1:'安恒信息',
    name2:'阿里云',
    name3:'安恒信息',
    name4:'安恒信息',
    name5:'安恒信息',
    name6:'安恒信息',
    name7:'安恒信息',
    name8:'安恒信息',
    name9:'安恒信息',
    name10:'安恒信息',

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
t_
.t_postiion1{
    position: absolute;
    bottom: 0;
    top:2rem;
    left: 2rem;
}
.t_postiion2{
    
}
</style>