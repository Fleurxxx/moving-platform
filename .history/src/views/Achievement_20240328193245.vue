<template>
  <div >
    <div class="header">
      <h1>成果发布</h1>
      <img class="banner-img" src="@/assets/image/common/banner1.png" />
    </div>
    <div class="container">
      <Article :title="data.title" :value="newsContent" />
    </div>
    <div class="foot">
      <img class="banner-img" src="@/assets/image/common/banner4.png" />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';


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
.header{
  h1{
    position: absolute;
    left: 20%;
    top:25%;
    font-size:0.7rem;
    color: #fff;
  }
}
.banner-img{
  width:100%;
  height: 3.5rem;
}
.foot{
  position: relative;
  bottom:0;
}
.container{
  margin: 1rem 3rem;
}
</style>