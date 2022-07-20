import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import Api from '../src/api/index';

import Vant from 'vant';
import VueParticles from 'vue-particles'//粒子背景
 
import 'vant/lib/index.css';
  
Vue.use(Vant);
Vue.use(VueParticles)

Vue.prototype.$axios = axios
Vue.prototype.$Api = Api
axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.config.productionTip = false

// window.vuethis = this

Vue.prototype.setSessionItem = function (key, newVal) {
  // 创建 StorageEvent 事件
  let newStorageEvent = document.createEvent("StorageEvent");
  const storage = {
    setItem: function (k, val) {
      sessionStorage.setItem(k, val);

      // 初始化 StorageEvent 事件
      newStorageEvent.initStorageEvent(
        "setItem", // 事件别名
        false,
        false,
        k,
        null,
        val,
        null,
        null
      );

      // 派发事件
      window.dispatchEvent(newStorageEvent);
    },
  };
  return storage.setItem(key, newVal);
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


