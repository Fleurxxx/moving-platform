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
      },mounted() {
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
        /从后端获取playAuth(视频播放凭证，根据videoId)
    async getPlayAuth() {
      let res = await getAuth(this.videoId);
      this.PlayAuth = res.data.data.PlayAuth;
    },
    //初始化aliplayer
    async init() {
        var This = this;
        if (This.player) {
          // 如果已经创建了，就销毁
          This.player.dispose();
        }
        let res = await getAuth(This.videoId);
        This.PlayAuth = res.data.data.PlayAuth;
        // 创建实例
        var player = new Aliplayer(
          {
            id: "player-con",
            vid: This.videoId, //必选参数。音视频ID。示例：1e067a2831b641db90d570b6480f****。
            playauth: This.PlayAuth, //必选参数。音视频播放凭证。
            width: "100%",
            height: "500px",
            //   cover:
            //     "https://img.alicdn.com/tps/TB1EXIhOFXXXXcIaXXXXXXXXXXX-760-340.jpg", // 封面图片
            /* To set an album art, you must set 'autoplay' and 'preload' to 'false' */
            autoplay: false,
            preload: false,
            isLive: false,
          },
          function (player) {
            // 可以在这里对player实例进行操作
            console.log("The player is created");
            console.log(player.getCurrentTime());
            console.log(player.getDuration());
          }
        );
        This.player = player;
      },
  }
</script>

<style lang="postcss" scoped>
  @import 'https://g.alicdn.com/de/prismplayer/2.7.2/skins/default/aliplayer-min.css';
</style>