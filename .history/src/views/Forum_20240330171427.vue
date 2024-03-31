<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-29 14:13:21
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-30 17:13:16
 * @FilePath: \moving-platform\src\views\Forum.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="box">
    <div class="container">
      <div class="left">
        <img class="l_img" src="@/assets/image/common/d7e559c06b034f18a18b078fd8629c98.jpg" />
        <el-card class="l_card">

        </el-card>
      </div>
      <div class="right">
        <div class="r_sign">
          <el-card v-if="storeUser.signState">
            <h2>已经连续签到&nbsp; {{data.day}} &nbsp;天</h2>
            <p>点亮在社区的每一天</p>
            <el-button class="r_sign_but" type="primary" plain disabled>已签到</el-button>
          </el-card>
          <el-button v-else class="r_sign_button" type="primary" size="large" @click="enter">
            <img class="r_sign_img" src="@/assets/image/common/金币.png" />
            立即签到
          </el-button>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { Delete, Edit, Search, Share, Upload,Download } from '@element-plus/icons-vue'
import { user } from '@/store/user';
import { useRoute, useRouter } from 'vue-router';
import Article from '@/component/Article'
import VideoRecommendationCard from '@/component/VideoRecommendationCard.vue';

const storeUser = user();
const route = useRoute();
const router = useRouter();
const data = reactive({
  day:'1',
})

function enter(){
  storeUser.video = 0;
  router.push("/integral");
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
  padding:1rem 3rem;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position-y: bottom;
  background-image: url('@/assets/image/common/list_bg_image.png');
}
.container{
  display: flex;
  justify-content: space-between;
}
.left{
  width:70%;
}
.right{
  width:30%;
}

.l_img{
  width:95%;
}
.l_card{
  width:95%;
  margin-top:0.2rem;
}
.r_sign{
  width:100%;
  
}
.r_sign_but{
  position:absolute;
}
.r_sign_button{
  width:100%;
  height: 0.7rem;
  ::v-deep span{
    font-size:0.28rem;
  }
}
.r_sign_img{
  width:0.4rem;
}
</style>