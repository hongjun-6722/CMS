<template>
    <div class="login">
      <div class="main">
        <form>
          <van-field v-model="user" type="digit" label="用户名" autocomplete='username'/>
          <van-field v-model="pwd" type="password" label="密码" autocomplete='new-password'/>
          <van-button type="primary" v-on:click="login()">登陆</van-button>
        </form>

      </div>
      <!-- 背景图片 -->
      <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    >
    </vue-particles>
  </div>
</template>

<script>
import Vue from 'vue';
//密码框，输入栏，按钮
import { PasswordInput,Field,Button } from 'vant';
import Axios from 'axios';

Vue.use(Button);
Vue.use(Field);
Vue.use(PasswordInput);
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {

  },
  data() {
      return {
        showKeyboard: true,
        user:'',
        pwd:'',
      };
  },
  methods: {
    //登陆
    login(){
      // console.log(1)
      instance.post('/user', {
      user: this.user,
      pwd:this.pwd,
      })
      // .then(function (response) {
      // console.log(response);
      // console.log(1)
      // console.log(response.data.data)
      // this.stu = response.data.data
      // })
      .then((response)=>{
        // window.console.log(response.data.data);
        // window.console.log(response);
        // window.console.log(response.data.status);
        if(response.data.status=131){
          window.sessionStorage.setItem('data',131);
          this.$router.push('/userControl');
        }
      })
      .catch(function (error) {
      console.log(error);
            // console.log(1)
      });
    }
  },
  created() {
    //键盘监听
    var lett = this;
    document.onkeydown = function(e) {
    var key = window.event.keyCode;
      if (key == 13) {
        lett.login();
      }
    }
  },
}
//axios实例
var instance = Axios.create({
  baseURL: '/api',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
});
</script>
<style lang="less">
@media screen and (min-width:900px){
  .main{
    width: 40%;
    margin: auto;
  }
}
.login {
  background-image: linear-gradient(-180deg, #1a1454 0%, #0e81a5 100%);
  /*background-image: url("../images/bg_login.png");*/
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  .main{
    top: 15%;
    padding: 10%;
    z-index: 50;
    position: relative;
    .van-field__label{
      width: 45px;
    }
    button{
      margin-top: 20px;
    }
  }
  .lizi{
      height:100%;
      position: absolute;
      top: 0;
      
  }
}
</style>
