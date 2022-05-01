import component from "@/script/component";

export default (app) => {
  for (const name in component) {
    app.component(name, component[name]);
  }
};
