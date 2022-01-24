import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import constantes from "@/constantes/constantes";
import { registerBaseComponents } from "./scripts/registerBaseComponents";
registerBaseComponents(Vue);

Vue.config.productionTip = false;
Vue.use(constantes);

new Vue({
  router,
  vuetify,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
