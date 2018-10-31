import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProductList from './ProductList'
import Home from './Home'
import SideBar from './SideBar'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)
const initialState = {
  campuses: []
}

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Home component', () => {
  let wrapper
  let fakeStore

  beforeEach(() => {
    fakeStore = mockStore(initialState)

    wrapper = shallow(<Home store={fakeStore} />)
  })

  it('renders ProductList and SideBar components', () => {
    expect(wrapper.dive(ProductList)).to.have.lengthOf(1)
    expect(wrapper.dive(SideBar)).to.have.lengthOf(1)
  })
})
