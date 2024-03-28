<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-27 16:31:51
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-27 17:15:12
 * @FilePath: \moving-platform\src\component\Title.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div>
        
    </div>
        <div class="title_box">
            <p class="t_title">{{ name }}</p>
            <img class="t_back" src="@/assets/image/common/title_background.png" />
        </div>
        <img class="t_base" src="@/assets/image/common/d8383d6bfbf84ba99d91b0c00883db8d.gif" />
    </div>
</template>

<script setup>
import { ref, reactive, toRefs, defineProps, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
const props = defineProps({
  name: String,
})

const {name} =toRefs(props)

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
    overflow: hidden;
    transition: transform 0.5s ease; 
    &:hover {
        transform: scale(1.1); /* 鼠标悬停时放大1.1倍 */
    }
}
.t_title{
    width: 100%;
    position: absolute;
    top:0.06rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:0.24rem;
    color: #fff;
    z-index: 4;
}
.t_back{
    width:1.7rem;
    position: absolute;
    top:-0.24rem;
    left: -0.1rem;
    z-index: 3;
}
.t_base{
    width:1.5rem;
    height: 1.2rem;
    opacity:0.8;
    z-index: 0;
}
</style>