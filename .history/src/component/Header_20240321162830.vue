<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-12 22:42:05
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-21 16:27:35
 * @FilePath: \moving-platform\src\component\Header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="box">
    <el-menu router
      :default-active="activeRoute"
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
      <div class="name" >
        <template v-if="data.isLogin">
          <Dropdown>
            <a href="javascript:void(0)">
              <el-icon><User /></el-icon>{{ "\xa0" }}{{ data.username }}
            </a>
            <template #list>
                <DropdownMenu>
                    <DropdownItem @click="goToNext(1)">个人中心</DropdownItem>
                    <DropdownItem @click="goToNext(2)">积分商城</DropdownItem>
                    <DropdownItem @click="goToNext(3)">退出登录</DropdownItem>
                </DropdownMenu>
            </template>
          </Dropdown>
        </template>
        <template v-else >
          <router-link to="/login">
            <el-icon ><User /></el-icon>{{ "\xa0" }}{{ data.username }}
          </router-link>
        </template>
      </div>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
const store = useStore();
const route = useRoute();
const router = useRouter();
const activeRoute = ref(router.currentRoute.value.path);

const data = reactive({
  username:'李二牛',
  isLogin: true,
})
// 个人中心
const goToNext = (item:Number) => {
  if(item===1){
    router.push('/profile'); 
  }else if(item===2)
  
};
// 积分商城
const goToStore = () => {
  router.push('/integral'); 
};
//退出登录
const logout = () => {
  console.log('执行退出登录操作');
};

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
  padding-top: 1%;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.name{
  padding-top: 1%;
  padding-left: 2%;
}
</style>