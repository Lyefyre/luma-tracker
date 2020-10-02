import Vue from "vue";
import VueRouter from "vue-router";
import Overview from "../views/overview.vue";
import Main from "../views/main.vue";
import Counter from "../views/counter.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/overview",
    name: "Overview",
    component: Overview
  },
  {
    path: "/main",
    name: "main",
    component: Main
  },
  {
    path: "/counter",
    name: "counter",
    component: Counter
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
