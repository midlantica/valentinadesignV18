// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueLazyLoad from 'vue-lazyload'
import VueTouch from 'vue-touch'
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css'

import Meta from 'vue-meta'
Vue.use(Meta)

Vue.use(VueRouter)
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

Vue.use(VueLazyLoad)
Vue.use(VueTouch, { name: 'v-touch' })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // template: '<App/>',
  render: h => h(App),
  router: router
})
