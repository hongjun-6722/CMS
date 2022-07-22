<template>
  <div class="user">
    <div class="top-bar">

      <!-- 查询用户 -->
      <van-search class="search-user" v-model='name_query' show-action placeholder="查询名字" @search="query()">
        <template #action>
          <van-button @click="query()" type="primary" size="small">搜索</van-button>
        </template>
      </van-search>

      <!-- 添加用户 -->
        <van-button class="add-user" @click="showPopup" type="primary" size="small">添加用户
          <van-popup v-model="show">
            <van-field  v-model="name_value"  placeholder="请输入名字" />  
            <van-field  v-model="age_value"  placeholder="请输入年龄" />
            <van-field  v-model="qq_value"  placeholder="请输入QQ" />
            <van-button class="show_btn" type="primary" @click.stop="clear(),show=!show" >取消</van-button>
            <van-button class="show_btn" type="primary" @click.stop="add(),query(),show=!show" >添加</van-button>            
          </van-popup>
        </van-button>

    </div>

    <!-- 表格 -->
    <div class="user-form" v-if="orientation == 90 || orientation == -90">
      <van-row>
        <van-col span="2">编号</van-col>
        <van-col span="5">姓名</van-col>
        <van-col span="2">年龄</van-col>
        <van-col span="9">QQ</van-col>
        <van-col span="6">功能</van-col>
      </van-row>
      <van-row type="flex" v-for="(user,index) in stu.slice(currentline,current)" v-bind:key="user.id">
        <van-col span="2">{{currentline+index+1}}</van-col>
        <van-col span="5">{{user.name}}</van-col>
        <van-col span="2">{{user.age}}</van-col>
        <van-col span="9">{{user.qq}}</van-col>
        <van-col span="6" class="function-button">
          <van-button type="primary" @click.self="showPopup_change(),change_id=user.id" size='normal' round>修改
            <van-popup v-model="show_change">
              <van-field  v-model="name_value"  placeholder="名字" />  
              <van-field  v-model="age_value"  placeholder="年龄" />
              <van-field  v-model="qq_value"  placeholder="QQ" />
              <van-button class="show_btn" type="primary" @click.stop="clear(),show_change=!show_change" >取消</van-button>
              <van-button class="show_btn" type="primary" @click.stop="change(change_id),query(),show_change=!show_change" >修改</van-button>            
            </van-popup>
          </van-button>
          <van-button type="danger" @click="del(user.id)" size='normal' round>删除</van-button>
        </van-col>
      </van-row>
      <van-pagination v-model="currentPage" :page-count="page" mode="simple" v-on:click="currentcount"/>
    </div>

    <div class="user-form" v-if="orientation == 0 || orientation == 180">
      <van-row>
        <van-col span="3">编号</van-col>
        <van-col span="6">姓名</van-col>
        <van-col span="3">年龄</van-col>
        <van-col span="12">功能</van-col>
      </van-row>
      <van-row type="flex" v-for="(user,index) in stu.slice(currentline,current)" v-bind:key="user.id">
        <van-col span="3">{{currentline+index+1}}</van-col>
        <van-col span="6">{{user.name}}</van-col>
        <van-col span="3">{{user.age}}</van-col>
        <van-col span="12" class="function-button">
          <van-button type="primary" @click.self="showPopup_change(),change_id=user.id" size='normal' round> 修改
            <van-popup v-model="show_change">
              <van-field  v-model="name_value"  placeholder="名字" />  
              <van-field  v-model="age_value"  placeholder="年龄" />
              <van-field  v-model="qq_value"  placeholder="QQ" />
              <van-button class="show_btn" type="primary" @click.stop="clear(),show_change=!show_change" >取消</van-button>
              <van-button class="show_btn" type="primary" @click.stop="change(change_id),query(),show_change=!show_change" >修改</van-button>            
            </van-popup>
          </van-button>
          <van-button type="danger" @click="del(user.id)" size='normal' round>删除</van-button>
        </van-col>
      </van-row>
      <van-pagination v-model="currentPage" :page-count="page" mode="simple" v-on:click="currentcount"/>
    </div>

  </div>
</template>

<script>

export default {

  name: 'userControl',
  components: {
  },
  data () {
	  return {
      name_query:'',//查询
      age_value: '',//年龄
      name_value:'',//名字
      qq_value:'',//QQ
      show: false,//添加用户的弹窗
      show_change: false,//添加用户的弹窗
      currentPage: 1,//当前页码
      line_num:4,//行数
      user:{name:'',age:'',id:''},//表单结构
      stu:[],//查询结果
      change_id:'',//改变行
      orientation:'',//屏幕旋转
      userHeight:'',//表格高度
	  }
  },
  computed: {
    //起始行
    currentline: function () {
      return (this.currentPage-1)*this.line_num
    },
    //末行
    current:function(){
      return this.currentPage*this.line_num
    },
    //数据条数
    stu_length:function(){
      return this.stu.length
    },
    //页数
    page:function(){
      return Math.ceil(this.stu.length/this.line_num)
    },

  },
  watch:{
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
       this.$Api.get('getdata',{name:this.name_query}, response => {
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
       this.$Api.get('add',{age:this.age_value,name:this.name_value,qq:this.qq_value}, response => {
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
      this.$Api.get('del',{del:del_id}, response => {
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
      this.$Api.get('change',{change:change_id,age:this.age_value,name:this.name_value,qq:this.qq_value}, response => {
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
    //设备旋转
    updateOrientation(){
      setTimeout(()=>{
        this.orientation = window.orientation
        this.line_num = Math.floor((window.innerHeight - 120) / 55)
      },50)
    }
  },
  //页面打开
  created(){
    },
  mounted(){
    this.$options.methods.query.bind(this)()
    window.addEventListener("orientationchange",this.updateOrientation);
    this.updateOrientation()
  },
  destroyed(){
    window.removeEventListener("orientationchange",this.updateOrientation);
  }

}
</script>
<style lang="less">

.user{
  width: 100%;
  padding: 0 2%;
  text-align: center;
  .top-bar{
    display: flex;
    align-items: center;
    .search-user{
      flex: 1 1 auto;
    }
    .van-search--show-action{
      padding-left: 0;
      padding-right: 0;
    }
    .add-user{
      flex: 0 0 80px;
    }
  }

  .user-form{
    .function-button{
    }
    .van-col{
      border:solid 1px;
      border-color: powderblue;
      line-height:2.5 ;
      line-height: 49px;
    }
    .function-button{
      display: flex;
      align-items: center;
      justify-content: space-around
    }
  }

  .show_btn{
    margin: 10px;
  }
  .van-overlay{
    background-color:rgba(0,0,0,.1);
  }
}
</style>