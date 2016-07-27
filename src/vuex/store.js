import Vue from 'vue'
import Vuex from 'vuex'
import headers from './modules/headers'
import topics from './modules/topics'
import createLogger from 'vuex/logger'

Vue.use(Vuex)

Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    headers,
    topics
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})
