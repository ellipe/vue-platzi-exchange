import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import { VueSpinners } from '@saeris/vue-spinners'

import { dollarFilter, percentageFilter } from '@/filters'

Vue.use(Chartkick.use(Chart))
Vue.use(VueSpinners)

Vue.filter('dollar', dollarFilter)
Vue.filter('percentage', percentageFilter)
Vue.config.productionTip = false

import router from '@/router'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
