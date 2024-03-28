<template>
    <div class="container">
      <video loop autoplay class="background">
          <source src="@/assets/video/video1.mp4" type="video/mp4">
      </video>
      <el-card class="card" style="max-width: 480px">
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
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative; /* 相对定位，以便设置子元素的 z-index */
      width: 100%;
      height: 100vh; /* 使用视口高度填满整个屏幕 */
  }
  .background{
      position: absolute; /* 绝对定位，覆盖在容器上 */
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1; /* 视频的 z-index 设置为较低值 */
      object-fit: cover; /* 填充整个容器 */
  }
  .card{
      position: relative; /* 相对定位，使 z-index 生效 */
      z-index: 2; 
      max-width: 480px;
      margin: 0 auto; 
  }
  </style>
  