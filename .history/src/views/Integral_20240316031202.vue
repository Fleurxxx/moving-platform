<template>
  <div class="center-container">
    <Row>
        <Col span="14">
          <el-card class="sing-card">
            <Space class="sign">
              <h3>签到任务</h3>
              <div class="sign-info">
                <span>已经连续签到</span>&nbsp;<span style="color:darkorange;">{{ data.cntTime }}</span>&nbsp;<span>天</span>
              </div>
              <div class="sign-but">
                <el-button type="warning">签到</el-button>
              </div>
            </Space>
            <div class="sign-score">
              <div v-for="index in 7" :key="index" class="rectangle">
                <p style="color:darkorange;font-size:0.4rem;padding-left: 30%;padding-top: 1%;">+5</p>
              </div>
            </div>
          </el-card>
        </Col>
        <Col span="10">

        </Col>
    </Row>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { Space } from 'view-ui-plus';
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
  cntTime: 0,

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
.center-container{
  margin: 0.5rem 1rem;
  // display: flex;
  // justify-content: center;
}
.sing-card{
  width:100%;
}
.sign{
  display: flex;
  justify-content: space-between; /* 让内容靠两侧 */
  align-items: center; /* 垂直居中 */
}
.sign-info {
  flex-grow: 1; /* 中间内容占据剩余空间 */
  margin-right: 5rem;
}
.sign-score{
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}
.rectangle {
  width: 1.2rem;
  height: 1.6rem;
  background-color: #e6e6e6;
  border-radius: 10px;
}
.sign-but{
  margin-left: auto;
}
</style>