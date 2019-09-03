import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Ready from './components/Ready'
import Out from './components/Out'

// 引入baidumap
import bmap from 'vue-baidu-map'
Vue.use(bmap ,{
  ak : 'fROEdNowtafHCnpEi0mmDFcNLPGeir70'
})

// 引入UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入Scss
import './assets/scss/init.scss'

// ready
Vue.component('k-ready', Ready)
Vue.component('k-out', Out)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
