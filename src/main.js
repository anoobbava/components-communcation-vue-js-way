import Vue from 'vue'
import App from './App.vue'
import Father from './Father.vue'
Vue.component('father-component', Father)
new Vue({
  el: '#app',
  render: h => h(App)
})
