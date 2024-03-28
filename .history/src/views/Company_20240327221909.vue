<template>
  <div class="top">
    <el-card class="card">
        <div class="card-box">
            <Video class="card-video" :width="9" :height="4" :url="url"/>
            <div class="card-content">
                <h1>{{ data.name }}</h1>
                <img src="@/assets/image/common/展商底.png" />
                <p>{{data.intruction}}</p>
            </div>
        </div>
    </el-card>
  </div>
  <div class="container">
    <div class="company">
        <h1>{{ data.name }}</h1>
        <img src="@/assets/image/common/展商底.png" />
    </div>
    <div>
        <h1>{{ data.title }}</h1>
        <Article :title="data.title" :value="newsContent" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { VideoLinkUtils } from '@/utils/links.ts'; 
import Article from '@/component/Article'
import Video from '@/component/Video'

const videoUtils = new VideoLinkUtils();
const store = useStore();
const route = useRoute();
const router = useRouter();
const data = reactive({
    name:'',
    intruction:'',
    title:'护航数字世界|宝德精彩亮相2022西湖论剑·网络安全大会',
})
const url = ref('https://outin-f6c3661ae52711eeaca900163e32a995.oss-cn-shanghai.aliyuncs.com/sv/456b34da-18e7fe1ceab/456b34da-18e7fe1ceab.mp4?Expires=1711546151&OSSAccessKeyId=LTAIxSaOfEzCnBOj&Signature=xmHUKTZ%2FHH5qmCJE%2BJV1WdcY9BI%3D');
// Markdown 内容
const newsContent = ref<string>(`
# 新闻标题

2022年7月2—3日，2022西湖论剑·网络安全大会采用“线上直播+线下多个分会场”联动形式于北京、杭州两地隆重举办，是国内首个进入第十年的网络安全大会。本届大会以“构建安全可信的数字世界”为主题，展望网络安全未来趋势，将浙江数字化改革经验作为样板带入全国，旨在通过对政策进行深度解读与剖析，与政企学研各界精英齐聚一堂，探究通往“安全可信的数字世界”之道，共话共筑新时代网络安全世界高质量发展。作为安恒信息的重要合作伙伴，宝德携自主安全产品应邀精彩亮相本次盛会。

![图片描述](@src\assets\image\common\article1.png)

网络信息安全关系着国家的安全和社会的稳定，“十四五”规划明确要求要着力强化数字经济安全体系。宝德作为国内信息领域的领跑者，依托自身雄厚的自主安全技术积累和自主研发实力，联合多方合作伙伴，积极响应国家政策，打造了从终端设备、系统方案、应用迁移、后端支撑等一系列自强品牌的软硬件产品和解决方案，为关键信息基础建设安全提供了有力支撑，筑牢安全可信的基石。宝德此次重点展示了基于鲲鹏、飞腾等中国“芯”和国产操作系统多场景应用的安全算力产品矩阵及解决方案，备受关注，吸引了众多行业观众的驻足观看交流，获得了现场观众、嘉宾和专家的肯定和认可。
`);


onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
    videoUtils.addVideoLink("Video 1", "https://example.com/video1.mp4");
    videoUtils.addVideoLink("Video 2", "https://example.com/video2.mp4");
    videoUtils.printAllVideoLinks();
    console.log("Video 1 URL:", videoUtils.getVideoLink("Video 1"));
    data.name = '安恒信息';
    data.intruction = '杭州安恒信息技术股份有限公司（简称：安恒信息）成立于2007年，于2019年登陆科创板，是网络安全行业发展速度最快的上市公司之一。作为行业领导者，安恒信息秉承“构建安全可信的数字世界”的企业使命，以数字经济的安全基石为企业定位，形成了云安全、大数据安全、物联网安全、智慧城市安全、工业控制系统安全及工业互联网安全五大市场战略，凭借强大的研发实力和持续的产品创新，完成覆盖网络信息安全全生命周期的产品、服务及解决方案体系，作为国家级核心安保单位，参与了近乎全部国家重大活动网络安保，实现零失误。2020年11月23日，安恒信息正式成为2022年杭州第19届亚运会网络安全类官方合作伙伴，这也是国际大型综合性赛事网络信息安全类最高层级合作。';
})
watchEffect(()=>{
})
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})

</script>
<style scoped lang='less'>
.top{
    width:100%;
    height: 70vh;
    background-image: url('@/assets/image/common/1456345283546.gif');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; /* 相对定位，以便设置子元素的 z-index */
}
.card{
    position: relative; 
    max-width: 14rem;
    z-index: 2; 
    border: 1px solid #00ae8d;
    border-radius: 15px;
    padding: 15px 30px 30px 30px;
    background-color: #18133c;
    box-shadow: inset 0 0 4px 1px #00ae8d;
}
.card-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.card-video{
    
}
.card-content{
    h1,p{
        color:#fff;
    }
    h1{
        position: absolute;
        margin-left: 0.7rem;
        margin-top:0.2rem;
    }
    p{
        padding-left: 0.6rem;
        line-height: 0.32rem;
        font-size:0.2rem;
        text-indent:2em; 
    }
    img{
        width:3rem;
        // margin-left: -0.4rem;
    }
}
.container{
    margin: 1rem 3rem;
}
.news-detail {
  max-width: 800px;
  margin: 0 auto;
}
</style>