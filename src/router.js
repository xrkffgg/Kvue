import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./components/index'),
      redirect: { name : 'home'},
      children : [
        {
          path : '/Home',
          name : 'home',
          component : () => import('./components/Home'),
        }
      ]
    },
  ]
})
