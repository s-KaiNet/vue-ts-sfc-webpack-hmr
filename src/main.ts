import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
