<!-- 媒体中心图片列表组件 -->
<template>
  <div class="image-with-text">
    <img :src="imgItem.img" alt="Image" class="image" />
    <div class="text-overlay">{{ imgItem.title }}</div>
  </div>
</template>

<script setup>

const props = defineProps({
  imgItem: {
    type: Object,
    default: () => ({
      title: "【重磅干货】大家都关心的嘉宾PPT下载指南来啦！",
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/0ceb338a21e043a69ba41e0b164ea739.jpg",
      id: 1,
    }),
  },
});
</script>

<style scoped>
.image-with-text {
    height: 25%;
    width: 25%;
    position: relative;
}

.image {
  max-width: 100%;
  height: auto;
}

.text-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 设置背景颜色，这里使用半透明黑色 */
  color: white; /* 文字颜色 */
  padding: 15px; /* 文字边距 */
  box-sizing: border-box; /* 计算盒模型包括内边距和边框 */
  font-size: 26px; /* 字体大小 */
}
</style>
