<template>
  <div class="introduction">
    <div class="header">
      <h1>关于大会</h1>
      <img class="banner-img" src="@/assets/image/common/header_banner.jpg" />
    </div>
    <div class="middle">
      <introduction-video />
      <convention />
      <pack-view />
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  watchEffect,
  computed,
} from "vue";
import convention from "@/component/Convention.vue";
import IntroductionVideo from "@/component/IntroductionVideo.vue";
import PackView from "@/component/PackView.vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
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
const data = reactive({});
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
});
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
});
watchEffect(() => {});
// 使用toRefs解构
// let { } = { ...toRefs(data) }
defineExpose({
  ...toRefs(data),
});
</script>
<style scoped lang="less">
.header {
  h1 {
    position: absolute;
    left: 10%;
    top: 20%;
    font-size: 0.7rem;
    color: RGB(41, 204, 217);
  }
}
.banner-img {
  width: 100%;
  height: 3.5rem;
}
.middle > div {
  margin-top: 1rem;
}
</style>
