<!-- 媒体中心 -->
<template>
  <div class="box">
    <div class="header">
      <h1>媒体中心</h1>
      <img class="banner-img" src="@/assets/image/common/banner1.png" />
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
      title: "【重磅干货】大家都关心的嘉宾PPT下载指南来啦！",
      msg: "指路贴来啦！大家都关心的嘉宾PPT下载指南在这里！一图解锁西湖论剑官网;小程序下载路径，看众多专家真知灼见，干货满满，引领行业思辨！",
      date: "2023-05-12",
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/0ceb338a21e043a69ba41e0b164ea739.jpg",
      host: "西湖论剑",
    },
    {
      title: "【重磅干货】大家都关心的嘉宾PPT下载指南来啦！",
      msg: "指路贴来啦！大家都关心的嘉宾PPT下载指南在这里！一图解锁西湖论剑官网;小程序下载路径，看众多专家真知灼见，干货满满，引领行业思辨！",
      date: "2023-05-12",
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/0ceb338a21e043a69ba41e0b164ea739.jpg",
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
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/8f9165a37c6e495fa2c3d87e3ca40292.jpg",
    },
    {
      id: 1,
      title: "MSS安全托管运营服务论坛-精彩瞬间",
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/8f9165a37c6e495fa2c3d87e3ca40292.jpg",
    },
    {
      id: 1,
      title: "MSS安全托管运营服务论坛-精彩瞬间",
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/8f9165a37c6e495fa2c3d87e3ca40292.jpg",
    },
    {
      id: 1,
      title: "MSS安全托管运营服务论坛-精彩瞬间",
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/8f9165a37c6e495fa2c3d87e3ca40292.jpg",
    },
    {
      id: 1,
      title: "MSS安全托管运营服务论坛-精彩瞬间",
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/8f9165a37c6e495fa2c3d87e3ca40292.jpg",
    },
    {
      id: 1,
      title: "MSS安全托管运营服务论坛-精彩瞬间",
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/8f9165a37c6e495fa2c3d87e3ca40292.jpg",
    },
    {
      id: 1,
      title: "MSS安全托管运营服务论坛-精彩瞬间",
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/8f9165a37c6e495fa2c3d87e3ca40292.jpg",
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
      img: "	https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/a6169d65c3d2410bb93dca53ae073844.jpg",
    },
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
      img: "	https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/a6169d65c3d2410bb93dca53ae073844.jpg",
    },
  ],
  imagePreview:{}
});

const imgPreview = (item) => {
  showPreview.value = true;
  state.imagePreview = item;
}

const handleClick = (tab, event) => {
  console.log(tab, event);
};
</script>
<style scoped lang="less">
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
.center {
}
.img-box {
  display: flex;
  flex-direction: row;
  gap: 60px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 50px;
  margin-left: 5%;
}
</style>
