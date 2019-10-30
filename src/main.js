import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false
axios.defaults.withCredentials = true

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
