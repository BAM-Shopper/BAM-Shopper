import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOrder} from '../store/singleOrder'
import {Link} from 'react-router-dom'

class SingleOrder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOrder: {}
    }
  }

  componentDidMount() {
    const paramId = Number(this.props.match.params.id)
    this.props.fetchOrder(paramId)
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedOrder !== prevProps.selectedOrder) {
      this.setState({ selectedOrder: this.props.selectedOrder })
    }
  }

  render() {
    if (this.state.selectedOrder && this.state.selectedOrder['order items']) {
      return (
        <div>
          <h3>Order #{this.state.selectedOrder.id}</h3>
          <p>Ordered On:{this.state.selectedOrder.createdAt}</p>
          <p>Price: {this.state.selectedOrder.total}</p>
          <p>Current Status: {this.state.selectedOrder.status}</p>
          <h3>Items Ordered:</h3>
          {this.state.selectedOrder['order items'].map(order => {
            console.log('ORDER ID', order)
            return (
              <div key={order.id}>
                <Link to={`/products/${order.product.id}`}>{order.product.title}</Link>
                <table>
                  <tbody>
                    <tr><td>Quantity: {order.quantity}</td></tr>
                    <tr><td>Subtotal: {order.price}</td></tr>
                  </tbody>
                </table>
                <br />
              </div>
            )
          })}
        </div>
      )
    } else return <p>No Order</p>
  }
}

const mapState = state => {
  return {
    selectedOrder: state.selectedOrder
  }
}

const mapDispatch = dispatch => {
  return {
    fetchOrder: id => dispatch(fetchOrder(id))
  }
}

export default connect(mapState, mapDispatch)(SingleOrder)
