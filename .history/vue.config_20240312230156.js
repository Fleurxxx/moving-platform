/*
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-11 21:23:04
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-12 23:01:33
 * @FilePath: \moving-platform\vue.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  transpileDependencies: true,
  //关闭eslint校验
  lintOnSave: false,
  devServer: {
    host: 'localhost',
    port: 8088,  // 启动端口号
    proxy: {
      '/api': { // 请求接口中要替换的标识
        target: 'http://117.62.22.235:17009', // 代理地址
        ChangeOrigin: true, // 是否允许跨域
        secure: true,
        pathRewrite: {
            '^/api': '' // 这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  chainWebpack: (config) => {
    config.resolve.alias
    .set("@", resolve("src"))
    .set("assets", resolve("src/assets"))
    .set(“components”, resolve(“src/components”))
    .set(“base”, resolve(“baseConfig”))
    .set(“public”, resolve(“public”));
  },
  // PostCSS 插件配置
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions:{
           plugins: [
            require('postcss-pxtorem')({
              rootValue: 192,//Number | Function）表示根元素字体大小或根据input参数返回根元素字体大小。（我电脑分辨率为1920*1080，所以设置192）
              unitPrecision: 5, //（Number）允许REM单位增加的十进制数字
              propList: ["*", 'font-size', 'line-height', 'padding'],//(Array）可以从px更改为rem的属性。有样式遗漏可自行在该数组中添加
              selectorBlackList: [],//(Array）要忽略的选择器，保留为px
              replace: true,//（Boolean）替换包含rems的规则
              mediaQuery: false,//（Boolean）允许在媒体查询中转换px
              minPixelValue: 0,//（Number）设置要替换的最小像素值
              exclude: /node_modules/i//（String, Regexp, Function）要忽略并保留为px的文件路径。
              //  ****   忽略单个属性的方法:在像素单位声明中使用大写字母，将px写为Px。   border: 1Px solid; 或 border-width: 2PX; 
            })
          ]
        }
      }
    }
  },
  //图片压缩
  // publicPath: './', // 打包位置
  // outputDir: 'distBigScreenForBase' // 包名
})
