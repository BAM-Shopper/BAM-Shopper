import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOrder} from '../store/singleOrder'
import {updateOrder} from '../store/orders'
import {Link} from 'react-router-dom'

class SingleOrder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOrder: {},
      status: ''
    }
  }

  componentDidMount() {
    const paramId = Number(this.props.match.params.id)
    this.props.fetchOrder(paramId)
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedOrder !== prevProps.selectedOrder) {
      this.setState({selectedOrder: this.props.selectedOrder})
    }
  }

  //only updates on refresh
  handleOrderUpdate = evt => {
    evt.preventDefault()
    const {updateOrder} = this.props
    const newStatus = this.state.status
    const orderId = this.state.selectedOrder.id
    updateOrder({status: newStatus}, orderId)
  }

  render() {
    const orderStatuses = ['created', 'processing', 'cancelled', 'completed']
    if (this.state.selectedOrder && this.state.selectedOrder['order items']) {
      return (
        <div className="ui container">
          <h3>Order #{this.state.selectedOrder.id}</h3>
          <hr />
          <p>Ordered On:{this.state.selectedOrder.createdAt}</p>
          <p>Price: {this.state.selectedOrder.total}</p>
          <p>Current Status: {this.state.selectedOrder.status}</p>
          {this.props.user.isAdmin ? (
            <div>
              <form className="ui form" onSubmit={this.handleOrderUpdate}>
                <div className="field">
                  <label>Change Order Status</label>
                  <select
                    className="ui fluid search dropdown"
                    name="status"
                    onChange={evt =>
                      this.setState({[evt.target.name]: evt.target.value})
                    }
                  >
                    <option value="">--</option>
                    {orderStatuses.map((status, idx) => {
                      return (
                        <option
                          key={parseInt(idx.toString(), 10)}
                          value={status}
                        >
                          {status}
                        </option>
                      )
                    })}
                  </select>
                </div>
                <button className="ui button" type="submit">
                  Submit
                </button>
              </form>
            </div>
          ) : (
            <div />
          )}
          <h3>Items Ordered:</h3>
          {this.state.selectedOrder['order items'].map(order => {
            return (
              <div key={order.id}>
                <hr />
                <Link to={`/products/${order.product.id}`}>
                  {order.product.title}
                </Link>
                <table>
                  <tbody>
                    <tr>
                      <td>Quantity: {order.quantity}</td>
                    </tr>
                    <tr>
                      <td>Subtotal: {order.price}</td>
                    </tr>
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
    selectedOrder: state.selectedOrder,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    fetchOrder: id => dispatch(fetchOrder(id)),
    updateOrder: (order, id) => dispatch(updateOrder(order, id))
  }
}

export default connect(mapState, mapDispatch)(SingleOrder)
