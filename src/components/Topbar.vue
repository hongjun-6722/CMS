<template>
  <div class="topbar">
      <span class="topbar-word">
            <van-icon name="chat-o" size="40" />
            用户后台管理系统
            <van-button plain type="info" size='mini' v-on:click="loginOut() ">注销</van-button>
      </span>
  </div>
</template>

<script>
export default {
    name:"Topbar",
    methods:{
        loginOut(){
        // 注销后 清除session信息 ，并返回登录页
        window.sessionStorage.removeItem('data');
        // this.common.startHacking(this, 'success', '注销成功！');
        this.$router.push('/'); 
        }
    }
}
import Vue from 'vue';
import { Icon } from 'vant'
import { Button } from 'vant';

Vue.use(Button).use(Icon);
</script>

<style scoped lang="less">
.topbar{
    height: 40px;
    background: #999;
    width: 100%;
    font-size: 20px;
    position: relative;
    i{
        position: absolute;
        left: -40px
    }
    .topbar-word{
        line-height: 40px;
        text-align: center;
        margin: auto;
        left: 20%;
        position: absolute;
        button{
            top: -3px;
        }
    }
}

</style>
