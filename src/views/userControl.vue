<template>
  <div class="user">
    <!-- <h1>用户管理</h1> -->
    <van-cell-group>
      <!-- 弹出部分 -->
        <van-button @click="showPopup">
          <van-cell>添加用户</van-cell>
          <van-popup v-model="show">
            <van-field  v-model="name_value"  placeholder="请输入名字" />  
            <van-field  v-model="age_value"  placeholder="请输入年龄" />
            <van-field  v-model="qq_value"  placeholder="请输入QQ" />
            <van-button class="show_btn" type="primary" @click.stop="clear(),show=!show" >取消</van-button>
            <van-button class="show_btn" type="primary" @click.stop="add(),query(),show=!show" >添加</van-button>            
          </van-popup>
        </van-button>
        <!-- 查询部分 -->
        <van-search v-model='name_query' show-action placeholder="查询名字" @search="query()">
          <template #action>
            <div @click="query()">搜索</div>
          </template>
        </van-search>
    </van-cell-group>

    <!-- 表格 -->
    <div>
      <van-row>
        <van-col span="3">编号</van-col>
        <van-col span="3">姓名</van-col>
        <van-col span="3">年龄</van-col>
        <van-col span="6">QQ</van-col>
        <van-col span="9">功能</van-col>
      </van-row>
      <van-row type="flex"   v-for="(user,index) in stu.slice(currentline,current)" v-bind:key="user.id">
        <van-col span="3">{{currentline+index+1}}</van-col>
        <van-col span="3">{{user.name}}</van-col>
        <van-col span="3">{{user.age}}</van-col>
        <van-col span="6">{{user.qq}}</van-col>
        <van-col span="9">
          <van-button type="primary" v-on:click="del(user.id)" size='20'>删除</van-button>
          <van-button type="primary" size='20'  @click.self="showPopup_change(),change_id=user.id" >
            修改
            <van-popup v-model="show_change">
            <van-field  v-model="name_value"  placeholder="名字" />  
            <van-field  v-model="age_value"  placeholder="年龄" />
            <van-field  v-model="qq_value"  placeholder="QQ" />
            <van-button class="show_btn" type="primary" @click.stop="clear(),show_change=!show_change" >取消</van-button>
            <van-button class="show_btn" type="primary" @click.stop="change(change_id),query(),show_change=!show_change" >修改</van-button>            
          </van-popup>
          </van-button>
        </van-col>
      </van-row>
      <van-pagination v-model="currentPage" :page-count="page" mode="simple" v-on:click="currentcount"/>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import Api from '../api/index.js';
import { Cell,CellGroup,Field } from 'vant';//单元格，输入栏
import { Button } from 'vant';//按钮
import { Col, Row,Pagination } from 'vant';//行列,分页
import { Popup,Search } from 'vant';//弹窗，搜索

Vue.use(Search);
Vue.use(Popup);
Vue.use(Col);
Vue.use(Row);
Vue.use(Pagination);
Vue.use(Cell);
Vue.use(CellGroup);
// @ is an alias to /src
export default {
  name: 'userControl',
  components: {
  },
  data () {
	  return {
      name_query:'',
      age_value: '',//年龄
      name_value:'',//名字
      qq_value:'',//QQ
      show: false,//添加用户的弹窗
      show_change: false,//添加用户的弹窗
      currentPage: 1,//当前页码
      user:{name:'',age:'',id:''},//表单结构
      stu:[],//查询结果
      change_id:'',
	  }
  },
  computed: {
    //起始行
    currentline: function () {
      return (this.currentPage-1)*4
    },
    //末行
    current:function(){
      return this.currentPage*4
    },
    //数据条数
    stu_length:function(){
      return this.stu.length
    },
    //页数
    page:function(){
      return Math.ceil(this.stu.length/4)
    },
  },
  methods:{
    //清空
    clear(){
        this.age_value=''
        this.name_value=''
        this.qq_value=''
    },
    //开启弹窗
    showPopup() {
      this.show = true;
    },
    showPopup_change(){
      this.show_change = true;
    },
    //切换页
    currentcount(){
      this.currentline=this.currentline+4
      this.current=this.current+4
      this.$options.methods.query.bind(this)()  
    },
    //查询
    query(){
       Api.get('getdata',{name:this.name_query}, response => {
     if (response.status >= 200 && response.status < 300) {
        // console.log(response);
        this.stu = response.data.data
        // 请求成功，response为成功信息参数
     } else {
        // console.log(response.message);
        // 请求失败，response为失败信息
     }
      });
    },
    //添加
    add(){
       Api.get('add',{age:this.age_value,name:this.name_value,qq:this.qq_value}, response => {
     if (response.status >= 200 && response.status < 300) {
        // console.log(response);
        // this.stu = response.data.data
        // 请求成功，response为成功信息参数
        this.$options.methods.clear.bind(this)()
        this.$options.methods.query.bind(this)()       
     } else {
        // console.log(response.message);
        // 请求失败，response为失败信息
        this.$options.methods.query.bind(this)()  
     }
      });
    },
    //删除
    del(del_id){
      Api.get('del',{del:del_id}, response => {
     if (response.status >= 200 && response.status < 300) {
        // console.log(response);
        // this.stu = response.data.data
        // 请求成功，response为成功信息参数
        this.$options.methods.query.bind(this)()  
     } else {
        // console.log(response.message);
        // 请求失败，response为失败信息
        this.$options.methods.query.bind(this)()  
     }
      });
    },
    change(change_id){
      Api.get('change',{change:change_id,age:this.age_value,name:this.name_value,qq:this.qq_value}, response => {
     if (response.status >= 200 && response.status < 300) {
        // console.log(response);
        // this.stu = response.data.data
        // 请求成功，response为成功信息参数
        this.$options.methods.query.bind(this)()  
     } else {
        // console.log(response.message);
        // 请求失败，response为失败信息
        this.$options.methods.query.bind(this)()  
     }
      });
    },
  },
  //页面打开
  created(){
    //查询全部
        this.$options.methods.query.bind(this)()  
  }
}

</script>
<style lang="less">

.user{
  width: 70%;
  margin: 0 auto;
  .van-col{
    border:solid 1px;
    border-color: powderblue;
    line-height:2.5 ;
  }
  .van-button{
    float: right;
    margin-top: 5px;
    padding: 0;
  }
  .show_btn{
    margin: 10px;
  }
  .van-overlay{
    background-color:rgba(0,0,0,.1);
  }
}
</style>