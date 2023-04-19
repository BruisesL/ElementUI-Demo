import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "../components/HelloWorld";
import MyButton from "../components/MyButton";
import UserList from "../components/UserList";

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
    }
  ]
})
