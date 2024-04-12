/*
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-11 21:23:04
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-31 16:54:21
 * @FilePath: \moving-platform\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import'./utils/rem'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import vueSeamlessScroll from 'vue-seamless-scroll/src'
import UndrawUi from 'undraw-ui'
import 'undraw-ui/dist/style.css'
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import 'font-awesome/css/font-awesome.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret)


const app = createApp(App) 
app.use(store)
app.use(router)
app.use(vueSeamlessScroll)
app.use(UndrawUi)
app.use(ElementPlus)
app.use(ViewUIPlus)
app.component('font-awesome-icon', FontAwesomeIcon)
// 全局导入icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// 挂载到Vue根实例
app.mount('#app')

