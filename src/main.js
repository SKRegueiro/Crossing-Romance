import Vue from 'vue'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue'

Vue.use(VueResource);
Vue.http.options.root = "http://localhost:3000/"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
