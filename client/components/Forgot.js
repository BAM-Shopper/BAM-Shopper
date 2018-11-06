import React from 'react'
import {connect} from 'react-redux'
import {forgot} from '../store'

class Forgot extends React.Component {
  constructor() {
    super()
    this.state = {
      alertStatus: 'none'
    }
  }

  handleSubmit = evt => {
    evt.preventDefault()
    const email = evt.target.email.value
    const myUser = this.props.users.find(user => {
      return user.email === email
    })
    if (myUser) {
      this.setState({
        alertStatus: 'emailSent'
      })
      return this.props.sendForgot(email)
    } else {
      this.setState({
        alertStatus: 'noEmail'
      })
    }
  }

  render() {
    if (this.state.alertStatus === 'none') {
      return (
        <div className="ui container">
          <p>
            To send a password reset email, enter your email address and click
            submit.
          </p>
          <form onSubmit={this.handleSubmit} className="ui form">
            <div className="ui one column grid centered">
              <div className="column">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    type="text"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              <div className="column">
                <button type="submit" className="ui primary button column">
                  Reset Password
                </button>
              </div>
            </div>
          </form>
        </div>
      )
    } else if (this.state.alertStatus === 'noEmail') {
      return (
        <div className="ui container">
          <div className="ui warning message">
            <i className="close icon" />
            <div className="header">
              There is no account associated with that email!
            </div>
            To create a new account, click 'Sign Up' above.
          </div>
          <p>
            To send a password reset email, enter your email address and click
            submit.
          </p>
          <form onSubmit={this.handleSubmit} className="ui form">
            <div className="ui one column grid centered">
              <div className="column">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    type="text"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              <div className="column">
                <button type="submit" className="ui primary button column">
                  Reset Password
                </button>
              </div>
            </div>
          </form>
        </div>
      )
    } else if (this.state.alertStatus === 'emailSent') {
      return (
        <div className="ui container">
          <div className="ui info message">
            <i className="close icon" />
            <div className="header">Password reset email sent!</div>
            Please check your inbox.
          </div>
          <p>
            To send a password reset email, enter your email address and click
            submit.
          </p>
          <form onSubmit={this.handleSubmit} className="ui form">
            <div className="ui one column grid centered">
              <div className="column">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    type="text"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              <div className="column">
                <button type="submit" className="ui primary button column">
                  Reset Password
                </button>
              </div>
            </div>
          </form>
        </div>
      )
    }
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
