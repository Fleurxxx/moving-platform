/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-20 20:21:30
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-12 15:14:45
 * @FilePath: \hope-enroll\src\store\store.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createPinia } from 'pinia'
import { user } from './user';
import { problem } from './problem';
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPluginPersist) // 使用插件
   
export { user, problem };
export default store;
