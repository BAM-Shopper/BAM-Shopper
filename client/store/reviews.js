import axios from 'axios'

//action types
const GET_REVIEWS = 'GET_REVIEWS'

//initial state
const defaultReviews = []

//action creators
const getReviews = reviews => ({
  type: GET_REVIEWS,
  payload: reviews
})

//thunk creators
export const fetchReviews = () => async dispatch => {
  try {
    const res = await axios.get('/api/reviews')
    dispatch(getReviews(res.data || defaultReviews))
  } catch (err) {
    console.error(err)
  }
}

//reducer
export default function(state = defaultReviews, action) {
  switch (action.type) {
    case GET_REVIEWS:
      return action.payload
    default:
      return state
  }
}
