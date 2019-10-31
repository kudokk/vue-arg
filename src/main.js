import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router.js'
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
