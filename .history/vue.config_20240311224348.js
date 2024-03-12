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
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 自动导入vue中hook reactive ref等
import AutoImport from "unplugin-auto-import/vite"

//自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from 'unplugin-vue-components/vite'
//Ant
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
//element
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    Components({//自定义的模块
      dirs: ['src/components'],
      extensions: ['vue', 'ts'],
      resolvers: [AntDesignVueResolver(), ElementPlusResolver()],//所自动导入的element和Ant
    }),
    AutoImport({ // 插件进行自动导入相关的依赖库
      //安装两行后你会发现在组件中不用再导入ref，reactive等
      imports: ['vue', 'vue-router'],
       // 可选，用于自动导入组件类型
      dts: 'src/components.d.ts', 
    }),
  ],
})
