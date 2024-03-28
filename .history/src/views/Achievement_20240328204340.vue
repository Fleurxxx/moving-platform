<template>
  <el-card class="card" @mouseenter="showContent" @mouseleave="hideContent">
    <div class="card_container">
      <h1>White&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Paper</h1>
      <img :src="data.productSrc" />
    </div>
    <div class="card_content" :class="{ 'show': isContentVisible }">
      <h2>{{ data.productName }}</h2>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      data: {
        productName: 'Product Name',
        productSrc: 'your-image-url.jpg',
      },
      isContentVisible: false,
    };
  },
  methods: {
    showContent() {
      this.isContentVisible = true;
    },
    hideContent() {
      this.isContentVisible = false;
    },
  },
};
</script>

<style scoped>
.card_container {
  position: relative;
  overflow: hidden;
}

.card_content {
  position: absolute;
  top: 0;
  left: -100%; /* 初始位置在左侧 */
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明灰色背景 */
  transition: left 0.3s ease, opacity 0.3s ease; /* 过渡效果 */
  opacity: 0; /* 初始透明度为0，隐藏内容 */
  color: #fff; /* 文字颜色，可根据需要调整 */
}

.card_content.show {
  left: 0; /* 左侧滑入 */
  opacity: 1; /* 显示内容 */
}
</style>
