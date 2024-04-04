<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-12 22:37:26
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-26 15:16:53
 * @FilePath: \moving-platform\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="home">
    <conference-agenda/>
    <convention />
    <WonderfulMoment />
    <Company />
  </div>
</template>

<script setup lang="ts">
import convention from "@/component/Convention.vue";
import WonderfulMoment from "@/component/WonderfulMoment.vue";
import Company from "@/component/Company.vue";
import ConferenceAgenda from  '@/component/ConferenceAgenda.vue'
</script>
<style scoped lang="less">
.home {
  margin-bottom: 1rem;
}
.home > div:not(:first-child){
  margin-top: 1rem;
}
</style>
