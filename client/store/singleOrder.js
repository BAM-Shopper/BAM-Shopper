import axios from 'axios'

//action types
const SELECT_ORDER = 'SELECT_ORDER'

//initial state
const initialState = {}

//action creators
const selectOrder = order => ({ type: SELECT_ORDER, order })

//thunk creators
export const fetchOrder = (id) => async dispatch => {
    try {
        const { data } = await axios.get(`/api/orders/${id}`)
        dispatch(selectOrder(data))
    } catch (err) {
        console.error(err)
    }
}

//reducer
export default function (state = initialState, action) {
    switch (action.type) {
        case SELECT_ORDER:
            return action.order
        default:
            return state
    }
}
