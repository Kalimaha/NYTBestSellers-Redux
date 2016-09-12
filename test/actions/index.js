import expect from 'expect'
import sinon from 'sinon'
import $ from 'jquery'
import { fetch_genres } from '../../src/js/actions/index'

sinon.xhr.supportsCORS = true
sinon.useFakeXMLHttpRequest()


describe('NYT Best Sellers actions', () => {
    let dispatched, dispatcher

    beforeEach(done => {
      global.$ = $
      global.jQuery = $
      global.server = sinon.fakeServer.create({ respondImmediately: true })
      dispatched = []
      dispatcher = (action) => { console.log(action); dispatched.push(action) }
      global.server.respondWith(
        'GET',
        'http://api.nytimes.com/svc/books/v3/lists/names.json?api-key=sample-key',
        [200, { 'Content-Type': 'application/json' }, '{"hallo": "World"}']
      )
      fetch_genres()(dispatcher).then(done, err => done(err))
    })

    it('dispatches action FETCH_GENRES_SUCCESS with customer payload', () => {
      expect(dispatched[1]).to.eql({ type: 'FETCH_GENRES_SUCCESS', customer })
    })
  }
)
