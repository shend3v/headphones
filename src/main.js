import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";
import Meta from "vue-meta";

Vue.use(BootstrapVue);
Vue.use(Meta);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
