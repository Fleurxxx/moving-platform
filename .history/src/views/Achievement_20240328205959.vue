<template>
  <div >
    <div class="header">
      <h1>成果发布</h1>
      <img class="banner-img" src="@/assets/image/common/banner1.png" />
    </div>
    <div class="center">
      <div class="title">
        <h1>白皮书</h1>
        <em></em>
      </div>
      <el-card class="card" @mouseenter.native="showContent" @mouseleave="hideContent">
        <div class="card_container">
          <h1>White&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Paper</h1>
          <img :src="data.productSrc" />
        </div>
        <div class="card_content" :class="{ 'show': isContentVisible }">
          <h2>{{ data.productName }}</h2>
        </div>
      </el-card>
    </div>
    <div class="foot">
      <img class="banner-img" src="@/assets/image/common/banner4.png" />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Article from '@/component/Article'

const route = useRoute();
const router = useRouter();
const data = reactive({
  productName:'11周年精华特刊',
  productSrc: require('@/assets/image/common/book.png'),
  productIntruction:'',
})

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
  margin: 1rem 2rem;
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
  // transform: rotate(calc(var(--r)*1deg)); 
  // transition-delay:9999s;
  // &:hover .card_content{
  //     transition: 0.5s;
  //     opacity: 0;
  // }
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
    // margin-left:2rem;
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
  background-color: rgba(0, 0, 0, 0.5); 
  transition: left 0.3s ease, opacity 0.3s ease; 
  opacity: 0; 
  color: #fff;
}
.card_content.show {
  left: 0; /* 左侧滑入 */
  opacity: 1; /* 显示内容 */
}
</style>