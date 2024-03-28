<!--
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-13 16:35:02
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-26 18:54:05
 * @FilePath: \moving-platform\src\component\Footer.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="copyright">
        <div class="wrapper">
            <div class="copyright-left">
                <div class="QR-code">
                    <ul>
                        <li>
                            <img src="@/assets/image/common/公众号.png">
                            <p>微信公众号</p>
                        </li>
                        <li>
                            <img src="@/assets/image/common/小程序二维码.png">
                            <p>微信小程序</p>
                        </li>
                    </ul>
                </div>
                <a href="#"><img src="@/assets/image/common/logo.png"></a>
            </div>
            <div class="copyright-right">
                <dl>
                    <dt>指导单位</dt>
                    <dd><a href="#">浙江省互联网信息办公室</a></dd>
                    <dd><a href="#">浙江省经济和信息化厅</a></dd>
                    <dd><a href="#">浙江省公安厅</a></dd>
                    <dd><a href="#">浙江省发展和改革委员会</a></dd>
                    <dd><a href="#">浙江省通信管理局</a></dd>
                </dl>
                <dl>
                    <dt>联合主办单位</dt>
                    <dd><a href="#">中国信息通信研究院</a></dd>
                    <dd><a href="#">中国网络空间研究院</a></dd>
                    <dd><a href="#">国家工业信息安全发展研究中心</a></dd>
                    <dd><a href="#">中国电子技术标准化研究院</a></dd>
                    <dd><a href="#">工业和信息化部教育与考试中心</a></dd>
                    <dd><a href="#">杭州市滨江区人民政府</a></dd>
                </dl>
                <dl>
                    <dt>承办单位</dt>
                    <dd><a href="#">杭州市互联网信息办公室</a></dd>
                    <dd><a href="#">杭州市经济和信息化局</a></dd>
                    <dd><a href="#">杭州市公安局</a></dd>
                    <dd><a href="#">杭州市发展和改革委员会</a></dd>
                    <dd><a href="#">浙江省网络空间安全协会</a></dd>
                    <dd><a href="#">安恒信息</a></dd>
                </dl>
            </div>
        </div>
    </div>
    <div class='footer'>
      <span class="scroll"></span>
      <el-divider></el-divider>
      <span>隐私协议</span>
      <el-divider direction="vertical"></el-divider>
      <span>服务条款</span>
      <el-divider direction="vertical"></el-divider>
      <span @click="drawer = true">联系我</span>
      <br/>
      <br/>
      <span class="copyright">© 杭州安恒信息技术股份有限公司 浙ICP备09102757号-28 浙公网安备 33010802009170号</span>
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
  margin:0 2.5rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  height: 4rem;
  /* background-color: #fff; */
}
.copyright .wrapper{
    display: flex;
    justify-content: space-between;
}
.copyright-left{
    width: 4rem;
    /*background-color: #005576;*/
}
//
.QR-code{
  ul{
    display: flex;
    text-align: center;
    list-style-type: none;
  }
  li:first-child{
    margin-right: 1rem;
  }
  ul img{
    margin-bottom: 0.08rem;
    width: 1.3rem;
    height: 1.3rem;
  }
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
    margin-left: 1.2rem;
}
.copyright dt{
    margin-bottom: 0.2rem;
    font-size: 0.2rem;
    line-height: 0.2rem;
}
.copyright dd{
  font-size: 0.1rem;
    line-height: 0.25rem;
    color: #666;
}
</style>
  