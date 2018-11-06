import React, {Component} from 'react'
import {connect} from 'react-redux'
import {postOrder} from '../store/orders'
import {deleteAllCartItems} from '../store/cart'

import axios from 'axios'
import {CheckoutForm} from './index'

// import {STRIPE_SECRET_KEY, STRIPE_PUBLISHABLE_KEY} from '../../secrets'
// const stripe = require('stripe')(STRIPE_SECRET_KEY)

export class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleSuccess = async () => {
    console.log('SUCESS WITH STRIPE')
    const order = await this.props.postOrder(
      Number(
        this.props.cart['cart items']
          .reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0)
          .toFixed(2)
      )
    )
    console.log(order)
    this.props.cart['cart items'].forEach(async item => {
      console.log('creating order item from cart item: ', item)
      await axios.post(`api/orders/${order.id}/item`, {
        quantity: item.quantity,
        price: item.price,
        productId: item.productId
      })
    })

    //todo | this breaks
    //im guessing the cart rerenders when the cart items are removeved and there is a problem
    deleteAllCartItems(this.props.cart['cart items'], this.props.cart.id)

    //cart itmes to order items
    //remove old cart items
    //rediredt to new order
    //product quatity updates
  }

  handleError = () => {
    console.log('FAILURE WITH STRIPE')
  }

  render() {
    const {cart} = this.props

    if (!cart.id || !cart['cart items'].length) {
      return <div>Your Cart is Empty</div>
    } else {
      return (
        <div>
          <CheckoutForm
            price={Number(
              this.props.cart['cart items']
                .reduce(
                  (acc, curr) => acc + curr.product.price * curr.quantity,
                  0
                )
                .toFixed(2)
            )}
            handleSuccess={this.handleSuccess}
            handleError={this.handleError}
          />
        </div>
      )
    }
  }
}

const mapStateToProps = ({cart}) => ({cart})

const mapDispatchToProps = dispatch => {
  return {
    postOrder: order => dispatch(postOrder(order))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
