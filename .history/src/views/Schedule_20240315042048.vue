<template>
  <div class="center-container">
    <div class="search">
         <el-input
            v-model="input3"
            placeholder="请输入会议名称进行搜索"
            class="select-input"
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
        <div class="common-container">
            <h1 class="title">{{ data.title }}</h1>
            <p class="time">{{ data.startTime}}-{{ data.endTime }}</p>
            <el-card class="card">
                <!-- <p v-for="o in 4" :key="o" class="text item" style="font-size: 16px;">{{ 'List item ' + o }}</p> -->
                <el-row>
                    <el-col :span="10" class="card-left">
                        <img class="cover" src="@/assets/image/common/视频1.png" />
                        <div class="overlay">
                            <h2>· 直播 {{ data.exactDate}} {{ data.startTime }} 开始</h2>
                            <h2>约 {{ data.sumTime }} 分钟</h2>
                        </div>
                    </el-col>
                    <el-col :span="14" class="card-right">
                        <p>333</p>
                    </el-col>
                </el-row>
                
            </el-card>
        </div>
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
const data = reactive({
    title:'会议题目',
    startTime:'10:00',
    endTime:'10:30',
    exactDate:'06月13日',
    sumTime:'30',
})
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
  height: 100%; /* 设置容器高度为视窗高度，可以根据需要调整 */
  background-color: black;
}
.search{
    margin: 0 auto;
    .select-input{
        width: 9rem;
        padding-left: 2rem;
        border-radius: 90px;
    }
    .search-but{
        width: 200px;
    }
}
.card{
    width: 12rem;
    .card-left{
        position: relative; 
    }
    .card-right{
        position: relative;
        left: 0.8rem;
    }
}
.title:before {
    content: "";
    width: 0.2rem;
    height: 100%;
    background: #2183cb;
    left: 0;
    top: 0;
    display: block;
    position: absolute;
}
.title{
    height: 1rem;
    position: relative;
    line-height: 1rem;
    padding-left: 0.5rem;
    font-weight: 700;
    font-size: 90px;
    display: flex;
    margin-bottom: 0.3rem;
    color: #222;
    background: linear-gradient(to right, #ddf8fb, transparent);
}
.time{
    font-size:50px;
}
.cover{
    height: 2.5rem;
    border-radius: 10px;
    display: block;
}
.overlay {
    position: absolute; /* 绝对定位，相对于父容器 */
    top: 0; /* 距离父容器顶部距离为0 */
    left: 0; /* 距离父容器左侧距离为0 */
    width: 100%; /* 宽度与父容器相同 */
    height: 23%; /* 高度为图片高度的三分之一 */
    background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
    color: white; /* 文字颜色为白色 */
    display: flex; /* 使用 flex 布局 */
    //flex-direction: column; /* 垂直方向排列子元素 */
    //justify-content: center; /* 垂直居中子元素 */
    justify-content: space-between; /* 左右对齐 */
    align-items: center; /* 水平居中子元素 */
    z-index: 1; /* 使阴影位于图片上方 */
    h2 {
        margin: 0;
        padding-left: 0.2rem;
        font-size: 0.2rem;
    }
    p {
        padding-right: 0.08rem;
        font-size: 0.2rem;
        margin: 0;
    }
}

.common-container{
    background: rgba(255, 255, 255, .9);
    border-radius: 30px;
    padding: 1rem;
}
</style>