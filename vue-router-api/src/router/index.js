import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Patients from "../views/Patients.vue";
import Orders from "../views/Orders.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/patients",
      name: "Patients",
      component: Patients
    },
    {
      path: "/orders",
      name: "Orders",
      component: Orders
    }
  ]
})

