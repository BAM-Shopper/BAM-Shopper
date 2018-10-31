import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const SELECT_PRODUCT = 'SELECT_PRODUCT'

/**
 * INITIAL STATE
 */
const initialState = {
    product: {}
}

/**
 * ACTION CREATORS
 */
const selectProduct = product => ({ type: SELECT_PRODUCT, product })

/**
 * THUNK CREATORS
 */

export const selectedProduct = () => async dispatch => {
    try {
        const { data } = await axios.get('/api/products/:id')
        dispatch(selectProduct(data))
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
                product: action.product
            })
        default:
            return state
    }
}
