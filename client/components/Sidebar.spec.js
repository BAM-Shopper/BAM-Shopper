import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SideBar from './SideBar'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('SideBar component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SideBar categories={['all', 'horror', 'comedy']} />)
  })

  it('renders a button for each category', () => {
    expect(wrapper.find('button')).to.have.lengthOf(3)
  })
})
