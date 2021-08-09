<template>
  <div class="sidebar">
        <van-sidebar v-model="activeKey">
            <router-link to="/userControl"><van-sidebar-item title="用户管理" /></router-link>
            <router-link to="/powerControl"><van-sidebar-item title="权限管理" /></router-link>
            <router-link to="/goodsControl"><van-sidebar-item title="商品管理" /></router-link>
        </van-sidebar>
  </div>
</template>

<script>
import Vue from 'vue';
import { Sidebar, SidebarItem } from 'vant';

Vue.use(Sidebar).use(SidebarItem);
export default {
    name:"Sideber",
    components: {
        Sidebar,
        SidebarItem
    },
    data(){
        return{
            activeKey: 0,//当前视图
        }
    }
}
</script>

<style scoped lang="less">
@media screen and (min-width:900px){
    .sidebar{
        width: 15%;
        .van-sidebar{
            width: auto;
        }
    }
}
/* .sidebar{
    // width: 200px;
    background-color:#999 ;
    height: 500px;
    font-size: 32px;
    line-height: 32px;
}
.sidebar-ul{
    padding: 10px;
    a{
        color: rgb(10, 10, 10);
        text-decoration: none;
    &:visited{
        color: rgb(10, 10, 10);
    }
    &.router-link-exact-active {
      color: #42b983;
    //   background-color: rgb(238, 222, 222);
    }
    }

    &:hover{
        background:#666;
    }
    &:active{
        background:#666;
    }
} */
</style>