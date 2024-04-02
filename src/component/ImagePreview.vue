<!-- 显示对象预览对话框 -->
<template>
  <el-dialog
    style="
      background-color: transparent;
      border: 0;
      box-shadow: none;
      margin-top: 1%;
      height: 90vh;
      display: flex;
      justify-content: center;
      align-items: center;
    "
    class="content-box"
    append-to-body
  >
    <div class="preview-box">
      <div class="img-box">
        <img
          ref="img"
          :src="image.img"
          :style="{ transform: `scale(${scale})` }"
        />
        <div class="look-box-msg">
          {{ image.title }}
        </div>
      </div>
      <el-button class="close" @click="close" type="info" circle
        ><el-icon><CloseBold /></el-icon>
      </el-button>
    </div>

    <div class="btnList">
      <el-button link class="btn" style="height: 50px" @click="zoomOut">
        <el-icon class="icon" size="30px"><ZoomOut /></el-icon>
      </el-button>
      <el-button link class="btn" @click="zoomIn">
        <el-icon size="30px" class="icon"><ZoomIn /></el-icon
      ></el-button>
      <el-button link class="btn" @click="downLoad"
        ><el-icon size="30px" class="icon"><Download /></el-icon
      ></el-button>
      <el-button link class="btn" @click="downLoad"
        ><img class="icon" src="..\..\public\static\icon\编辑.png" /></el-button>
    </div>
  </el-dialog>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

const props = defineProps({
  image: {
    type: Object,
    default: () => ({
      id: 1,
      title: "MSS安全托管运营服务论坛-精彩瞬间",
      img: "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/8f9165a37c6e495fa2c3d87e3ca40292.jpg",
    }),
  },
});

const emit = defineEmits(["close"]);

/* 放大缩小 */
const img = ref(null);
const scale = ref(1);
const zoomIn = () => {
  scale.value *= 1.1;
  img.value.style.transform = `scale(${scale.value})`;
};
const zoomOut = () => {
  scale.value /= 1.1;
  img.value.style.transform = `scale(${scale.value})`;
};

/* 下载文件 */
const downLoad = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", src.value, true);
  xhr.responseType = "blob";
  xhr.onload = function () {
    const blob = new Blob([this.response], {
      type: "application/octet-stream",
    });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = src.value.split("/").pop();
    document.body.appendChild(link);
    link.click();
  };
  xhr.send();
};
const src = ref("");

const close = () => {
  src.value = "";
  emit("close");
};
</script>

<style scoped>
.preview-box {
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
}
.img-box {
  position: relative;
  overflow: hidden;
}
.img-box > img {
  object-fit: contain;
  width: 100%;
  height: 100%;
  transition: transform 0.3s;
  object-fit: fill;
}
.video {
  object-fit: contain;
  width: 120%;
  height: 120%;
}
.container {
  display: flex;
  flex-direction: row;
}

.look-box-msg {
  background: linear-gradient(
    to bottom,
    transparent,
    #868686
  ); /* 从上到下渐变的背景色 */
  padding: 30px 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 40px;
  color: #fff;
  right: 0;
  padding: 70px 100px;
}
.close {
  position: fixed;
  top: 5%;
  right: 5%;
}
.icon {
  color: #fff;
  height: 100px;
}
.btn {
  height: 50px;
}
.btn:hover {
  opacity: 0.6;
}
.btnList {
  position: fixed;
  bottom: 50px;
  border-radius: 10px;
  height: 120px;
  background-color: #4b4c53;
  left:50%;
  transform: translate(-50%,-50%);
  padding: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
</style>
