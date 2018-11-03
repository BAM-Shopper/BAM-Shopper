import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_USERS = 'GET_USERS'
const UPDATE_USER = 'UPDATE_USER'

/**
 * INITIAL STATE
 */
const allUsers = []

/**
 * ACTION CREATORS
 */
const getUsers = users => ({ type: GET_USERS, users })
const update = user => ({ type: UPDATE_USER, user })

/**
 * THUNK CREATORS
 */
export const fetchUsers = () => async dispatch => {
    try {
        const { data } = await axios.get('/api/users')
        dispatch(getUsers(data))
    } catch (err) {
        console.error(err)
    }
}

export const updateUser = (user, id) => async dispatch => {
    console.log(user, id)
    try {
        const { data } = await axios.put(`/api/users/${id}`, user)

        dispatch(update(data))
    } catch (err) {
        console.error(err)
    }
}

/**
 * REDUCER
 */
export default function (state = allUsers, action) {
    switch (action.type) {
        case GET_USERS:
            return action.users
        case UPDATE_USER:
            return state.map(user => (
                action.user.id === user.id ? action.user : user
            ))
        default:
            return state
    }
}
