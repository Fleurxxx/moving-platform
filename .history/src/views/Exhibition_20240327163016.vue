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
    <div>
        <div class="title_box">
            <p class="t_title">安恒信息</p>
            <img class="t_back" src="@/assets/image/common/title_background.png" />
        </div>
        <img class="t_base" src="@/assets/image/common/d8383d6bfbf84ba99d91b0c00883db8d.gif" />
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
.container{
    width:100%;
    height:100vh;
    background-image: url('@/assets/image/common/20240326205247.png');
}
.title_box{
    position: relative;
    transition: transform 0.3s ease; 
    &:hover {
        transform: scale(1.01); /* 鼠标悬停时放大1.1倍 */
    }
}
.t_title{
    color: #fff;
    position: absolute;
    top: 0.2rem;
    left: 0.5rem;
    font-size:0.26rem;
    z-index: 3;
}
.t_back{
    width:2rem;
    position: absolute;
    z-index: 2;
}
.t_base{
    width:2rem;
    z-index: 1;
}
</style>