<template>
  <div>
      <div class="prism-player" :id="playerId" :style="playStyle"></div>  
  </div>
</template>

<script>] // 视频的长宽比例，采用 width / height 得到，基本按照 16:9 获取
const ratio = 1.78
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
        var player = new Aliplayer({
            id: this.playerId,
            width: '100%',
            height: this.realHeight,
            autoplay: true,
            //支持播放地址播放,此播放优先级最高
            source : 'https://act.mcake.com/fangli/2018/pc/zhou-nian/video/zhounian-7.mp4',
            //播放方式二：点播用户推荐
            vid : '1e067a2831b641db90d570b6480fbc40', //必选参数。音视频ID。示例：1e067a2831b641db90d570b6480f****。
            playauth : '', //必选参数。音视频播放凭证。
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
            // 以下可选设置
            cover: 'http://guli.shop/photo/banner/1525939573202.jpg', // 封面
            qualitySort: 'asc', // 清晰度排序
            mediaType: 'video', // 返回音频还是视频
            autoplay: false, // 自动播放
            isLive: false, // 直播
            rePlay: false, // 循环播放
            preload: true,   //播放器自动加载
            controlBarVisibility: 'hover', // 控制条的显示方式：鼠标悬停
            controlBarVisibility: 'click',    /* The mode of the status bar, which is set to Click. */
            showBarTime: '10000',             /* The time period that you must wait before the status bar is hidden, which is set to 10,000 milliseconds. */
            components: [
            //   {
            //     name: 'MemoryPlayComponent',
            //     type: AliPlayerComponent.MemoryPlayComponent,
            //     args: [false, getTime, saveTime]
            // },
            {
              name: 'StartADComponent',
              type: AliPlayerComponent.StartADComponent,
              args: ['https://img.alicdn.com/tfs/TB1byi8afDH8KJjy1XcXXcpdXXa-1920-514.jpg', 'https://promotion.aliyun.com/ntms/act/videoai.html', 3]
            }, {
              name: 'PauseADComponent',
              type: AliPlayerComponent.PauseADComponent,
              args: ['https://img.alicdn.com/tfs/TB1byi8afDH8KJjy1XcXXcpdXXa-1920-514.jpg', 'https://promotion.aliyun.com/ntms/act/videoai.html']
            },
            // {
            //     name: 'AliplayerDanmuComponent', // 弹幕组件
            //     type: AliPlayerComponent.AliplayerDanmuComponent,
            //     args: [this.danmukuList]
            // },
          ],

        },function(player){
            console.log('播放器创建好了。')
        });
        This.player = player;
      },
      
    }
}
</script>

<style lang="postcss" scoped>
  @import 'https://g.alicdn.com/de/prismplayer/2.7.2/skins/default/aliplayer-min.css';
</style>