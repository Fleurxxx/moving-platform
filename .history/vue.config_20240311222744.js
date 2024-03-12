const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭eslint校验，重新编译就正常了
  lintOnSave: false
})
const { defineConfig } = require('@vue/cli-service');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers'); //解析器
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭eslint校验
  lintOnSave: false,
  //此处server可以根据自己需求设置
  server: {
    open: true,  //项目启动后自动访问项目
    port:8088//这里是可以自己设置端口
  },
  plugins: [
    vue(),
    //当前项目不需要全局引入，用到什么组件自动解析
    Components({
      resolvers:[ElementPlusResolver()]
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
  ],//插件
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
