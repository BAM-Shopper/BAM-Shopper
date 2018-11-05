import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EditProductForm from "./EditProductForm";


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
              <img
              className="ui medium rounded image"
              src={product.imageUrl}
                style={{
                  width: '200px',
                  height: '250px',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
              />
            </div>
            <div className='content'>
              <Link to={`/products/${product.id}`} className='header'>
                {product.title}
              </Link>
            </div>
            <div className='meta'>
              ${product.price.toFixed(2)}
            </div>
            <div className='extra'>
              <button type='button' className="ui right floated primary button">
                Add To Cart
            <i className="right chevron icon" />
              </button>
              {user.isAdmin ? <button type='button' className="ui label" onClick={() => this.setState({ editClicked: !editClicked })}>Edit</button> : <div />}
            </div>
          </div>
          : <EditProductForm productId={product.id} handleAdminEdit={this.handleAdminEdit} />
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
