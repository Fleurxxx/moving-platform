<template>
  <div class="company">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="生态合作伙伴" name="first">
        <div class="content">
          <div v-for="(item, index) in state.firstList" :key="index">
            <img :src="item" />
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="战略合作媒体" name="second" class="img-box">
        <div class="content">
          <div v-for="(item, index) in state.secondList" :key="index">
            <img :src="item" />
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="新闻媒体" name="third" class="img-box">
        <div class="content">
          <div v-for="(item, index) in state.thirdList" :key="index">
            <img :src="item" />
          </div>
          <div>
            <el-button round>查看更多</el-button>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
const activeName = ref("second");

const state = reactive({
  firstList: [
    "https://img2023.gcsis.cn/2023/4/ae832a31047749299bd504e6070d487a.png",
    "https://img2023.gcsis.cn/2023/4/94df6244d6b04a91b3e8545844bce830.png",
    "https://img2023.gcsis.cn/2023/4/d79ec14ff65b4af19b8439659668fd19.png",
    "https://img2023.gcsis.cn/2023/4/73bd035a85dd43a988a928d0557818d4.png",
    "https://img2023.gcsis.cn/2023/4/5739d4caa7214beaa27cc66d10644a62.png",
    "https://img2023.gcsis.cn/2023/4/d86aad180ee14acb95d1df723414aec2.png",
    "https://img2023.gcsis.cn/2023/4/2e88c33068c04d31a5bb9599c22382a0.png",
    "https://img2023.gcsis.cn/2023/4/a39af7377bbb4860809ab761137bc8ea.png",
    "https://img2023.gcsis.cn/2023/4/bce6aa664cd44e76af59ba89e4d4f04d.png",
    "https://img2023.gcsis.cn/2023/4/c39a007819cc484e964e9dbcb8e155c2.png",
    "https://img2023.gcsis.cn/2023/4/4e59350e44e04e50bff593c080c8a57b.png",
    "https://img2023.gcsis.cn/2023/4/8dadce3bcf53474b8141421cbc60f360.png",
    "https://img2023.gcsis.cn/2023/4/b93ab5c255cb4830b2c0b7e09aaced8e.png",
    "https://img2023.gcsis.cn/2023/4/8077d0d14baa4eb9ad78181285b0ee09.png",
    "https://img2023.gcsis.cn/2023/4/5236e6f4e39c49d0ae1b491c735038cf.png",
    "https://img2023.gcsis.cn/2023/4/2cf78591048d49d28414ee2b1426d4f9.png",
    "https://img2023.gcsis.cn/2023/5/44e9a8a91d544be4a53b2d5ca7bf6c9a.png",
  ],
  secondList: [
    "https://img2023.gcsis.cn/2023/4/60234dda9f664775a5b991bd8412dca1.png",
  ],
  thirdList: [
    "https://img2023.gcsis.cn/2023/4/5dd30797a95541528532b0abf7d3cdba.png",
    "https://img2023.gcsis.cn/2023/4/5c64dfd9685d4ea0b48a4df497a28669.png",
    "https://img2023.gcsis.cn/2023/4/e0ac725f69aa45229e72e8c451393147.png",
    "https://img2023.gcsis.cn/2023/4/1ef7fe346f28471a89176ab96cc0f15d.png",
    "https://img2023.gcsis.cn/2023/4/03bf8c57aff1466ebf866454df40a42d.png",
    "https://img2023.gcsis.cn/2023/4/0347a02665f84bb58b637fc403b5a047.png",
    "https://img2023.gcsis.cn/2023/4/77fc901c76c947db8c9e352f2e0bc374.png",
    "https://img2023.gcsis.cn/2023/4/11ab86f796b3494098c73e2515bc64e1.png",
    "https://img2023.gcsis.cn/2023/4/f03f89c469da43d3a8290d26582f1fdc.png",
    "https://img2023.gcsis.cn/2023/4/0744a131e3314cbc812996c8b1b4f5c4.png",
    "https://img2023.gcsis.cn/2023/4/6e9a1e0aa2254b918c24816d67e3adc1.png",
    "https://img2023.gcsis.cn/2023/4/b9706366768d40afb9c5d3352dbbb3cd.png",
    "https://img2023.gcsis.cn/2023/4/c9337b3e90e044dba26621055079f877.png",
    "https://img2023.gcsis.cn/2023/4/19cf02f5c00e446ba609d7ef66628b10.png",
  ],
});

const handleClick = (tab, event) => {
  console.log(tab, event);
};
</script>
<style scoped lang="less">
.company {
  display: flex;
  justify-content: center;
}
.el-tabs {
  --el-tabs-header-height: 120px;
  width: 80%;
}
::v-deep .el-tabs__nav {
}
::v-deep .el-tabs__item {
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  width: 4rem;
}
::v-deep .el-tabs__item:not(:last-child) {
  border-right: 0.05rem solid RGB(155, 165, 174);
}
::v-deep .el-tabs__active-bar {
  height: 8px;
}
::v-deep .el-tabs__nav-wrap:after {
  background-color: transparent;
}
::v-deep .el-tabs__nav {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  width: 100%;
}
::v-deep .el-tabs__item.is-active,
::v-deep .el-tabs__item:hover {
  color: RGB(45, 177, 186);
}
::v-deep .el-tabs__active-bar {
  display: none;
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5rem;
}
img {
  width: 350px;
  height: 350px;
  margin: 0.15rem;
  padding: 0.15rem;
  object-fit: contain;
  border: 2px solid RGB(230, 230, 230);
  border-radius: 2rem;
}
::v-deep .el-button {
  padding: 0.1rem 1rem;
  color: RGB(45, 177, 186);
  font-weight: 700;
  font-size: 0.15rem;
  border: 1px solid RGB(45, 177, 186);
  margin-top: 0.5rem;
}
</style>
