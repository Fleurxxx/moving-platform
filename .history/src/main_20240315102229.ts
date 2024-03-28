/*
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-11 21:23:04
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-15 10:19:12
 * @FilePath: \moving-platform\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import'./utils/rem'
import '../'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import vueSeamlessScroll from 'vue-seamless-scroll/src'
import { createPinia } from "pinia"
//注册 Pinia 插件
const pinia = createPinia()
import UndrawUi from 'undraw-ui'
import 'undraw-ui/dist/style.css'


const app = createApp(App) 
app.use(store)
app.use(router)
app.use(pinia)
app.use(vueSeamlessScroll)
app.use(UndrawUi)
app.use(ElementPlus)
// 全局导入icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// 挂载到Vue根实例
app.mount('#app')

