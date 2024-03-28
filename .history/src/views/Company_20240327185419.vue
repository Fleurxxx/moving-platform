<template>
  <div class="top">
    <el-card class="card" >
        <Video class="card-video" :height="6" :width="12" :url="url"/>
    </el-card>
  </div>
  <div class="container">

  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { VideoLinkUtils } from '@/utils/links.ts'; 

const videoUtils = new VideoLinkUtils();
const store = useStore();
const route = useRoute();
const router = useRouter();
const data = reactive({})
const url = ref('https://outin-f6c3661ae52711eeaca900163e32a995.oss-cn-shanghai.aliyuncs.com/sv/1204624-18e761b8dde/1204624-18e761b8dde.mp4?Expires=1711466788&OSSAccessKeyId=LTAIxSaOfEzCnBOj&Signature=cVQFGUIy4sBO28Ify6JE%2FXM9DpA%3D');

onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
    videoUtils.addVideoLink("Video 1", "https://example.com/video1.mp4");
    videoUtils.addVideoLink("Video 2", "https://example.com/video2.mp4");
    
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
.top{
    width:100%;
    height: 70vh;
    background-image: url('@/assets/image/common/1456345283546.gif');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
.container{

}
</style>