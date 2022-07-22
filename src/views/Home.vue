<template>
    <div class="login">
      <div class="main">
        <form class="login-form">
          <van-field v-model="user" type="text" label="用户名" autocomplete='username'/>
          <van-field v-model="pwd" type="password" label="密码" autocomplete='new-password'/>
          <p class="forget">忘记密码>></p>
          <div class="login-button">
            <van-button class="login-button-item" type="primary" @click="register()">注册</van-button>
            <van-button class="login-button-item" type="primary" @click="login()">登陆</van-button>
          </div>
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
export default {
  name: 'home',
  components: {
  },
  data() {
      return {
        showKeyboard: true,
        user:'',
        pwd:'',
        instance:'',
      };
  },
  methods: {
    //登陆
    login(){
      this.$axios.create({
      baseURL: '/api',
      timeout: 1000,
      headers: {'X-Custom-Header': 'foobar'},
    }).post('/user', {
      user: this.user,
      pwd:this.pwd,
      })
      .then((response)=>{
        if(response.data.status=131){
          this.setSessionItem("data","online")
          this.$router.push('/userControl');
        }
      })
      .catch(function (error) {
      console.log(error);
      });
    }
  },
  created() {
    //键盘监听回车
    var lett = this;
    document.onkeydown = function(e) {
    var key = window.event.keyCode;
      if (key == 13) {
        lett.login();
      }
    }
  },
}
</script>

<style lang="less">
.login {
  background-image: linear-gradient(-180deg, #1a1454 0%, #0e81a5 100%);
  width: 100%;
  .main{
    max-width: 400px;
    margin: auto;
    padding: 10%;
    position: relative;
    top: 15%;
    z-index: 50;
    .van-field__label{
      width: 3.2em;
      user-select: none;
    }
    .login-button{
      margin: auto;
      margin-top: 20px;
      width: 100%;
      display: flex;
      justify-content: space-around;
      user-select: none;
      .login-button-item{
        flex-basis: 40%;
        max-width: 200px;
      }
    }
    .forget{
      text-align: right;
      padding-right: 10px;
      color: #fff;
      user-select: none;
      cursor: pointer;
    }
  }
  .lizi{
    height:calc(100% - 4px);
    position: absolute;
    top: 0; 
  }
}
</style>
