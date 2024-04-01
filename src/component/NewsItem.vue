<!-- 媒体中心新闻列表组件 -->
<template>
  <div class="ax-card-block">
    <img class="img" :src="newsItem.img" mode="" />

    <div class="ax-flex">
      <div class="ax-title">
        <h3>{{ newsItem.title }}</h3>
        <p class="ax-des">
          {{ newsItem.msg }}
        </p>
      </div>
      <div class="tag">
        <span class="tag-box"> {{ newsItem.host }} </span>
        <span class="date"> {{ newsItem.date }} </span>
      </div>
    </div>
  </div>
</template>

<script setup>


const props = defineProps({
  newsItem: {
    type: Object,
    default: () => ({
      title: "【重磅干货】大家都关心的嘉宾PPT下载指南来啦！",
      msg: "指路贴来啦！大家都关心的嘉宾PPT下载指南在这里！一图解锁西湖论剑官网;小程序下载路径，看众多专家真知灼见，干货满满，引领行业思辨！",
      date: "2023-05-12",
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/0ceb338a21e043a69ba41e0b164ea739.jpg",
      host: "西湖论剑",
    }),
  },
});
</script>

<style lang="less" scoped>
.ax-card-block {
  display: flex;
  flex-direction: row;
  height: 370px;
  padding: 50px;
  align-items: center;
  border-bottom: 1px solid #ebeef5;
  width: 80%;
}
.ax-des{
  font-size:30px;
}
.img {
  width: 500px;
  height: 100%;
}
.tag span:first-child {
  color: #fff;
  background: #2db1ba;
  padding: 10px;
  border-radius: 30px;
}

.tag span {
  display: inline-block;
  font-size: 24px;
}
a span,
label {
  cursor: pointer;
}
.tag .date {
  font-weight: 500;
  color: #999;
  margin-left: 30px;
}
.tag span {
  display: inline-block;
  margin-top: 30px;
}
.ax-flex {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 30px;
  height: 100%;
}
</style>
