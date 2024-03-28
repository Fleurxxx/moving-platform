<template>
  <div class="center-container">
    <div class="search">
         <el-input
            v-model="input3"
            style="width: 500px;"
            placeholder="请输入会议名称进行搜索"
            class="input-with-select"
            >
            <template #prepend>
                <el-select v-model="select" placeholder="会议类型" style="width: 115px">
                <el-option label="主论坛" value="1" />
                <el-option label="平行论坛" value="2" />
                <el-option label="科普论坛" value="3" />
                <el-option label="掌上论剑" value="4" />
                <el-option label="生态合作论坛" value="5" />
                </el-select>
            </template>
            <template #append>
                <el-button class="search-but" :icon="Search" />
            </template>
        </el-input>
    </div>
   
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { Search } from '@element-plus/icons-vue'
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
const input = ref('')

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
.center-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  //align-items: center; /* 垂直居中 */
  height: 100vh; /* 设置容器高度为视窗高度，可以根据需要调整 */
}
.search{
    margin: 0 auto;
}
.search-but{
    width: 200px;
}
</style>