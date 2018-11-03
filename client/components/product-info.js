import React, {Component} from 'react'
import {AddToCartButton} from './index'

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
          <AddToCartButton product={this.props.product} />
        </div>
      </div>
    )
  }
}

export default ProductInfo
