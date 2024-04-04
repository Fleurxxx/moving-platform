<template>
  <div class="pack-view">
    <div class="title">
      <Title :title="data.title" :englishTitle="data.englishTitle" />
    </div>
    <div class="content">
      <el-carousel type="card" height="500px" arrow="none">
        <el-carousel-item v-for="item in data.pastList" :key="item">
          <div class="content-item">
            <img :src="item.img" />
            <div class="bottom">
              <div class="item-title">{{ item.title }}</div>
              <div class="item-content">
                <div class="item-content-detail">{{ item.content }}</div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script setup lang="ts">
import Title from "@/component/title/Title.vue";
import { reactive } from "vue";
const data = reactive({
  title: "往期回顾",
  englishTitle: "Past Review",
  pastList: [
    {
      img: "https://img2023.gcsis.cn/2023/3/18d77b52d6434149a4c9cf9b05820973.png",
      title: "2021 安全:数字化改革之根本",
      content:
        "2021年的西湖论剑大会于4月24日在杭州国际博览中心举办，本届大会主题为“安全：数字化改革之根基”。届时，大会邀请相关主管部门领导、国内外知名专家学者、网络信息安全行业从业者们，共同解读中国网络信息安全产业政策、法规、行业标准等，厘清网络信息安全发展方向。",
    },
    {
      img: "https://img2023.gcsis.cn/2023/3/29a758735bb846ebbd97cc6253599431.jpg",
      title: "2022  构建安全可信的数字世界",
      content:
        "2022年西湖论剑·网络安全大会由浙江省互联网信息办公室、 浙江省经济和信息化厅、浙江省公安厅、浙江省科学技术协会、浙江省工商业联合会、 浙江省通信管理局、杭州市人民政府主办，拟于2022年7月2日-3日召开，主题为“构建安全可信的数字世界” 。  作为国内首个进入十年的网络安全大会，本次大会将首设北京、杭州双主场 ，大会议题聚焦“两法一条例”落地实施、 助力 “ 浙江数字化改革 ”  高质量发展等方向 ， 从关键信息基础设施安全、数字城市安全、个人信息安全、亚运网络安全、 信创安全、云安全、元宇宙安全等网络安全数据安全的新技术、新应用、新场景出发 ， 邀请相关政府部门领导、两院院士、知名专家、 网络安全从业者等一起，分析现状、研判趋势 , 探讨“构建安全可信的数字世界”的可行路径。",
    },
    {
      img: "	https://img2023.gcsis.cn/2023/3/f7d59c7c91604d93bc0ceead3971134a.png",
      title: "2020 数治安全 智理未来",
      content:
        "2020西湖论剑·网络安全线上峰会，主题为“数治安全 智理未来”。通过北京、杭州两地直播间同步连线直播的形式，聚焦后疫情时代的网络安全新业态、新模式，延续两会的热议话题，邀请政府主管部门领导、知名专家学者和网络安全专家“云聚集”，系统解读数字中国发展浪潮中的智慧城市安全、大数据安全、云安全、5G安全、工业互联网安全等多领域方向的最新成果，共推数字世界新时代。峰会设立1个主论坛，6个分论坛，首创青年科学家对话、首推网络安全云上展览，以更为新颖的方式，更多对话替代主题演讲，将“论”进行到底。",
    },
  ],
});
</script>
<style scoped lang="less">
.pack-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pack-view > div {
  margin-bottom: 0.5rem;
}
.content {
  width: 70%;
  .content-item {
    img {
      width: 100%;
      height: 50%;
    }

    .bottom {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: white;
      border: 1px solid rgb(226, 226, 226);
      .item-title {
        font-size: 0.3rem;
        color: black;
      }
      .item-content {
        padding: 0.3rem;
        .item-content-detail {
          color: #777;
          font-size: 0.16rem;
          line-height: 1.8;
          word-break: break-word;
          white-space: pre-line;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
    }
    .bottom > div:not(:last-child) {
      margin-top: 0.5rem;
    }
  }
}
</style>
