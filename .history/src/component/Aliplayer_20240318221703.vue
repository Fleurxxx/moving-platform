<template>
    <div class='prism-player' :id='playerId' :style='playStyle'></div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted, nextTick } from 'vue';
  
  const playerId = 'aliplayer_' + Math.random() * 100000000000000000;
  const scriptTagStatus = ref(0);
  let instance = null;
  
  const insertScriptTag = () => {
    let playerScriptTag = document.getElementById('playerScriptTag');
    if (playerScriptTag === null) {
      playerScriptTag = document.createElement('script');
      playerScriptTag.type = 'text/javascript';
      playerScriptTag.src = aliplayerSdkPath;
      playerScriptTag.id = 'playerScriptTag';
      let s = document.getElementsByTagName('head')[0];
      s.appendChild(playerScriptTag);
    }
    if (playerScriptTag.loaded) {
      scriptTagStatus.value++;
    } else {
      playerScriptTag.addEventListener('load', () => {
        scriptTagStatus.value++;
        playerScriptTag.loaded = true;
        initAliplayer();
      });
    }
    initAliplayer();
  };
  
  const initAliplayer = () => {
    if (scriptTagStatus.value === 2 && instance === null) {
      nextTick(() => {
        instance = window.Aliplayer({
          id: playerId,
          autoplay: autoplay,
          isLive: isLive,
          playsinline: playsinline,
          format: format,
          width: width,
          height: height,
          controlBarVisibility: controlBarVisibility,
          useH5Prism: useH5Prism,
          useFlashPrism: useFlashPrism,
          vid: vid,
          playauth: playauth,
          source: source,
          cover: cover,
          x5_video_position: x5_video_position,
          x5_type: x5_type,
          x5_fullscreen: x5_fullscreen,
          x5_orientation: x5_orientation,
          autoPlayDelay: autoPlayDelay,
          autoPlayDelayDisplayText: autoPlayDelayDisplayText
        });
        instance.on('ready', () => {
          emit('ready', instance);
        });
        // Add other event listeners here
      });
    }
  };
  
  // Lifecycle hooks
  onMounted(() => {
    if (window.Aliplayer !== undefined) {
      scriptTagStatus.value = 2;
      initAliplayer();
    } else {
      insertScriptTag();
    }
  });
  
  onUnmounted(() => {
    // Clean up code if needed
  });
  </script>
  
  <style>
  @import url(//g.alicdn.com/de/prismplayer/2.6.0/skins/default/aliplayer-min.css);
  </style>
  