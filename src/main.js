import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// Filters
Vue.filter("capitalize", function (value) {
  return value.toUpperCase();
});

Vue.filter("truncate", function (value) {
  return value.slice(0, 100) + "...";
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
