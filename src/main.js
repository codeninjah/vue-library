import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './store'

Vue.config.productionTip = false

new Vue({
  router,

  // Add data to root component

  store,
  render: h => h(App)
}).$mount('#app')
