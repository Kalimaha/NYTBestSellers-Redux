import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './src/js/store/configure_store'
import GenresContainer from './src/js/containers/genres_container'

const store = configureStore()

render(
  <Provider store={store}>
    <GenresContainer />
  </Provider>,
  document.getElementById('placeholder')
)
