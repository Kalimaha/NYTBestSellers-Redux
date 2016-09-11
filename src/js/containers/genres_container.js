import { connect } from 'react-redux'
import { fetch_genres } from '../actions/index'
import GenresSelector from '../components/genres_selector'

function mapStateToProps(state) {
  return {
    genres: state.genres,
    isFetching: state.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetch_genres: () => { dispatch(fetch_genres()) }
  }
}

const ConnectedGenresSelector = connect(mapStateToProps, mapDispatchToProps)(GenresSelector)

export default ConnectedGenresSelector
