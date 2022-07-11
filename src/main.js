import Vue from "vue";
import Vuelidate from "vuelidate";
import JsonViewer from "vue-json-viewer";
import Pixel from "@mekari/pixel";
import App from "./App.vue";
import router from "./route";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(JsonViewer);
Vue.use(Pixel);

new Vue({
  el: "#app",
  router,
  template: "<App />",
  components: { App }
});
