<template>
  <div>
    <el-dialog
      :title="isLive ? '直播中-' + title : '回放-' + title"
      append-to-body
      :close-on-click-modal="false"
      :visible.sync="visitable"
      style="width: 8rem; height: 4rem"
      @close="closePlayer()"
    >
      <ali-player
        ref="player"
        @play="play"
        @pause="pause"
        @liveStreamStop="liveStreamStop"
        :autoplay="true"
        :isLive="isLive"
        :rePlay="false"
        showBuffer="true"
        showBarTime="5000"
        format="m3u8"
        :source="source"
      ></ali-player>
    </el-dialog>
    <div style="width: 8rem; height: 4rem" id="J_prismPlayer"></div>
  </div>
</template>

<script setup lang="ts">
import aliplayer from '@/component/Aliplayer.vue'

const data = {
  visitable: false,
  id: '',
  source: '',
  isLive: true,
  title: ''
}

const components = { "ali-player": aliplayer }

const init = (source: string, isLive: boolean, title: string) => {
  data.isLive = isLive
  data.visitable = true
  data.title = title
  if (data.source === '') {
    data.source = source
  } else {
    import 'vue'
      .then(({ nextTick }) => {
        nextTick(() => {
          $refs.player.play()
        })
      })
  }
}

const play = (event: any) => {
  // console.log(event);
}

const pause = (event: any) => {
  // console.log(event);
}

const onM3u8Retry = (event: any) => {
  alert('主播暂时离开，请稍后......')
  closePlayer()
  data.visitable = false
}

const liveStreamStop = (event: any) => {
  alert('直播失败或直播已结束')
  closePlayer()
  data.visitable = false
}

const closePlayer = () => {
  $refs.player.pause()
}

</script>
