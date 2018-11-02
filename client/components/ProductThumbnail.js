import React from 'react'
import { Link } from 'react-router-dom'

const ProductThumbnail = props => {
  const product = props.product

  return (
    <div className='ui segment'>
      <img style={{
        width: '200px',
        height: '250px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
        }} 
        className="ui medium rounded image" 
        src={product.imageUrl} />
      <Link to={`/products/${product.id}`}>
        {product.title}
      </Link>
      <br />
      {product.price}
      <br />
    </div>
  )
}

export default ProductThumbnail
