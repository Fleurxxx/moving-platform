<template>
  <div style="font-size: 14px;;margin: 0 200px;">
    <div style="display: flex;border-radius: 5px;">
      <div style="flex: 1;overflow: hidden;">
 
        <div v-for="i in 6" style="background-color: #f5f5f5;cursor: pointer;overflow: hidden;height: 185px;display: flex;margin-bottom: 20px;" class="item">
          <div style="margin: 20px 0 20px 20px;width: 200px;">
            <div style="width: 68px;line-height: 25px;text-align: center;background-color: #00000080;color: #FFFFFF;position: relative;z-index: 99;border-radius: 3px;top: 5px;left: 5px;">
              生活日记
            </div>
            <el-image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F010621115136%2F210106115136-11-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642492276&t=7882e214f8881466e396b930597433eb" style="height: 145px;width: 200px;object-fit: cover;cursor: pointer;margin-top: -25px;"></el-image>
          </div>
          <div style="margin: 20px 20px;">
            <div style="font-size: 18px;height: 40px;line-height: 40px;">感谢访问！一切从简！ </div>
            <div style="overflow: hidden;text-overflow: ellipsis;height: 65px;line-height: 20px;color: gray;">
              感谢您能访问本个人博客，前世的五百次回眸，换来今生你我的不期而遇。 梦想清澈高远，究竟哪里才是诗和远方的田野？...
            </div>
            <div style="white-space: nowrap;display: flex;color: #a1a1a1;line-height: 40px;">
              <span class="icon-active"><i class="el-icon-alarm-clock el-icon--right"></i>2年前 (2019-05-20)</span>
              <span class="icon-active" icon="el-icon-link" style="margin-left: 10px;"><i class="el-icon-view el-icon--right"></i>17690人围观</span>
              <span class="icon-active" icon="el-icon-link" style="margin-left: 10px;"><i class="el-icon-chat-round el-icon--right"></i>47次吐槽</span>
            </div>
          </div>
        </div>
 
 
 
        <div style="margin: 30px 0;text-align: center;overflow: auto;">
          <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
              </el-pagination>
        </div>
 
      </div>
      <div style="width: 300px;margin-left: 20px;">
        <right></right>
      </div>
    </div>
  </div>
 
</template>
 
<script>
  import right from "../../page/right/index.vue";
 
  export default {
    components: {
      right
    },
      data() {
        return {
           value: new Date(),
           currentPage: 4,
           activeName: 'second',
 
        };
      },
      mounted() {
      },
      methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        },
        handleClick(tab, event) {
          console.log(tab, event);
        },
 
      }
    };
</script>
 
<style>
  .icon-active:hover{
    color: #585858;
  }
  .item img {
    width: 100%;
    height: 145px;
    transform: scale(1);
    transition: transform 1s ease 0s;
  }
 
  .item:hover img{
    transform: scale(1.1);
  }
  .face-pic:hover img{
    transform:rotate(360deg);
    -ms-transform:rotate(360deg); /* Internet Explorer */
    -moz-transform:rotate(360deg); /* Firefox */
    -webkit-transform:rotate(360deg); /* Safari 和 Chrome */
    -o-transform:rotate(360deg); /* Opera */
    transition: transform 0.6s ease 0s;
  }
  .el-calendar-day{
    height: 30px!important;
    text-align: center!important;
  }
</style>