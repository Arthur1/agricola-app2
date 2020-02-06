import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'noto-sans-jp/noto_sans_jp_regular/css.css'
import 'material-icons/iconfont/material-icons.css'
import '@/assets/scss/custom.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
