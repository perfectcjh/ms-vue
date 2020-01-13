import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import i18n from '@/lang'

import 'normalize.css'
import '@/styles/index.scss'

Vue.config.productionTip = false

Vue.use(ElementUI, {
  i18n: (key: string, value: string) => i18n.t(key, value)
})

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
