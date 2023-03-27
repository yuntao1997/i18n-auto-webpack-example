import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false



import ElementUI from 'element-ui';
Vue.use(ElementUI, {size: 'mini', zIndex: 3000})



import i18n from './i18n'
import './utils'
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
