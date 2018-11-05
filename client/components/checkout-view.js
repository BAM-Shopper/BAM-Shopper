import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteCartItem, putCartItem} from '../store/cart'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import {CheckoutForm} from './index'

export class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onToken = async token => {
    console.log('===token=== ', token)
    const res = await axios.post('/api/checkout/', {token, amount: 100})
    console.log('===axios.post.res=== ', res)
  }

  // ...

  render() {
    return (
      //order info
      <div>
        <CheckoutForm />
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_HNtcF6Xv6gVHDnS7P7dj0FMX"
        />
      </div>
    )
  }
}

const mapStateToProps = ({cart}) => ({cart})

const mapDispatchToProps = dispatch => {
  return {
    deleteCartItem: (itemId, cartId) =>
      dispatch(deleteCartItem(itemId, cartId)),
    putCartItem: (item, cartId) => dispatch(putCartItem(item, cartId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
