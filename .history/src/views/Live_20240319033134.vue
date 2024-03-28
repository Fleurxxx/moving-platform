<template>
  <div>
      <div class="prism-player" :id="playerId" :style="playStyle"></div>
  </div>
</template>

<script>
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
      watch: {
    // 监听视频Id的变化
    async videoId(newVal, oldVal) {
      await this.getPlayAuth; //重新获取playAuth
      this.init(); // 监听变化初始化
    },
  },
      mounted() {
              var player = new Aliplayer({
                  id: this.playerId,
                  width: '100%',
                  autoplay: true,
                  //支持播放地址播放,此播放优先级最高
                  source : 'https://act.mcake.com/fangli/2018/pc/zhou-nian/video/zhounian-7.mp4',
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