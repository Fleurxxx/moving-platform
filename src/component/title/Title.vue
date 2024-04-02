<template>
  <div class="title">
    <div class="big gradient-text">{{ props.title }}</div>
    <div class="small gradient-text">{{ props.englishTitle }}</div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
    title: { type:String },
    englishTitle: { type: String },
});
</script>
<style scoped lang="less">
.title {
  text-align: center;
  .big {
    font-family: "Arial", "Helvetica Neue", "sans-serif", "pingfang SC",
      "Hiragino Sans GB", "微软雅黑", "microsoft yahei", "宋体", "simsun";
    font-size: 80px;
    font-weight: 700;
  }
  .small {
    font-size: 25px;
  }
}
.title > div {
  margin-bottom: 15px;
}
.gradient-text {
  color: RGB(45, 177, 186);
}
</style>
