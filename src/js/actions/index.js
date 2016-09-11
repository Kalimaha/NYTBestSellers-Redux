import fetch from 'isomorphic-fetch'
import { getGenres } from '../repositories/genres'

export const RECEIVE_GENRES = 'RECEIVE_GENRES'
export const REQUEST_GENRES = 'REQUEST_GENRES'
export const NYT_URL = 'http://api.nytimes.com/svc/books/v3/lists/names.json?api-key=sample-key'

export const request_genres = () => {
  return {
    type: REQUEST_GENRES
  }
}

export const fetch_genres = () => dispatch => {
  dispatch({ type: 'FETCH_GENRES_REQUEST' })

  return getGenres().then(

    response => {
      dispatch({ type: 'FETCH_GENRES_SUCCESS', response })
    },

    () => {
      const errors = 'Something went wrong dude.'
      dispatch({ type: 'FETCH_GENRES_FAILURE', errors })
    }
  )
}

export const receive_genres = json => {
  return {
    type: RECEIVE_GENRES,
    genres: json.results
  }
}
