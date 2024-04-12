<template>
  <div>
      <div class="prism-player" :id="playerId" :style="playStyle"></div> 
      <!-- 开通vip -->
      <el-dialog v-model="dialogTableVisible"  width="800">
        <!-- <img class="gg_img" src="@/assets/image/common/广告.png" /> -->
        <span>是否开通会员?</span>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取消</el-button>
            <el-button type="primary" @click="openVIP">
              开通成功
            </el-button>
          </div>
        </template>
      </el-dialog>
      <!-- <div id="endPreviewTemplate">
        <div class="vip_limit_content">
          <div class="vip_limit_wrap">
            <p class="title">试看结束，更多内容请先充值</p>
            <div class="vip_limit_button_box">
              <a class="vip_limit_btn">成为 VIP</a>
            </div>
            <div class="vip_limit_close"><span class="vip_limit_close_btn">x</span></div>
          </div>
        </div>
      </div> -->
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
          //会员对话框
          dialogTableVisible:false,
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
          },
          {
            "mode": 1,
            "text": "test",
            "stime": 1000,
            "size": 25,
            "color": 0xffffff
          }, {
            "mode": 1,
            "text": "test",
            "stime": 2000,
            "size": 25,
            "color": 0xff0000
          }, {
            "mode": 1,
            "text": "test",
            "stime": 30000,
            "size": 25,
            "color": 0xff0000
          }, {
            "mode": 1,
            "text": "test",
            "stime": 4000,
            "size": 25,
            "color": 0x00c1de
          }, {
            "mode": 1,
            "text": "test",
            "stime": 5000,
            "size": 25,
            "color": 0x00c1de
          }, {
            "mode": 1,
            "text": "test",
            "stime": 10000,
            "size": 25,
            "color": 0x00c1de
          }, {
            "mode": 1,
            "text": "test",
            "stime": 1000,
            "size": 25,
            "color": 0xffffff
          }, {
            "mode": 1,
            "text": "test",
            "stime": 1000,
            "size": 25,
            "color": 0xffffff
          }, {
            "mode": 1,
            "text": "test",
            "stime": 1000,
            "size": 25,
            "color": 0xffffff
          }, {
            "mode": 1,
            "text": "test",
            "stime": 1000,
            "size": 25,
            "color": 0xffffff
          }, {
            "mode": 1,
            "text": "test",
            "stime": 1000,
            "size": 25,
            "color": 0xffffff
          }, {
            "mode": 1,
            "text": "test",
            "stime": 1000,
            "size": 25,
            "color": 0xffffff
          }, {
            "mode": 1,
            "text": "test",
            "stime": 1000,
            "size": 25,
            "color": 0xffffff
          }, {
            "mode": 1,
            "text": "test",
            "stime": 1000,
            "size": 25,
            "color": 0xffffff
          }, {
            "mode": 1,
            "text": "test",
            "stime": 1000,
            "size": 25,
            "color": 0xffffff
          }, {
            "mode": 1,
            "text": "test",
            "stime": 1000,
            "size": 25,
            "color": 0xffffff
          }, {
            "mode": 1,
            "text": "test",
            "stime": 1000,
            "size": 25,
            "color": 0xffffff
          }, {
            "mode": 1,
            "text": "test",
            "stime": 1000,
            "size": 25,
            "color": 0xffffff
          }, {
            "mode": 1,
            "text": "test",
            "stime": 1000,
            "size": 25,
            "color": 0xffffff
          }
        ]
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
    openVIP(){
      videoAd.closeVideoAd()
      centerDialogVisible = false;
    },
    //视频广告
    videoAdClose: function (videoAd) {
      videoAd.pauseVideoAd()
      // this.dialogTableVisible = true
      var result = confirm('确定开通会员关闭广告吗？')
      if (result) {
        /* Register the skip event to skip the ad. */
        videoAd.closeVideoAd()
      } else {
        /* Register the play event to play the ad. */
        videoAd.playVideoAd()
      }
    },
    manyVideoAdClose: function (manyVideoAd) {
      manyVideoAd.pauseManyVideoAd()
        var result = confirm('确定开通会员关闭广告吗？')
        if (result) {
          /* Register the skip event to skip the ad. */
          manyVideoAd.closeManyVideoAd()
        } else {
          /* Register the play event to play the ad. */
          manyVideoAd.playManyVideoAd()
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
            //方式一：单一数据源的非加密视频
            //支持播放地址播放,此播放优先级最高,此种方式不能播放加密视频
            source: this.url,
            source: JSON.stringify({"HD":"https://player.alicdn.com/file/official-video/aliyun-sample.m3u8", "SD":"https://player.alicdn.com/file/official-video/aliyun-sample.m3u8"}),
            // cover: 'https://img.alicdn.com/tps/TB1EXIhOFXXXXcIaXXXXXXXXXXX-760-340.jpg',
            //播放方式二：点播用户推荐
            // vid : '200d2578ec3571eebff96632b68f0102', //必选参数。音视频ID。示例：1e067a2831b641db90d570b6480f****。
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
            autoplay: true, // 自动播放(false才会显示封面)
            isLive: false, // 视频
            // rePlay: true, // 循环播放
            preload: false,   //播放器自动加载,，目前仅h5可用。
            playsinline: true, // H5是否内置播放，有的Android浏览器不起作用。
            useH5Prism: true, //     指定使用H5播放器。
            isVBR: true,
            controlBarVisibility: 'hover', // 控制条的显示方式：鼠标悬停
            // controlBarVisibility: 'click',    //状态栏的模式，设置为单击
            showBarTime: '10000',    //在隐藏状态栏之前必须等待的时间段，该时间段设置为10,000毫秒
            // autoPlayDelay: 5, //延时播放
            // autoPlayDelayDisplayText: '请等待...',
            //视频打点
            progressMarkers:[{
              offset: 60,
              isCustomized:true,
              coverUrl: 'https://alivc-demo-vod.aliyuncs.com/image/cover/9A3F562E595E4764AD1DD546FA52C6E5-6-2.png',
              title: 'test title',
              describe: 'test string',
            }, {
              offset:30,
              isCustomized:true,
              coverUrl: 'https://alivc-demo-vod.aliyuncs.com/image/cover/1E7F402241CD4C0F94AD2BBB5CCC3EC7-6-2.png',
              title: '技术',
              describe: '技术创造奇迹',
            }, {
              offset:180,
              isCustomized:true,
              coverUrl: 'https://alivc-demo-vod.aliyuncs.com/image/cover/553AEA01161342C8A2B1756E83B69B5B-6-2.png',
              title: '技术',
              describe: '技术创造奇迹',
            }, {
              offset:220,
              isCustomized:true,
              coverUrl: 'https://alivc-demo-vod.aliyuncs.com/image/cover/553AEA01161342C8A2B1756E83B69B5B-6-2.png',
              title: '好吃',
              describe: '看起来很好吃',
            }],
            //截图
            extraInfo:{
              crossOrigin:"anonymous"
            },
            skinLayout:[
              {name: "bigPlayButton", align: "blabs", x: 30, y: 80},
              {
                name: "H5Loading", align: "cc"
              },
              {name: "errorDisplay", align: "tlabs", x: 0, y: 0},
              {name: "infoDisplay"},
              {name:"tooltip", align:"blabs",x: 0, y: 56},
              {name: "thumbnail"},
              {
                name: "controlBar", align: "blabs", x: 0, y: 0,
                children: [
                  {name: "progress", align: "blabs", x: 0, y: 44},
                  {name: "playButton", align: "tl", x: 15, y: 12},
                  {name: "timeDisplay", align: "tl", x: 10, y: 7},
                  {name: "fullScreenButton", align: "tr", x: 10, y: 12},
                  {name:"subtitle", align:"tr",x:15, y:12},
                  {name:"setting", align:"tr",x:15, y:12},
                  {name: "volume", align: "tr", x: 15, y: 10},
                  {name: "snapshot", align: "tr", x: 5, y: 12},
                ]
              }
            ],
            //截图水印
            snapshotWatermark:{
              left:"100",
              top:"100",
              text:"YSL专属水印",
              font:"italic bold 48px 宋体",
              strokeColor:"white",
              fillColor:'green'
            },
            components: [
            // {//倍速
            //   name: 'RateComponent',
            //   type: AliPlayerComponent.RateComponent
            // },
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
            // {
            //     name: 'AliplayerDanmuComponent', // 弹幕组件
            //     type: AliPlayerComponent.AliplayerDanmuComponent,
            //     args: [this.danmukuList]
            // },
            // {
            //   name: 'QualityComponent',  //清晰度
            //   type: AliPlayerComponent.QualityComponent,
            //   args: [function(definition,desc) {
            //     console.log(definition + '-----' + desc)
            //   }]
            // },
            // {   //视频打点
            //   name: 'ProgressComponent',
            //   type: AliPlayerComponent.ProgressComponent
            // },
            // {   //字幕
            //   name: 'CaptionComponent',
            //   type: AliPlayerComponent.CaptionComponent
            // },
            // {   //试看
            //   name: 'PreviewVodComponent',
            //   type: AliPlayerComponent.PreviewVodComponent,
            //    /**
            //    * 试看组件共有三个参数: previewDuration, previewEndHtml, previewBarHtml
            //    * previewDuration: 试看时长, 单位为秒, 如果不需要开启试看的话, 设置为0, 当开启会员或购买之后设置为0!
            //    * previewEndHtml: 试看结束之后, 出现在播放器中间的 Dom 字符串或者父节点的 '#' + id, 默认为 null
            //    * previewBarHtml: 播放器左下角, 提示试看时长之后的 Dom 字符串或者父节点的 '#' + id, 同样可自定义样式, 默认为 null
            //    * tips: previewEndHtml, previewBarHtml 可以像例子中的那样, <script type="text/template" id="endPreviewTemplate"> 在 script 标签中插入html
            //    * tips: previewEndHtml, previewBarHtml 也可以直接使用Dom字符串, 推荐使用 es6 的模板字符串可以很方便地插入Dom字符串
            //    */
            //   args: [60, '#endPreviewTemplate', `<a href="https://www.aliyun.com/product/vod" class="vip-join">开通会员</a> 观看完整视频`]
            // },
            // {
            //   name: 'MemoryPlayComponent', //记忆播放
            //   type: AliPlayerComponent.MemoryPlayComponent,
            //   /* Set the first parameter to true to enable auto play. The default is false. */
            //   args:[true,this.getTime,this.saveTime]
            // },
            // {
            //   name: 'StartADComponent',  //图片广告
            //   type: AliPlayerComponent.StartADComponent,
            //   args: ['https://img.alicdn.com/tfs/TB1byi8afDH8KJjy1XcXXcpdXXa-1920-514.jpg', 'https://promotion.aliyun.com/ntms/act/videoai.html', ]
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
            //   args: ['https://alivc-demo-cms.alicdn.com/video/videoAD.mp4', 'https://et.aliyun.com/brain/city', this.videoAdClose, 'VIP关闭广告']
            // }
            {
              name: 'ManyVideoADComponent', //多视频广告
              type: AliPlayerComponent.ManyVideoADComponent,
              /* The video ad component has these parameters: adVideoSource, adLink, adCloseFunction, and closeText
              * adVideoSource {@String Required. The URL of the video ad. }
              * adLink {@String Required. The link of the ad page.}
              * adCloseFunction {@Function Optional. The click event handler for skipping the ad. The default action is skip ad.}
              * closeText {@String Optional. The text of the skip ad button. The default is 'Skip Ad'.}
              */
              args: [  [
                {adVideo:'https://alivc-demo-cms.alicdn.com/video/videoAD.mp4',adVideoLink:'https://www.aliyun.com/product/live'},
                {adVideo:'https://player.alicdn.com/resource/player/qupai.mp4',adVideoLink:'https://www.aliyun.com/product/live2'},
                {adVideo:'https://player.alicdn.com/video/guanggao.mp4',adVideoLink:'https://www.aliyun.com/product/live3'}
              ], this.manyVideoAdClose, 'VIP关闭广告']
            }
          ],

        },function(player){
            console.log('播放器创建好了。')
            /* Register the sourceloaded of the player, query the resolution of the video, invoke the resolution component, and call the setCurrentQuality method to set the resolution. */
            //清晰度
            player.on('sourceloaded', function(params) {
              var paramData = params.paramData
              var desc = paramData.desc
              var definition = paramData.definition
              player.getComponent('QualityComponent').setCurrentQuality(desc, definition)
            })
            //截图
            player.on('snapshoted', function (data) {
              // console.log(data.paramData.time);
              // console.log(data.paramData.base64);
              // console.log(data.paramData.binary);
              var pictureData = data.paramData.base64
              var downloadElement = document.createElement('a')
              downloadElement.setAttribute('href', pictureData)
              var fileName = 'Aliplayer' + Date.now() + '.png'
              downloadElement.setAttribute('download', fileName)
              downloadElement.click()
              pictureData = null
            })
            var vip_limit_btn = document.querySelector('.vip_limit_btn')
            vip_limit_btn.addEventListener('click', function() {
              confirm('确认开通会员吗?')
            })

            var close_btn = document.querySelector('.vip_limit_close_btn')
            close_btn.addEventListener('click', function() {
                /* Call the closePreviewLayer method to close the dialog box */
                player.getComponent('PreviewVodComponent').closePreviewLayer()
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
  ::v-deep .el-dialog .el-dialog__body {
      padding: 0px !important;
  }

  .gg_img{
    width:100%;
    height: 100%;
  }

  .vip-join {
    color: #00c1de;
  }

  .vip_limit_content {
    display: flex;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .vip_limit_content .title {
    font-size: 0.32rem;
    line-height: 36px;
    color: #fff;
    text-align: center;
    width: 100%;
  }

  .vip_limit_button_box {
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    margin-top: 0.4rem;
  }

  .vip_limit_btn {
    display: inline-block;
    min-width: 150px;
    height:80px;
    line-height: 80px;
    position: relative;
    background: #f60;
    padding: 0 35px;
    margin: 0px 5px 20px 5px;
    border-radius: 38px;
    font-size: 0.22rem;
    color: #623A0C;
    text-align: center;
    background-image: linear-gradient(-135deg, #FBE8A8 0%, #F8E7AC 15%, #E2C078 100%);
    cursor: pointer;
  }

  .vip_limit_close {
    text-align: center;
  }
  .vip_limit_close span {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 36px;
    background: rgba(165, 165, 165, 0.54);
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
  }
</style>