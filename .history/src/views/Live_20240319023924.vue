<template>
  <div id="J_prismPlayer"></div>
</template>
 
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Aliplayer from 'aliplayer';
 
export default defineComponent({
  name: 'AliplayerComponent',
  setup() {
    const player = ref<null | Aliplayer.Player>(null);
 
    onMounted(() => {
      const options = {
        // Aliplayer配置参数
        "id": "J_prismPlayer",
        "autoplay": false,
        "cover": "http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png",
        "vid": "视频ID",
        // 更多配置参数...
      };
 
      player.value = new Aliplayer(options);
    });
 
    return {
      player,
    };
  },
});
</script>
 
<style>
/* 样式 */
#J_prismPlayer {
  max-width: 100%;
  width: 640px;
  height: 480px;
}
</style>