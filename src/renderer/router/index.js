import Vue from "vue";
import VueRouter from "vue-router";
import BasicLayout from "@/renderer/views/layouts/BasicLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: BasicLayout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/renderer/views/layouts/layoutContent.vue"),
        name: "home",
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
