import Vue from 'vue'
import Router from 'vue-router'
import { ROUTE_NAMES } from './names'
import ChildrenAll from '@/router/childrenAll'
// page
import Profile from '@/page/profile'
import Carrer from '@/page/profile/carrer'
import Learn from '@/page/learn'
import Spider from '@/page/learn/spider'
import Reactive from '@/page/learn/reactive'
// Profile
import Company from '@/organism/profile/company'
import Tech from '@/organism/profile/tech'

// Lean
// spider
import TodoList from '@/organism/learn/spider/todoList'
import Meigen from '@/organism/learn/spider/meigen'
import Linda from '@/organism/learn/spider/linda'
import Warikan from '@/organism/learn/spider/warikan'
import Sengoku from '@/organism/learn/spider/sengokuquiz'
import Tonny from '@/organism/learn/spider/tonnyRoom'
import Sakenomi from '@/organism/learn/spider/sakeNomi'
// reactive
import VueSystem from '@/organism/learn/reactive/vueSystem'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.NODE_ENV === 'development' ? '' : 'vue-arg/dist/',
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
      component: ChildrenAll,
      beforeEnter: (to, from, next) => {
        console.log('route(home):beforeEnter');
        next();
      },
      children: [
        {
          path: '',
          name: ROUTE_NAMES.PROFILE,
          component: Profile,
        },
        {
          path: 'carrer',
          name: ROUTE_NAMES.CARRER,
          component: ChildrenAll,
          children: [
            {
              path: '',
              name: ROUTE_NAMES.CARRER,
              component: Carrer,
            },
            {
              path: 'company',
              name: ROUTE_NAMES.COMPANY,
              component: Company
            },
            {
              path: 'tech',
              name: ROUTE_NAMES.TECH,
              component: Tech
            }
          ]
        }
      ]
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
        {
          path: 'reactive',
          name: ROUTE_NAMES.REACTIVE,
          component: Reactive,
          children: [
            {
              path: '',
              name: ROUTE_NAMES.REACTIVE,
              component: Reactive,
            },
            {
              path: 'vueSystem',
              name: ROUTE_NAMES.VUESYSTEM,
              component: VueSystem,
            }
          ]
        }
      ]
    }
  ]
})
