import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "../components/HelloWorld";
import MyButton from "../components/MyButton";
import UserList from "../components/UserList";
import UserTable from "../components/UserTable";
import UserDetail from "../components/UserDetail";
import User from "../components/User";
import User1 from "../components/User1";

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
    },
    {
      path: '/user/user',
      name: 'User',
      component: User
    },
    {
      path: '/user/user1',
      name: 'User1',
      component: User1
    }
  ]
})
