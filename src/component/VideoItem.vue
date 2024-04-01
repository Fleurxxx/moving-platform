<!-- 媒体中心视频列表组件 -->
<template>
  <div class="video-with-hover-text" @mouseover="showContent = true" @mouseleave="showContent = false">
    <img class="video" :src="videoData.img" controls />
    <div class="play-button" :class="{ 'show-content': showContent }">
    </div>
    <div class="text-overlay" :class="{ 'show-content': showContent }">
      <h5>{{ videoData.title }}</h5>
      <div class="text-box">
      <p v-if="showContent">{{ videoData.content }}</p>
      <div class="text-box">
        <el-icon><View /></el-icon>
        {{ videoData.view }}
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
    videoData:{
        type: Object,
    }
})

const showContent = ref(false)
</script>

<style scoped>
.video-with-hover-text {
  position: relative;
  display: inline-block;
  width: 25%;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 35px 0 35px 60px; /* 调整这里的数值来改变三角形的大小 */
  border-color: transparent transparent transparent rgba(255, 255, 255, 0.89); /* 透明透明透明 白色 */
  border-radius: 5px; /* 圆角 */
  transition: shrink 1s forwards; /* 过渡动画 */
}

.play-button.show-content{
    scale: 0;
}

.play-button span {
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 0 10px 20px;
  border-color: transparent transparent transparent white;
}
.video {
  display: block;
  max-width: 100%;
  height: auto;
}

.text-overlay {
    padding: 14px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
  color: white; /* 文字颜色 */
  padding: 10px; /* 文字边距 */
  box-sizing: border-box; /* 计算盒模型包括内边距和边框 */
  transition: transform 0.3s ease; /* 添加动画效果 */
  transform: translateY(10%); /* 初始位置在底部 */
  opacity: 0; /* 初始状态下隐藏内容 */
}

.text-overlay.show-content {
  transform: translateY(0); /* 当鼠标悬浮时，文字向上滑出 */
  opacity: 1; /* 当鼠标悬浮时，显示内容 */
}

.text-overlay h2 {
  margin: 0;
}

.text-overlay p {
  margin: 10px 0 0; /* 设置段落上边距 */
  display: none; /* 初始状态下隐藏内容 */
  font-size: 30px;
}

.text-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    fonts-size: 26px;
}

.text-overlay.show-content p {
  display: block; /* 当鼠标悬浮时，显示内容 */
}
</style>
