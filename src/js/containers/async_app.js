import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetch_genres } from '../actions/index'
import Picker from '../components/Picker'

class AsyncApp extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetch_genres())
  }

  render() {
    const { genres, isFetching } = this.props

    return (
      <div className="row">
        <div className="col-lg-4">&nbsp;</div>
        <div className="col-lg-4">
          <Picker options={ genres.map(genre => genre.display_name) } />
          <hr></hr>
          { isFetching && genres.length === 0 && <h4>Loading...</h4> }
          { !isFetching && genres.length === 0 && <h4>Empty.</h4> }
          { genres.length > 0 && <h4>Genres loaded</h4> }
        </div>
        <div className="col-lg-4">&nbsp;</div>
      </div>
    )
  }
}

AsyncApp.propTypes = {
  genres: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    genres: state.genres,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps)(AsyncApp)
