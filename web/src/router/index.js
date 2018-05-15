import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import salary from '@/components/salary'
import register from '@/components/register'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/register/',
      name: 'register',
      component: register
    },
    {
      path: '/login/',
      name: 'login',
      component: login
    },
    {
      path: '/tools/salary/',
      name: 'salary',
      component: salary
    },
  ],
})
