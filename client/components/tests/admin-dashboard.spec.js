/* import { expect } from 'chai'
import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import AdminDashboard from "../AdminDashboard";

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)
const initialState = {}

const adapter = new Adapter()
enzyme.configure({ adapter })

describe('Home component', () => {
    let wrapper
    let fakeStore

    beforeEach(() => {
        fakeStore = mockStore(initialState)
        wrapper = shallow(<AdminDashboard />)
      })

    it('renders H3\'s for Products, Users, and Orders', () => {
        expect(wrapper.)
    })
})
 */