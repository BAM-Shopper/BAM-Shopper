import { expect } from 'chai'
import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import { AdminDashboard } from "../AdminDashboard"
import ProductList from '../ProductList'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)
const initialState = {}

const adapter = new Adapter()
enzyme.configure({ adapter })

describe('<AdminDashboard /> component', () => {
    let adminDashboard
    let productList
    let fakeStore

    beforeEach(() => {
        adminDashboard = shallow(<AdminDashboard />)
        productList = shallow(<ProductList />)
    })

    it('renders H3\'s for Products, Users, and Orders', () => {
        expect(adminDashboard.find('h3').length).to.be.equal(3)
    })

})
