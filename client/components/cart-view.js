import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteCartItem, putCartItem} from '../store/cart'

export class Cart extends React.Component {
  render() {
    const {cart} = this.props

    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    if (!cart.id || !cart['cart items'].length) {
      return (
        <div className="ui container">
          <h2 className="center aligned" style={{textAlign: 'center'}}>
            Oh No! It Looks Like Your Cart Is Empty
          </h2>
          <Link
            to="/home"
            className="ui right floated primary button"
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
            My Cart | Total Price: ${cart['cart items']
              .reduce(
                (acc, curr) => acc + curr.product.price * curr.quantity,
                0
              )
              .toFixed(2)}
          </h2>
          <Link to="/checkout" className="ui right floated primary button">
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
                  <div className="meta">${item.product.price.toFixed(2)}</div>
                  <div className="meta">
                    <select
                      className="ui dropdown"
                      defaultValue={item.quantity}
                      onChange={event => {
                        event.preventDefault()
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
                    className="ui primary button"
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
