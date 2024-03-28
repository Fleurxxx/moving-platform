<template>
    <div class="prism-player" ref="playerCon"></div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  
  const { Aliplayer } = window;
  
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
  </script>
  
  <style>
  /* 可以添加样式，也可以将原有的样式移到这里 */
  </style>
  