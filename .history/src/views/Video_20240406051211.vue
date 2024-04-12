<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-18 14:41:15
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-04-06 05:11:56
 * @FilePath: \moving-platform\src\views\Video.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="center-container">
    <div class="video-box">
      <div class="video-box-left">
        <Live class="video" v-if="storeUser.video===1"/>
        <Video class="video" :width="12" :height="6" :url="url" v-else-if="storeUser.video===0"/>
      </div>
      <div class="video-box-right">
        <div class="right-title">
          <p>大会议程</p>
        </div>
        <div class="right-timeline">
          <Scroll height= :on-reach-bottom="handleReachBottom">
              <Card dis-hover v-for="(item, index) in list" :key="index" style="margin: 32px 0">
                  Content {{ item }}
              </Card>
              <el-timeline style="max-width: 600px">
                <el-timeline-item center timestamp="2018/4/12" placement="top">
                  <el-card>
                    <h4>Update Github template</h4>
                    <p>Tom committed 2018/4/12 20:46</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/3" placement="top">
                  <el-card>
                    <h4>Update Github template</h4>
                    <p>Tom committed 2018/4/3 20:46</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item center timestamp="2018/4/2" placement="top">
                  Event start
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/2" placement="top">
                  Event end
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
const data = reactive({})
const url = ref('https://outin-f6c3661ae52711eeaca900163e32a995.oss-cn-shanghai.aliyuncs.com/sv/1490251c-18e761b6688/1490251c-18e761b6688.mp4?Expires=1711709273&OSSAccessKeyId=LTAIxSaOfEzCnBOj&Signature=JnAYUIFgDe%2B5bI%2BtmOi4HjK4g9g%3D');

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
  width:8rem;
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
  margin:0.2rem 0.3rem;
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