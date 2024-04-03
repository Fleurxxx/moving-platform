import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

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
        path: "/introduction", //会议介绍
        component: () => import("@/views/Introduction.vue"),
      },
      {
        path: "/t", //会议介绍
        component: () => import("@/component/Live.vue"),
      },
      {
        path: "/schedule", //大会议程
        component: () => import("@/views/Schedule.vue"),
      },
      {
        path: "/schedule/video", //视频
        component: () => import("@/views/Video.vue"),
      },
      {
        path: "/schedule/live", //直播
        component: () => import("@/views/Live.vue"),
      },
      {
        path: "/exhibitor", //展商风采
        component: () => import("@/views/Exhibitor.vue"),
      },
      {
        path: "/exhibitor/company", //展商信息
        component: () => import("@/views/Company.vue"),
      },
      {
        path: "/activity", //活动
        component: () => import("@/views/Activity.vue"),
      },
      {
        path: "/achievement", //成果发布
        component: () => import("@/views/Achievement.vue"),
      },
      {
        path: "/news", //媒体中心
        component: () => import("@/views/News.vue"),
      },
      {
        path: "/forum", //大会论坛
        component: () => import("@/views/Forum.vue"),
      },
      {
        path: "/integral", //积分商城
        component: () => import("@/views/Integral.vue"),
      },
      {
        path: "/person",
        component: () => import("@/views/Person.vue"),
      },
      {
        path: "/newsItem", //新闻列表组件
        component: () => import("@/component/NewsItem.vue"),
      },
      {
        path: "/imgItem", //图片列表组件
        component: () => import("@/component/ImgItem.vue"),
      },
      {
        path: "/videoItem", //视频列表组件
        component: () => import("@/component/VideoItem.vue"),
      },
      {
        path: "/mediaArticle", //媒体中心新闻详情
        component: () => import("@/views/MediaArticle.vue"),
      },
      {
        path: "/imgPreview", //图片预览组件
        component: () => import("@/component/ImagePreview.vue"),
      },
      {
        path: "/imageProcessing", //图片预览组件
        component: () => import("@/views/ImageProcessing.vue"),
      }
    ],
  },
  {
    path: "/exhibitor/exhibition", //云上展厅
    component: () => import("@/views/Exhibition.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
