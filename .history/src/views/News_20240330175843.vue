<template>
  <div>
    <el-card v-for="(item, index) in hot" :key="index">
      <p><span :style="{ color: item.color }">{{ index+1 }}、</span> {{ item.content }}</p>
      <el-button type="text" @click="hideCard(index)">关闭</el-button>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 导入 Element UI 组件
import { ElCard, ElButton } from 'element-plus';
// 注册组件
const components = { ElCard, ElButton };

// 数据
const hot = ref([
  {
    color:'#fe3e29',
    content:'2023西湖论剑·数字安全大会举办',
  },
  {
    color:'#fe3e29',
    content:'西湖论剑暨安恒信息年度新品发布会在杭州举行',
  },
  {
    color:'#fe3e29',
    content:'“新十年”扬帆起航2023西湖论剑·数字安全大会举办',
  },
  {
    color:'#0E151C66',
    content:'“2023西湖论剑·数字安全大会│车联网如何系牢“安全”带?',
  },
]);

// 方法：关闭卡片
const hideCard = (index: number) => {
  hot.value.splice(index, 1); // 从数组中移除对应索引的卡片数据
};
</script>

<style scoped>
/* 可选：添加样式以覆盖全局样式 */
p {
  margin: 0; /* 去除段落的默认上下边距 */
}
</style>
