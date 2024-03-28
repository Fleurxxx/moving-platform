<template>
  <div class="header">
    <video loop autoplay class="background">
        <source src="@/assets/video/video1.mp4" type="video/mp4">
    </video>
    <el-card class="card" >
        <Video class="card-video" :height="6" :width="12" :url="url"/>
    </el-card>
  </div>
  <div>
    container
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import Video from '@/component/Video'

const store = useStore();
const route = useRoute();
const router = useRouter();
const data = reactive({})
const url = ref('https://outin-f6c3661ae52711eeaca900163e32a995.oss-cn-shanghai.aliyuncs.com/sv/1204624-18e761b8dde/1204624-18e761b8dde.mp4?Expires=1711466788&OSSAccessKeyId=LTAIxSaOfEzCnBOj&Signature=cVQFGUIy4sBO28Ify6JE%2FXM9DpA%3D');
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
  .header{
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
      z-index: 1;
      object-fit: cover; /* 填充整个容器 */
  }
  .card{
      position: relative; 
      z-index: 2; 
      border: 1px solid #00ae8d;
      border-radius: 15px;
      padding: 15px 30px 30px 30px;
      background-color: #18133c;
      box-shadow: inset 0 0 4px 1px #00ae8d;
  }

</style>