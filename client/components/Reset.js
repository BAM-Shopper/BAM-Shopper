import React from 'react'
import {connect} from 'react-redux'
import {updateUser} from '../store/users'

class Reset extends React.Component {

  handleSubmit = (evt) => {
    evt.preventDefault()
    if (evt.target.password1.value === evt.target.password2.value) {
      const myUser = this.props.users.find(user => user.email === evt.target.email.value)
      myUser.password = evt.target.password1.value
      this.props.updateUser(myUser, myUser.id, 'updatePass')
    } else console.log('Passwords do not match')
  }

  render () {
    console.log('UPDATE USER', updateUser)
      return (
        <div>
          <form onSubmit={this.handleSubmit} name={name}>
            <div>
              <label htmlFor="email">
                <small>Email Address</small>
              </label>
              <input name="email" type="text" />
            </div>
            <br />
            <div>
              <label htmlFor="password">
                <small>New Password</small>
              </label>
              <input name="password1" type="password" />
            </div>
            <div>
              <label htmlFor="password">
                <small>Confirm Password</small>
              </label>
              <input name="password2" type="password" />
            </div>
            <div>
              <button type="submit">Update Password</button>
            </div>
          </form>
        </div>
      )
    }
}

const mapDispatch = dispatch => {
  return {
    updateUser: (user, id, type) => dispatch(updateUser(user, id, type))
  }
}

const mapState = ({users}) => ({
  users
})

export default connect(mapState, mapDispatch)(Reset)
