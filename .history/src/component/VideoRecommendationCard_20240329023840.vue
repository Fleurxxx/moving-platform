<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-24 04:02:32
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-25 14:45:06
 * @FilePath: \moving-platform\src\component\VideoRecommendationCard.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="card-box">
    <el-card v-for="index in 3" :key="index" class="card" style="max-width: 7rem;">
        <div class="image-container">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
        </div>
        <template #footer>
          <h3>小汉堡</h3>
          <img src="@/assets/image/common/金币.png" class="goods-cards-img"/>&nbsp;
          <p
          <el-button class="goods-cards-but" size="small" type="primary" plain round>库存10件</el-button>
        </template>
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
//console.log('1-开始创建组件-setup')
/**
* 数据部分
*/
const data = reactive({})
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
.goods-cards-img{
  width:0.2rem;
  padding-bottom: 0.1rem;
}
.goods-cards-cnt{
  font-size:0.27rem;
  font-weight:600;
  color:darkorange;
}
.goods-cards-but{
  margin-left: 75%;
  margin-top: -5%;
}
</style>