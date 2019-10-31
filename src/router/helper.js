import { ROUTE_NAMES } from '@/router/names'
import ErrorPage from '@/pages/ErrorPage.vue'
import store from '@/store/index.js'

export default {
  /**
   * /campaignsからのバックで'/index'または'/'への遷移が発生するので、
   * ナビゲーションガードで遷移を防ぐ
   */
  navGuardIndexAndRoot: (to, from, next) => {
    if (from.name === ROUTE_NAMES.CAMPAIGNS) {
      next({
        name: ROUTE_NAMES.CAMPAIGNS,
        query: { coAccountId: from.query.coAccountId }
      })
    } else {
      next()
    }
  },
  authCheck: (to, from, next, env, operation) => {
    if (to.fullPath === from.fullPath || from.fullPath === '/') {
      // リロード、URL直打ちの場合にはloginUser stateにmodellattributeからデータを入れてから権限チェックを行う
      const parsedModelAttribute = JSON.parse(window.modelAttribute)
      const loginUser = parsedModelAttribute.loginUser
      store.commit('loginUserStore/setLoginUser', loginUser)
    }
    if (store.getters['loginUserStore/hasAuthority']({ envName: env, operationName: operation })) {
      next()
    } else {
      next({
        name: ROUTE_NAMES.ERROR,
        params: { statusCode: '403' },
        component: ErrorPage
      })
    }
  }
}
