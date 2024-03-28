<template>
  <div>
    <div style="width: 8rem;height: 4rem" id="J_prismPlayer"></div>
    <div :id="['J_prismPlayer'+index]" style="width: 100%;height: 675px; margin: 20px auto 0;"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, defineComponent,nextTick, onBeforeMount, onMounted, onUnmounted, watchEffect, defineExpose, computed } from 'vue';
// var player = new Aliplayer({
//   id: 'J_prismPlayer',
//   width: '100%',
//   autoplay: false,
//   //支持播放地址播放,此播放优先级最高
//   source: 'https://outin-f6c3661ae52711eeaca900163e32a995.oss-cn-shanghai.aliyuncs.com/sv/53f8bc15-18e51c34489/53f8bc15-18e51c34489.mp4?Expires=1710777051&OSSAccessKeyId=LTAIxSaOfEzCnBOj&Signature=HGIH3477yoxalvBDouT8%2FxKl5jI%3D', 
//   //播放方式二：推荐
//   vid: '1e067a2831b641db90d570b6480fbc40',
//   playauth: '',
//   cover: 'http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png'
// });
var _video = document.querySelector('video');
player.on('play', function(e) {
  _video.removeEventListener('click', play);
  _video.addEventListener('click', pause);
});
player.on('pause', function(e) {
  _video.removeEventListener('click', pause);
  _video.addEventListener('click', play)
});
 
function play() {
  if (player) player.play();
}
 
function pause() {
  if (player) player.pause();
}

onMounted(() => {
  // 初始化表格的数据
  list()
  scrollTable()
})

var player = new Aliplayer({
    id: 'J_prismPlayer',
    source:'播放路径',
    width: '100%', 
    height: '450px',
    // 以下可选设置  
    isLive: false, // 直播
    rePlay: false, // 循环播放
    preload: true,  //播放器自动加载
    autoplay:true,  // 自动播放
    diagnosisButtonVisible:false,//是否显示检测按钮
    keyShortCuts:true,//是否启用快捷键
    keyFastForwardStep:5,//快进快退的时间长度
    controlBarVisibility: 'hover', // 控制条的显示方式：鼠标悬停
    
    }, function (player) {
    console.log('播放器创建成功')
});
</script>