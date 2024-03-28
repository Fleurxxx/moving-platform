<template>
  <div>
    ????????????
  </div>
  <el-dialog
    :title="isLive ? '直播中-' + title  : '回放-' + title"
    append-to-body
    :close-on-click-modal="false"
    :visible.sync="visitable"
    style="width: 8rem;height: 4rem"
    @close="closePlayer()"
    >
    <ali-player
      ref="player"
      @play="play($event)"
      @pause="pause($event)"
      @liveStreamStop="liveStreamStop($event)"
      :autoplay="true"
      :isLive="isLive"
      :rePlay="false"
      showBuffer="true"
      showBarTime="5000"
      format="m3u8"
      :source="source">
    </ali-player>
  </el-dialog>
  <div style="width: 8rem;height: 4rem" id="J_prismPlayer"></div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
import aliplayer from '@/component/Aliplayer.vue';

const visitable = ref(false);
const id = ref('');
const source = ref('');
const isLive = ref(true);
const title = ref('');
let playerRef = null;

const init = (newSource, newIsLive, newTitle) => {
  isLive.value = newIsLive;
  visitable.value = true;
  title.value = newTitle;
  
  if (source.value === '') {
    source.value = newSource;
  } else {
    nextTick(() => {
      playerRef.play();
    });
  }
};

const play = (event) => {
  // console.log(event);
};

const pause = (event) => {
  // console.log(event);
};

const onM3u8Retry = (event) => {
  alert("主播暂时离开，请稍后......");
  closePlayer();
};

const liveStreamStop = (event) => {
  alert('直播失败或直播已结束');
  closePlayer();
};

const closePlayer = () => {
  playerRef.pause();
  visitable.value = false;
};



</script>

