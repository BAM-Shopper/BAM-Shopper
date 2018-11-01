import axios from 'axios'
// import history from '../history'

/**
 * ACTION TYPES
 */
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'

/**
 * INITIAL STATE
 */
const defaultProducts = []

/**
 * ACTION CREATORS
 */
const getProducts = products => ({ type: GET_PRODUCTS, payload: products })
const addProduct = product => ({ type: ADD_PRODUCT, product })

/**
 * THUNK CREATORS
 */
export const fetchProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/products')
    dispatch(getProducts(res.data || defaultProducts))
  } catch (err) {
    console.error(err)
  }
}

export const createProduct = () => async dispatch => {
  try {
    const { data } = await axios.post('/api/products')
    dispatch(addProduct(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function (state = defaultProducts, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.payload
    case ADD_PRODUCT:
      return [...state, action.product]
    default:
      return state
  }
}
