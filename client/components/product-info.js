import React from 'react'
import { AddToCartButton } from './index'

export const ProductInfo = props => {
  const { imageUrl, description, title, isAvailible } = props.product

  return (
    <div style={{display: 'flex'}}>
      <div>
        <h3>{title}</h3>
        <img
          src={imageUrl}
          alt="Movie image poster"
          style={{
            width: '300px',
            height: '400px'
          }}
        />
      </div>
      <div style={{marginTop: '25%', marginLeft: '10px'}}>
      {!isAvailible ? <div className='unavailible ui segment'>
        <p>This product is currently unavailable</p>
      </div> : <div />}
        <p>{description}</p>
        <AddToCartButton product={props.product} />
      </div>
    </div>
  )
}

export default ProductInfo
