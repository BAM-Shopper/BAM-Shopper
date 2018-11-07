import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import EditProductForm from './EditProductForm'
import {AddToCartButton} from './index'
import {connect} from 'react-redux'

export class ProductItem extends Component {
  constructor() {
    super()
    this.state = {
      editClicked: false
    }
    this.handleAdminEdit = this.handleAdminEdit.bind(this)
  }
  render() {
    const {product, user} = this.props
    const {editClicked} = this.state

    return (
      <div>
        {!editClicked ? (
          <div>
            <div className="image">
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
            <div className="content">
              <Link to={`/products/${product.id}`} className="header">
                {product.title}
              </Link>
              <div className="meta">${product.price.toFixed(2)}</div>
              <div className="extra">
                <AddToCartButton product={product} />
                {user.isAdmin ? (
                  <button
                    type="button"
                    className="ui label"
                    onClick={() => this.setState({editClicked: !editClicked})}
                  >
                    Edit
                  </button>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>
        ) : (
          <EditProductForm
            product={product}
            handleAdminEdit={this.handleAdminEdit}
          />
        )}
      </div>
    )
  }

  handleAdminEdit() {
    const {editClicked} = this.state

    this.setState({
      editClicked: !editClicked
    })
  }
}

const mapState = ({user}) => ({user})

export default connect(mapState, null)(ProductItem)
