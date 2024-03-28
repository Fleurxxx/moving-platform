<template>
  <div class="container">
    <video loop autoplay class="background">
        <source src="@/assets/video/video1.mp4" type="video/mp4">
    </video>
    <el-card class="card" >
        <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

const store = useStore();
const route = useRoute();
const router = useRouter();
const data = reactive({})
onBeforeMount(() => {
  
})
onMounted(() => {
  
})
watchEffect(()=>{
})
defineExpose({
  ...toRefs(data)
})

</script>
<style scoped lang='less'>
.container{
    // width: 100vw; /* 视口宽度 */
    // height: 100vh; /* 视口高度 */
    display: flex;
    justify-content: center;
    align-items: center;
}
.background{
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover; /* 填充整个容器 */
}
.card{
    position: relative; /* 相对定位，使 z-index 生效 */
    z-index: 10; /* 卡片的 z-index 设置为比视频更高的值 */
    max-width: 480px;
    margin: 0 auto; /* 居中显示卡片 */
}
</style>