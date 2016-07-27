'use strict'

import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const baseUrl = 'http://cnodejs.org/api/v1/'

export default {
  getTopics: (params) => {
    return Vue.resource(baseUrl + 'topics').get(params)
  }
}
