<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-12 22:37:26
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-14 15:51:07
 * @FilePath: \moving-platform\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div >
    <el-backtop :right="100" :bottom="100" />
    <!-- <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1>
    <h1>111111111111111</h1> -->
    <div>
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
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, defineExpose, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { nextTick } from 'vue';

const store = useStore();
const route = useRoute();
const router = useRouter();

// 表格的数据类型
interface tableType {
  name: string;
  money: number;
}
const data = reactive({
  tableData: [] as Array<tableType>, // 表格的数据
  currentPage: 1, // 当前展示的页码
  pageSize: 6, // 当前表格一页展示多少条数据
  tableDom: {} as HTMLElement, // 表格内容的dom
})
let timeInterval: NodeJS.Timer // 定时器的对象
let tableScroll = ref(true) // 是否需要滚动

onBeforeMount(() => {
  
})
onMounted(() => {
  // 初始化表格的数据
  list()
  scrollTable()
})
onUnmounted(()=> {
  clearInterval(timeInterval)
})
watchEffect(()=>{
})

// 初始化表格的数据
const list = () => {
  let arr:Array<tableType> = []
  for(let i = 0; i < 28; i++) {
    let randomData = Math.floor(Math.random() * 100)
    let obj = {
      name: '名称'+randomData,
      money: randomData
    }
    arr.push(obj)
  }
  data.tableData = arr
}
	
// 表格的数据滚动
const scrollTable = () => {
  nextTick(() => {
    // 获取当前表格内容的dom
    let table = document.getElementsByClassName('alarmTable')[0]
    data.tableDom = (table.getElementsByClassName('el-scrollbar__wrap')[0])! as HTMLElement
    // 鼠标放在表格内容，暂停滚动
    data.tableDom.addEventListener('mouseover', () => {
        tableScroll.value = false
    })
    // 鼠标移出表格内容，继续滚动
    data.tableDom.addEventListener('mouseout', () => {
      tableScroll.value = true
    })
    // 
    timeInterval = setInterval(() => {
        if (tableScroll.value) {
          // 每次内容滚动的距离
          data.tableDom.scrollTop += 1
          if (data.tableDom.clientHeight + data.tableDom.scrollTop == data.tableDom.scrollHeight) {
            data.tableDom.scrollTop = 0
          }
        }
    }, 10)
  })
}

defineExpose({
  ...toRefs(data)
})

</script>
<style scoped lang='less'>
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
</style>