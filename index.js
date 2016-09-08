import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './src/js/containers/root'

render(
  <Root />,
  document.getElementById('placeholder')
)
