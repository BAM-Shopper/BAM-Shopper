import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_PRODUCT = 'GET_PRODUCT'
const SELECT_PRODUCT = 'SELECT_PRODUCT'

/**
 * INITIAL STATE
 */
const initialState = {
    products: [],
    selectedProduct: {}
}

/**
 * ACTION CREATORS
 */
const getProduct = product => ({ type: GET_PRODUCT, product})
const selectProduct = product => ({ type: SELECT_PRODUCT, product })

/**
 * THUNK CREATORS
 */


export const selectedProduct = () => async dispatch => {
    try {
        const { data } = await axios.get('/api/products/:id')
        dispatch(selectedProduct(data))
    } catch (err) {
        console.error(err)
    }
}

export const getProduct = () => async dispatch => {
    try {
        const { data } = await axios.get('/api/products/:id')
        dispatch(selectedProduct(data))
    } catch (err) {
        console.error(err)
    }
}

/**
 * REDUCER
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case SELECT_PRODUCT:
            return Object.assign({}, state, {
                selectedProduct: action.product
            })
        default:
            return state
    }
}
