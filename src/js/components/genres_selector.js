import React, { Component, PropTypes } from 'react'

export default class GenresSelector extends Component {

  componentDidMount() {
    this.props.fetch_genres()
  }

  render() {
    const genres = this.props.genres.map(genre => genre.display_name)
    genres.unshift('Please select...')

    return (
      <span>
        <h1>
          NYT Best Sellers Genres List
        </h1>
        <hr></hr>
        <select className="form-control">
          {
            genres.map(genre => <option value={genre} key={genre}>{genre}</option>)
          }
        </select>
      </span>
    )
  }
}
