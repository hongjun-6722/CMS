<template>
  <div id="sidebar">
    <van-sidebar v-model="activeKey">
      <router-link to="/userControl">
        <van-sidebar-item title="用户管理"> </van-sidebar-item>
      </router-link>
      <router-link to="/powerControl">
        <van-sidebar-item title="权限管理"></van-sidebar-item>
      </router-link>
      <router-link to="/goodsControl">
        <van-sidebar-item title="商品管理"></van-sidebar-item>
      </router-link>
    </van-sidebar>
  </div>
</template>

<script>
export default {
  name: "Sideber",
  components: {},
  data() {
    return {
      activeKey: 0, //当前视图
    };
  },
};
</script>

<style lang="less">
  #sidebar {
    width: 100%;
    .van-sidebar{
      width: 100% !important;
    }
  }
</style>