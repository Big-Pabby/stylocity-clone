import Vue from 'vue';
import Vuex from 'vuex';
import ShopItems from './Module/ShopItems'
import LogUsers from './Module/LogUsers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ShopItems,
    LogUsers
  }
})
