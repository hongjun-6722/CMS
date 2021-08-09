<template>
  <div id="app" ref='app'>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/userControl">userControl</router-link>
    </div>
    <Topbar></Topbar>
    <div class="content">
      <Sidebar></Sidebar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'//侧边栏
import Topbar from '@/components/Topbar.vue'//顶部导航
export default {
  name: 'App',
  components: {
    Sidebar,
    Topbar
  },
  data(){
    return{
      winHeight:window.innerHeight,
    }
  },
  mounted(){
  //浏览器高度事件注册
    const that =this
    window.onresize = () => {
      return (() => {
        that.winHeight = window.innerHeight
      })()
    }
    this.$refs.app.style.height=this.winHeight+'px'
  },
  watch:{
  //浏览器高度
  winHeight(val){
    this.winHeight =val
    this.$refs.app.style.height=this.winHeight+'px'
    }
  }
}
</script>


<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(250, 250, 250);
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.content{
  display: flex;
  height: 83%;
}
*{
  padding: 0;
  margin: 0;
}
</style>
