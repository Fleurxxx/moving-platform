<template>
  <div>
      <div class="prism-player" :id="playerId" :style="playStyle"></div>
      <div class="fl">分享到：</div> 
      <div @click="shareTo('qzone')">     
          <img src="http://zixuephp.net/static/images/qqzoneshare.png" width="30"> 
      </div> 
      <div @click="shareTo('qq')">     
          <img src="http://zixuephp.net/static/images/qqshare.png" width="32"> 
      </div> 
      <div @click="shareTo('sina')">     
          <img src="http://zixuephp.net/static/images/sinaweiboshare.png" width="36"> 
      </div> 
      <div @click="shareTo('wechat')">     
          <img src="http://zixuephp.net/static/images/wechatshare.png" width="32"> 
      </div>
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
      // 在mounted钩子函数中获取DOM元素的内容
      this.ftit = document.querySelector('.pctitle')?.textContent || '';
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
            preload: true,
            controlBarVisibility: 'hover', // 控制条的显示方式：鼠标悬停

        },function(player){
            console.log('播放器创建好了。')
        });
        This.player = player;
      },
      shareTo(stype){
        let ftit = '';
        let flink = '';
        let lk = '';
        //获取文章标题
        ftit = document.querySelector('.pctitle').textContent;
        // 获取网页中内容的第一张图片
        this.flink = document.querySelector('.pcdetails img')?.getAttribute('src') || '';
        if (!flink) {
          lk = 'http://' + window.location.host + '/static/images/logo.png';
        } else if (flink.indexOf('/uploads/') !== -1) {
          lk = 'http://' + window.location.host + flink;
        } else if (flink.indexOf('ueditor') !== -1) {
          lk = flink;
        }
        //qq空间接口的传参
        if (stype === 'qzone') {
          window.open(`https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${document.location.href}?sharesource=qzone&title=${ftit}&pics=${lk}&summary=${document.querySelector('meta[name="description"]').getAttribute('content')}`);
        }
        //新浪微博接口的传参
        if (stype === 'sina') {
          window.open(`http://service.weibo.com/share/share.php?url=${document.location.href}?sharesource=weibo&title=${ftit}&pic=${lk}&appkey=2706825840`);
        }
        //qq好友接口的传参
        if (stype === 'qq') {
          window.open(`http://connect.qq.com/widget/shareqq/index.html?url=${document.location.href}?sharesource=qzone&title=${ftit}&pics=${lk}&summary=${document.querySelector('meta[name="description"]').getAttribute('content')}&desc=php自学网，一个web开发交流的网站`);
        }
        //生成二维码给微信扫描分享
        if (stype === 'wechat') {
          window.open('inc/qrcode_img.php?url=http://zixuephp.net/article-1.html');
        }
      }
    }
}
</script>

<style lang="postcss" scoped>
  @import 'https://g.alicdn.com/de/prismplayer/2.7.2/skins/default/aliplayer-min.css';
</style>