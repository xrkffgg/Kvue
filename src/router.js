import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function icon(name){
  return 'el-icon-'+name
}

var id = 0
function getid(){
  return id++
}

export const ROUTES = [
  {
    path: '/',
    name: 'index',
    component: () => import('./components/index'),
    redirect: { name : 'home'},
    children : [
      //  Home
      {
        path : '/Home',
        name : 'home',
        component : () => import('./components/Home'),
        side_id : getid(),
        side_icon : icon('monitor'),
        side_name : 'Home',
      },
      //  Css
      {
        path : '/Css',
        name : 'css',
        redirect: { name : 'css001'},
        side_id : getid(),
        side_icon : icon('picture-outline'),
        component : () => import('./components/Router'),
        side_name : 'CSS',
        children : [
          {
            path : '001',
            name : 'css001',
            component : () => import('./components/cssCom/001.vue'),
            side_id : getid(),
            side_name : '字体样式',
          },
          {
            path : '002',
            name : 'css002',
            component : () => import('./components/cssCom/002.vue'),
            side_id : getid(),
            side_name : '动画样式',
          },
        ]
      },
      //  Js
      {
        path : '/Js',
        name : 'js',
        redirect: { name : 'js001'},
        side_id : getid(),
        side_icon : icon('lollipop'),
        component : () => import('./components/Router'),
        side_name : 'JS',
        children : [
          {
            path : '001',
            name : 'js001',
            component : () => import('./components/jsCom/001.vue'),
            side_id : getid(),
            side_name : 'JS样式1',
          },
          {
            path : '002',
            name : 'js002',
            component : () => import('./components/jsCom/002.vue'),
            side_id : getid(),
            side_name : 'JS样式2',
          },
        ]
      },
    ]
  },
]

const router =  new Router({
  routes: ROUTES
})

router.beforeEach((to,from,next) =>{
  if(to.name == null){
    return next({name : 'home'})
  }
  next()
})

export default router