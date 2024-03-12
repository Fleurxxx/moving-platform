const { defineConfig } = require('@vue/cli-service');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭eslint校验
  lintOnSave: false,
  configureWebpack: {
    
  }
})
