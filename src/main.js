import { createApp } from "vue";
import App from "./App.vue";
import install from "@/model/install";

const app = createApp(App);
install(app);
app.mount("#app");
