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
      {
        path : '/Home',
        name : 'home',
        component : () => import('./components/Home'),
        side_id : getid(),
        side_icon : icon('s-home'),
        side_name : 'Home',
      },
      {
        path : '/Css',
        name : 'css',
        redirect: { name : 'css001'},
        side_id : getid(),
        side_icon : icon('picture'),
        side_name : 'CSS',
        children : [
          {
            path : '001',
            name : 'css001',
            component : () => import('./components/cssCom/001.vue'),
            side_id : getid(),
            side_name : '字体显示',
          }
        ]
      }
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