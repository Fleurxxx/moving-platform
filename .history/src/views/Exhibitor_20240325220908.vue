<template>
  <div class="container">
    <video loop autoplay>
      <source class="background" src="@/assets/video/video1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

const store = useStore();
const route = useRoute();
const router = useRouter();
const data = reactive({})
onBeforeMount(() => {
  
})
onMounted(() => {
  
})
watchEffect(()=>{
})
defineExpose({
  ...toRefs(data)
})

</script>
<style scoped lang='less'>
.container{
    // width: 100vw; /* 视口宽度 */
    // height: 100vh; /* 视口高度 */
    display: flex;
    justify-content: center;
    align-items: center;
}
.background{
    // width: 100%;
    // height: 100%;
    object-fit: cover; /* 填充整个容器 */
}
</style>