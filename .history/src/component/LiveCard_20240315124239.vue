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
</style>