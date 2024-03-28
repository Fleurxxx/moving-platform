<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-25 16:44:15
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-25 16:46:55
 * @FilePath: \moving-platform\src\component\Live.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="prism-player" ref="playerCon"></div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  
//   const { Aliplayer } = window;
  
  onMounted(() => {
    const player = new player({
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
  </script>
  
  <style>
  /* 可以添加样式，也可以将原有的样式移到这里 */
  </style>
  