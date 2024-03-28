<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-27 16:31:51
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-27 16:32:06
 * @FilePath: \moving-platform\src\component\Title.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
        <div class="title_box">
            <p class="t_title">安恒信息</p>
            <img class="t_back" src="@/assets/image/common/title_background.png" />
        </div>
        <img class="t_base" src="@/assets/image/common/d8383d6bfbf84ba99d91b0c00883db8d.gif" />
    </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
const props = defineProps({
  //子组件接收父组件传递过来的值
  info: String,
})
//使用父组件传递过来的值
const {info} =toRefs(props)

const store = useStore();
const route = useRoute();
const router = useRouter();
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
    top: 0.37rem;
    left: 0.47rem;
    font-size:0.28rem;
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