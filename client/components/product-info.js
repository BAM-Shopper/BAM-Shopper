import React from 'react'
import {AddToCartButton} from './index'

export const ProductInfo = props => {
  const {imageUrl, description, title, isAvailible} = props.product

  return (
    <div style={{display: 'flex'}}>
      <div>
        <img
          src={imageUrl}
          alt="Movie image poster"
          style={{
            width: '300px',
            height: '400px'
          }}
        />
      </div>
      <div style={{alignSelf: 'center', marginLeft: '10px'}}>
        <h3
          style={{
            fontSize: 'xx-large'
          }}
        >
          {title}
        </h3>
        {!isAvailible ? (
          <div className="unavailible ui segment">
            <h2 className="center aligned" style={{textAlign: 'center'}}>
              This product is currently unavailable
            </h2>
          </div>
        ) : (
          <div />
        )}
        <p>{description}</p>
        <AddToCartButton product={props.product} />
      </div>
    </div>
  )
}

export default ProductInfo
