import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import Patient from "./views/Patients.vue"
import Order from "./views/Orders.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/patients",
      name: "patients",
      component: Patients
    },
    {
      path: "/orders",
      name: "orders",
      component: Orders
    }
  ]
})
