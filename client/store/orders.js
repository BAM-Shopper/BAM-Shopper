import axios from 'axios'

//action types
const GET_ORDERS = 'GET_CATEGORIES'

//initial state
const defaultOrders = []

//action creators
const getOrders = orders => ({
  type: GET_ORDERS,
  payload: orders
})

//thunk creators
export const fetchOrders = () => async dispatch => {
  try {
    const res = await axios.get('/api/orders')
    dispatch(getOrders(res.data || defaultOrders))
  } catch (err) {
    console.error(err)
  }
}

//reducer
export default function(state = defaultOrders, action) {
  switch (action.type) {
    case GET_ORDERS:
      return action.payload
    default:
      return state
  }
}
