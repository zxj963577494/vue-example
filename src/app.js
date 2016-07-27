import Vue from 'vue'
import VueRouter from 'vue-router'
import VueValidator from 'vue-validator'
import FastClick from 'fastclick'
import main from './main'
import routerMap from './router'

// FastClick
FastClick.attach(document.body)

// VueValidator
Vue.use(VueValidator)

// Router
Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  suppressTransitionError: true
})

routerMap(router)
router.start(main, '#app')

