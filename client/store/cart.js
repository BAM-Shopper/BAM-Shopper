import axios from 'axios'
// import history from '../history'

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART'
const ADD_CART_ITEM = 'ADD_CART_ITEM'

/**
 * INITIAL STATE
 */
const defaultCart = {}

/**
 * ACTION CREATORS
 */
const getCart = cart => ({
  type: GET_CART,
  payload: cart
})

const addToCart = item => ({
  type: ADD_CART_ITEM,
  payload: item
})

/**
 * THUNK CREATORS
 */
export const fetchCart = () => async dispatch => {
  try {
    //find for create cart
    const res = await axios.get(`/api/cart/`)
    console.log('===DB RESPONSE 1===', res.data)
    //get the products in that cart
    const res2 = await axios.get(`/api/cart/${res.data.id}`)
    console.log('===DB RESPONSE 2===', res2.data)
    dispatch(getCart(res2.data || defaultCart))
  } catch (err) {
    console.error(err)
  }
}

export const postCartItem = item => async dispatch => {
  try {
    const res = await axios.post(`/api/carts/${item.cartId}`, item)
    dispatch(addToCart(res.data || defaultCart))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultCart, action) {
  switch (action.type) {
    case GET_CART:
      return action.payload
    case ADD_CART_ITEM:
      return {
        ...state,
        ['cart items']: [...state['cart items'], action.payload]
      }
    default:
      return state
  }
}
