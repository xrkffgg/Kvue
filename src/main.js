import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
