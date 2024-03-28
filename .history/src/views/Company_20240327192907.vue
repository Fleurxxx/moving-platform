<template>
  <div class="top">
    <el-card class="card" >
        <div>

        </div>
        
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
import Video from '@/component/Video'

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
    videoUtils.printAllVideoLinks();
    console.log("Video 1 URL:", videoUtils.getVideoLink("Video 1"));
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
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; /* 相对定位，以便设置子元素的 z-index */
}
.card-content{
    
}
.card-content{
    
    img{
        width:3rem;
        margin-left: -0.4rem;
    }
}
.card{
    position: relative; 
    z-index: 2; 
    border: 1px solid #00ae8d;
    border-radius: 15px;
    padding: 15px 30px 30px 30px;
    background-color: #18133c;
    box-shadow: inset 0 0 4px 1px #00ae8d;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.container{

}
</style>