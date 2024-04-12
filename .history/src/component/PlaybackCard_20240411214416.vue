<!-- 直播回放 -->
<template>
  <div class="card-container">
    <div class="card-top-tag">
      <el-tag
          v-for="item in items1"
          :key="item.label"
          :type="item.type"
          effect="light"
          size="large"
          class="tag"
          round
        >
          {{ item.label }}
      </el-tag><br /><br />
      <el-tag
          v-for="item in items2"
          :key="item.label"
          :type="item.type"
          effect="light"
          class="tag"
          round
        >
          {{ item.label }}
      </el-tag>
    </div>
    <el-card class="card" v-for="(item, index) in cardList" :key="index">
      <el-row>
        <el-col :span="10" class="card-left">
          <img class="cover mouse " :src="item.image" @click="enter"/>
          <!-- <div class="overlay">
            <h2>· 直播 {{ item.exactDate }} {{ item.startTime }} 开始</h2>
            <h2>约 {{ item.sumTime }} 分钟</h2>
          </div> -->
          <div class="overlay1">
            <div class="bottom-right">
              <p>{{ item.reserved }} 人已观看</p>
            </div>
          </div>
        </el-col>
        <el-col :span="14" class="card-right">
          <h2 class="card-title mouse" @click="enter">{{ item.title }}</h2>
          <div class="card-tag">
            <el-tag  type="warning mouse" round @click="enter">观看回放</el-tag>{{ "\xa0" }}
            <el-tag type="primary mouse" round @click="enter">{{ item.tag }}</el-tag>
          </div>
          <p class="card-describe">{{ item.describe }}</p>
          <Space class="card-info">
            <Icon :type="item.islike ? 'md-heart' : 'md-heart-outline'" class="mouse" :size="17" @click="islike(item)"/>{{ item.like }}
            <Icon type="md-chatboxes mouse" :size="17"/>{{ item.comment }}
            <Icon type="md-eye mouse" :size="17"/>{{ item.view }}
          </Space>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { user } from '@/store/user';
import { useRoute, useRouter } from 'vue-router';
import type { TagProps } from 'element-plus';

type Item = { 
  type: TagProps['type']; 
  label: string;
  mark: Number;
}

const items1 = ref<Array<Item>>([
  { type: 'primary', label: '全部', mark:1 },
  { type: 'primary', label: '5月5日', mark:2 },
  { type: 'primary', label: '5月6日', mark:3 },
  { type: 'primary', label: '5月7日', mark:4 },
  { type: 'primary', label: '5月8日', mark:5 },
])
const items2 = ref<Array<Item>>([
  { type: 'primary', label: '全部', mark:1 },
  { type: 'primary', label: '主论坛', mark:2 },
  { type: 'primary', label: '平行论坛', mark:3 },
  { type: 'primary', label: '科普论坛', mark:4 },
  { type: 'primary', label: '掌上论剑', mark:5 },
  { type: 'primary', label: '生态合作论坛', mark:6 },
])
const storeUser = user();
const route = useRoute();
const router = useRouter();
const data = reactive({})
const cardList = ref([
  {
    image: require('@/assets/image/common/视频1.png'),
    exactDate: '2024-03-15',
    startTime: '10:00 AM',
    sumTime: 60,
    reserved: 158,
    title: '格致论道@西湖论剑',
    describe: '共同探讨前沿科学与人文领域的重要议题。',
    position: '格致论道@西湖论剑',
    tag:'科普论坛',
    islike: false,
    like:77,
    comment: 58,
    view: 2246,
  },
  {
    image: require('@/assets/image/common/视频2.png'),
    exactDate: '2024-03-16',
    startTime: '11:00 AM',
    sumTime: 30,
    reserved: 100,
    title: '95后极客青年Talk',
    describe: '探索未来科技，挖掘极客智慧。',
    position: '线上直播',
    tag:'掌上论坛',
    islike: false,
    like:347,
    comment: 74,
    view: 3441,
  },
  {
    image: require('@/assets/image/common/视频3.png'),
    exactDate: '2024-03-16',
    startTime: '11:00 AM',
    sumTime: 30,
    reserved: 100,
    title: '当科幻照进现实我们会更安全吗？',
    describe: '探索科幻，创造安全未来！',
    position: '线上直播',
    tag:'掌上论坛',
    islike: false,
    like:121,
    comment: 91,
    view: 7446,
  },
  {
    image: require('@/assets/image/common/视频4.png'),
    exactDate: '2024-03-16',
    startTime: '11:00 AM',
    sumTime: 30,
    reserved: 100,
    title: '生态合作伙伴分论坛',
    describe: '共筑绿色未来，生态合作伙伴分论坛期待您的加入！',
    position: '杭州洲际酒店·杭州厅',
    tag:'生太合作',
    islike: false,
    like:434,
    comment: 72,
    view: 6346,
  }
])

function enter(){
  storeUser.video = 0;
  router.push("/schedule/video");
}

function islike(params:any) {
  console.log(typeof params)
  if(params.islike){
    params.islike = !params.islike;
    params.like--;
  }else{
    params.islike = true;
    params.like++;
  }
  console.log(params.like)
}

onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
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
// .card-container {
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px; /* 设置卡片之间的间隔 */
// }

.card-top-tag{

}
.tag{
  width:1.8rem;
  margin-right: 0.2rem;
}
.card{
    width: 12rem;
    // margin-top: 1rem;
    margin-bottom: 0.3rem;

    &:nth-last-child(2){
        margin-left: -12px !important;
        margin-top: 0.3rem;
    }

    .card-left{
        position: relative; 
    }
    .card-right{
        position: relative;
        left: 0.7rem;
        .card-title {
          position: absolute;
          font-size: 0.38rem;
          top:0;
          left: 0;
        }
        .card-tag{
          position: absolute;
          top:0.7rem;
          left: 0;
          font-size: 0.2rem;
        }
        .card-describe{
          position: absolute;
          font-size: 0.2rem;
          top:1.2rem;
          left:5px;
        }
        .card-info {
          position: absolute;
          font-size: 0.2rem;
          bottom: 0.1rem;
          left: 0;
        }
    }
}

.cover{
    height: 2.5rem;
    width: 4.9rem;
    border-radius: 10px;
    display: block;
}
.overlay {
    position: absolute; /* 绝对定位，相对于父容器 */
    top: 0; /* 距离父容器顶部距离为0 */
    left: 0; /* 距离父容器左侧距离为0 */
    width: 100%; /* 宽度与父容器相同 */
    height: 23%; /* 高度为图片高度的三分之一 */
    background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
    color: white; /* 文字颜色为白色 */
    display: flex; /* 使用 flex 布局 */
    //flex-direction: column; /* 垂直方向排列子元素 */
    //justify-content: center; /* 垂直居中子元素 */
    justify-content: space-between; /* 左右对齐 */
    align-items: center; /* 水平居中子元素 */
    z-index: 1; /* 使阴影位于图片上方 */
    h2 {
        margin: 0;
        padding-left: 0.2rem;
        font-size: 0.2rem;
    }
    p {
        padding-right: 0.08rem;
        font-size: 0.2rem;
        margin: 0;
    }
}
.overlay1{
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;  
}
.bottom-right {
    background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
    color: white;
    padding: 10px 0px;
    border-radius: 5px; 
    position: relative;
    box-shadow: 0px 3px 68px rgba(0, 0, 0, 0.5); /* 阴影效果 */
    p {
        padding-right: 0.08rem;
        font-size: 0.2rem;
        margin: 0;
    }
}
.mouse{
  cursor: pointer; 
}
</style>