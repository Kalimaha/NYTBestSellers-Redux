import fetch from 'isomorphic-fetch'
import { getGenres } from '../repositories/genres'

export const FETCH_GENRES_REQUEST = 'FETCH_GENRES_REQUEST'
export const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS'
export const FETCH_GENRES_FAILURE = 'FETCH_GENRES_FAILURE'

export const fetch_genres = () => dispatch => {
  dispatch({ type: FETCH_GENRES_REQUEST })

  return getGenres().then(
    response => {
      dispatch({ type: FETCH_GENRES_SUCCESS, response })
    },

    () => {
      const errors = 'Something went wrong dude.'
      dispatch({ type: FETCH_GENRES_FAILURE, errors })
    }
  )
}
