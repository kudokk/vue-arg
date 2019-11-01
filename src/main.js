import Vue from 'vue/dist/vue'
import App from '@/App'
import router from '@/router/router'
import store from '@/store/'

Vue.config.productionTip = false
Vue.config.devtools = true

const app = new Vue({
  store,
  router,
  template: '<App/>',
  components: { App }
})

app.$mount('#app')
