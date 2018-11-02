import React from 'react'
import ProductItem from './ProductItem'

const ProductList = props => {
  if (!Array.isArray(props.products) || props.products.length === 0) {
    return <p>No Products</p>
  } else {
    return (
      <div>
        {props.products.map(product => {
          return (
            <div key={product.id}>
              <ProductItem product={product} user={props.user} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default ProductList
