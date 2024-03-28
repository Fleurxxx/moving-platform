/*
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-11 21:23:04
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-18 15:16:06
 * @FilePath: \moving-platform\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-11 21:23:04
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-15 20:58:37
 * @FilePath: \moving-platform\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/",
    component: () => import("@/views/Index.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home", // 空路径，即默认显示的子路由
        component: () => import("@/views/Home.vue"),
        // redirect: "/main/arithmetic",
        // children: [
        //   {
        //     path: "/main/in",
        //     component: () => import("../views/Introduction.vue"),
        //   },
        //   {
        //     path: "/main/arithmetic",
        //     component: () => import("../views/Arithmetic.vue"),
        //   },
        // ],
      },
      {
        path: "/schedule", //大会议程
        component: () => import("@/views/Schedule.vue"),
        children: [
          
        ],
      },
      {
        path: "/activity",
        component: () => import("@/views/Activity.vue"),
      },
      {
        path: "/integral",
        component: () => import("@/views/Integral.vue"),
      },
      {
        path: "/person",
        component: () => import("@/views/Person.vue"),
      },
    ],
  },
  
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
