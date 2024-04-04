<template>
  <div class="convention">
    <div class="title">
      <Title :title="data.title" :englishTitle="data.englishTitle" />
    </div>
    <div class="num">
      <div v-for="(item, index) in data.numList" :key="index">
        <div class="num-item">
          <div class="num-item-show">
            <el-statistic :value="item.numShow" />
            <div class="num-item-unit">
              <div>{{ item.unit }}</div>
              <div>+</div>
            </div>
          </div>
          <div class="num-item-title">{{ item.title }}</div>
        </div>
      </div>
    </div>
    <div class="content">
      <div v-for="(item, index) in data.showList" :key="index">
        <div class="content-item">
          <div v-if="index % 2" class="content-pic">
            <img :src="item.rightImg" />
          </div>
          <div class="content-news">
            <img :src="require(`../assets/image/common/${item.leftImg}`)" />
            <div class="content-news-item">
              <div class="title">{{ item.title }}</div>
              <div class="content">{{ item.content }}</div>
              <el-button round>查看详情</el-button>
            </div>
          </div>
          <div v-if="!(index % 2)" class="content-pic">
            <img :src="item.rightImg" />
          </div>
        </div>
      </div>
    </div>
    <div class="expense">
      <el-button round>展开</el-button>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";
import { useTransition } from "@vueuse/core";
import Title from "@/component/title/Title.vue";

const data = reactive({
  title: "大会亮点",
  englishTitle: "Conference Highlight",
  numList: [
    {
      num: 500,
      unit: "",
      title: "主题演讲",
    },
    {
      num: 550,
      unit: "",
      title: "合作伙伴",
    },
    {
      num: 10000,
      unit: "",
      title: "与会嘉宾",
    },
    {
      num: 10,
      unit: "万",
      title: "行业从业者",
    },
    {
      num: 2500,
      unit: "万",
      title: "直播观看",
    },
  ],
  showList: [
    {
      title: "议题更前沿",
      content:
        "大会主题及议题、展览锚定数字中国建设要求，助力政企单位从政策、技术、人才、产业等各层面落实工作。",
      leftImg: "index_p1.jpg",
      rightImg:
        "https://img2023.gcsis.cn/2023/4/67f08fab19f24d1ca6790f6cc3ae939b.png",
    },
    {
      title: "线上更精彩",
      content: "“掌上论剑”将进一步丰富内容，增强互动性、趣味性，线上持续精彩。",
      leftImg: "index_p2.jpg",
      rightImg:
        "https://img2023.gcsis.cn/2023/4/db2b99dfbc4e429f80fc91e70dec8ee3.png",
    },
    {
      title: "成果更显著",
      content:
        "将推出国内首份《2023中国数字安全能力洞察报告》，报告涵盖趋势、科技、人才、实践等多部分内容，引领行业发展方向。",
      leftImg: "index_p1.jpg",
      rightImg:
        "https://img2023.gcsis.cn/2023/4/ee4708ef09c547aebd375afe35aec917.png",
    },
  ],
});
// 让数字动起来
const moveNum = () => {
  data.numList.forEach((element) => {
    const source = ref(0);
    element.numShow = useTransition(source, {
      duration: element.num / 10,
    });
    source.value = element.num;
  });
};
onMounted(() => {
  moveNum();
});
</script>
<style lang="less" scoped>
.convention {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.convention > div:not(:last-child),
.content > div:not(:last-child) {
  margin-bottom: 0.7rem;
}
.convention {
  ::v-deep .el-button {
    padding: 0.1rem 1rem;
    color: RGB(45, 177, 186);
    font-weight: 700;
    font-size: 0.15rem;
    border: 1px solid RGB(45, 177, 186);
  }
}
.num {
  width: 80%;
  display: flex;
  justify-content: space-around;
  .num-item {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    height: 1.1rem;
    .num-item-show {
      display: flex;
      align-items: flex-end;

      .num-item-unit {
        display: flex;
        font-size: 0.3rem;
        font-weight: 700;
        line-height: 1;
        background-image: linear-gradient(-82deg, #2b76bc, #29d6dd);
        background-clip: text;
        -webkit-background-clip: text;
        overflow: hidden;
        color: transparent;
        margin-bottom: 0.1rem;
      }
      .num-item-title {
        font-size: 1.6rem;
        color: #666;
        text-align: center;
      }
    }
  }
}
.content {
  .content-item {
    display: flex;
    justify-content: center;
    align-items: center;
    .content-news {
      position: relative;
      img {
        height: 2.4rem;
        border-radius: 0.1rem;
      }

      .content-news-item {
        position: absolute;
        height: 80%;
        top: 0.1rem;
        left: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        color: white;
        .title {
          font-size: 0.3rem;
          font-weight: 700;
        }
        .content {
          font-size: 0.17rem;
        }
        ::v-deep .el-button {
          width: 100px;
          padding: 0.1rem 1rem;
          color: black;
          font-size: 0.14rem;
          border: 1px solid white;
          font-weight: 500;
        }
      }
    }
    .content-pic {
      margin: 0 0.3rem;
      img {
        height: 2.8rem;
        width: 2.8rem;
        border-radius: 0.2rem;
      }
      &:hover img {
        transform: scale(1.03);
        margin: 0 0.4rem;
        box-shadow: 0.2rem 0.2rem 0.2rem RGBA(139, 139, 139, 0.4);
        margin-bottom: 0.3rem;
      }
    }
  }
}
::v-deep .el-statistic__content {
  font-size: 0.8rem;
  line-height: 1;
  background-image: linear-gradient(-82deg, #2b76bc, #29d6dd);
  background-clip: text;
  -webkit-background-clip: text;
  overflow: hidden;
  color: transparent;
}
</style>
