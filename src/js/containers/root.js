import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configure_store'
import AsyncApp from './async_app'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    )
  }
}
