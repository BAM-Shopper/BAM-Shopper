import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_USERS = 'GET_USERS'
const UPDATE_USER = 'UPDATE_USER'
const DELETE_USER = 'DELETE_USER'

/**
 * INITIAL STATE
 */
const allUsers = []

/**
 * ACTION CREATORS
 */
const getUsers = users => ({ type: GET_USERS, users })
const update = user => ({ type: UPDATE_USER, user })
const removeUser = id => ({ type: DELETE_USER, id})

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

export const updateUser = (user, id, type) => async dispatch => {
    console.log('MADE IT TO THE THUNK')
    try {
        const { data } = await axios.put(`/api/users/${id}`, {user: user, type: type} )
        console.log('DAAATAAA', data)
        dispatch(update(data))
    } catch (err) {
        console.error(err)
    }
}

export const deleteUser = id => async dispatch => {
    try {
        await axios.delete(`/api/users/${id}`)
        dispatch(removeUser(id))
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
        case DELETE_USER:
                return state.filter(user => user.id !== action.id)
        default:
            return state
    }
}
