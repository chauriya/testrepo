import Vue from "vue";
import VueRouter from "vue-router";
//import store from "@/store";

Vue.use(VueRouter);

const routes = [
  /* old changes (not added in rewrite) 
  {
    path: "/registration",
    meta: {
      title: "Registration",
      showbutton: false,
      prev: null,
      next: "verify-info",
    },
    name: "registration",
    component: () => import("../views/reg-switch.vue"),
  } */
  {
    path: "/registration",
    meta: {
      title: "Registration",
      showbutton: false,
      prev: null,
      next: "verify-info"
    },
    name: "registration",
    component: () => import("@/views/verify-info.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return new Promise(resolve => {
      resolve({ x: 0, y: 0 });
    });
  }
});

/* router.beforeEach((to, from, next) => {
  if (to.name != "registration" && from.name == null) {
    next({ path: "/registration" });
  } else if (store.getters["ui/getPageDestination"] !== to.name) {
    store.dispatch("polApi/redirectToLogin");
  } else {
    next();
  }
}); */

export default router;
