<template>
  <div id="app" ref='app'>
    <Topbar :logout="loggingStatus"></Topbar>
    <div class="content">
      <div class="sidebar" v-show="loggingStatus">
        <Sidebar></Sidebar>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'//侧边栏
import Topbar from '@/components/Topbar'//顶部导航
export default {
  name: 'App',
  components: {
    Sidebar,
    Topbar
  },
  data(){
    return{
      winHeight:window.innerHeight,//浏览器高度
      loggingStatus:'' ,
    }
  },
  created(){
    this.$store.commit('change_winHeight',this.winHeight)
  },
  mounted(){
  浏览器高度事件注册
    const that = this
    window.onresize = () => {
      return (() => {
        that.winHeight = window.innerHeight
        this.$store.commit('change_winHeight',this.winHeight)
      })()
    }
  },
  watch:{
  },
  mounted() {
    this.loggingStatus = sessionStorage.getItem("data")
    window.addEventListener("setItem",() => {
        this.loggingStatus = sessionStorage.getItem("data")
    })
  },
  beforeDestroy() {
      window.removeEventListener("setItem", () => {});
  },
}
</script>


<style lang="less">
html,body{
  font-size: 14px;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
.content{
  min-height: calc(100vh - 40px);
  display: flex;
  .sidebar{
    height: calc(100vh - 40px);
    background-color: #f7f8fa;
    width: 15%;
    min-width: 80px;
  }
}

*{
  padding: 0;
  margin: 0;
}
</style>
