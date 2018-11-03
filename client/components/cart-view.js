import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteCartItem, putCartItem} from '../store/cart'

export class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      totalPrice: 0
    }
  }

  componentDidUpdate(prevProps) {
    console.log('in componentDidUpdate')
    if (this.props.cart['cart items'] !== prevProps.cart['cart items']) {
      console.log('props mismatch')
      this.setState({
        totalPrice: this.props.cart['cart items']
          .reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0)
          .toFixed(2)
      })
    }
  }

  render() {
    const {cart} = this.props
    const {totalPrice} = this.state

    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    if (!cart.id || !cart['cart items'].length) {
      return (
        <div className="ui container">
          <h2 className="center aligned" style={{textAlign: 'center'}}>
            Oh No! It Looks Like Your Cart Is Empty
          </h2>
          <Link
            to="/home"
            className="center aligned"
            style={{textAlign: 'center'}}
          >
            Browse Products
          </Link>
        </div>
      )
    } else {
      return (
        <div className="ui container">
          <h2 className="center aligned" style={{textAlign: 'center'}}>
            My Cart | Total Price: ${totalPrice}
          </h2>
          <Link to="/checkout" className="header">
            Proceed To Checkout
          </Link>
          <div className="ui three column stackable grid container">
            {cart['cart items'].map(item => {
              return item.product ? (
                <div key={item.id} className="column center aligned">
                  <div className="image">
                    <img
                      className="ui medium rounded image"
                      src={item.product.imageUrl}
                      style={{
                        width: '200px',
                        height: '250px',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                      }}
                    />
                  </div>
                  <div className="content">
                    <Link
                      to={`/products/${item.product.id}`}
                      className="header"
                    >
                      {item.product.title}
                    </Link>
                  </div>
                  <div className="meta">Price: {item.product.price}</div>
                  <div className="meta">
                    <div>Quantity:</div>
                    <select
                      className="ui dropdown"
                      defaultValue={item.quantity}
                      onChange={event => {
                        event.preventDefault()
                        console.log(event.target.value)
                        console.log(item)
                        this.props.putCartItem(
                          {...item, quantity: Number(event.target.value)},
                          this.props.cart.id
                        )
                      }}
                    >
                      {values.map(value => {
                        return (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                  <button
                    type="button"
                    onClick={() => this.props.deleteCartItem(item.id, cart.id)}
                  >
                    Remove From Cart
                  </button>
                </div>
              ) : (
                <div />
              )
            })}
          </div>
        </div>
      )
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
