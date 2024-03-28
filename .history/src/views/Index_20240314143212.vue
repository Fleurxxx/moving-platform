<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-11 21:44:51
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-14 14:31:59
 * @FilePath: \moving-platform\src\views\Index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-11 21:44:51
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-11 21:45:07
 * @FilePath: \moving-platform\src\views\Index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import{ Edit }from'@element-plus/icons-vue'
import Header from '@/component/Header.vue'
import Footer from '@/component/Footer.vue'

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
const data = reactive({})
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
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
// .el-header {
//     --el-header-padding: 0 20px;
// }
..el-footer {
    /* --el-footer-padding: 0 20px;
    
</style>