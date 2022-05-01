import { createRouter, createWebHistory } from "vue-router";
import view from "@/script/view";
import config from "@/config";

const routes = [
  {
    path: "/",
    component: view.Main,
    children: [
      {
        path: "",
        component: view.Home,
        meta: { title: "Home" },
      },
      {
        path: "about",
        component: view.About,
        meta: { title: "About" },
      },
    ],
  },
  {
    path: "/:path(.*)",
    component: view.Error404,
    meta: { title: "404 not found" },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const title = to?.meta?.title;
  window.document.title = title ?? config.title;
  next();
});

export default router;
