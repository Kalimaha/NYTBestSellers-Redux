import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/index'

const configureStore = preloadedState => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware
    )
  )
}

export default configureStore
