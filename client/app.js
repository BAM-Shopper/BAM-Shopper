import React, {Component} from 'react'
import {withRouter} from 'react-router'

import {Navbar} from './components'
import Routes from './routes'

<<<<<<< HEAD
class App extends Component {
=======
import {fetchProducts} from './store/products'
import {fetchCategories} from './store/categories'
import {fetchOrders} from './store/orders'

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts()
    this.props.fetchCategories()
    this.props.fetchOrders()
  }

>>>>>>> master
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}

<<<<<<< HEAD
export default withRouter(App)
=======
const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchOrders: () => dispatch(fetchOrders())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App))
>>>>>>> master
