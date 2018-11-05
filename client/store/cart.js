import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART'
const ADD_CART_ITEM = 'ADD_CART_ITEM'
const EDIT_CART_ITEM = 'EDIT_CART_ITEM'
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'

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

const addCartItem = item => ({
  type: ADD_CART_ITEM,
  payload: item
})

const editCartItem = item => ({
  type: EDIT_CART_ITEM,
  payload: item
})

const removeCartItem = itemId => ({
  type: REMOVE_CART_ITEM,
  payload: itemId
})

/**
 * THUNK CREATORS
 */
export const fetchCart = () => async dispatch => {
  try {
    //find existing cart or create one
    const res = await axios.get(`/api/cart/`)
    //get the products in that cart
    const res2 = await axios.get(`/api/cart/${res.data.id}`)
    dispatch(getCart(res2.data || defaultCart))
  } catch (err) {
    console.error(err)
  }
}

export const postCartItem = (product, cartId, quantity) => async dispatch => {
  try {
    const res = await axios.post(`/api/cart/${cartId}`, {
      productId: product.id,
      quantity
    })
    dispatch(addCartItem(res.data))
    history.push('/')
  } catch (err) {
    console.error(err)
  }
}

export const putCartItem = (item, cartId) => async dispatch => {
  try {
    const res = await axios.put(`/api/cart/${cartId}/item/${item.id}`, {
      ...item
    })
    console.log('===', res.data)
    dispatch(editCartItem(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const deleteCartItem = (itemId, cartId) => async dispatch => {
  try {
    const res = await axios.delete(`/api/cart/${cartId}/item/${itemId}`)
    dispatch(removeCartItem(res.data))
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
        ['cart items']:
          state['cart items'].find(item => item.id === action.payload.id) === -1
            ? [...state['cart items'], action.payload]
            : state['cart items'].map(
                item => (item.id === action.payload.id ? action.payload : item)
              )
      }
    case EDIT_CART_ITEM:
      console.log({
        ...state,
        ['cart items']: state['cart items'].map(
          item => (item.id === action.payload.id ? action.payload : item)
        )
      })
      return {
        ...state,
        ['cart items']: state['cart items'].map(
          item => (item.id === action.payload.id ? action.payload : item)
        )
      }
    case REMOVE_CART_ITEM:
      return {
        ...state,
        ['cart items']: state['cart items'].filter(
          item => item.id !== action.payload
        )
      }
    default:
      return state
  }
}