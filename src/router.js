import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


// Vue.use(VueRouter)


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        needLogin: false
       }
    },
    {
      path: '/userControl',
      name: 'userControl',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/userControl.vue'),
      meta:{
        needLogin: true
      }
    },{
      path: '/goodsControl',
      name: 'goodsControl',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/goodsControl.vue')
    },{
      path: '/powerControl',
      name: 'powerControl',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/powerControl.vue')
    }
  ]
});
router.beforeEach(
  (to, from, next)=>{
    //路由中设置的needLogin字段就在to当中 
    if(window.sessionStorage.data){
      // console.log(window.sessionStorage);
      // console.log(to.path) //每次跳转的路径
      if(to.path === '/'){
        //登录状态下 访问login.vue页面 会跳到index.vue
        next({path: '/userControl'});
      }else{
        next();
      }
    }else{
      // 如果没有session ,访问任何页面。都会进入到 登录页
      if (to.path === '/') { // 如果是登录页面的话，直接next() -->解决注销后的循环执行bug
        next();
      } else { // 否则 跳转到登录页面
        next({ path: '/' });
      }
    }
})

export default router;