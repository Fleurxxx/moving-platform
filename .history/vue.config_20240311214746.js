const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  关闭eslint校验，重新编译就正常了
lintOnSave: false
})
