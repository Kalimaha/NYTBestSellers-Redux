import fetch from 'isomorphic-fetch'

export const RECEIVE_GENRES = 'RECEIVE_GENRES'
export const REQUEST_GENRES = 'REQUEST_GENRES'

export const request_genres = () => {
  return {
    type: REQUEST_GENRES
  }
}

export const fetch_genres = () => {
  return dispatch => {
    dispatch(request_genres)
    return fetch('http://api.nytimes.com/svc/books/v3/lists/names.json?api-key=sample-key').then(response => response.json()).then(json => dispatch(receive_genres(json)))
  }
}

function receive_genres(json) {
  console.log(json)
  return {
    type: RECEIVE_GENRES,
    genres: json.data.children.map(child => child.data)
  }
}
