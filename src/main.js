import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

store.subscribe((mutation, state) => {
  console.log(state)
  localStorage.setItem('store', JSON.stringify(state))
})

new Vue({
  router,
  store,
  vuetify,
  beforeCreate(){
    this.$store.commit('initialiseStore')
  },
  render: h => h(App)
}).$mount('#app')
