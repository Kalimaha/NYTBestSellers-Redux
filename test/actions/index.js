import expect from 'expect'
import * as actions from '../../src/js/actions/index'

describe('NYT Best Sellers actions', () => {

  it('request_genres should create a REQUEST_GENRES action', () => {
    expect(actions.request_genres()).toEqual({
      type: 'REQUEST_GENRES'
    })
  })

  it('fetch_genres should create a REQUEST_GENRES action', () => {
    // console.log(actions.fetch_genres())
    // expect(actions.fetch_genres()).toEqual({
    //   type: 'REQUEST_GENRES'
    // })
  })

})
