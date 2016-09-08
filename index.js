import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './src/js/store/configure_store'
import AsyncApp from './src/js/containers/async_app'

const store = configureStore()

render(
  <Provider store={store}>
    <AsyncApp />
  </Provider>,
  document.getElementById('placeholder')
)
