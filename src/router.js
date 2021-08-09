import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      //主页
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        needLogin: false
       }
    },
    {
      //用户主页
      path: '/userControl',
      name: 'userControl',
      component: () => import('./views/userControl.vue'),
      meta:{
        needLogin: true
      }
    },{
      //商品列表 未使用
      path: '/goodsControl',
      name: 'goodsControl',
      component: () => import('./views/goodsControl.vue')
    },{
      //权限列表 未使用
      path: '/powerControl',
      name: 'powerControl',
      component: () => import('./views/powerControl.vue')
    }
  ]
});
router.beforeEach(
  (to, from, next)=>{
    //needLogin在to当中 
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