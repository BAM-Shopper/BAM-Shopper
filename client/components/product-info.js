import React from 'react'
import {AddToCartButton} from './index'

/**
 * COMPONENT
 */
export const ProductInfo = props => {
  const {imageUrl, description, title} = props.product

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <img
          src={imageUrl}
          alt="Movie image poster"
          style={{
            width: '400px',
            height: '500px'
          }}
        />
        <p>{description}</p>
      </div>
      <AddToCartButton product={props.product} />
    </div>
  )
}

export default ProductInfo
