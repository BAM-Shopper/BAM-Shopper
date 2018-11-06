import React from 'react'
import {connect} from 'react-redux'
import {update} from '../store'

class Reset extends React.Component {

  render () {
      return (
        <div>
          <form onSubmit={this.props.handleSubmit} name={name}>
            <div>
              <label htmlFor="password">
                <small>New Password</small>
              </label>
              <input name="password1" type="text" />
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
    handleSubmit(evt) {
      if (evt.target.password1.value === evt.target.password2.value) {
        const password = evt.target.password1.value
        const token = Number(this.props.match.params.id)
        dispatch(update(password, token))
      } else console.log('Passwords do not match')
    }
  }
}

export default connect(null, mapDispatch)(Reset)
