export default {
  Home: () => import("@/views/Home.vue"),
  About: () => import("@/views/About.vue"),
  Main: () => import("@/views/Main.vue"),
  // error page
  Error404: () => import("@/views/error/Error404.vue"),
};
