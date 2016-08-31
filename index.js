import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './src/main/js/components/counter'
import counter from './src/main/js/reducers/index'


const store = createStore(counter)
const placeholder = document.getElementById('placeholder')

function render() {
  ReactDOM.render(
    <Counter
      currentValue = { store.getState() }
      onIncrement = { () => store.dispatch({ type: 'INCREASE' }) }
      onDecrement = { () => store.dispatch({ type: 'DECREASE' }) }
    />,
    placeholder
  )
}

render()
store.subscribe(render)
