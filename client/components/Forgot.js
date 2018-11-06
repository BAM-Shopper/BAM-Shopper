import React from 'react'
import {connect} from 'react-redux'
import {forgot} from '../store'

class Forgot extends React.Component {

  render () {
    console.log(this.props.handleSubmit)
    return (
      <div>
        <p>To send a password reset email, enter your email address and click submit.</p>
        <form onSubmit={this.props.handleSubmit}>
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
    handleSubmit(evt) {
      evt.preventDefault()
      const email = evt.target.email.value
      dispatch(forgot(email))
    }
  }
}

export default connect(null, mapDispatch)(Forgot)


