import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProductThumbnail extends Component {
  constructor() {
    super()
    this.handleAdminEdit = this.handleAdminEdit.bind(this)
  }
  render() {
    const { product, user } = this.props

    return (
      <div>
        <div className='image'>
          <img src={product.imageUrl} />
        </div>
        <div className='content'>
          <Link to={`/products/${product.id}`} className='header'>
            {product.title}
          </Link>
        </div>
        <div className='meta'>
          {product.price}
        </div>
        <div className='extra'>
          <button type='button' className="ui right floated primary button">
            Add To Cart
          <i className="right chevron icon" />
          </button>
          {user.isAdmin ? <button type='button' className="ui label">Edit</button> : <div />}
        </div>
      </div>
    )
  }

  handleAdminEdit() {

  }
}

//https://semantic-ui.com/views/item.html

export default ProductThumbnail
