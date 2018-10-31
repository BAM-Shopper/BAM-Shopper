/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {fetchCategories} from './categories'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('Category thunk creators', () => {
  let store
  let mockAxios

  const initialState = {categories: []}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetchCategories', () => {
    it('eventually dispatches the GET CATEGORIES action', async () => {
      const fakeCategories = [{name: 'DVD'}, {name: 'VHS'}]
      mockAxios.onGet('/api/categories').replyOnce(200, fakeCategories)
      await store.dispatch(fetchCategories())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_CATEGORIES')
      expect(actions[0].payload).to.be.deep.equal(fakeCategories)
    })
  })
})
