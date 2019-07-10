import Vue from "vue";
import "tailwindcss/dist/tailwind.css";
import App from "./app.vue";

Vue.prototype.counterEndpoint =
  "https://4r4x8h5ai7.execute-api.eu-central-1.amazonaws.com/dev/random-sentences/";

new Vue(App).$mount("#app");
