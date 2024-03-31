<template>
  <div>
      <div class="prism-player" :id="playerId" :style="playStyle"></div> 
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
  props: {
    url: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height:{
      type: Number,
      required: true,
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
      return `${(this.height || this.defaultHeight) * ratio}rem`
    },
    // 计算后得到真实高度
    realHeight () {
      // 如果从外部传入了宽度，则按照外部宽度乘以宽高比，获取真实高度，否则按照默认宽度计算
      return `${(this.width || this.defaultWidth) / ratio}rem`
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    //记忆播放
    saveTime: function (memoryVideo, currentTime) {
      localStorage.setItem(memoryVideo, currentTime);
    },
    getTime: function (memoryVideo) {
      //return返回的是自定义起播时间 
      return localStorage.getItem(memoryVideo);
    },
    //视频广告
    videoAdClose: function (videoAd) {
      /* Register the pause event to pause the ad. */
      videoAd.pauseVideoAd()
      var result = confirm('确定开通会员关闭广告吗？')
      if (result) {
        /* Register the skip event to skip the ad. */
        videoAd.closeVideoAd()
      } else {
        /* Register the play event to play the ad. */
        videoAd.playVideoAd()
      }
    },
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
        let player = new Aliplayer({
            id: this.playerId,
            width: this.realWidth,
            height: this.realHeight,
            autoplay: true,
            //方式一：单一数据源的非加密视频
            //支持播放地址播放,此播放优先级最高,此种方式不能播放加密视频
            // source: this.url,
            cover: 'https://img.alicdn.com/tps/TB1EXIhOFXXXXcIaXXXXXXXXXXX-760-340.jpg',
            //播放方式二：点播用户推荐
            vid : '1e067a2831b641db90d570b6480fbc40', //必选参数。音视频ID。示例：1e067a2831b641db90d570b6480f****。
            // playauth : '', //必选参数。音视频播放凭证。
            // encryptType: 1, //当播放私有加密流时需要设置            
            //播放方式三：仅MPS用户使用
            // vid : '1e067a2831b641db90d570b6480fbc40',
            // accId: '',
            // accSecret: '',
            // stsToken: '',
            // domainRegion: '',
            // authInfo: '',
            //播放方式四：使用STS方式播放
            // vid : '1e067a2831b641db90d570b6480fbc40',
            // accessKeyId: '',
            // securityToken: '',
            // accessKeySecret: '',
            // isLive: true,
            // getCurrentTime: _this.aaaa
            // 以下可选设置
            qualitySort: 'asc', // 清晰度排序
            mediaType: 'video', // 返回音频还是视频
            autoplay: false, // 自动播放(false才会显示封面)
            isLive: false, // 直播
            rePlay: true, // 循环播放
            preload: false,   //播放器自动加载,，目前仅h5可用。
            playsinline: true, // H5是否内置播放，有的Android浏览器不起作用。
            useH5Prism: true, //     指定使用H5播放器。
            isVBR: true,
            controlBarVisibility: 'hover', // 控制条的显示方式：鼠标悬停
            // controlBarVisibility: 'click',    //状态栏的模式，设置为单击
            showBarTime: '10000',    //在隐藏状态栏之前必须等待的时间段，该时间段设置为10,000毫秒
            //视频打点
            progressMarkers:[{
              offset: 30,
              isCustomized:true,
              coverUrl: 'https://alivc-demo-vod.aliyuncs.com/image/cover/9A3F562E595E4764AD1DD546FA52C6E5-6-2.png',
              title: 'test title',
              describe: 'test string',
            }, {
              offset:50,
              isCustomized:true,
              coverUrl: 'https://alivc-demo-vod.aliyuncs.com/image/cover/1E7F402241CD4C0F94AD2BBB5CCC3EC7-6-2.png',
              title: 'test title',
              describe: 'test string',
            }, {
              offset:150,
              isCustomized:true,
              coverUrl: 'https://alivc-demo-vod.aliyuncs.com/image/cover/553AEA01161342C8A2B1756E83B69B5B-6-2.png',
              title: 'test title',
              describe: 'test string',
            }, {
              offset:120,
              isCustomized:true,
              coverUrl: 'https://alivc-demo-vod.aliyuncs.com/image/cover/553AEA01161342C8A2B1756E83B69B5B-6-2.png',
              title: 'test title',
              describe: 'test string',
            }],
            components: [
            // {
            //     name: 'BulletScreenComponent', // 跑马灯组件
            //     type: AliPlayerComponent.BulletScreenComponent,
            //     /** 跑马灯组件三个参数 text, style, bulletPosition
            //     * text: 跑马灯文字内容
            //     * style: 跑马灯样式
            //     * bulletPosition: 跑马灯位置, 可选的值为 'top' (顶部), 'bottom' (底部), 'random' (随机), 不传值默认为 'random'
            //     */
            //     args: ['欢迎观看', { fontSize: '0.18rem', color: '#fff' }, 'random']
            // },
            {
                name: 'AliplayerDanmuComponent', // 弹幕组件
                type: AliPlayerComponent.AliplayerDanmuComponent,
                args: [this.danmukuList]
            },
            {
              name: 'QualityComponent',  //清晰度
              type: AliPlayerComponent.QualityComponent,
              args: [function(definition,desc) {
                console.log(definition + '-----' + desc)
              }]
            },
            {   //视频打点
              name: 'ProgressComponent',
              type: AliPlayerComponent.ProgressComponent
            }
            // {
            //   name: 'MemoryPlayComponent', //记忆播放
            //   type: AliPlayerComponent.MemoryPlayComponent,
            //   /* Set the first parameter to true to enable auto play. The default is false. */
            //   args:[true,this.getTime,this.saveTime]
            // },
            // {
            //   name: 'StartADComponent',  //图片广告
            //   type: AliPlayerComponent.StartADComponent,
            //   args: ['https://img.alicdn.com/tfs/TB1byi8afDH8KJjy1XcXXcpdXXa-1920-514.jpg', 'https://promotion.aliyun.com/ntms/act/videoai.html', 3]
            // }, 
            // {
            //   name: 'PauseADComponent',
            //   type: AliPlayerComponent.PauseADComponent,
            //   args: ['https://img.alicdn.com/tfs/TB1byi8afDH8KJjy1XcXXcpdXXa-1920-514.jpg', 'https://promotion.aliyun.com/ntms/act/videoai.html']
            // },
            // {
            //   name: 'VideoADComponent', //视频广告
            //   type: AliPlayerComponent.VideoADComponent,
            //   /* adVideoSource, adLink, adCloseFunction, closeText
            //    * adVideoSource, String类型, 广告视频的视频地址
            //    * adLink, String 类型, 广告视频的链接地址
            //    * adCloseFunction, 函数, 关闭广告的点击事件处理函数, 可选参数, 不传则默认关闭广告视频
            //    * closeText, String 类型, 关闭广告的文字内容, 可选参数, 不传则默认为 '关闭广告'
            //    * adCloseFunction 的参数就是视频广告本身, 可以调用视频广告暴露的接口, 一下实例是点击关闭广告之后弹出 confirm 的相关操作
            //   */
            //   args: ['https://player.alicdn.com/ad/citybrain.mp4', 'https://et.aliyun.com/brain/city', this.videoAdClose, 'Skip Ad']
            // }
          ],

        },function(player){
            console.log('播放器创建好了。')
            /* Register the sourceloaded of the player, query the resolution of the video, invoke the resolution component, and call the setCurrentQuality method to set the resolution. */
            player.on('sourceloaded', function(params) {
              var paramData = params.paramData
              var desc = paramData.desc
              var definition = paramData.definition
              player.getComponent('QualityComponent').setCurrentQuality(desc, definition)
            })
        });
        This.player = player;
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