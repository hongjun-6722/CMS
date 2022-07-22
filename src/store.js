import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    winHeight: 0
  },
  mutations: {
    change_winHeight(state,winHeight) {
      state.winHeight = winHeight
      console.log(winHeight)
    }
  },
  actions: {

  }
})
