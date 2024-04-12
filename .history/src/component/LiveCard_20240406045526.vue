<!-- 今日直播 -->
<template>
  <div class="card-container">
    <el-card class="card" v-for="(item, index) in cardList" :key="index">
      <img class="card_img":src="item.image" />
      <Alert class="card_tips">
          <span>直播倒计时：</span>
          <template #desc>
            <CountDown :target="targetTime" @on-end="handleEnd" v-font="20" />
          </template>
      </Alert>
      <div class="card_countdown">
        <CountDown :target="targetTime" @on-end="handleEnd" v-font="20" />
      </div>
      <div class="card_but">
        <el-button type="primary">预约直播</el-button>
        <el-button type="primary">分享观看</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { TagProps } from 'element-plus';
import { user } from '@/store/user';

type Item = { 
  type: TagProps['type']; 
  label: string 
}

const items = ref<Array<Item>>([
  { type: 'primary', label: 'Tag 1' },
  { type: 'success', label: 'Tag 2' },
  { type: 'info', label: 'Tag 3' },
  { type: 'warning', label: 'Tag 4' },
  { type: 'danger', label: 'Tag 5' },
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
    describe: '直播即将开始啦，请及时参加哦~',
    position: '格致论道@西湖论剑',
    tag:'科普论坛',
  },
])
//倒计时
const targetTime = ref(new Date().getTime() + 3900000) 
function handleEnd () {
  console.log("倒计时结束")
}

function enter(){
  storeUser.video = 1;
  router.push("/schedule/video");
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
.card-container {

}
.card{
    width: 12rem;
    margin-bottom: 0.3rem;
    position: relative;
    ::v-deep .el-card__body {
      padding: 0;
  }
}
.card_img{
  width:100%;
}
.card_tips{
  position: absolute;
  display: flex;
  top:0;
  right: 0;
  font-weight: bolder;
}
.card_countdown{
  position: absolute;
  left: 50%;
  bottom: 2rem;
  transform: translate(-50%, -50%);
}
.card_but{
  position: absolute;
  left: 50%;
  bottom: 1rem;
  transform: translate(-50%, -50%);
}
.mouse{
  cursor: pointer; 
}
</style>