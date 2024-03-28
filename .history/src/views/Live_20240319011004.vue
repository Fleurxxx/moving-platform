<template>
  <div id="videomonitoring">
      
       <div>
          <el-card class="box-card">
              <div style="height:600px">
                  <div class="prism-player" :id="playerId" :style="playStyle"></div>
              </div>
          </el-card>
      </div>
  </div>
</template>
<script>
export default {
 
  // 在vue中怎么使用Aliplayer
      name: "Aliplayer",
      props: {
 
          playStyle: {
 
              type: String,
              default: ""
          },
          aliplayerSdkPath: {
 
          // Aliplayer 代码的路径
              type: String,
              default: "//g.alicdn.com/de/prismplayer/2.6.0/aliplayer-min.js"
          },
          autoplay: {
 
              type: Boolean,
              default: true
          },
          isLive: {
 
              type: Boolean,
              default: false
          },
          playsinline: {
  // H5是否内置播放，有的Android浏览器不起作用。
              type: Boolean,
              default: false
          },
          width: {
 
              type: String,
              default: "100%"
          },
          height: {
 
              type: String,
              default: "600px"
          },
          controlBarVisibility: {
  // 控制面板的实现，默认为‘hover’， 可选的值为：‘click’、‘hover’、‘always’。
              type: String,
              default: "hover"
          },
          useH5Prism: {
 
              type: Boolean,
              default: false
          },
          useFlashPrism: {
 
              type: Boolean,
              default: false
          },
          vid: {
 
              type: String,
              default: ""
          },
          playauth: {
 
              type: String,
              default: ""
          },
          source: {
 
              type: String,
              default: "rtmp://........./hls/shiyanshi"
              //这个换成你的视频地址，因为我做的是视频监控，在这里放的rtmp推流地址
          },
          cover: {
 
              type: String,
              default: ""
          },
          format: {
 
              type: String,
              default: "m3u8"
          },
          skinLayout: {
 
              type: Array,
              default: function() {
 
                  return [];
              }
          },
          x5_video_position: {
 
              type: String,
              default: "top"
          },
          x5_type: {
 
              type: String,
              default: "h5"
          },
          x5_fullscreen: {
 
