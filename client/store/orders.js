import axios from 'axios'

//action types
const GET_ORDERS = 'GET_ORDERS'
const UPDATE_ORDER = 'UPDATE_ORDER'

//initial state
const defaultOrders = []

//action creators
const getOrders = orders => ({
  type: GET_ORDERS,
  payload: orders
})

const update = order => ({
  type: UPDATE_ORDER,
  order
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

export const updateOrder = (order, id) => async dispatch => {
  try {
    const { data } = await axios.put(`/api/orders/${id}`, order)
    dispatch(update(data))
  } catch (err) {
    console.error(err)
  }
}

//reducer
export default function (state = defaultOrders, action) {
  switch (action.type) {
    case GET_ORDERS:
      return action.payload
    case UPDATE_ORDER:
      return state.map(order => (
        action.order.id === order.id ? action.order : order
      ))
    default:
      return state
  }
}
