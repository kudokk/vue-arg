import Vue from 'vue'
import Router from 'vue-router'
import { ROUTE_NAMES } from './names'
// page
import Profile from '@/page/profile'
import Learn from '@/page/learn'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: ROUTE_NAMES.ROOT,
      component: Profile,
      beforeEnter: (to, from, next) => {
        console.log('route(home):beforeEnter');
        next();
      }
    },
    {
      path: '/profile',
      name: ROUTE_NAMES.PROFILE,
      component: Profile,
      beforeEnter: (to, from, next) => {
        console.log('route(home):beforeEnter');
        next();
      }
    },
    {
      path: '/learn',
      name: ROUTE_NAMES.LEARN,
      component: Learn,
      beforeEnter: (to, from, next) => {
        console.log('route(home):beforeEnter');
        next();
      }
    }
  ]
})