// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/index.css'
import './assets/js/flexible.js'
import axios from 'axios'
import { Carousel } from 'ant-design-vue'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(Carousel)
Vue.prototype.bus=new Vue()

//mint-ui
import Mint from 'mint-ui';
Vue.use(Mint);
// import { Cell, Checklist } from 'mint-ui';
// Vue.component(Cell.name, Cell);
// Vue.component(Checklist.name, Checklist);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
