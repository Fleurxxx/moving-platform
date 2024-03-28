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
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})

</script>
<style scoped lang='less'>
.container{
    width:100%;
    height:100%;
}
.background{
    width:100%;
    height:100%;
}
</style>