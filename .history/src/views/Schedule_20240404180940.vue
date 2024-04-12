<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-14 19:47:37
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-04-04 18:05:19
 * @FilePath: \moving-platform\src\views\Schedule.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="center-container">
    <div class="header">
        <h1>大会议程</h1>
        <img class="banner-img" src="@/assets/image/common/banner4.png" />
    </div>
    <div class="search">
        <div class="search-box">
            <div>
                <el-input
                    v-model="input"
                    placeholder="请输入会议名称进行搜索"
                    class="select-input"
                    size="large"
                    >
                    <template #prepend >
                        <el-select class="search-select" v-model="select" placeholder="会议类型" size="large" >
                            <el-option label="主论坛" value="1" />
                            <el-option label="平行论坛" value="2" />
                            <el-option label="科普论坛" value="3" />
                            <el-option label="掌上论剑" value="4" />
                            <el-option label="生态合作论坛" value="5" />
                        </el-select>
                    </template>
                    <template #append>
                        <el-button class="search-but" type="primary" size="large" :icon="Search" />
                    </template>
                </el-input>
                <div class="hot-search">
                    <p><img src=""热门搜索：</p>
                    <el-tag v-for="tag in tags" :key="tag.name" :type="tag.type">
                        {{ tag.name }}
                    </el-tag>
                </div>
            </div>
        </div>
    </div>
    <div class="container-box">
        
        <div class="common-container">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" stretch>
                <el-tab-pane label="今日直播" name="first">
                    <h1 class="title">即将开始</h1>
                    <!-- <p class="time">{{ data.startTime}}-{{ data.endTime }}</p> -->
                    <Schedule />
                </el-tab-pane>
                <el-tab-pane label="近期直播" name="third">
                    <LiveStreamingCard />
                </el-tab-pane>
                <el-tab-pane label="精彩回放" name="second">
                    <PlaybackCard />
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { Search } from '@element-plus/icons-vue';
import Schedule from '@/component/LiveCard.vue';
import PlaybackCard from '@/component/PlaybackCard.vue';
import LiveStreamingCard from '@/component/LiveStreamingCard.vue';
import type { TabsPaneContext } from 'element-plus'

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
    title:'MSS安全托管运营服务论坛',
    describe:'这是一段直播描述',
    position: ' 杭州洲际酒店·国际厅1厅',
    startTime:'10:00',
    endTime:'10:30',
    exactDate:'06月13日',
    sumTime:'30',
})
// 热门搜索
const tags = ref([
  { name: '西湖论剑', type: 'primary' },
  { name: '数字安全', type: 'primary' },
  { name: '数字中国', type: 'primary' },
  { name: '安全治理', type: 'primary' },
  { name: '供应链安全', type: 'primary' },
])
const input = ref('')
const select = ref('')
const activeName = ref('first')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

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
    height: 100%;
    width: 100%;
    padding-bottom: 20px;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position-y: bottom;
    background-image: url('@/assets/image/common/list_bg_image.png');
}
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
  height: 3rem;
}
.search{
    background: linear-gradient(to top, #fff, #020d8f 80%);
}
.search-box{
    height:2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 0.8rem;
    .select-input{
        width: 9rem;
        border-radius: 90px;
    }
    .search-select{
        width: 2rem;
    }
    .search-but{
        width: 1.5rem;
    }
    .hot-search {
        padding-top: 0.15rem;
        display: flex;
        grid-gap: 0.05rem;
    }
}
.container-box{
    padding: 0.5rem 2rem;
}
.common-container{
    display: flex;
    justify-content: center;
    background: #dee8fa;
    border-radius: 30px;
    padding: 1rem;
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


</style>