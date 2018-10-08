import Vue from 'vue'
import App from './App.vue'
import Child from './Child.vue'
Vue.component('child-component', Child)
new Vue({
  el: '#app',
  render: h => h(App)
})
