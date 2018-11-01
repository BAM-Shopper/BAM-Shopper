import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import navbar from './navbar'
import {Link} from 'react-router-dom'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Navbar', () => {
  let wrapper
  let fakeStore

  beforeEach(() => {
    // fakeStore = mockStore(initialState)

    wrapper = shallow(<navbar isLoggedIn={false} />)
  })

  it('renders SearchBar and Link components', () => {
    // console.log('SEARCH BAR', wrapper.find(SearchBar).dive())
    // expect(wrapper.find(Link)).dive().to.have.lengthOf(1)
  })
})
