import React, {Component} from 'react'
import {connect} from 'react-redux'
import {postOrder} from '../store/orders'
import {deleteAllCartItems} from '../store/cart'
import {updateProduct} from '../store/products'

import axios from 'axios'
import {CheckoutForm} from './index'

export class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleSuccess = async shippingDetails => {
    //create new order
    const order = await this.props.postOrder(
      Number(
        this.props.cart['cart items']
          .reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0)
          .toFixed(2)
      )
    )

    //create new order items
    const items = []
    for (let i = 0; i < this.props.cart['cart items'].length; i++) {
      let item = this.props.cart['cart items'][i]
      //create new order items
      await axios.post(`api/orders/${order.id}/item`, {
        quantity: item.quantity,
        price: item.product.price,
        productId: item.productId
      })
      //update inventory
      let newQuantity = item.product.inventory - item.quantity
      newQuantity = newQuantity >= 0 ? newQuantity : 0

      await this.props.updateProduct(
        {
          inventory: newQuantity >= 0 ? newQuantity : 0,
          isAvailible: !!newQuantity
        },
        item.product.id
      )
      items.push(item)
    }

    //send email here
    await axios.post(`auth/receipt/`, {shippingDetails, items, order})

    let redirect
    if (this.props.cart.userId) {
      redirect = `/account/orders/${order.id}`
    } else {
      redirect = `/home`
    }

    //delete old cart
    this.props.deleteAllCartItems(
      this.props.cart['cart items'],
      this.props.cart.id,
      redirect
    )
  }

  handleError = () => {
    alert('There was a error during checkout. Please refresh and try again.')
  }

  render() {
    const {cart} = this.props

    if (!cart.id || !cart['cart items'].length) {
      return (
        <h2 className="center aligned" style={{textAlign: 'center'}}>
          Your Cart is Empty{' '}
        </h2>
      )
    } else {
      return (
        <div className="ui container">
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
    postOrder: order => dispatch(postOrder(order)),
    updateProduct: (product, id) => dispatch(updateProduct(product, id)),
    deleteAllCartItems: (itemArray, cartId, redirect) =>
      dispatch(deleteAllCartItems(itemArray, cartId, redirect))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
