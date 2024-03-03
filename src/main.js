import Vue from "vue";
import App from "./App.vue";
import "./style.css";
import { store } from "./store/store";
import VueRouter from "vue-router";
import { routes } from "./router/routes";

Vue.use(VueRouter);

export const router = new VueRouter({ mode: "history", routes });

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && store.getters.getUser == null) {
    //Error notification
    next({ path: "/login" });
  } else if (
    to.meta.requiresAuth &&
    to.meta.superAdmin &&
    !store.getters.getSuperAdminPermissions
  ) {
    next({ path: "/contacts" });
  } else {
    next();
  }
});
new Vue({
  store: store,
  render: (h) => h(App),
  router,
}).$mount("#app");
