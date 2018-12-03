import Vue from "vue";
import Router from "vue-router";
import Main from "@/views/Main.vue";

import Home from './home/index'
import News from './news/index'
import SystemManage from './systemManage/index'
Vue.use(Router);
let routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    redirect: '/home',
    children:[]
  }
]
routes[0].children.push(Home,News,SystemManage)
export default new Router({
  mode: 'hash',
  routes:routes
});
