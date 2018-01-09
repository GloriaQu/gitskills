import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count:4
}
// mutation同步改变state状态
const mutations = {
  add(state,n) {
    state.count+=n;
  },
  reduce(state){
    state.count--;
  }
}
// 过滤器
const getters = {
  count:function (state) {
    return state.count+=20
  }
}
// actions是异步的改变state状态
const actions = {
  addAction(context) {
    context.commit('add',10)
  },
  reduceAction (commit) {
    commit('reduce')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})