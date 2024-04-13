<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-18 14:41:15
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-04-13 23:45:24
 * @FilePath: \moving-platform\src\views\Video.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="center-container">
    <div class="video-box">
      <div class="video-box-left">
        <div class="title-box">
          <h1>格致论道@西湖论剑</h1>
          <el-button class="title-but" round><el-icon :size="15"><Plus /></el-icon>{{ "\xa0" }}直播预约</el-button>
        </div>
        <Live class="video" v-if="storeUser.video===1"/>
        <Video class="video" :width="12" :height="6" :url="url" v-else-if="storeUser.video===0"/>
        <div class="input">
          <div class="ali-danmuku-control">
            <div class="danmu-input">
              <input type="text">
              <button class="danmu-input-enter">发送</button>
            </div>
            <i class="iconfont icon-danmu-close"></i>
            <div class="player-tooltip close">关闭弹幕</div>
            <i class="iconfont icon-danmu-open" style="display: none;"></i>
            <div class="player-tooltip open">打开弹幕</div>  
          </div>
        </div>
      </div>
      <div class="video-box-right">
        <div class="right-title">
          <p>大会介绍</p>
        </div>
        <div class="right-timeline">
          <Scroll height="525" :on-reach-bottom="handleReachBottom">
            
          </Scroll>
        </div>
       
      </div>
    </div>
    <div class="card-box">
      <div class="title1">
        <img class="little-title1" src="@/assets/image/common/会议推荐.png" />
      </div>
      <VideoRecommendationCard :cardItems="cardItems"/>
    </div>
    <div>
      <Comment :comment="sampleComment" @remove="handleRemove" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { user } from '@/store/user';
import { useRoute, useRouter } from 'vue-router';
import Video from '@/component/Video.vue'
import VideoRecommendationCard from '@/component/VideoRecommendationCard.vue';
import Comment from '@/component/Comment.vue';
import Live from '@/component/Live.vue'

const storeUser = user();
const route = useRoute();
const router = useRouter();
const data = reactive({
  like: false,
  playCnt:13.4,
  commentCnt:1238,
  likeCnt:67,
})
const url = ref('http://bo.yangshibo.cn/haha/haha.flv?auth_key=1713021099-0-0-ca4b98ac445c5fbf41ba0620ecf112e4');

//无限滚动
const list = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const handleReachBottom = async () => {
    await new Promise<void>(resolve => {
        setTimeout(() => {
            const last = list.value[list.value.length - 1];
            for (let i = 1; i < 11; i++) {
                list.value.push(last + i);
            }
            resolve();
        }, 2000);
    });
};
// 评论
const sampleComment = ref({
  id: 1,
  content: '这是一条评论内容'
})

const handleRemove = (comment:any) => {
  console.log('需要删除的评论：', comment)
  // 在这里可以处理删除评论的逻辑
}

//视频推荐
const cardItems = ref([
  {
    name:'主论坛',
    url: require('@/assets/image/common/视频1.png'),
    intruction:'主论坛',
  },
  {
    name:'数字中国&安全治理论坛',
    url: require('@/assets/image/common/视频2.png'),
    intruction:'数字中国&安全治理论坛',
  },
  {
    name: '信创软件供应链安全论坛',
    url: require('@/assets/image/common/视频3.png'),
    intruction: '信创软件供应链安全论坛',
  },
]);



onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  console.log(storeUser.video)
  console.log(storeUser.apply)
})
watchEffect(()=>{
})
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})

</script>
<style scoped lang='less'>
.center-container{
  position: relative;
  margin: 1rem 3rem;
}
.title-box{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height:0.8rem;
  padding:0 0.3rem;
  background-color: #47484b;
  h1{
    font-size: 0.32rem;
    color:#fff;
  }
}

.title-info{
  margin: 0.2rem auto;
  color: #9499A0;;
  i{
    padding-right: 0.2rem;
  }
}
.title-but{
  width: 1.5rem;
}
.video-box{
  width:100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.video-box-left{
  width:17rem;
}
.video-box-right{
  background-color: rgb(213, 213, 213);
  width:6rem;
}
.right-title{
  height: 0.5rem;
  background-color: rgb(71, 72, 75);
  // text-align: center;
  display: flex;
  justify-content: center; //水平居中
  align-items: center; //垂直居中
  p{
    font-size: large;
    font-weight: bold;
    color:white;
  }
}
.right-timeline{
  margin-left: 0.2rem;
}
::v-deep .ivu-scroll-container {
    overflow-y: scroll;
    padding-right: 0.2rem;
}
//小标题
.title1{
  height: 3rem;
  display: flex;
  justify-content: center;
}
.little-title1{
  margin-top: 2%;
  height:1.8rem;
}
.card-box{
  margin-bottom: 1rem;
}

//输入
.input{
  position:absolute;
  left:5.44rem;
  top:6.17rem;
  z-index: 999;
}
.ali-danmuku-control {
    float: right;
    color: #fff;
    margin-right: 5px;
    position: relative;
    display: table-cell;
    margin-top: 8px;
}
.ali-danmuku-control .danmu-input {
    position: relative;
    width: 2.35rem;
    display: inline-block;
}
.ali-danmuku-control .iconfont.icon-danmu-close {
    display: inline-block;
}
.ali-danmuku-control .danmu-input input {
    padding: 0px 60px 10px 5px;
}
.ali-danmuku-control .iconfont {
    font-size: 0.48rem;
    cursor: pointer;
    vertical-align: middle;
    user-select: none;
    line-height: initial;
}
.ali-danmuku-control .player-tooltip.close, .ali-danmuku-control .player-tooltip.open {
    right: -12px;
}
.player-tooltip {
    position: absolute;
    display: none;
    font-size: 12px;
    color: #fff;
    line-height: 28px;
    letter-spacing: 0;
    text-align: center;
    background: #3c3c3c;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
    height: 28px;
    top: -48px;
    padding: 0 5px;
    white-space: nowrap;
}
</style>