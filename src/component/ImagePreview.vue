<!-- 显示对象预览对话框 -->
<template>
  <el-dialog
    :show-close="false"
    style="
      background-color: transparent;
      border: 0;
      box-shadow: none;
      margin-top: 1%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    "
    class="content-box"
    append-to-body
  >
    <div
      v-show="
        (objectInfo.ext == 2 || objectInfo.ext == 4) &&
        objectInfo.storageLevel == 1 &&
        fileStatus == '正常'
      "
      class="preview-box"
      v-loading="loading"
    >
      <img
        ref="img"
        :src="src"
        v-if="objectInfo.ext == 4"
        :style="{ transform: `scale(${scale})` }"
      />
      <video
        :src="src"
        class="video"
        v-if="objectInfo.ext == 2"
        controls="true"
        autoplay
      ></video>
      <iframe
        v-if="objectInfo.ext == 6 || objectInfo.ext == 5 || objectInfo.ext == 1"
        :src="src"
        width="100%"
        height="100%"
        style="background: white"
      >
      </iframe>
      <el-button class="close" @click="close" type="info" circle
        ><el-icon><CloseBold /></el-icon>
      </el-button>
    </div>
    <div
      class="look-box-msg"
      v-show="
        objectInfo.storageLevel != 1 ||
        fileStatus != '正常' ||
        (objectInfo.ext != 2 && objectInfo.ext != 4) ||
        objectInfo.secret != null
      "
    >
      <el-icon color="rgb(255,203,3)"><InfoFilled /></el-icon
      >{{ objectInfoMsg }}
    </div>
    <div class="btnList" v-show="objectInfo.ext == 4">
      <el-button link class="btn" style="height: 50px" @click="zoomOut">
        <el-icon class="icon" size="30px"><ZoomOut /></el-icon>
      </el-button>
      <el-button link class="btn" @click="zoomIn">
        <el-icon size="30px" class="icon"><ZoomIn /></el-icon
      ></el-button>
      <el-button link class="btn" @click="downLoad"
        ><el-icon size="30px" class="icon"><Download /></el-icon
      ></el-button>
    </div>
  </el-dialog>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

const loading = ref(true);
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

const prop = defineProps({
  bucketName: {
    type: String,
  },
  objectInfo: {
    type: Object,
  },
  fileStatus: {
    type: String,
  },
});
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
  loading.value = true;
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
.preview-box > img {
  object-fit: contain;
  width: 100%;
  height: 100%;
  transition: transform 0.3s;
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
  background-color: #fff7d1;
  text-align: center;
  padding: 30px 10px;
}
.close {
  position: fixed;
  top: 5%;
  right: 5%;
}
.icon {
  color: #fff;
}
.btn {
  height: 50px;
}
.btn:hover {
  opacity: 0.6;
}
.btnList {
  position: fixed;
  bottom: 20px;
  border-radius: 10px;
  height: 50px;
  background-color: #4b4c53;
  left: 43vw;
  padding: 0px 25px;
  display: flex;
  gap: 10px;
}
</style>
