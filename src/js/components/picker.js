import React, { Component, PropTypes } from 'react'

export default class Picker extends Component {
  render() {
    const { options } = this.props

    return (
      <span>
        <h1>
          NYT Best Sellers Genres List
        </h1>
        <hr></hr>
        <select className="form-control">
          {options.map(option =>
            <option value={option} key={option}>
              {option}
            </option>)
          }
        </select>
      </span>
    )
  }
}

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired
}
