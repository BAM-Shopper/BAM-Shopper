import React, {Component} from 'react'
import {withRouter} from 'react-router'

import {Navbar} from './components'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}

export default withRouter(App)
