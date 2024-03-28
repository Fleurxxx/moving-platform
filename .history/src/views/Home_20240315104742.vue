<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-12 22:37:26
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-15 10:47:29
 * @FilePath: \moving-platform\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div >
    <el-backtop :right="100" :bottom="100" />
    <div>
      <Comment :comment="sampleComment" @remove="handleRemove" />
    </div>
    <div>
      <vue-seamless-scroll
        ref="scroll"
        class="scroll"
        :data="logos"
        :class-option="defaultOption"
      >
        <!-- <ul class="ul-scoll">
          <li
            v-for="(item, index) in Math.ceil(logos.length / 5)"
            :key="index"
          >
            <img
              v-for="(item, i) in logos.slice(5 * index, 5 * (index + 1))"
              :key="i"
              :src="getImg(item)"
              
            />
          </li>
        </ul> -->
      </vue-seamless-scroll>
    </div>
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

<script setup lang="ts">
import { ref, reactive, toRefs, defineComponent, onBeforeMount, onMounted, onUnmounted, watchEffect, defineExpose, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { nextTick } from 'vue';
import logos from '@/utils/logos'
import Comment from '@/component/Comment.vue';

// 父组件逻辑
const sampleComment = ref({
  id: 1,
  content: '这是一条评论内容'
})

const handleRemove = (comment) => {
  console.log('需要删除的评论：', comment)
  // 在这里可以处理删除评论的逻辑
}

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
const data = reactive({})
const store = useStore();
const route = useRoute();
const router = useRouter();
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

const defaultOption = {
  step: 0.8,
  limitMoveNum: Math.ceil(logos.length / 5),
  hoverStop: true,
  direction: 1,
  openWatch: true,
  singleHeight: 0,
  singleWidth: 0,
  waitTime: 1000,
};

const getImg = (item: string): string => {
  console.log(item.split('logos')[1])
  return 'image'
  // return require(`@/assets/image/cooperation/${item.split('logos')[1]}`);
};

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
.scroll{
  width:1110px;
  height:300px;
  overflow:hidden;
  margin:0 auto;
}
</style>