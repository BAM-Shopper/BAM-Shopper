import axios from 'axios'

//action types
const GET_REVIEWS = 'GET_REVIEWS'
const ADD_REVIEW = 'ADD_REVIEW'

//initial state
const defaultReviews = []

//action creators
const getReviews = reviews => ({
  type: GET_REVIEWS,
  payload: reviews
})

const addReview = review => ({
  type: ADD_REVIEW,
  review
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

export const createReview = review => async dispatch => {
  try {
    const { data } = await axios.post('/api/reviews', review)
    dispatch(addReview(data))
  } catch (err) {
    console.error(err)
  }
}

//reducer
export default function(state = defaultReviews, action) {
  switch (action.type) {
    case GET_REVIEWS:
      return action.payload
    case ADD_REVIEW:
      return [...state, action.review]
    default:
      return state
  }
}
