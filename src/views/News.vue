<!-- 媒体中心 -->
<template>
  <div class="box">
    <div class="header">
      <h1>媒体中心</h1>
      <img class="banner-img" src="@/assets/image/common/banner1.png" />
    </div>
    <div class="center">
      <WonderfulMoment />
    </div>
  </div>
</template>

<script setup>
import WonderfulMoment from "@/component/WonderfulMoment.vue";
</script>
<style scoped lang="less">
.header {
  h1 {
    position: absolute;
    left: 20%;
    top: 25%;
    font-size: 0.7rem;
    color: #fff;
  }
}
.banner-img {
  width: 100%;
  height: 3.5rem;
}
</style>
