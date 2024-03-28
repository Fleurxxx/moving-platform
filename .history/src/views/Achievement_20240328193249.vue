<template>
  <div >
    <div class="header">
      <h1>成果发布</h1>
      <img class="banner-img" src="@/assets/image/common/banner1.png" />
    </div>
    <div class="container">
      <Article :title="data.title" :value="newsContent" />
    </div>
    <div class="foot">
      <img class="banner-img" src="@/assets/image/common/banner4.png" />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const route = useRoute();
const router = useRouter();
const data = reactive({})
// Markdown 内容
const newsContent = ref<string>(`

        2022年7月2—3日，2022西湖论剑·网络安全大会采用“线上直播+线下多个分会场”联动形式于北京、杭州两地隆重举办，是国内首个进入第十年的网络安全大会。本届大会以“构建安全可信的数字世界”为主题，展望网络安全未来趋势，将浙江数字化改革经验作为样板带入全国，旨在通过对政策进行深度解读与剖析，与政企学研各界精英齐聚一堂，探究通往“安全可信的数字世界”之道，共话共筑新时代网络安全世界高质量发展。作为安恒信息的重要合作伙伴，宝德携自主安全产品应邀精彩亮相本次盛会。\n

![图片描述](https://outin-f6c3661ae52711eeaca900163e32a995.oss-cn-shanghai.aliyuncs.com/image/default/7CD357436F844891A3D816A61F045BBE-6-2.png?Expires=1711552802&OSSAccessKeyId=LTAIxSaOfEzCnBOj&Signature=JUuYPB0Wv1eztQsVQOCWFEGASXA%3D)

        网络信息安全关系着国家的安全和社会的稳定，“十四五”规划明确要求要着力强化数字经济安全体系。宝德作为国内信息领域的领跑者，依托自身雄厚的自主安全技术积累和自主研发实力，联合多方合作伙伴，积极响应国家政策，打造了从终端设备、系统方案、应用迁移、后端支撑等一系列自强品牌的软硬件产品和解决方案，为关键信息基础建设安全提供了有力支撑，筑牢安全可信的基石。宝德此次重点展示了基于鲲鹏、飞腾等中国“芯”和国产操作系统多场景应用的安全算力产品矩阵及解决方案，备受关注，吸引了众多行业观众的驻足观看交流，获得了现场观众、嘉宾和专家的肯定和认可。

![图片描述](https://outin-f6c3661ae52711eeaca900163e32a995.oss-cn-shanghai.aliyuncs.com/image/default/7D0DEADFBEC7432F92047675EE7D9A45-6-2.png?Expires=1711552831&OSSAccessKeyId=LTAIxSaOfEzCnBOj&Signature=zN80Bj31j7JkAFoWK%2FyMGOkjybk%3D)

        打造国之重器，助力国家信息安全技术创新。PT620Q支持国产自主安全BIOS和安全可信模块，保护用户私密数据信息，间距时尚精巧的外观，满足政府机构及党政部门系统的安全需求。它可使用鲲鹏助手，实现Windows与国产操作系统的互通互融，并兼容更多行业专有应用和插件，推动桌面终端向更多集成功能和良好的用户体验方向发展，快速满足用户国产化环境迁移要求，具有高可用性。此外，可兼容80%以上外设，充分帮助用户资源的节约和利旧，降低用户的总体成本。支持安装1个TPM/TCM安全加密模块连接插座，是其具有的安全特性，进一步保障了信息数据的安全，非常的实用可靠。

![图片描述](https://outin-f6c3661ae52711eeaca900163e32a995.oss-cn-shanghai.aliyuncs.com/image/default/CDC17ABA3BF44C95ADC079A4FD9C80D9-6-2.png?Expires=1711552886&OSSAccessKeyId=LTAIxSaOfEzCnBOj&Signature=gnwrHD0aXdo%2BrlbphH63W4lss58%3D)

宝德自强青松台式机 PT620Q

       护航数字世界，宝德责无旁贷。宝德历来十分注重自主研发和创新发展，作为信创产业链的核心成员，自2019年起完成信创业务布局，提供从台式机、笔记本、一体机、瘦客户机到服务器、存储等丰富类别的自强产品，具备为各行业提供全栈解决方案能力，并已连年取得了信创市场NO.1。未来，宝德将积极发挥自身优势与生态伙伴一起携手，不断创新高安全、高可靠的产品、技术和服务体系，筑牢网络安全防线，为数字经济保驾护航，共同打造安全可信的数字世界。


`);
onBeforeMount(() => {
  
})
onMounted(() => {

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
.container{
  margin: 1rem 3rem;
}
</style>