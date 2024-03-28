/*
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-11 21:23:04
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-12 23:35:07
 * @FilePath: \moving-platform\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { 
    path: "/", 
    redirect: "/home" 
  },
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
  },
  {s
    path: "/home",
    component: () => import("@/views/Indexs.vue"),
    children: [
      {
        path: "", // 空路径，即默认显示的子路由
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
      // {
      //   path: "/main/option",
      //   component: () => import("../views/Option.vue"),
      // },
      // {
      //   path: "/main/answer",
      //   component: () => import("../views/Answer.vue"),
      // },
      // {
      //   path: "/main/finish",
      //   component: () => import("../views/Finish.vue"),
      // },
    ],
  },
  
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
