<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-24 04:02:32
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-29 02:45:42
 * @FilePath: \moving-platform\src\component\VideoRecommendationCard.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="card-box">
    <el-card v-for="(item, index) in cardItems" :key="index" class="card" style="max-width: 7rem;">
        <div class="image-container">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
        </div>
        <div class="card-content">
          <template #footer >
            <h3>{{ item.name  }}</h3>
            <p>{{ item.intruction }}</p>
            <el-button class="goods-cards-but" size="small" type="primary" plain round>库存10件</el-button>
          </template>
        </div>
        
      </el-card>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
/**
* 仓库
*/
const store = useStore();
/**
* 路由对象
*/
const route = useRoute();
/**
* 路由实例
*/
const router = useRouter();
const data = reactive({})
const cardItems = ref([
  {
    name:'数字中国&安全治理论坛',
    url: require('@/assets/image/common/book1.png'),
    intruction:'数字中国&安全治理论坛',
  },
  {
    productName: '2023数字安全能力洞察报告',
    productSrc: require('@/assets/image/common/book2.png'),
    productIntruction: '数字经济成为全球新一轮科技革命和产业变革的重要引擎，将开启人类数字文明的新时代。数字安全的基础性作用日益突出，在数字化建设进程中，加紧实施国家信息化发展战略，筑牢可信可控的数字安全屏障，夯实数字基础设施安全底座，增强关键基础设施安全韧性，助力数字社会安全发展，已成为支撑现代化建设、增强国家综合实力的必然选择。安恒信息围绕国家数字化建设“2522”顶层布局规划，洞悉各行业和各领域数字化转型中的安全挑战和能力需求，梳理切实解决数字安全本质问题的方法和途径，并从安全模式、架构、能力、产业等方向对未来数字安全发展进行了展望。',
  },
]);


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
      height: 3rem;
      transition: transform 0.3s ease; 
    }
    &:hover img {
        transform: scale(1.1); /* 鼠标悬停时放大1.1倍 */
    }
}

.card-content{
  height: 2rem;
}
.goods-cards-but{
  position: absolute;
  bottom:0;
}
</style>