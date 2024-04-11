<template>
  <div class="conference-agenda">
    <el-carousel height="100vh" motion-blur>
      <el-carousel-item v-for="(item, index) in data.picList" :key="index">
        <img :src="item" />
        <div class="item-show" v-if="index === 0">
          <div class="title">{{ data.playNews.title }}</div>
          <div class="detail">
            <div>{{ data.playNews.time }}</div>
            <div>|</div>
            <div>{{ data.playNews.address }}</div>
          </div>
          <div>
            <el-button link>立即报名</el-button>
          </div>
          <div class="date">
            <div class="date-show">
              {{ data.playNews.date.day }}
            </div>
            天
            <div class="date-show">
              {{ data.playNews.date.hour }}
            </div>
            时
            <div class="date-show">
              {{ data.playNews.date.minute }}
            </div>
            分
            <div class="date-show">{{ data.playNews.date.s }}</div>
            秒
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="content">
      <div class="content-time">
        <div class="left">
          <div class="big">大会议程</div>
          <div class="small">Conference Agenda</div>
        </div>
        <div class="middle">
          <div v-for="(item, index) in data.dateTimeList" :key="index">
            <div
              v-if="index !== data.dateTimeActive"
              class="date-item"
              @click="handleClickTab(index)"
            >
              <el-icon size="16"><Calendar /></el-icon>
              <div class="date-item-time">{{ item }}</div>
            </div>
            <div class="date-item" @click="handleClickTab(index)" v-else>
              <el-icon size="16" color="RGB(45, 177, 186)"
                ><Calendar
              /></el-icon>
              <div class="date-item-time" style="color: RGB(45, 177, 186)">
                {{ item }}
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <el-icon size="30" color="RGB(45,177,186)">
            <Right />
          </el-icon>
        </div>
      </div>
    </div>
    <div class="content-item">
      <div class="left">
        <el-scrollbar height="7.5rem">
          <p
            v-for="(item,index) in data.showList"
            :key="index"
            class="scrollbar-demo-item"
            :class="index==data.showActive?'scrollbar-atcive':''"
            @click="handleCheckShow(index)"
          >
            <div class="top">
              <div>
                <el-button link>{{ item.type }}</el-button>
              </div>
              <div>
                {{ item.time }}
              </div>
            </div>
            <div class="title">{{ item.title }}</div>
            <div class="bottom">
              <div>{{ item.address }}</div>
              <div>
                <el-button link>观看回放</el-button>
              </div>
            </div>
          </p>
        </el-scrollbar>
      </div>
      <div class="right">
        <div class="top">
          <Video class="card-video" :height="5" :width="10" :url="data.showActiveItem.url" />
        </div>
        <div class="bottom">
          <div class="top">
            <div class="title">
            {{ data.showActiveItem.title }}
          </div>
            <div class="button-one">
              <el-button link>订阅</el-button>
            </div>
          </div>
          <div class="bottom-show">
            <div class="description">
              <div>{{ data.showActiveItem.description }}</div>
            </div>
            <div class="button-two"> <el-button link>前往会场</el-button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, onMounted } from "vue";
const data = reactive({
  picList: [
    "https://img2023.gcsis.cn/2023/4/3dd1997060ca4d8f95dc01e1e8be8b48.jpg",
    "https://img2023.gcsis.cn/2023/7/cf17e6301f9d4035ab0a3066333d5727.jpg",
    "https://img2023.gcsis.cn/2023/5/0ceb338a21e043a69ba41e0b164ea739.jpg",
    "https://img2023.gcsis.cn/2023/5/7422a25f996e4e17aa0e695c241de036.jpeg",
  ],
  playNews: {
    title: "2024 西湖论剑数字安全大会",
    time: "2024年4月6日",
    address: "中国·杭州",
    date: {
      day: 1,
      hour: 12,
      minute: 35,
      s: 60,
    },
  },
  dateTimeList: ["4月5日", "4月6日", "4月7日"],
  dateTimeActive: 0,
  showList: [],
  showActive: 0,
  showActiveItem:{
    url:"https://outin-f6c3661ae52711eeaca900163e32a995.oss-cn-shanghai.aliyuncs.com/sv/269e0595-18eb295c5e6/269e0595-18eb295c5e6.mp4?Expires=1712602157&OSSAccessKeyId=LTAIxSaOfEzCnBOj&Signature=Rmi5aDTpEnMvRkzojir26XzaHCQ%3D"
  }
});
import Video from "@/component/Video.vue";
import { showDataList } from "@/assets/js/show-data.js";

// 倒计时显示
const futureDay = () => {
  const end = Date.parse(new Date("2024-04-15"));
  const now = Date.parse(new Date());
  const msec = end - now;
  let day = parseInt(msec / 1000 / 60 / 60 / 24);
  let hr = parseInt((msec / 1000 / 60 / 60) % 24);
  let min = parseInt((msec / 1000 / 60) % 60);
  let sec = parseInt((msec / 1000) % 60);
  data.playNews.date.day = day;
  data.playNews.date.hour = hr > 9 ? hr : "0" + hr;
  data.playNews.date.minute = min > 9 ? min : "0" + min;
  data.playNews.date.s = sec > 9 ? sec : "0" + sec;
  setTimeout(() => {
    futureDay();
  }, 1000);
};
// 切换日期
const handleClickTab = (item) => {
  data.dateTimeActive = item;
  data.showList = showDataList[item];
  data.showActive = 0;
  data.showActiveItem = showDataList[data.dateTimeActive][data.showActive]
};
// 切换展示的item
const handleCheckShow = (index) =>{
  data.showActive = index;
  data.showActiveItem = showDataList[data.dateTimeActive][data.showActive]
}
onMounted(() => {
  futureDay();
  data.showList = showDataList[data.dateTimeActive];
  data.showActiveItem = showDataList[data.dateTimeActive][data.showActive]
});
</script>
<style lang="less" scoped>
img {
  position: relative;
  width: 100vw;
}
::v-deep .el-carousel__indicators--horizontal {
  margin-bottom: 0.8rem;
  left: 50%;
  transform: translateX(-50%);
}
.item-show {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bolder;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 0.7rem;
    text-align: center;
  }
  .detail {
    display: flex;
    font-size: 0.3rem;
  }
  .date {
    font-size: 0.4rem;
    display: flex;
    align-items: center;
    .date-show {
      padding: 0.1rem;
      background-color: RGB(29, 125, 186);
      margin: 0.1rem;
      border-radius: 0.1rem;
    }
  }
  ::v-deep .el-button {
    padding: 0.1rem 1rem;
    color: white;
    font-weight: 700;
    font-size: 0.2rem;
    border: 1px solid white;
    border-radius: 2rem;
  }
}
.item-show > div {
  margin-bottom: 0.8rem;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 200%);
  .content-time {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid white;
    box-shadow: 0.1rem 0.2rem 0.6rem 0.3rem rgba(167, 165, 161, 0.3);
    border-radius: 0.2rem;
    background-color: white;
    min-width: 12rem;
    padding: 0.15rem 0.3rem;
    .left {
      text-align: center;
      background-image: linear-gradient(-82deg, #2b76bc, #29d6dd);
      color: white;
      padding: 0.1rem 1rem;
      .big {
        font-family: "Arial", "Helvetica Neue", "sans-serif", "pingfang SC",
          "Hiragino Sans GB", "微软雅黑", "microsoft yahei", "宋体", "simsun";
        font-size: 0.3rem;
        font-weight: 700;
      }
      .small {
        font-size: 0.12rem;
      }
    }
    .middle {
      display: flex;
      .date-item {
        margin: 0 0.6rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        .date-item-time {
          font-size: 0.19rem;
          color: #999;
          margin-left: 0.1rem;
        }
      }
    }
  }
  .content-time > div {
    padding: 0.15rem;
  }
}
.active-tab {
  color: RGB(45, 177, 186);
}
.content-item {
  display: flex;
  justify-content: center;
  margin-top: 1.3rem;
  .left {
    margin-right: 0.1rem;
    .scrollbar-demo-item {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 1.8rem;
      margin-bottom: 10px;
      padding: 0.14rem;
      width: 4.4rem;
      text-align: center;
      font-size:0.15rem;
      border-radius: 0.1rem;
      background-color: RGB(248,248,248);
      .top,.bottom{
        display: flex;
        justify-content: space-between;
        color: #333;
      }
      .title{
        font-size: 0.25rem;
        text-align: start;
      }
      ::v-deep .el-button {
        padding: 0.07rem;
        color: #333;
        font-size: 0.15rem;
        border: 1px solid #333;
        border-radius: 2rem;
      }
    }
    .scrollbar-atcive{
      background-image: linear-gradient(-82deg, #29d6dd,#2b76bc);
      border: none;
      color: white;
      .top,.bottom{
        display: flex;
        justify-content: space-between;
        color: white;
      }
      .title{
        font-size: 0.25rem;
        text-align: start;
      }
      ::v-deep .el-button {
        padding: 0.07rem;
        color: white;
        font-size: 0.15rem;
        border: 1px solid white;
        border-radius: 2rem;
      }
    }
  }
  .right{
    .bottom{
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: RGB(248,248,248);
      padding:0 0.5rem;
      .top,.bottom-show{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 0.2rem;
      }
      .top{
        .title{
          font-size: 0.3rem;
          color: #29d6dd;
        }
        ::v-deep .el-button {
        padding: 0.1rem 0.3rem;
        font-size: 0.15rem;
        background-color: RGB(230,245,247);
        color: #29d6dd;
        border-radius: 2rem;
      }
      }
    }
    .bottom-show{
      height: 1rem;
      .description{
        max-width: 5.5rem;
        color: #777;
        font-size: 0.17rem;
        line-height: 1.8;
        word-break: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      ::v-deep .el-button {
        padding: 0.1rem 0.5rem;
        font-size: 0.25rem;
        background-image: linear-gradient(-82deg, #29d6dd,#2b76bc);
        color: white;
        border-radius: 2rem;
      }
    }
  }
}
</style>
