import { createApp } from "vue";
import App from "./App.vue";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import router from "./router/index.js";
import store from "./store/index.js";
import "./index.css";

createApp(App)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyDvJ6XbLxaIR0pN4yBaorBX5bPv_ogaFCE",
    },
  })
  .use(store)
  .use(router)
  .mount("#app");
