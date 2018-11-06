import React from 'react'
import {ProductItem} from './index'

const ProductList = props => {
  if (!Array.isArray(props.products) || props.products.length === 0) {
    return (
      <h2 className="center aligned" style={{textAlign: 'center'}}>
        No Matches
      </h2>
    )
  } else {
    return (
      <div className="ui container">
        <h2 className="center aligned" style={{textAlign: 'center'}}>
          {props.filter} Movies
        </h2>
        <div className="ui three column stackable grid container">
          {props.products.map(product => {
            if (product.isAvailible) {
              return (
                <div
                  className="column center aligned"
                  key={product.id}
                  style={{width: '50%!important'}}
                >
                  <ProductItem product={product} user={props.user} />
                </div>
              )
            }
          })}
        </div>
      </div>
    )
  }
}

export default ProductList
