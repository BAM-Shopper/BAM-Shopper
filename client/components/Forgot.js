import React from 'react'
import {connect} from 'react-redux'
import {forgot} from '../store'

class Forgot extends React.Component {

  handleSubmit = (evt) => {
    evt.preventDefault()
    const email = evt.target.email.value
    const myUser = this.props.users.find(user => {
      return user.email === email
    })
    console.log(myUser)
    if (myUser) return this.props.sendForgot(email)
    else {
      alert('There is no account associated with that email')
    }
  }

  render () {
    return (
      <div>
        <p>To send a password reset email, enter your email address and click submit.</p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" type="text" />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    sendForgot: email => dispatch(forgot(email))
  }
}

const mapState = state => {
  return {
    users: state.users
  }
}

export default connect(mapState, mapDispatch)(Forgot)


