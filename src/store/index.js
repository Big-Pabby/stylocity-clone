import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import ShopItems from './Module/ShopItems'
import LogUsers from './Module/LogUsers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },

  
  mutations: {
    initialiseStore(state) {
      if(localStorage.getItem('store')) {
          this.replaceState(
              Object.assign(state, JSON.parse(localStorage.getItem('store')))
          )
      }
  }
  },
  actions: {
  },
  modules: {
    ShopItems,
    LogUsers
  }
})
