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
import aliplayer from '@/component/Aliplayer.vue'
import { ref, reactive, toRefs, defineComponent,nextTick, onBeforeMount, onMounted, onUnmounted, watchEffect, defineExpose, computed } from 'vue';

const data = () => {
  return {
    visitable: false,
    id: '',
    source: '',
    isLive: true,
    title: ''
  }
}

const components = {
  "ali-player": aliplayer
}

const methods = {
  init(source: string, isLive: boolean, title: string): void {
    this.isLive = isLive
    this.visitable = true
    this.title = title
    if (this.source === '') {
      this.source = source
    } else {
      this.$nextTick(() => {
        this.$refs.player.play()
      })
    }
  },
  play(event: Event): void {
    // console.log(event);
  },
  pause(event: Event): void {
    // console.log(event);
  },
  onM3u8Retry(event: Event): void {
    alert("主播暂时离开，请稍后......")
    this.closePlayer()
    this.visitable = false
  },
  liveStreamStop(event: Event): void {
    alert('直播失败或直播已结束');
    this.closePlayer()
    this.visitable = false
    // player.loadByUrl(newUrl);
  },
  closePlayer(): void {
    this.$refs.player.pause()
    // this.source = ''
    // console.log(this.source)
  }
}

let dialogTitle = computed(() => {
  return this.isLive ? '直播中-' + this.title : '回放-' + this.title;
});
</script>