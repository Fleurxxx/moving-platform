import { defineConfig } from '@vue/cli-service';
import { Configuration } from 'webpack';
import AutoImport from 'unplugin-auto-import/webpack';
import Components from 'unplugin-vue-components/webpack';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

const config: Configuration = defineConfig({
  transpileDependencies: true,
  // 关闭 eslint 校验
  lintOnSave: false,
  devServer: {
    host: 'localhost',
    port: 8088,
    proxy: {
      '/api': {
        target: 'http://117.62.22.235:17009',
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
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
  // 图片压缩
  // publicPath: './', // 打包位置
  // outputDir: 'distBigScreenForBase' // 包名
});

export default config;
