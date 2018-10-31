import React, {Component} from 'react'

import {connect} from 'react-redux'
import {Navbar} from './components'
import Routes from './routes'

import {fetchProducts} from './store/products'
import {fetchCategories} from './store/categories'

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts()
    this.props.fetchCategories()
  }

  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(null, mapDispatchToProps)(App)
