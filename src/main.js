import Vue from 'vue'
import App from './App.vue'
import './assets/style.css'

import vSelect from 'vue-select'

Vue.component('v-select', vSelect)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')