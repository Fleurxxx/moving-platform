/*
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-11 21:23:04
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-25 20:09:46
 * @FilePath: \moving-platform\src\store\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import { user } from './user';

const store = createPinia()
store.use(piniaPluginPersist) // 使用插件
   
export { user };
export default store;
