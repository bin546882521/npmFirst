import Vue from 'vue'
import App from './App.vue'
import UniSoftUI from 'f2021'
Vue.use(UniSoftUI)
const NODE_ENV = process.env.VUE_APP_FLAG
console.log(NODE_ENV)
new Vue({
  el: '#app',
  render: h => h(App)
})
