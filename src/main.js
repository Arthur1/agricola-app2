import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'noto-sans-jp/noto_sans_jp_regular/css.css'
import '@/assets/scss/custom.scss'
import random from './utils/random'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.mixin(random)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
