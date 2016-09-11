import React, { Component, PropTypes } from 'react'

export default class GenresSelector extends Component {

  // static propTypes = {
  //   options: PropTypes.arrayOf(
  //     PropTypes.string.isRequired
  //   ).isRequired
  // }

  componentDidMount() {
    this.props.fetch_genres()
  }

  render() {
    const { genres } = this.props.genres

    return (
      <span>
        <h1>
          NYT Best Sellers Genres List
        </h1>
        <hr></hr>
        <select className="form-control">
          {
            this.props.genres.map(genre => <option value={genre} key={genre}>{genre}</option>)
          }
        </select>
      </span>
    )
  }
}
