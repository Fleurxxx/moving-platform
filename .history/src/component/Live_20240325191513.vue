<template>
    <div>
        ?????????
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
            scriptTagStatus: 0,
            isReload: false,
            instance: null,
              // 默认宽度
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
                "text": "灵魂歌手",
                "stime": 30000,
                "size": 25,
                "color": 0xff0000
            }, {
                "mode": 1,
                "text": "顺手一划",
                "stime": 10000,
                "size": 25,
                "color": 0x00c1de
            }]
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
        const player = new window.Aliplayer({
            id: this.playerId,
            source: 'http://yangshibo.cn/ysl/live.flv?auth_key=1711363772-0-0-d8c4588bcb991393908d96d2b183ee22', //FLV 格式原画播放地址
            width: '100%',
            height: '500px',
            autoplay: true,
            isLive: false,
            rePlay: true,
            playsinline: true,
            preload: true,
            controlBarVisibility: 'hover',
            useH5Prism: true,
        }, function(player) {
            player._switchLevel = 0;
            console.log('播放器创建了。');
        });
        This.player = player;
      },
      
    }
  }
  </script>
  
  <style lang="postcss" scoped>
    @import 'https://g.alicdn.com/de/prismplayer/2.7.2/skins/default/aliplayer-min.css';
  </style>