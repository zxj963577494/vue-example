import {
  GET_TOPICS_SUCCESS,
  GET_TOPICS_FAIL
} from '../mutation-types'

const state = {
  topics: ''
}

const mutations = {
  [GET_TOPICS_SUCCESS] (state, data) {
    state.topics = data
  },
  [GET_TOPICS_FAIL] (state, err) {
    console.log(err)
  }
}

export default {
  state,
  mutations
}
