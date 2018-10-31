import React from 'react'
import ProductThumbnail from './ProductThumbnail'

const ProductList = props => {
  if (!Array.isArray(props.products) || props.products.length === 0) {
    return <p>No Products</p>
  } else {
    return (
      <div>
        {props.products.map(product => {
          return (
            <div key={product.id}>
              <ProductThumbnail product={product} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default ProductList
