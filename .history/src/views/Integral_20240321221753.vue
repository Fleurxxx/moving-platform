<template>
  <div class="top">
      <img class="top-img" src="@/assets/image/common/积分商城.jpg" />
      <div class="top-info">
        <el-card class="top">
          <h2>?????????????</h2>
          <el-divider />
        </el-card>
      </div>
  </div>
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
          <el-card class="record">
            <h3>积分领取记录</h3>
            <el-table
                :data="tableData"
                :show-overflow-tooltip="true"
                class="alarmTable"
              >
              <!-- <el-table-column
                  type="index"
                  width="134"
                  align="left"
                  label="用户">
                  <template #default="scope">
                    <span class="text">{{(scope.$index+1)+(currentPage-1)*(pageSize)}}</span>
                  </template>
                </el-table-column> -->
                <el-table-column prop="name" width="200" label="操作" align="left">
                  <template #default="scope">
                    <span style="color:#57a3f3;">{{scope.row.name}}</span>&nbsp;<span>{{scope.row.things}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="money" label="金币" align="left" >
                  <template #default="scope">
                    <span style="color:darkorange;">+{{scope.row.money}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="time" label="时间" align="left" />
            </el-table>
          </el-card>
        </Col>
    </Row>
    <div class="title1">
      <h1></h1>
      <img class="little-title1" src="@/assets/image/common/金币兑好礼1.png" />
    </div>
    <div class="goods-cards">
      <el-card v-for="index in 8" :key="index" class="card" style="max-width: 480px">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          style="width: 100%;height: 2.5rem;"
        />
        <template #footer>
          <h3>小汉堡</h3>
          <img src="@/assets/image/common/金币.png" class="goods-cards-img"/>&nbsp;
          <span class="goods-cards-cnt">1888</span>&nbsp;
          <span style="color:rgb(121, 118, 116);">金币</span>
          <el-button class="goods-cards-but" size="small" type="primary" plain round>库存10件</el-button>
        </template>
      </el-card>
    </div>
    <div class="title1">
      <img class="little-title1" src="@/assets/image/common/金币兑周边1.png" />
    </div>
    <div class="goods-cards">
      <el-card v-for="index in 8" :key="index" class="card" style="max-width: 480px">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          style="width: 100%;height: 2.5rem;"
        />
        <template #footer>
          <h3>小汉堡</h3>
          <img src="@/assets/image/common/金币.png" class="goods-cards-img"/>&nbsp;
          <span class="goods-cards-cnt">1888</span>&nbsp;
          <span style="color:rgb(121, 118, 116);">金币 + </span>
          <img src="@/assets/image/common/钱.png" class="goods-cards-img"/>&nbsp;
          <span class="goods-cards-cnt">20</span>&nbsp;
          <span style="color:rgb(121, 118, 116);">元</span>
          <el-button class="goods-cards-but" size="small" type="primary" plain round>库存10件</el-button>
        </template>
      </el-card>
    </div>
    <div class="title2">
      <img class="little-title2" src="@/assets/image/common/每日任务.png" />
    </div>
    <div>
      <el-card style="max-width: 16rem">
        <div v-for="fit in fits" :key="fit.id" class="block">
          <div class="lefts">
            <div class="lf_lefts">
              <div class="icons">
                <div class="icons" style="background: #db720f;">
                  <Icon type="ios-share-alt" style="padding-top:0.24rem;font-size:0.6rem;color:#ffffff"/>
                </div>
              </div> 
              <div class="nameboxs">
                <p class="coursename">分享视频给好友</p> 
                <p class="pones">购买成功即可
                  <span style="display: none;">（<span class="nums">0</span>/0）</span> 
                  <span>（无上限）</span>
                </p>
              </div>
            </div> 
            <div class="lf_rights">
              <span class="onespan"> +10% /深夜币 </span>
              <div class="buttons">
                <el-button v-if="!fit.clicked" type="warning" plain round @click="handleClick(fit)">去完成</el-button>
                <el-button v-else type="info" plain round>已完成</el-button>
              </div>
            </div>
          </div>
        </div>
        <el-divider />
      </el-card>
    </div>
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
let timeInterval: ReturnType<typeof setInterval>;// 定时器的对象


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
    const randomData : number = getRandomMultipleOfFive();
    const randomChineseUsername: string = generateRandomChineseName();
    const randomActivity: string = getRandomActivity();
    const randomTime: string = getRandomTime();
    const obj = {
      name: randomChineseUsername,
      things: randomActivity,
      money: randomData,
      time: '刚刚',
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
//随机获得金币数
function getRandomMultipleOfFive(): number {
  const maxNumber: number = 30;
  const randomNumber: number = Math.floor(Math.random() * (maxNumber / 5)) * 5 + 5;
  return randomNumber <= maxNumber ? randomNumber : maxNumber;
}
//随机获得名字
function generateRandomChineseName(): string {
  const surnames: string[] = ['赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '楮', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵'];
  const names: string[] = ['彤', '潇', '晨', '霖', '琪', '玥', '轩', '曦', '菲', '洋', '婷', '宇', '欣', '明', '雅', '萱', '鑫', '嘉', '馨', '宁', '瑶', '嘉', '婉', '天', '璐', '玮', '萌', '怡', '璇', '韵', '亦', '涵', '依', '娜', '琳', '涵', '静', '萍', '楠', '玲', '云', '芝', '洁', '莹', '露', '佳', '莉', '玲', '琦', '蓓', '文', '倩', '洁', '蕾', '欣', '琼', '静', '怡', '洁', '慧', '静', '若', '静', '怡', '欣', '雪', '倩', '丽', '婧', '倩', '怡', '淑', '静', '洁', '雨', '洁', '颖', '瑶', '芸', '露', '玉', '雯', '丹', '怡', '梦', '琪', '悦', '琪', '静', '若', '晨'];

  const randomSurnameIndex: number = Math.floor(Math.random() * surnames.length);
  const randomNameIndex: number = Math.floor(Math.random() * names.length);
  
  const randomSurname: string = surnames[randomSurnameIndex];
  const randomName: string = names[randomNameIndex];
  
  const randomChineseName: string = randomSurname + randomName;

  return randomChineseName;
}

function getRandomTime(): string {
  const today: Date = new Date(); // 获取当前日期时间
  const yesterday: Date = new Date(today);
  yesterday.setDate(today.getDate() - 1); // 获取昨天日期时间

  const randomTime: Date = new Date(
    yesterday.getTime() + Math.random() * (today.getTime() - yesterday.getTime())
  );

  const hours: string = String(randomTime.getHours()).padStart(2, '0'); // 小时转换为两位数格式
  const minutes: string = String(randomTime.getMinutes()).padStart(2, '0'); // 分钟转换为两位数格式

  return `${hours}:${minutes}`;
}

function getRandomActivity(): string {
  const activities: string[] = ['浏览作品/文章', '分享直播', '评价作品/文章', '观看直播时长'];
  const randomIndex: number = Math.floor(Math.random() * activities.length);
  return activities[randomIndex];
}

//每日任务
interface FitItem {
  id: number;
  clicked: boolean;
}

const fits = ref<FitItem[]>([
  { id: 1, clicked: false },
  { id: 2, clicked: true },
  // 添加更多的数据对象...
]);

const handleClick = (item: FitItem) => {
  item.clicked = true; // 假设点击后设置为已点击
};

defineExpose({
  ...toRefs(data)
})

</script>
<style scoped lang='less'>
.center-container{
  margin: 0.5rem 1.8rem;
}

.top{
  position: relative;
  .top-img{
    width: 100%;
  }
  .top-info{
    position: absolute;
    top:10px;
    right: 10%;
  }
}

//每日签到卡片
.sing-card{
  width:100%;
}
.sign{
  display: flex;
  justify-content: space-between; /* 让内容靠两侧 */
  align-items: center; /* 垂直居中 */
  h3{
    margin-left: 0.12rem;
  }
}
.sign-info {
  flex-grow: 1; /* 中间内容占据剩余空间 */
  margin-right: 5rem;
}
.sign-score{
  height:2.2rem;
  display: flex;
  justify-content: space-around;
  margin-top: 0.35rem;
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
  margin-right: 0.12rem;
}

// 签到记录滚动列表
.alarmTable {
  margin-top: 0.01rem;
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
.record{ //卡片
  margin-left: 5%;
  // height:4.1rem;
  width:95%;
  h3{
    margin-left: 0.12rem;
  }
}
//商品卡片
.goods-cards{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  ::v-deep .el-card__body {
      padding: 0;
  }
}
.card {
  flex: 0 0 calc(25% - 20px); /* 每行显示四个卡片，设置卡片宽度 */
}
.goods-cards-img{
  width:0.2rem;
  padding-bottom: 0.1rem;
}
.goods-cards-cnt{
  font-size:0.27rem;
  font-weight:600;
  color:darkorange;
}
.goods-cards-but{
  margin-left: 75%;
  margin-top: -5%;
}
//小标题
.title1{
  height: 3rem;
  display: flex;
  justify-content: center;
}
.little-title1{
  margin-top: 4%;
  height:1.8rem;
}
.title2{
  height: 3rem;
  display: flex;
  justify-content: left;
}
.little-title2{
  margin-top: 7%;
  margin-left: -3%;
  height: 1.4rem;
}
//每日签到
.lefts{
    width: 7.2rem;
    height: 1.4rem;
    float: left;
    
}
.rights{
    float: right;
    position: relative;
}
.lf_lefts {
    // width: 100%;
    margin: 0.3rem 0;
    float: left;
}
.icons{
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
    background: #ff9300;
    float: left;
    text-align: center;
    line-height: 1rem;
    overflow: hidden;
}
.nameboxs{
    width: 3.2rem;
    height: 1rem;
    float: left;
}
.coursename{
    font-size: 0.35rem;
    font-family: PingFang SC;
    font-weight: 700;
    color: #434343;
    text-align: left;
    padding-left: 0.4rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 0.7rem;
}
.pones{
    font-size: 0.2rem;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 0.4rem;
    color: #bebebe;
    text-align: left;
    padding-left: 0.4rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.lf_rights {
    // width: 4rem;
    height: 0.5rem;
    margin: 0.5rem 0;
    float: right;
    text-align: right;
    padding: 12px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.onespan {
    font-size: 0.2rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #bebebe;
    padding-right: 10px;
}
</style>