import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

const ProductThumbnail = props => {
  const product = props.product

  return (
    <div>
      <Link to={`/products/${product.id}`}>
        {product.title}
      </Link>
      <br />
      {product.price}
      <br />
      <img src={product.imageUrl} />
    </div>
  )
}

const composedWithRouter = withRouter(ProductThumbnail)
export default composedWithRouter
