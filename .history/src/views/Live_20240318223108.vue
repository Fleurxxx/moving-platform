<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-18 14:40:27
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-18 22:11:37
 * @FilePath: \moving-platform\src\views\Live.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div >
    <div class="video">
        <div style="width: 8rem;height: 100" id="J_prismPlayer"></div>
    </div>
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
</style>