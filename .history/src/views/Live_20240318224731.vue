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

</template>

<script>
import aliplayer from '@/component/Aliplayer.vue'

export default {
  data () {
    return {
      visitable:false,
      id:'',
      source:'',
      isLive:true,
      title:''
    }
  },
  components: {
    "ali-player": aliplayer
  },
  methods: {
    init(source,isLive,title){
      // console.log(source,isLive)
      this.isLive = isLive
      this.visitable = true
      this.title = title
      if(this.source == ''){
        this.source = source
      } else {
        this.$nextTick(()=>{
            this.$refs.player.play()
        })
      }
    },
    //播放
    play(event) {
      // console.log(event);
    },
    //暂停
    pause(event){
      // console.log(event);
    },
    //直播出错恢复处理
    onM3u8Retry(event){
      alert("主播暂时离开，请稍后......")
      this.closePlayer()
      this.visitable = false
    },
    liveStreamStop(event){
      alert('直播失败或直播已结束');
      this.closePlayer()
      this.visitable = false
      // player.loadByUrl(newUrl);
    },
    //关闭模态层
    closePlayer(){
      this.$refs.player.pause()
      // this.source = ''
      // console.log(this.source)
    },
  }
};
</script>

