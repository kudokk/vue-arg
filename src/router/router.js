import Vue from 'vue'
import Router from 'vue-router'
import { ROUTE_NAMES } from './names'
import ChildrenAll from '@/router/childrenAll'
// page
import Profile from '@/page/profile'
import Learn from '@/page/learn'
import Spider from '@/page/learn/spider'
// Lean
import TodoList from '@/organism/todoList'
import Meigen from '@/organism/meigen'
import Linda from '@/organism/linda'
import Warikan from '@/organism/warikan'
import Sengoku from '@/organism/sengokuquiz'
import Tonny from '@/organism/tonnyRoom'
import Sakenomi from '@/organism/sakeNomi'

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
      component: ChildrenAll,
      beforeEnter: (to, from, next) => {
        console.log('route(home):beforeEnter');
        next();
      },
      children: [
        {
          path: '',
          name: ROUTE_NAMES.LEARN,
          component: Learn,
        },
        {
          path: 'spider',
          name: ROUTE_NAMES.SPIDER,
          component: ChildrenAll,
          children: [
            {
              path: '',
              name: ROUTE_NAMES.SPIDER,
              component: Spider
            },
            {
              path: 'todo',
              name: ROUTE_NAMES.TODOLIST,
              component: TodoList
            },
            {
              path: 'meigen',
              name: ROUTE_NAMES.MEIGEN,
              component: Meigen
            },
            {
              path: 'linda',
              name: ROUTE_NAMES.LINDA,
              component: Linda
            },
            {
              path: 'warikan',
              name: ROUTE_NAMES.WARIKAN,
              component: Warikan
            },
            {
              path: 'sengoku',
              name: ROUTE_NAMES.SENGOKU,
              component: Sengoku
            },
            {
              path: 'tonny',
              name: ROUTE_NAMES.TONNY,
              component: Tonny
            },
            {
              path: 'sakenomi',
              name: ROUTE_NAMES.SAKENOMI,
              component: Sakenomi
            }
          ]
        },
      ]
    }
  ]
})