import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import  UpdateProductForm from "./UpdateProductForm";


class ProductItem extends Component {
  constructor() {
    super()
    this.state = {
      editClicked: false
    }
    this.handleAdminEdit = this.handleAdminEdit.bind(this)
  }
  render() {
    const { product, user } = this.props
    const { editClicked } = this.state

    return (
      <div>
        {!editClicked ?
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
              {user.isAdmin ? <button type='button' className="ui label" onClick={() => this.setState({editClicked: !editClicked})}>Edit</button> : <div />}
            </div>
          </div>
          : <UpdateProductForm productId= {product.id} handleAdminEdit={this.handleAdminEdit} />
        }
      </div>
    )
  }

  handleAdminEdit() {
    const { editClicked } = this.state

    this.setState({
      editClicked: !editClicked
    })
  }
}

//https://semantic-ui.com/views/item.html

export default ProductItem
