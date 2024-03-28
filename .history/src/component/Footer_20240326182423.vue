<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-13 16:35:02
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-26 18:24:09
 * @FilePath: \moving-platform\src\component\Footer.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="copyright">
      <div class="wrapper">
          <div class="copyright-left">
              <a href="#"><img src="@/assets/image/common/logo.png"></a>
              <p>学成在线致力于普及中国最好的教育它与中国一流大学和机构合作提供在线课程。
                  © 2017年XTCG Inc.保留所有权利。-沪ICP备15025210号</p>
          </div>
          <div class="copyright-right">
              <dl>
                  <dt>关于学成网</dt>
                  <dd><a href="#">关于</a></dd>
                  <dd><a href="#">管理团对</a></dd>
                  <dd><a href="#">工作机会</a></dd>
                  <dd><a href="#">客服服务</a></dd>
                  <dd><a href="#">帮助</a></dd>
              </dl>
              <dl>
                  <dt>新手指南</dt>
                  <dd><a href="#">如何注册</a></dd>
                  <dd><a href="#">如何选课</a></dd>
                  <dd><a href="#">工作机会</a></dd>
                  <dd><a href="#">客服服务</a></dd>
                  <dd><a href="#">帮助</a></dd>
              </dl>
              <dl>
                  <dt>合作伙伴</dt>
                  <dd><a href="#">合作机构</a></dd>
                  <dd><a href="#">合作导师</a></dd>
              </dl>
          </div>
      </div>
  </div>
  <div class='footer'>
    <span class="scroll"></span>
    <el-divider></el-divider>
    <span>法律声明</span>
    <el-divider direction="vertical"></el-divider>
    <span>友情链接</span>
    <el-divider direction="vertical"></el-divider>
    <span @click="drawer = true">联系我</span>
    <br/>
    <br/>
    <span class="copyright">版权所有 JEmbrace</span>
    <el-drawer
      title="联系我"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose">
      <p class='info'>
        <i class="el-icon-phone"></i>电话：18822299999<br/>
        <i class="el-icon-message"></i>邮箱：18822299999@163.com<br/>
      </p>
    </el-drawer>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      drawer: false,
      direction: 'btt'
    }
  },
  methods: {
    handleClose (done) {
      done()
    }
  }
}
</script>
  <style> 
  .el-divider{
    background-color: rgb(84, 92, 100);
  }
</style>
<style scoped>
.footer{
    height: 250px;
    text-align: center;
    font-size: 16px;
    /* padding: 0px 100px; */
    padding: 0px;
    position: relative;
}
.footer{
  cursor: pointer;
}
.copyright{
  font-size: 12px;
}
.info{
  font-size: 14px;
  color: #72767b;
  line-height: 25px;
}
.footer .scroll{
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border:1px solid #448aff;
  background-color: rgba(68,138,255,0.2);
  position: absolute;
  left: 5%;
  top: -25px;
  z-index: 10;
  animation: scrollA infinite 20s linear alternate;
}
@keyframes scrollA {
  0% {left: 5%;transform: rotate(180deg);};
  10% {left: 5%;transform: rotate(270deg);}
  20% {left: 5%;transform: rotate(450deg);}
  25% {left: 10%;transform: rotate(540deg);}
  30% {left: 20%;transform: rotate(720deg);}
  35% {left: 30%;transform: rotate(900deg);}
  40% {left: 40%;transform: rotate(1080deg);}
  45% {left: 50%;transform: rotate(1260deg);}
  50% {left: 60%;transform: rotate(1440deg);}
  55% {left: 70%;transform: rotate(1620deg);}
  60% {left: 80%;transform: rotate(1800deg);}
  80% {left: 90%;transform: rotate(2610deg);}
  90% {left: 90%;transform: rotate(2340deg);}
  100% {left: 90%;transform: rotate(2520deg);}
}
.copyright{
  margin:0 4rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  height: 3rem;
  background-color: #fff;
}
.copyright .wrapper{
    display: flex;
    justify-content: space-between;
}
.copyright-left{
    width: 432px;
    /*background-color: #005576;*/
}
.copyright p{
    margin-top: 0.2rem;
    margin-bottom: 0.1rem;
    font-size: 0.1rem;
    color: #666666;
}
.copyright .copyright-right{
    display: flex;
}
.copyright-right dl{
    margin-left: 1.8rem;
}
.copyright dt{
    margin-bottom: 0.2rem;
    font-size: 0.7rem;
    line-height: 23px;
}
.copyright dd{
    font-size: 14px;
    line-height: 24px;
    color: #666;
}

</style>
  