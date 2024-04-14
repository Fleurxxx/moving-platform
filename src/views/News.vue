<!-- 媒体中心 -->
<template>
  <div class="box">
    <div class="header">
      <h1>媒体中心</h1>
      <img class="banner-img" src="@/assets/image/common/banner5.png" />
    </div>
    <div class="center">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="新闻中心" name="first">
          <news-item
            v-for="item in state.newsData"
            :key="item.title"
            :newsItem="item"
            @click="router.push('/mediaArticle')"
          ></news-item>
        </el-tab-pane>
        <el-tab-pane label="精彩图片" name="second" class="img-box">
          <img-item
            v-for="item in state.imgData"
            :key="item.id"
            :imgItem="item"
            @click="imgPreview(item)"
          ></img-item>
        </el-tab-pane>
        <el-tab-pane label="精彩视频" name="third" class="img-box">
          <video-item
            v-for="item in state.videoData"
            :key="item.title"
            :videoData="item"
            @click="router.push('/schedule/video')"
          ></video-item>
        </el-tab-pane>
      </el-tabs>
    </div>
    <image-preview-vue
      v-model="showPreview"
      :image="state.imagePreview"
      @close="showPreview = false"
    ></image-preview-vue>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import newsItem from "../component/NewsItem.vue";
import imgItem from "../component/ImgItem.vue";
import videoItem from "../component/VideoItem.vue";
import router from "@/router";
import imagePreviewVue from "../component/ImagePreview.vue";

const activeName = ref("second");

const showPreview = ref(false);

const state = reactive({
  newsData: [
    {
      title: "第七届西湖论剑·中国杭州网络安全技能大赛决赛在杭州举行",
      msg: "3月30日，第七届西湖论剑·中国杭州网络安全技能大赛决赛在杭州市滨江区体育馆举行，大赛以”人才:数字安全创新引擎”为主题，分为网络攻防实战赛、创新挑战赛、可信。",
      date: "2023-05-12",
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2024/4/bd6cc8222bcc4e12bb948ffe420d5236.jpg",
      host: "西湖论剑",
    },
    {
      title:
        "世界互联网大会“走进精品案例”浙江首站“走进安恒”: AI安全赋能“亚运天穹",
      msg: "2023年世界互联网大会乌镇峰会期间，13项“携手构建网络空间命运共同体情品案精彩发布，其中安恒信息发布的“亚运天-践行亚运理念，筑牢安全防线”实践案例。",
      date: "2023-05-12",
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2024/4/5ceac817e67f4db2958c4244cba6a025.jpg",
      host: "西湖论剑",
    },
    {
      title: "【重磅干货】大家都关心的嘉宾PPT下载指南来啦！",
      msg: "指路贴来啦！大家都关心的嘉宾PPT下载指南在这里！一图解锁西湖论剑官网;小程序下载路径，看众多专家真知灼见，干货满满，引领行业思辨！",
      date: "2023-05-12",
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/0ceb338a21e043a69ba41e0b164ea739.jpg",
      host: "西湖论剑",
    },
  ],
  imgData: [
    {
      id: 1,
      title: "MSS安全托管运营服务论坛-精彩瞬间",
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/901bbf0cf5af468f91f13bfba903bc5b.jpg",
    },
    {
      id: 1,
      title: "MSS安全托管运营服务论坛-精彩瞬间",
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/8f9165a37c6e495fa2c3d87e3ca40292.jpg",
    },
    {
      id: 1,
      title: "MSS安全托管运营服务论坛-精彩瞬间",
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/8dd2c03053214763bffe7546ed84d2bc.jpg",
    },
    {
      id: 1,
      title: "MSS安全托管运营服务论坛-精彩瞬间",
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/4a756e7ded7348f2818cd8950969fad0.jpg",
    },
    {
      id: 1,
      title: "MSS安全托管运营服务论坛-精彩瞬间",
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/2616d9c2bb0c42a8ad28dedd9b3eeda8.jpg",
    },
    {
      id: 1,
      title: "MSS安全托管运营服务论坛-精彩瞬间",
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/84068c6e8a6e4c57849edfdb237a7bd0.jpg",
    },
    {
      id: 1,
      title: "MSS安全托管运营服务论坛-精彩瞬间",
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/c5e35458895f4b94aa081b81036941a2.jpg",
    },
  ],
  videoData: [
    {
      title: "主论坛-《2023数字安全能力洞察报告》发布仪式",
      content: "亚运大使团祝福",
      view: 2300,
      img: "	https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/a6169d65c3d2410bb93dca53ae073844.jpg",
    },
    {
      title: "主论坛-《2023数字安全能力洞察报告》发布仪式",
      content: "亚运大使团祝福",
      view: 2300,
      img: "	https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/ec8e76a110854fc687c6af48e9e96f1d.jpg",
    },
    {
      title: "主论坛-《2023数字安全能力洞察报告》发布仪式",
      content: "亚运大使团祝福",
      view: 2300,
      img: "	https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/4b6be10c77214fdca9421bbfd30b76cd.jpg",
    },
    {
      title: "主论坛-《2023数字安全能力洞察报告》发布仪式",
      content: "亚运大使团祝福",
      view: 2300,
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/85b72b276d8e4c84aabccd8602b5ee8d.jpg",
    },
    {
      title: "主论坛-《2023数字安全能力洞察报告》发布仪式",
      content: "亚运大使团祝福",
      view: 2300,
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/96d6c4a59d894cdd81aad4302f592cb7.jpg",
    },
    {
      title: "主论坛-《2023数字安全能力洞察报告》发布仪式",
      content: "亚运大使团祝福",
      view: 2300,
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/aca04dcea698478e906466e63bab1113.jpg",
    },
  ],
  imagePreview: {},
});

const imgPreview = (item) => {
  showPreview.value = true;
  state.imagePreview = item;
};

const handleClick = (tab, event) => {
  console.log(tab, event);
};
</script>
<style scoped lang="less">
.header {
  h1 {
    position: absolute;
    left: 20%;
    top: 25%;
    font-size: 0.7rem;
    color: #fff;
  }
}
.banner-img {
  width: 100%;
  height: 3.5rem;
}
.foot {
  position: relative;
  bottom: 0;
}
.demo-tabs {
  font-size: 50px;
}
.el-tabs {
  --el-tabs-header-height: 120px;
  padding-left: 390px;
}
::v-deep .el-tabs__item {
  font-size: 60px;
  font-weight: bold;
  padding-bottom: 50px;
  margin-right: 10px; /* 右边距 */
  margin-left: 20%; /* 左边距 */
}
::v-deep .el-tabs__active-bar {
  height: 8px;
}
::v-deep .el-tabs__nav-wrap:after {
  background-color: transparent;
}

.box {
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position-y: bottom;
  background-image: url("@/assets/image/common/list_bg_image.png");
}
::v-deep .el-tabs__nav {
  margin-top: 100px;
  margin-left: 18%;
}
.foot {
  position: relative;
  bottom: 0;
}

.img-box {
  display: flex;
  flex-direction: row;
  gap: 60px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 50px;
  margin-left: 5%;
  margin-bottom: 150px;
}
::v-deep .el-tabs__item.is-active,
::v-deep .el-tabs__item:hover {
  color: RGB(45, 177, 186);
}
::v-deep .el-tabs__active-bar {
  background-color: RGB(45, 177, 186);
}
</style>
