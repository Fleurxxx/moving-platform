<template>
  <div class="introduction-video">
    <div class="top">
      <div class="show">
        <Video class="card-video" :height="4" :width="8" :url="url" />
      </div>
    </div>
    <div class="bottom">
      <div class="news">
        <div class="title">
          <div class="big">{{ data.title }}</div>
          <div class="small">{{ data.englishTitle }}</div>
        </div>

        <div class="content">
          <el-scrollbar class="infinite-list">
            <p v-for="(item, index) in data.contentList" :key="index">
              {{ item }}
            </p>
          </el-scrollbar>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import Video from "@/component/Video.vue";

const url = ref(
  "https://outin-f6c3661ae52711eeaca900163e32a995.oss-cn-shanghai.aliyuncs.com/sv/456b34da-18e7fe1ceab/456b34da-18e7fe1ceab.mp4?Expires=1711878577&OSSAccessKeyId=LTAIxSaOfEzCnBOj&Signature=pKMLHFx1PLuwj03RZsiQ9qw5VOk%3D"
);
const data = reactive({
  title: "大会介绍",
  englishTitle: "About Conference ",
  contentList: [
    "西湖论剑·网络安全大会自2012年创办，是国内首个已举办十周年的网络安全大会。十届以来，大会线下参会嘉宾累计超过10000人次，线上直播观看累计超过2500万人次，已成为国内网络安全领域的一张“金名片”。历届大会期间，国家部委、省市领导，院士、知名专家和优秀企业代表齐聚杭州，共商数字时代的安全之道。",
    "2023年是全面贯彻落实党的二十大精神的开局之年，为深入学习贯彻党的二十大精神，推动落实《数字中国建设整体布局规划》尤其是筑牢数字安全屏障的要求，推进数字安全人才培养、科技创新、产业融合发展，以保障数字政务、数字经济、数字社会等数字化生态安全发展。在迎来大会十一年之际，由“西湖论剑·网络安全大会”升级为“西湖论剑·数字安全大会”，定于5月5日-8日在杭州举办。",
    "本届大会主题为“数字安全@数字中国”，大会将邀请相关政府部门、科研院所，以及数字生态各领域的参与者、构建者、守护者，共同探讨数字中国的发展和安全之道。大会将设主论坛、数字安全成果展、多个平行论坛及研讨会，结合数字安全前沿技术、行业应用、人才培养、企业治理等议题展开讨论、展示成果。",
  ],
});
</script>
<style lang="less" scoped>
.introduction-video {
  height: 1200px;
  position: relative;
}
.introduction-video > div {
  height: 100%;
}
.top {
  position: absolute;
  float: left;
  display: flex;
  align-items: start;
  width: 50%;
  z-index: 9;
  left: 5%;
  .show {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
}
.bottom {
  position: absolute;
  left: 50%;
  display: flex;
  align-items: end;
  width: 50%;
  .news {
    width: 70%;
    height: 70%;
    background-image: linear-gradient(-82deg, #2b76bc, #29d6dd);
    display: flex;
    flex-direction: column;
    color: white;
    .title {
      .big {
        font-family: "Arial", "Helvetica Neue", "sans-serif", "pingfang SC",
          "Hiragino Sans GB", "微软雅黑", "microsoft yahei", "宋体", "simsun";
        font-size: 80px;
        font-weight: 700;
      }
      .small {
        font-size: 25px;
      }
    }
    .content {
      font-size: 0.14rem;
      .infinite-list {
        max-height: 70%;
        padding: 0;
        margin: 0;
        list-style: none;
      }
    }
  }
  .news > div {
    margin-left: 1.4rem;
    margin-right: 0.5rem;
    margin-top: 0.4rem;
  }
}
</style>
