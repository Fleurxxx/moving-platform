<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-12 22:37:26
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-14 15:41:22
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
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

const store = useStore();
const route = useRoute();
const router = useRouter();
const data = reactive({})
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
————————————————

                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
                        
原文链接：https://blog.csdn.net/Y1914960928/article/details/132583878
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