<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-29 14:13:21
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-04-03 20:42:59
 * @FilePath: \moving-platform\src\views\Forum.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="box">
    <div class="container">
      <div class="left">
        <img class="l_img" src="@/assets/image/common/d7e559c06b034f18a18b078fd8629c98.jpg" />
        <el-card class="l_card">
          <Input ref="myRefs"/>
        </el-card>
        <el-card class="l_discuss" v-for="(item,index) in discussList" :key="index">
          <div class="l_discuss_top">
            <el-avatar size="large" icon="UserFilled" :src="item.src" />
            <div class="l_discuss_name">
              <h2>{{ item.name }}</h2>
              <Time :time="item.time" />
            </div>
          </div>
          <!-- 内容 -->
          <div class="l_discuss_content">
            <Content :value="item.content"/>
          </div>
          <el-button-group class="ml-4 l_bottom ">
            <!-- 分享 -->
            <el-button text :icon="Share" class="flex-item"/>
            <!-- 评论 -->
            <el-popover
              :commentsVisible="commentsVisible"
              placement="bottom"
              :width="710"
              trigger="click"
              content=""
            >
            <Comments />
              <template #reference>
                <el-button text :icon="Comment" class="flex-item" @click="commentsVisible = !commentsVisible"></el-button
                >
              </template>
            </el-popover>
            <!-- 喜欢 -->
            <el-button text class="flex-item" @click="isLike(item)">
              <i v-if="item.id==='123'" class="fa fa-trash-o"></i>
              <i v-else-if="item.id!=='123' && item.like===false" class="fa fa-thumbs-o-up" >&nbsp;{{ item.likeCnt }}</i>
              <i v-else-if="item.id!=='123' && item.like===true" class="fa fa-thumbs-up" >&nbsp;{{ item.likeCnt }}</i>
            </el-button>
          </el-button-group>
        </el-card>
      </div>
      <div class="right">
        <Affix :offset-top="50">
          <div class="r_sign">
            <el-card v-if="storeUser.signState">
              <h2>已经连续签到&nbsp; {{data.day}} &nbsp;天</h2>
              <p>点亮在论坛的每一天</p>
              <el-button class="r_sign_but" type="primary" plain disabled>已签到</el-button>
            </el-card>
            <el-button v-else class="r_sign_button" type="primary" size="large" @click="enter">
              <img class="r_sign_img" src="@/assets/image/common/金币.png" />
              立即签到
            </el-button>
          </div>
          <div class="r_hot">
            <el-card>
              <h3>活动资讯</h3>
              <div v-for="(item,index) in hot" :key="index">
                <p><span :style="{ color: item.color }">{{ index+1 }}</span> &nbsp;{{ item.content }}</p>
              </div>
            </el-card>
          </div>
          <div class="r_advertisement" v-if="visible">
            <el-card >
              <el-icon class="r_advertisement_close" @click="closeCard"><Close /></el-icon>
              <img src="@/assets/image/common/20230817-b04c7c13.jpg" />
              <el-tag class="r_advertisement_tag" type="info">广告</el-tag>
            </el-card>
          </div>
        </Affix>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { Delete, Edit, Search, Share, Comment, Star, Upload,Download } from '@element-plus/icons-vue'
import { user } from '@/store/user';
import { useRoute, useRouter } from 'vue-router';
import Input from '@/component/Input.vue'
import Comments from '@/component/Comment.vue'
import Content from '@/component/Content.vue'
import VideoRecommendationCard from '@/component/VideoRecommendationCard.vue';

const storeUser = user();
const route = useRoute();
const router = useRouter();
const data = reactive({
  day:'1',
  id:'123',
})
const headList = ref([
  {
    src: 'https://dev-file.iviewui.com/BbnuuEiM0QXNPHVCvb3E2AFrawIjCkqW/avatar',
    tip: '史蒂夫·乔布斯'
  },
  {
    src: 'https://dev-file.iviewui.com/zhj85zgAfEjChCNIKT1LQENUIOyOYCaX/avatar',
    tip: '斯蒂夫·沃兹尼亚克'
  },
  {
    src: 'https://dev-file.iviewui.com/TkH54UozsINlex15TAMI00GElsfsKSiC/avatar',
    tip: '乔纳森·伊夫'
  }
])
//讨论列表
const discussList = ref([
  {
    id: '234',
    like: false,
    likeCnt: 18,
    src: 'https://dev-file.iviewui.com/BbnuuEiM0QXNPHVCvb3E2AFrawIjCkqW/avatar',
    time: (new Date()).getTime() - 60 * 3 * 1000,
    name:'汤姆·杰森',
    content:`大会很深刻
    ![图片描述](https://outin-f6c3661ae52711eeaca900163e32a995.oss-cn-shanghai.aliyuncs.com/image/default/F465C292B58A4404844313BBF674D7EA-6-2.png?Expires=1711990991&OSSAccessKeyId=LTAIxSaOfEzCnBOj&Signature=TRCZ5PqjzeoIQ5OOHkP2PbmBGms%3D)
    `,
  },
  {
    id: '234',
    like: false,
    likeCnt: 12,
    src: 'https://dev-file.iviewui.com/zhj85zgAfEjChCNIKT1LQENUIOyOYCaX/avatar',
    time: (new Date()).getTime() - 60 * 3 * 1000,
    name:'青风扶林',
    content:`大会很深刻
    ![图片描述](https://outin-f6c3661ae52711eeaca900163e32a995.oss-cn-shanghai.aliyuncs.com/image/default/F465C292B58A4404844313BBF674D7EA-6-2.png?Expires=1711990991&OSSAccessKeyId=LTAIxSaOfEzCnBOj&Signature=TRCZ5PqjzeoIQ5OOHkP2PbmBGms%3D)
    `,
  },
  {
    id: '234',
    like: false,
    likeCnt: 6,
    src: 'https://dev-file.iviewui.com/TkH54UozsINlex15TAMI00GElsfsKSiC/avatar',
    time: (new Date()).getTime() - 60 * 3 * 1000,
    name:'青风扶林',
    content:`大会很深刻
    ![图片描述](https://outin-f6c3661ae52711eeaca900163e32a995.oss-cn-shanghai.aliyuncs.com/image/default/F465C292B58A4404844313BBF674D7EA-6-2.png?Expires=1711990991&OSSAccessKeyId=LTAIxSaOfEzCnBOj&Signature=TRCZ5PqjzeoIQ5OOHkP2PbmBGms%3D)
    `,
  }
])
const hot = ref([
  {
    color:'#fe3e29',
    content:'2023西湖论剑·数字安全大会举办',
  },
  {
    color:'#fe3e29',
    content:'西湖论剑暨安恒信息年度新品发布会在杭州举行',
  },
  {
    color:'#fe3e29',
    content:'“新十年”扬帆起航2023西湖论剑·数字安全大会举办',
  },
  {
    color:'#5e7987',
    content:'2023西湖论剑·数字安全大会│车联网如何系牢“安全”带?',
  },
  {
    color:'#5e7987',
    content:'从网络安全扩展到数字安全2023西湖论剑·数字安全大会召开',
  },
  {
    color:'#5e7987',
    content:'聚焦|2023西湖论剑·数字安全大会举办',
  },
])

function enter(){
  storeUser.video = 0;
  router.push("/integral");
}
// 关闭卡片
const visible = ref(true);
const closeCard = () => {
  visible.value = false;
};
//评论
const commentsVisible = ref(false);

//点赞
function isLike(item:any){
  if(item.like===true){
    item.likeCnt -= 1;
  }else{
    item.likeCnt += 1;
  }
  item.like = !item.like;
}

onBeforeMount(() => {
  
})
onMounted(() => {
    // data.name = '安恒信息';
    // data.intruction = '杭州安恒信息技术股份有限公司（简称：安恒信息）成立于2007年，于2019年登陆科创板，是网络安全行业发展速度最快的上市公司之一。作为行业领导者，安恒信息秉承“构建安全可信的数字世界”的企业使命，以数字经济的安全基石为企业定位，形成了云安全、大数据安全、物联网安全、智慧城市安全、工业控制系统安全及工业互联网安全五大市场战略，凭借强大的研发实力和持续的产品创新，完成覆盖网络信息安全全生命周期的产品、服务及解决方案体系，作为国家级核心安保单位，参与了近乎全部国家重大活动网络安保，实现零失误。2020年11月23日，安恒信息正式成为2022年杭州第19届亚运会网络安全类官方合作伙伴，这也是国际大型综合性赛事网络信息安全类最高层级合作。';
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
  margin-bottom:0.2rem;
}

.l_discuss{
  width:95%;
  // height:3rem;
  position:relative;
  margin-bottom:0.2rem;
}
.l_discuss_top{
  margin: 0.1rem 0.2rem;
  display: flex;
}
.l_discuss_name{
  padding-left: 0.2rem;
}
.l_discuss_content{
  margin: 0.1rem 1.1rem;
  padding-bottom: 0.2rem;
}
.l_bottom{
  position: absolute;
  width: 100%;
  bottom: 0;
  left:0;

  .flex-item {
    flex: 1;
    width: 33.33%;
  }
}

.l_discuss_likeImg{
  position: absolute;
  right: 0.3rem;
  bottom: 0.2rem;
}
.r_sign{
  width:100%;
  position: relative;
  margin-bottom:0.2rem;
  h2{
    padding-bottom: 0.08rem;
  }
}
.r_sign_but{
  position:absolute;
  right:7%;
  top: 35%;
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
.r_hot{
  width:100%;
  margin-bottom:0.2rem;
  h3{
    padding-bottom: 0.09rem;
  }
  p{
    line-height: 0.4rem;
    white-space: nowrap;
    text-overflow: ellipsis; /* 文字在同一行 */
    overflow: hidden; /* 隐藏超出容器的文本 */
    text-overflow: ellipsis; /* 使用省略号表示被截断的文本 */
  }
}
.r_advertisement{
  position: relative;
  ::v-deep .el-card__body {
      padding: 0;
  }
  img{
    width:100%;
    cursor: pointer;
  }
}
.r_advertisement_close{
  position: absolute;
  top:0.2rem;
  right: 0.2rem;
  cursor: pointer;
}
.r_advertisement_tag{
  position: absolute;
  bottom:0.1rem;
  right: 0.1rem;
}
</style>