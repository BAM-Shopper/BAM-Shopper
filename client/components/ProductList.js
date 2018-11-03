import React from 'react'
import {ProductItem} from './index'

const ProductList = props => {
  if (!Array.isArray(props.products) || props.products.length === 0) {
    return <p>No Products</p>
  } else {
    return (
      <div className="ui container">
        <h2 className="center aligned" style={{textAlign: 'center'}}>
          Movies
        </h2>
        <div className="ui three column stackable grid container">
          {props.products.map(product => {
            return (
              <div className="column center aligned" key={product.id}>
                <ProductItem product={product} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default ProductList
