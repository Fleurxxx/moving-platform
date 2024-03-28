<template>
  <div>
      <div class="prism-player" :id="playerId" :style="playStyle"></div>
  </div>
</template>

<script setup lang="ts">
  export default {
      data() {
          return {
              playerId: "aliplayer_" + Math.random().toString(36).substr(2),
              scriptTagStatus: 0,
              isReload: false,
              instance: null
          }
      },
      created() {
          
      },
      mounted() {
              var player = new Aliplayer({
                  id: this.playerId,
                  width: '100%',
                  autoplay: true,
                  //支持播放地址播放,此播放优先级最高
                  source : 'https://outin-f6c3661ae52711eeaca900163e32a995.oss-cn-shanghai.aliyuncs.com/sv/53f8bc15-18e51c34489/53f8bc15-18e51c34489.mp4?Expires=1710791366&OSSAccessKeyId=LTAIxSaOfEzCnBOj&Signature=47fe3DUIVmCdgDUp0MHMkdhjmpM%3D',
                  //播放方式二：点播用户推荐
                  vid : '1e067a2831b641db90d570b6480fbc40',
                  playauth : '',
                  cover: 'http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png',            
                  //播放方式三：仅MPS用户使用
                  vid : '1e067a2831b641db90d570b6480fbc40',
                  accId: '',
                  accSecret: '',
                  stsToken: '',
                  domainRegion: '',
                  authInfo: '',
                  //播放方式四：使用STS方式播放
                  vid : '1e067a2831b641db90d570b6480fbc40',
                  accessKeyId: '',
                  securityToken: '',
                  accessKeySecret: '',
                  // isLive: true,
                  // getCurrentTime: _this.aaaa
              },function(player){
                  console.log('播放器创建好了。')
              });
      },
      methods: {
           
      },
  }
</script>

<style lang="postcss" scoped>
  @import 'https://g.alicdn.com/de/prismplayer/2.7.2/skins/default/aliplayer-min.css';
</style>