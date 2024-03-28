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
                <p class="sign-score-p">+5</p>
                <img src="@/assets/image/common/金币.png" class="sign-score-img"/>
                <p class="sign-score-day">{{ index }}天</p>
              </div>
            </div>
            <div  class="sign-prompt">
              <div class="sign-prompt-text">
                <p class="centered">积分对换好礼，快来领取积分吧！</p>
                <p class="right-aligned">每周一重置签到任务</p>
              </div>
            </div>
          </el-card>
        </Col>
        <Col span="10">
          <el-card style="max-width: 480px">
            <el-table
                :data="tableData"
                :show-overflow-tooltip="true"
                class="alarmTable"
              >
              <el-table-column
                  type="index"
                  width="134"
                  align="center"
                  label="序号">
                  <template #default="scope">
                    <span class="text">{{(scope.$index+1)+(currentPage-1)*(pageSize)}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="name" label="名称" align="left">
                  <template #default="scope">
                    <span class="name-text">{{scope.row.name}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="money" label="金钱" align="center" />
            </el-table>
          </el-card>
        </Col>
    </Row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, defineComponent,nextTick, onBeforeMount, onMounted, onUnmounted, watchEffect, defineExpose, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { Space } from 'view-ui-plus';

const store = useStore();
const route = useRoute();
const router = useRouter();
const data = reactive({
  cntTime: 0,
})
// 表格的数据类型
interface TableType {
  name: string;
  money: number;
}

// 使用 ref 定义响应式数据
const tableData = ref<TableType[]>([]);
const currentPage = ref(1);
const pageSize = ref(6);
const tableDom = ref<HTMLElement | null>(null);
const tableScroll = ref(true);
let timeInterval: NodeJS.Timer; // 定时器的对象

onMounted(() => {
  // 初始化表格的数据
  list()
  scrollTable()
})
onUnmounted(()=> {
  clearInterval(timeInterval)
})
// 初始化表格的数据
const list = () => {
  const arr: TableType[] = [];
  for (let i = 0; i < 28; i++) {
    const randomData = Math.floor(Math.random() * 100);
    const obj = {
      name: '名称' + randomData,
      money: randomData,
    };
    arr.push(obj);
  }
  tableData.value = arr;
};

// 表格的数据滚动
const scrollTable = () => {
  nextTick(() => {
    // 获取当前表格内容的dom
    const table = document.getElementsByClassName('alarmTable')[0];
    tableDom.value = table ? table.querySelector('.el-scrollbar__wrap') as HTMLElement : null;

    if (tableDom.value) {
      tableDom.value.addEventListener('mouseover', () => {
        tableScroll.value = false;
      });

      tableDom.value.addEventListener('mouseout', () => {
        tableScroll.value = true;
      });

      timeInterval = setInterval(() => {
        if (tableScroll.value) {
          // 每次内容滚动的距离
          tableDom.value!.scrollTop += 1;
          if (tableDom.value!.clientHeight + tableDom.value!.scrollTop === tableDom.value!.scrollHeight) {
            tableDom.value!.scrollTop = 0;
          }
        }
      }, 10);
    }
  });
};

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
  height:2.2rem;
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}
.sign-score-p{
  color:darkorange;
  font-size:0.4rem;
  padding-left: 30%;
  padding-top: 12%;
}
.sign-score-img{
  width:0.7rem;
  margin-left: 0.25rem;
}
.sign-score-day{
  color:rgb(121, 118, 116);
  padding-top: 18%;
  padding-left: 35%;
}
.rectangle {
  width: 1.2rem;
  height: 1.6rem;
  background-color: #e6e6e6;
  border-radius: 10px;
}
.sign-prompt{
  margin-top: 20px;
  border-top: 1px solid #cccccc;
  padding-top: 0.2rem;
}
.sign-prompt-text{
  display: flex;
  justify-content: space-between;
}
.centered {
  text-align: center; 
  flex: 1;
  padding-left: 1.5rem;
}

.right-aligned {
  text-align: right;
}
.sign-but{
  margin-left: auto;
}

// 滚动
.alarmTable {
  margin-top: 40px;
  height: 623px;
  overflow: hidden;
  scroll-behavior: smooth;
}
.el-table, .el-table::before,
.el-table--border .el-table__inner-wrapper::after, .el-table--border::after, .el-table--border::before, .el-table__inner-wrapper::before {
  background: transparent!important;
}
.el-table th, .el-table__cell>.cell {
  height: 88px;
  padding: 0;
  font-size: 28px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 88px!important;
}
.el-table thead {
  font-size: 28px;
  font-weight: 600;
  color: #fff!important;
}
.el-table tr{
  background: transparent!important;
  &:nth-child(2n) {
    background:  rgba(49, 250, 233, 0.1)!important;
  }
}
.el-table th.el-table__cell {
  height: 88px;
  padding: 0;
  background:  rgba(237, 250, 49, 0.1)!important;
}
.el-table tr:hover>td {
  cursor: pointer;
  background-color: rgba(0,148,255,0.3) !important;
}
.el-table td.el-table__cell, .el-table th.el-table__cell.is-leaf {
  border-bottom: none!important;
}

.swiper-container-vertical{
  line-height: 1;
  font-family: 'PingFangSC', 'MicrosoftYaHei', 'Arial', 'sans-serif';
  font-size: 14px;
  color: #000;
  list-style: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font-weight: normal;
  vertical-align: baseline;
  position: absolute;
  text-align: center;
  transition: 300ms opacity;
  z-index: 10;
  right: 10px;
  top: 50%;
  transform: translate3d(0px, -50%, 0);
}
.scroll{
  width:1110px;
  height:300px;
  overflow:hidden;
  margin:0 auto;
}

</style>