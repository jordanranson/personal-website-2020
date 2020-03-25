import Vue from 'vue'
import App from './App.vue'
import DataPlugin from '@/plugins/data.js'
import router from './router/index.js'

Vue.config.productionTip = false

Vue.use(DataPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
