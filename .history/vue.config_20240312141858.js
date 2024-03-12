const { defineConfig } = require('@vue/cli-service');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭eslint校验
  lintOnSave: false,
  devServer: {
    host: 'localhost',
    port: 3000,  // 启动端口号
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
}

————————————————

                        版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
                    
原文链接：https://blog.csdn.net/bestyinjun/article/details/131855685,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  }
})
