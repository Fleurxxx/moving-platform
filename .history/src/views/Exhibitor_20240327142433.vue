<template>
  <div class="header">
    <video loop autoplay class="background">
        <source src="@/assets/video/video1.mp4" type="video/mp4">
    </video>
    <el-card class="card" >
        <Video class="card-video" :height="6" :width="12" :url="url"/>
    </el-card>
  </div>
  <div class="container">
    <div class="container-box">
      <div class="little-title">
        <img src="@/assets/image/common/展商风采.png" />
      </div>
      <el-card >
        <div class="info-card">
          <div class="info-img"
            <img src="@/assets/image/common/0240326234406.png" />
          </div>
          <div class="info-content">
            <p>云上展厅</p>
            <p>本次展览采取云上展厅的方式，通过视频、图片、文字等方式，以三维呈现，虚拟逛展的视觉效果的方式在互联网展示关键信息基础设施保护、网络安全黑科技、安恒信息展区等当前网络安全创新成果。云上展厅将持续在网络展示，并不断丰富网络安全意识教育、网络安全前沿科技等素材内容，打造长久在线网络安全展示平台。云上展厅为其他参展商提供虚拟展区接口，将其他参展商的参展内容链接到本平台。</p>
          </div>
        </div>
        
      </el-card>
    </div>
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
.container{
  width: 100%;
  padding-bottom: 20px;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position-y: bottom;
  background-image: url('@/assets/image/common/list_bg_image.png');
}
.container-box{
  padding: 1rem 3rem;
}
.little-title{
  height: 1.8rem;
  display: flex;
  justify-content: left;
  img{
    margin-left: -3%;
    height: 1.4rem;
  }
}
.info-card{
  display:flex;
  flex-direction:row-reverse;
  justify-content:space-between;
  img{
    width:7rem;
    cursor: pointer;
    transition: transform 0.3s ease; 
  }
  &:hover img {
        transform: scale(1.1); /* 鼠标悬停时放大1.1倍 */
    }
}
.info-content{
  margin: 0.2rem;
  p:first-child{
    // display: inline-block;
    font-size:0.6rem;
    line-height: 1.2rem;
    
  }
  p:nth-child(2){
    color: rgba(0, 0, 0, .6);
    line-height: 0.32rem;
    font-size:0.2rem;
    text-indent:2em; 
  }
}
</style>