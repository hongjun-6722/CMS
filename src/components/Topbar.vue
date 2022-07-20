<template>
  <div class="topbar">
      <div class="topbar-left">
            <span class="topbar-title">用户后台管理系统</span>
            <van-button 
            v-show="logout"
            class="topbar-button" 
            plain 
            type="info" 
            size='mini' 
            @click="loginOut()"
            >
            注销
            </van-button>
      </div>
  </div>
</template>

<script>
export default {
    name:"Topbar",
    data(){
        return{
        }
    },
    props: {
      logout: String,
      required: true
    },
    methods:{
        //注销
        loginOut(){
            this.setSessionItem("data","")
            this.$router.push('/'); 
        }
    },
}
</script>

<style lang="less">
.topbar{
    height: 40px;
    width: 100%;
    position: relative;
    font-size: 20px;
    background: #f3f3f3;
    .topbar-left{
        height: 100%;
        width: 100%;
        padding-left: 10px;
        box-sizing: border-box;
        text-align: left;
        .topbar-title{
            vertical-align: middle;
            line-height: 40px;
        }
        .topbar-button{
            vertical-align: middle;
            margin-left: 5px;
        }
    }
}

</style>
