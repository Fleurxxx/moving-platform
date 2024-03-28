<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-25 16:44:15
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-25 17:49:55
 * @FilePath: \moving-platform\src\component\Live.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="prism-player" ref="playerCon"></div>
  </template>
  
  <script lang="ts">
  import { onMounted } from 'vue';
  
//   const { Aliplayer } = window;
  
  onMounted(() => {
    const player = new Aliplayer({
      id: 'player-con',
      source: 'http://yangshibo.cn/ysl/live.flv?auth_key=1711355216-0-0-117394f2347011b44666c29b83c88ad7',
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
  
    const playerCon = document.getElementById('player-con');
    player.attach(playerCon); // 将播放器绑定到指定的 DOM 元素
  });

  function info(){
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
  }
  </script>
  
  <style lang="postcss" scoped>
  @import 'https://g.alicdn.com/de/prismplayer/2.7.2/skins/default/aliplayer-min.css';
</style>