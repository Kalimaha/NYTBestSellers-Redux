import { combineReducers } from 'redux'
import { REQUEST_GENRES, RECEIVE_GENRES } from '../actions'

const rootReducer = (previousState = { isFetching: false, genres: [] }, action) => {
  switch (action.type) {
    case REQUEST_GENRES:
      return Object.assign({}, previousState, { isFetching: true })
    case RECEIVE_GENRES:
      return Object.assign({}, previousState, { isFetching: false, genres: action.genres })
    default: return previousState
  }
}

export default rootReducer
