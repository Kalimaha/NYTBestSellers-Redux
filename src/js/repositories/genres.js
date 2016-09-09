import { ajax } from '../utils/client'

export const getGenres = () => ajax({
  method: 'GET',
  url: 'http://api.nytimes.com/svc/books/v3/lists/names.json?api-key=sample-key',
  contentType: 'application/json',
  dataType: 'json'
})
