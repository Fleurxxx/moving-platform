<template>
  <div >
    <el-card class="card" v-for="(item, index) in cardList" :key="index">
      <el-row>
        <el-col :span="10" class="card-left">
          <img class="cover" :src="item.image" />
          <div class="overlay">
            <h2>· 直播 {{ item.exactDate }} {{ item.startTime }} 开始</h2>
            <h2>约 {{ item.sumTime }} 分钟</h2>
          </div>
          <div class="overlay1">
            <div class="bottom-right">
              <p>{{ item.reserved }} 人已预约</p>
            </div>
          </div>
        </el-col>
        <el-col :span="14" class="card-right">
          <h2>{{ item.title }}</h2>
          <p>{{ item.describe }}</p>
          <span><el-icon :size="15"><Location /></el-icon> {{ item.position }}</span>
          <el-button class="card-but" round><el-icon :size="15"><Plus /></el-icon>{{ "\xa0" }}立即预约</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

const store = useStore();
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
    title: '标题1',
    describe: '描述1',
    position: '位置1'
  },
  {
    image: require('@/assets/image/common/视频2.png'),
    exactDate: '2024-03-16',
    startTime: '11:00 AM',
    sumTime: 30,
    reserved: 100,
    title: '标题2',
    describe: '描述2',
    position: '位置2'
  }
  // 可以继续添加更多数据项
])
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
.common-container{
    background: rgba(255, 255, 255, .9);
    border-radius: 30px;
    padding: 1rem;
}
.card{
    width: 12rem;
    padding
    .card-left{
        position: relative; 
    }
    .card-right{
        position: relative;
        left: 0.7rem;
        h2 {
            margin: 0;
            font-size: 0.4rem;
        }
        p{
            font-size: 0.2rem;
            margin: 0;
            padding-top: 40px;
            padding-left: 4px;
        }
        span {
            position: absolute;
            font-size: 0.2rem;
            bottom: 0.1rem;
        }
        .card-but{
            position: absolute;
            right: 1rem;
            bottom: 0;
            width: 1.6rem;
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
</style>