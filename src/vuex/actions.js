import Api from '../api'
import * as types from './mutation-types'

export const setTitle = ({ dispatch }, newTitle) => {
  dispatch(types.SET_HEADER_TITLE, newTitle)
}

export const getTopics = ({ dispatch }, params) => {
  Api.getTopics(params).then(response => {
    console.log(response.data)
    dispatch(types.GET_TOPICS_SUCCESS, response.data)
  }, err => {
    console.log(err)
    dispatch(types.GET_TOPICS_FAIL, err)
  })
}
