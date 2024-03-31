<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-24 04:02:32
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-29 03:38:19
 * @FilePath: \moving-platform\src\component\VideoRecommendationCard.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="card-box">
    <el-card v-for="(item, index) in cardItems" :key="index" class="card" style="max-width: 7rem;">
        <div class="image-container">
          <img
            :src="item.url"
            class="image"
          />
        </div>
        <template #footer >
          <div class="card-content">
            <h2>{{ item.name  }}</h2>
            <p>{{ item.intruction }}</p>
            <div class="button-container">
              <el-button class="cards-but"  type="primary" plain round>申请试用</el-button>
              <span><a>了解详情</a></span>
            </div>
          </div> 
        </template>
      </el-card>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
const props = defineProps({
  cardItems: Object,
})

const route = useRoute();
const router = useRouter();
const data = reactive({})
const {cardItems} =toRefs(props)
// const cardItems = ref([
//   {
//     name:'主论坛',
//     url: require('@/assets/image/common/视频1.png'),
//     intruction:'主论坛',
//   },
//   {
//     name:'数字中国&安全治理论坛',
//     url: require('@/assets/image/common/视频2.png'),
//     intruction:'数字中国&安全治理论坛',
//   },
//   {
//     name: '信创软件供应链安全论坛',
//     url: require('@/assets/image/common/视频3.png'),
//     intruction: '信创软件供应链安全论坛',
//   },
// ]);


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
.card-box{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 0.3rem;
  ::v-deep .el-card__body {
      padding: 0;
  }
}
.card {
  flex: 0 0 calc(33.33% - 26.67px); /* 每行显示3个卡片，设置卡片宽度 */
}
.image-container {
    overflow: hidden; /* 确保放大后的图片不超出容器 */
    cursor: pointer; 
    img{
      width: 100%;
      height: 2.6rem;
      transition: transform 0.3s ease; 
    }
    &:hover img {
        transform: scale(1.1); /* 鼠标悬停时放大1.1倍 */
    }
}

.card-content{
  height: 100%;
  position: relative;
  h2{
    line-height: 0.6rem;
  }
  p{
    display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* 显示两行文字 */
  -webkit-line-clamp: 2;
  /* 文字溢出部分用省略号(...)表示 */
  text-overflow: ellipsis;
  font-size: 0.18rem;
  line-height: 1.5;
  }
}
.footer{
  position: fixed; /* 固定在页面底部 */
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f8f8f8; /* 可以根据需要设置底部容器的背景色 */
  padding: 20px; /* 可以根据需要设置底部容器的内边距 */
}
.button-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.1rem;
  a{
    color: rgb(113, 113, 115) !important;
  }
  &:hover a{
    color: rgba(29,42,156, 1) !important;
  }
}
</style>