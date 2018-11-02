import axios from 'axios'
// import history from '../history'

/**
 * ACTION TYPES
 */
const GET_CATEGORIES = 'GET_CATEGORIES'
const ADD_CATEGORY = 'ADD_CATEGORY'

/**
 * INITIAL STATE
 */
const defaultCategories = []

/**
 * ACTION CREATORS
 */
const getCategories = categories => ({
  type: GET_CATEGORIES,
  payload: categories
})

const addCategory = category => ({
  type: ADD_CATEGORY,
  category
})

/**
 * THUNK CREATORS
 */
export const fetchCategories = () => async dispatch => {
  try {
    const res = await axios.get('/api/categories')
    dispatch(getCategories(res.data || defaultCategories))
  } catch (err) {
    console.error(err)
  }
}

export const createCategory = category => async dispatch => {
  try {
    const { data } = await axios.post('/api/categories', category)
    dispatch(addCategory(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function (state = defaultCategories, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.payload
    case ADD_CATEGORY:
      return [...state, action.category]
    default:
      return state
  }
}
