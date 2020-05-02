import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router.js'

// Import the styles directly
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  store, //add vuex to the constructor
  render: h => h(App)
}).$mount('#app')
