import Vue from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import App from "./App.vue";
import store from "./store";

Vue.use(Antd);
Vue.config.productionTip = true;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
