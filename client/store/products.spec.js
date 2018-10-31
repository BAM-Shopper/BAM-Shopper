/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {fetchProducts} from './products'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('Product thunk creators', () => {
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

  describe('fetchProducts', () => {
    it('eventually dispatches the GET PRODUCTS action', async () => {
      const fakeProducts = [
        {
          title: 'Die Hard',
          description: 'Bruce Willis was wild in this one!',
          price: 50.0
        },
        {
          title: 'Halloweentown',
          description: 'Big ole pumpkin',
          price: 9.99
        },
        {
          title: 'Lilo and Stitch',
          description: 'Loveable alien on the beach',
          price: 10.0
        }
      ]
      mockAxios.onGet('/api/products').replyOnce(200, fakeProducts)
      await store.dispatch(fetchProducts())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_PRODUCTS')
      expect(actions[0].payload).to.be.deep.equal(fakeProducts)
    })
  })
})
