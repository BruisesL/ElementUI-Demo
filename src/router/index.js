import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "../components/HelloWorld";
import MyButton from "../components/MyButton";
import UserList from "../components/UserList";
import UserTable from "../components/UserTable";
import UserDetail from "../components/UserDetail";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mybutton',
      name: 'MyButton',
      component: MyButton
    },
    {
      path: '/user/list',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/user/table',
      name: 'UserTable',
      component: UserTable
    },
    {
      path: '/user/detail',
      name: 'UserDetail',
      component: UserDetail
    }
  ]
})
