import axios from 'axios'
// import history from '../history'

/**
 * ACTION TYPES
 */
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

/**
 * INITIAL STATE
 */
const defaultProducts = []

/**
 * ACTION CREATORS
 */
const getProducts = products => ({ type: GET_PRODUCTS, payload: products })
const addProduct = product => ({ type: ADD_PRODUCT, product })
const update = product => ({ type: UPDATE_PRODUCT, product })

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

export const createProduct = product => async dispatch => {
  try {
    console.log('got it', await product)
    const { data } = await axios.post('/api/products', product)
    dispatch(addProduct(data))
  } catch (err) {
    console.error(err)
  }
}

export const updateProduct = (product, id) => async dispatch => {
  try {
    console.log(product, id)
    const { data } = await axios.put(`/api/products/${id}`, product)
    console.log(data, product, id)
    dispatch(update(data))
  } catch (err) {
    console.err(err)
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
    case UPDATE_PRODUCT:
      return state.map(product => (
        action.product.id === product.id ? action.product : product
      ))
    default:
      return state
  }
}
