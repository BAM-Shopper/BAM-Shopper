import React, {Component} from 'react'
import {connect} from 'react-redux'
import {postCartItem} from '../store/cart'

/**
 * COMPONENT
 */
export class AddToCartButton extends Component {
  constructor() {
    super()
    this.state = {
      quantity: 1
    }
  }

  handleSelectChange = event => {
    event.preventDefault()
    this.setState({
      quantity: event.target.value
    })
  }

  render() {
    const {product, cart} = this.props
    const {quantity} = this.state

    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
      <div>
        <select
          className="ui dropdown"
          value={quantity}
          onChange={this.handleSelectChange}
        >
          {values.map(value => {
            return (
              <option key={value} value={value}>
                {value}
              </option>
            )
          })}
        </select>
        {product.isAvailible ? <button
          type="button"
          className="ui right floated primary button"
          onClick={() => {
            this.props.postCartItem(product, cart.id, quantity)
          }}
        >
          Add To Cart
          <i className="right chevron icon" />
        </button> : 
        <button
          type="button"
          className="ui right floated primary button"
          disabled
        >
          Add To Cart
          <i className="right chevron icon" />
        </button>}
      </div>
    )
  }
}

const mapState = ({cart}) => ({cart})

const mapDispatch = dispatch => {
  return {
    postCartItem: (product, cartId, quantity = 1) =>
      dispatch(postCartItem(product, cartId, quantity))
  }
}

export default connect(mapState, mapDispatch)(AddToCartButton)
