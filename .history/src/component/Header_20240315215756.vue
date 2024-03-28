<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-12 22:42:05
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-15 21:55:42
 * @FilePath: \moving-platform\src\component\Header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="box">
    <el-menu router
      :default-active="this.$router.path"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <img class="logo" src="@/assets/image/common/logo.png">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/schedule">大会议程</el-menu-item>
      <el-menu-item index="3">关于大会</el-menu-item>
      <el-menu-item index="4">大咖云集</el-menu-item>
      <el-menu-item index="/activity">精彩活动</el-menu-item>
      <el-menu-item index="6">展商风采</el-menu-item>
      <el-menu-item index="7">成果发布</el-menu-item>
      <el-menu-item index="8">媒体中心</el-menu-item>
      <el-menu-item index="/integral">积分商城</el-menu-item>
      <a ><el-icon><User /></el-icon>{{ "\xa0" }}{{ data.username }}</a>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
            <img class="user" src="../assets/images/img/羊羊.jpg">
        </span>
        <template #dropdown>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="exit" divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-menu>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
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
const data = reactive({
  username:'未登录'
})


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
.box{
  // position: relative;
}
.el-form-item {
  text-align: center;
}
.logo{
  height: 80%;
  margin-left: 10%;
  margin-right: 5%;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>