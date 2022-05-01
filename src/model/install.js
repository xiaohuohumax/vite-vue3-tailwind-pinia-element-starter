import installPinia from "./installPinia";
import installRouter from "./installRouter";
import installTailwind from "./installTailwind";
import installComponent from "./installComponent";
import installElementPlus from "./installElementPlus";

export default (app) => {
  installPinia(app);
  installRouter(app);
  installTailwind(app);
  installComponent(app);
  installElementPlus(app);
};
