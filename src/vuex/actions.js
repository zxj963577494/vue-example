import { SET_HEADER_TIRLE } from './mutation-typers'

export const setTitle = makeAction(SET_HEADER_TIRLE)

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)_
}

