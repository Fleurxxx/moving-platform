<template>
  <div>
      <div class="prism-player" :id="playerId" :style="playStyle"></div>
      <!-- <div class="prism-player" id="player-con"  ></div>   -->
  </div>
</template>

<script>

// 视频的长宽比例，采用 width / height 得到，基本按照 16:9 获取
const ratio = 1.78;

export default {
  data() {
      return {
          playerId: "aliplayer_" + Math.random().toString(36).substr(2),
          source: 'http://bo.yangshibo.cn/haha/haha.flv?auth_key=1712769760-0-0-d53b7889c1979d105da595c26eaa4c8c',
          rtsFallbackSource: '降级地址，如HLS',
          scriptTagStatus: 0,
          isReload: false,
          instance: null,
          // 默认宽度]
          defaultWidth: 718,
          // 默认高度
          defaultHeight: 400,
          danmukuList: [{
              "mode": 1,
              "text": "哈哈",
              "stime": 1000,
              "size": 25,
              "color": 0xffffff
          }, {
              "mode": 1,
              "text": "前方高能",
              "stime": 2000,
              "size": 25,
              "color": 0xff0000
          }, {
              "mode": 1,
              "text": "太有实力了",
              "stime": 30000,
              "size": 25,
              "color": 0xff0000
          }, {
              "mode": 1,
              "text": "顺手一划",
              "stime": 10000,
              "size": 25,
              "color": 0x00c1de
          }],
          
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
  computed: {
    // 计算后得到的真实宽度
    realWidth () {
      // 如果从外部传入了高度，则按照外部高度乘以宽高比，获取真实宽度，否则按照默认高度计算
      return `${(this.height || this.defaultHeight) * ratio}px`
    },
    // 计算后得到真实高度
    realHeight () {
      // 如果从外部传入了宽度，则按照外部宽度乘以宽高比，获取真实高度，否则按照默认宽度计算
      return `${(this.width || this.defaultWidth) / ratio}px`
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    //从后端获取playAuth(视频播放凭证，根据videoId)
    async getPlayAuth() {
      // let res = await getAuth(this.videoId);
      // this.PlayAuth = res.data.data.PlayAuth;
    },
    //初始化aliplayer
    async init() {
        var This = this;
        if (This.player) {
          // 如果已经创建了，就销毁
          This.player.dispose();
        }
        // let res = await getAuth(This.videoId);
        // This.PlayAuth = res.data.data.PlayAuth;
        // 创建实例
        var player = new Aliplayer({
            id: this.playerId,
            source: this.source, //FLV 格式原画播放地址
            rtsFallbackSource: this.rtsFallbackSource,
            width: '100%',
            height: '500px',
            autoplay: true,
            isLive: true,
            rePlay: true,
            playsinline: true,
            skipRtsSupportCheck:false,
            // RTS 拉不到流重试的次数，默认 5，此参数建议设为 1，即重试 1 次后降级，可以减少降级等待时间
            liveRetry:1, //重连次数
            preload: true,
            controlBarVisibility: 'hover',
            useH5Prism: true,
            components: [
            {
                name: 'AliplayerDanmuComponent', // 弹幕组件
                type: AliPlayerComponent.AliplayerDanmuComponent,
                args: [this.danmukuList]
            },
          ],
        }, function(player) {
            player._switchLevel = 0;
            console.log('播放器创建了。');
        });
        This.player = player;

        // 监听降级事件
        this.player.on('rtsFallback', (event) => {
          console.log('Player fallback:', event.paramData.reason, event.paramData.fallbackUrl);
          // 可以在这里处理降级后的逻辑，比如切换到其他播放地址
          // event.paramData.reason 降级的原因
          // event.paramData.fallbackUrl 降级到的地址
        });
      },
    
  }
}
</script>

<style lang="postcss" scoped>
  @import 'https://g.alicdn.com/de/prismplayer/2.7.2/skins/default/aliplayer-min.css';
  ::v-deep .ali-danmuku-control .danmu-input input {
    padding: 0px 40px 10px 5px;
  }
</style>