import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { routes } from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
import SocketIO from "socket.io-client"
// import axios from 'axios'

// axios.defaults.baseURL = "http://localhost:3000";
Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('http://localhost:3000')
  // connection: SocketIO('https://crossingpathsserver.herokuapp.com'),


}))


Vue.use(VueResource);
Vue.http.options.root = "http://localhost:3000";
// Vue.http.options.root = "https://crossingpathsserver.herokuapp.com";
Vue.http.options.credentials = true;

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
