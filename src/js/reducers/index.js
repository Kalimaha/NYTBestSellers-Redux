import { combineReducers } from 'redux'
import { FETCH_GENRES_REQUEST, FETCH_GENRES_SUCCESS, FETCH_GENRES_FAILURE } from '../actions'

const rootReducer = (previousState = { isFetching: false, genres: [] }, action) => {
  switch (action.type) {
    case FETCH_GENRES_REQUEST:
      return Object.assign({}, previousState, { isFetching: true })
    case FETCH_GENRES_SUCCESS:
      return Object.assign({}, previousState, { isFetching: false, genres: action.response.results })
    case FETCH_GENRES_FAILURE:
      return Object.assign({}, previousState, { isFetching: false, error: action.errors })
    default: return previousState
  }
}

export default rootReducer
