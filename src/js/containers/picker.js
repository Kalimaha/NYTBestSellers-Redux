import { connect } from 'react-redux'
import { fetch_genres } from '../actions/index'
import Picker from '../components/picker'

class PickerContainer extends Component {

function mapStateToProps(state) {
  return {
    genres: state.genres,
    isFetching: state.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchGenres: () => { dispatch(fetchGenres()) }
  }
}

const ConnectedPicker = connect(mapStateToProps, mapDispatchToProps)(Picker)

export default ConnectedApp
