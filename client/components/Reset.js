import React from 'react'
import {connect} from 'react-redux'
import {updateUser} from '../store/users'

class Reset extends React.Component {
  constructor() {
    super()
    this.state = {
      resetStatus: 'none'
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    if (evt.target.password1.value === evt.target.password2.value) {
      const myUser = this.props.users.find(user => user.email === evt.target.email.value)
      myUser.password = evt.target.password1.value
      this.props.updateUser(myUser, myUser.id, 'updatePass')
      this.setState({
        resetStatus: 'success'
      })
    } else {
      this.setState({
        resetStatus: 'failure'
      })
    }
  }

  render () {
    if (this.state.resetStatus === 'success') {
      return (
        <div>
          <div className="ui info message">
            <i className="close icon" />
            <div className="header">
              Password successfully reset!
            </div>
              Please click Login above and login to continue.
          </div>
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
      )} else if (this.state.resetStatus === 'failure') {
        return (
          <div>
            <div className="ui warning message">
              <i className="close icon" />
              <div className="header">
                Passwords do not match!
              </div>
                Please try again.
          </div>
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
    )} else {
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
