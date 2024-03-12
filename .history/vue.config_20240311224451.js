const { defineConfig } = require('@vue/cli-service');
// import { defineConfig } from 'vite'
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
  transpileDependencies: true,
  //关闭eslint校验
  lintOnSave: false,
  //此处server可以根据自己需求设置
  server: {
    open: true,  //项目启动后自动访问项目
    port:8088//这里是可以自己设置端口
  },
 
})
