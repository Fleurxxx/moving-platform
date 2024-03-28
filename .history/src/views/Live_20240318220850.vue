<template>
  <div>
    <div ref="player" id="player-con"></div>
  </div>
</template>
 
<script>
// 根据自己的请求js进行引入
import {
  getPlayParam,
  getStuPlayParam,
  getAuth,
  getURL,
  vodCount,
  records,
} from "@/utils/api2/course-detail.js";
export default {
  data() {
    return {
      PlayAuth: "",
      player: "",
    };
  },
  watch: {
    // 监听视频Id的变化
    async videoId(newVal, oldVal) {
      await this.getPlayAuth; //重新获取playAuth
      this.init(); // 监听变化初始化
    },
  },
  mounted() {
    this.init();
  },
  // 父组件传参
  props: {
    shikeId: {
      type: String,
      default: "",
    },
    videoId: {
      type: String,
      default: "",
    },
    mode: {
      type: Number,
      default: 0,
    },
    playSchedule: {
      type: Number,
      default: 0,
    },
    isHistory: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    //从后端获取playAuth(视频播放凭证，根据videoId)
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
  },
};
</script>
 
<style>

</style>