import Vue from 'vue'
// import vueResource from 'vue-resource'
import vueRouter from 'vue-router'
import App from './App'
import routes from './routes'

// Vue.use(vueResource)
Vue.use(vueRouter)


const router = new vueRouter({
  routes: routes
}); 

new Vue ({
  el: '#app',
  render: h => h(App),
  router: router
})



