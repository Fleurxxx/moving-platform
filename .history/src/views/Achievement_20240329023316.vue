<template>
  <div class="box">
    <div class="header">
      <h1>成果发布</h1>
      <img class="banner-img" src="@/assets/image/common/banner1.png" />
    </div>
    <div class="center">
      <div class="title">
        <h1>白皮书</h1>
        <em></em>
      </div>
      <el-carousel trigger="click" height="8rem">
        <el-carousel-item v-for="(item, index) in cardItems" :key="index">
          <el-card class="card" @mouseenter.native="showContent" @mouseleave="hideContent">
            <div class="card_container">
              <h1>White&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Paper</h1>
              <img :src="item.productSrc" />
            </div>
            <div class="card_content" :class="{ 'show': isContentVisible }">
              <div class="content_container">
                <h1>{{ item.productName }}</h1>
                <p>{{item.productIntruction}}</p>
                <el-button class="download_button" size="large" type="info" :icon="Download" plain round>立即下载</el-button>
              </div>
            </div>
          </el-card>
        </el-carousel-item>
      </el-carousel>
      <div class="title">
        <h1>新品试用</h1>
        <em></em>
      </div>
    </div>
    <!-- <div class="foot">
      <img class="banner-img" src="@/assets/image/common/banner4.png" />
    </div> -->
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { Delete, Edit, Search, Share, Upload,Download } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router';
import Article from '@/component/Article'

const route = useRoute();
const router = useRouter();
const data = reactive({
  productName:'2023西湖论剑-11周年精华特刊',
  productSrc: require('@/assets/image/common/book1.png'),
  productIntruction:'建没数宇中国是我国的重要国策。在《数宇中国建设整体布局规划〉 (以下简称《规划》)中明确了数字中国建设按照“2522”的整体框架进行布局。整体框架中，一方面着重强调了数字安全的重要性，数字安全和数字技术并列为支撑数字中国建设的两大能力。另一方面，“安全”在2522框架中无处不在——数字基础设施不可无安全保障，数据资源大循环不可无安全赋能，建设公平规范的数字治理生态不可无安全辅助。建设数字中国，构筑数字安全屏障势在必行。',
})

const cardItems = ref([
  {
    productName:'2023西湖论剑-11周年精华特刊',
    productSrc: require('@/assets/image/common/book1.png'),
    productIntruction:'建没数宇中国是我国的重要国策。在《数宇中国建设整体布局规划〉 (以下简称《规划》)中明确了数字中国建设按照“2522”的整体框架进行布局。整体框架中，一方面着重强调了数字安全的重要性，数字安全和数字技术并列为支撑数字中国建设的两大能力。另一方面，“安全”在2522框架中无处不在——数字基础设施不可无安全保障，数据资源大循环不可无安全赋能，建设公平规范的数字治理生态不可无安全辅助。建设数字中国，构筑数字安全屏障势在必行。',
  },
  {
    productName: '2023数字安全能力洞察报告',
    productSrc: require('@/assets/image/common/book2.png'),
    productIntruction: '数字经济成为全球新一轮科技革命和产业变革的重要引擎，将开启人类数字文明的新时代。数字安全的基础性作用日益突出，在数字化建设进程中，加紧实施国家信息化发展战略，筑牢可信可控的数字安全屏障，夯实数字基础设施安全底座，增强关键基础设施安全韧性，助力数字社会安全发展，已成为支撑现代化建设、增强国家综合实力的必然选择。安恒信息围绕国家数字化建设“2522”顶层布局规划，洞悉各行业和各领域数字化转型中的安全挑战和能力需求，梳理切实解决数字安全本质问题的方法和途径，并从安全模式、架构、能力、产业等方向对未来数字安全发展进行了展望。',
  },
]);

const isContentVisible = ref(false);
function showContent() {
  isContentVisible.value = true;
}
function hideContent() {
  isContentVisible.value = false;
}

onBeforeMount(() => {
  
})
onMounted(() => {
    data.name = '安恒信息';
    data.intruction = '杭州安恒信息技术股份有限公司（简称：安恒信息）成立于2007年，于2019年登陆科创板，是网络安全行业发展速度最快的上市公司之一。作为行业领导者，安恒信息秉承“构建安全可信的数字世界”的企业使命，以数字经济的安全基石为企业定位，形成了云安全、大数据安全、物联网安全、智慧城市安全、工业控制系统安全及工业互联网安全五大市场战略，凭借强大的研发实力和持续的产品创新，完成覆盖网络信息安全全生命周期的产品、服务及解决方案体系，作为国家级核心安保单位，参与了近乎全部国家重大活动网络安保，实现零失误。2020年11月23日，安恒信息正式成为2022年杭州第19届亚运会网络安全类官方合作伙伴，这也是国际大型综合性赛事网络信息安全类最高层级合作。';
})
watchEffect(()=>{
})

defineExpose({
  ...toRefs(data)
})

</script>
<style scoped lang='less'>
.box{
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position-y: bottom;
  background-image: url('@/assets/image/common/list_bg_image.png');
}
.header{
  h1{
    position: absolute;
    left: 20%;
    top:25%;
    font-size:0.7rem;
    color: #fff;
  }
}
.banner-img{
  width:100%;
  height: 3.5rem;
}
.foot{
  position: relative;
  bottom:0;
}
.center{
  padding: 1rem 2rem;
}
.title{
  display: flex;
  // justify-content:center;
  align-items: center;
  flex-direction: column;
  height:1.5rem;
  h1{
    font-size: 0.5rem;
    // font-weight: normal;
    margin-bottom: -5px;
  }
  em {
    border-bottom: 0.06rem solid #1926b5;
    display: inline-block;
    width: 5%;
  }
}
.card{
  width:100%;
  position: relative;
  overflow: hidden;
}
.card_container{
  height: 6rem;
  display: flex;
  justify-content:center;
  align-items: center;
  h1{
    position: absolute;
    text-align: center;
    font-size: 1.6rem;
    z-index: 0;
  }
  img{
    width:6rem;
    z-index: 0;
  }
}
.card_content{
  position: absolute;
  top: 0;
  right:-100%; /* 初始位置在卡片右侧外，想从做外侧用left: -100%; */
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); 
  transition: right 0.6s ease, opacity 0.6s ease; 
  opacity: 0; 
  color: #fff;
}
.show {
  right: 0; /* 右侧滑入 */
  opacity: 1; /* 显示内容 */
}
.content_container{
  margin:1rem 2rem;
  h1{
    font-size: 0.6rem;
    line-height: 01.2rem;
  }
  p{
    line-height: 0.32rem;
    font-size:0.2rem;
    text-indent: 2em;
  }
}
.download_button{
  width:1.8rem;
  position: absolute;
  bottom: 1rem;
}
</style>