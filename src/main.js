// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

// ROUTING
import Routes from './routes'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: Routes
})

Vue.config.productionTip = false

// main.scss imported in build/utils.scss like so:
// scss: generateLoaders('sass').concat(
//       {
//         loader: 'sass-resources-loader',
//         options: {
//           resources: path.resolve(__dirname, '../src/assets/css/main.scss')
//         }
//       }
//     ),
// import './assets/css/main.scss'
// import './src/assets/css/main.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router: router
})
