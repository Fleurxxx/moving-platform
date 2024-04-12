<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-18 14:41:15
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-04-11 22:47:53
 * @FilePath: \moving-platform\src\views\Video.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="center-container">
    <div class="video-box">
      <div class="video-box-left">
        <Live class="video" v-if="storeUser.video===1"/>
        <Video class="video" :width="12" :height="6" :url="url" v-else-if="storeUser.video===0"/>
        <div class="title-box">
          <h1>格致论道@西湖论剑</h1>
          <div class="title-info">
            <i class="fa fa-youtube-play">&nbsp;{{ data.playCnt }} 万</i>
            <i class="fa fa-commenting">&nbsp;{{ data.commentCnt }}</i>
            <i v-if="data.like===false" class="fa fa-thumbs-o-up" >&nbsp;{{ data.likeCnt }}</i>
            <i v-else-if="data.like===true" class="fa fa-thumbs-up" >&nbsp;{{ data.likeCnt }}</i>
          </div>
          <el-button class="title-but" round><el-icon :size="15"><Plus /></el-icon>{{ "\xa0" }}订阅</el-button>
          <el-button class="title-but" round><el-icon :size="15"><Plus /></el-icon>{{ "\xa0" }}PPT下载</el-button>
        </div>
      </div>
      <div class="video-box-right">
        <div class="right-title">
          <p>大会议程</p>
        </div>
        <div class="right-timeline">
          <Scroll height="525" :on-reach-bottom="handleReachBottom">
              <!-- <Card dis-hover v-for="(item, index) in list" :key="index" style="margin: 32px 0">
                  Content {{ item }}
              </Card> -->
              <el-timeline style="max-width: 500px">
                <el-timeline-item v-for="(item, index) in timelineItems" :key="index" :center="item.center" :timestamp="item.timestamp" :placement="item.placement">
                  <div v-if="item.card">
                    <p class="right-content">{{ item.content }}</p>
                    <el-card >
                      <h4>{{ item.card.title }}</h4>
                      <p>{{ item.card.content }}</p>
                    </el-card>
                  </div>
                  <template v-else>
                    {{ item.content }}
                  </template>
                </el-timeline-item>
              </el-timeline>
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
const url = ref('https://player.alicdn.com/file/official-video/aliyun-sample.m3u8');
const timelineItems = [
  {
    center: true,
    timestamp: "18:00 - 18:05",
    placement: "top",
    content: "主持人致辞"
  },
  {
    timestamp: "18:05 - 18:25",
    placement: "top",
    content: "研究事物原理而获得知识",
    card: {
      title: "梁文杰",
      content: "中国科学院物理研究所研究员，中国科学院大学聘任教授"
    }
  },
  {
    timestamp: "18:25 - 18:45",
    placement: "top",
    content: "在生命科学中探索生命现象和生命活动规律的科学",
    card: {
      title: "赵云鹏",
      content: "浙江大学生命科学学院教授、副院长"
    }
  },
  {
    timestamp: "18:45 - 19:05",
    placement: "top",
    content: "种地不苦，还能很酷",
    card: {
      title: "张玉成",
      content: "中国科学院计算技术研究所正高级工程师"
    }
  },{
    timestamp: "19:05 - 19:25",
    placement: "top",
    content: "成像秘技之隔墙观物",
    card: {
      title: "徐飞虎",
      content: "中国科学技术大学教授"
    }
  }

];

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
  height:0.8rem;
  padding:0 0.1rem;
  background-color: #f3f3f3e6;
  h1{
    font-size: 0.32rem;
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
  margin-left: 0.2rem;
}
.right-content{
  margin-top:0.2rem;
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

</style>