import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProductList from '../ProductList'
import ProductItem from '../ProductItem'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('ProductList component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<ProductList products={[
      {title: 'Die Hard', price: 50.00, imageUrl: 'https://bit.ly/2F0KlOW'},
      {title: 'Halloweentown', price: 9.99, imageUrl: 'https://bit.ly/2yGk56S'},
      {title: 'Lilo and Stitch', price: 10.00, imageUrl: 'https://bit.ly/2Rqmidr'}
    ]} /> )
  })

  it('renders a thumbnail of each product', () => {
    expect(wrapper.find(ProductItem)).to.have.lengthOf(3)
  })

  it('renders "No Products" if passed an empty array of products', () => {
    wrapper = shallow(
      <ProductList products={[]} />
    )
    expect(wrapper.text()).to.equal("No Products")
  })
})
