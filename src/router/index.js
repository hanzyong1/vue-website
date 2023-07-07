import Vue from "vue";
import VueRouter from "vue-router";
import BlogsView from "../views/BlogsView.vue";
import AddBlogView from "../views/AddBlogView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: BlogsView,
  },
  {
    path: "/add-blog",
    component: AddBlogView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
