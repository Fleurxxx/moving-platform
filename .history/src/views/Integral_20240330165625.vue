<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-15 20:58:27
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-30 16:56:23
 * @FilePath: \moving-platform\src\views\Integral.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div v-for="(item, index) in signCard" :key="index">
      <div class="rectangle" :style="getCardStyle(index)">
        <p class="sign-score-p">+{{ item.num }}</p>
        <img v-if="item.stute" src="@/assets/image/common/签到成功.png" class="sign-score-img"/>
        <img v-else src="@/assets/image/common/金币.png" class="sign-score-img"/>
      </div>
      <p class="sign-score-day">{{ index + 1 }}天</p>
    </div>
    <button @click="changeFirstCardColor">Change First Card Color</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 数据
const signCard = ref([
  { num: 10, stute: true },
  { num: 20, stute: false },
  { num: 30, stute: true },
  // 添加更多卡片数据...
]);

// 方法：获取卡片样式
const getCardStyle = (index: number) => {
  const dynamicStyles: { [key: string]: string } = {};
  if (index === 0) {
    dynamicStyles.backgroundColor = 'lightblue'; // 修改第一个卡片背景色
  }
  return dynamicStyles;
};

// 方法：改变第一个卡片的背景色
const changeFirstCardColor = () => {
  signCard.value[0].stute = !signCard.value[0].stute; // 切换第一个卡片的状态
};
</script>

<style scoped>
/* 可选：添加样式以覆盖全局样式 */
.rectangle {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 10px;
  display: inline-block;
}
</style>
