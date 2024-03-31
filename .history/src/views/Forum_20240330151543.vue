<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-29 14:13:21
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-30 15:15:29
 * @FilePath: \moving-platform\src\views\Forum.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="box">
    <div class="container">
      <div class="left">
        <h1>???</h1>
      </div>
      <div class="right">
        <
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { Delete, Edit, Search, Share, Upload,Download } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router';
import Article from '@/component/Article'
import VideoRecommendationCard from '@/component/VideoRecommendationCard.vue';

const route = useRoute();
const router = useRouter();
const data = reactive({
 
})


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
.container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:3rem;
  
}
.left{
  width:60%;

}

.right{
  width:40%;
}
</style>