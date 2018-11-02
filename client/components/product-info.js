import React, {Component} from 'react'
import {connect} from 'react-redux'
import {postCartItem} from '../store/cart'

/**
 * COMPONENT
 */
export class ProductInfo extends Component {
  render() {
    const {imageUrl, description, title} = this.props.product

    return (
      <div>
        <h3>{title}</h3>
        <div>
          <img src={imageUrl} alt="Movie image poster" />
          <p>{description}</p>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              this.props.postCartItem(this.props.product, this.props.cart)
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    )
  }
}

const mapState = ({cart}) => ({cart})

const mapDispatch = dispatch => {
  return {
    postCartItem: (item, cart) => dispatch(postCartItem(item, cart))
  }
}

export default connect(mapState, mapDispatch)(ProductInfo)
