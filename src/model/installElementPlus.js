import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

export default (app) => {
  app.use(ElementPlus);

  for (const key in ElementPlusIconsVue) {
    app.component(key, ElementPlusIconsVue[key]);
  }
};
