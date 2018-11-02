import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ProductInfo} from './product-info'
import {ProductReview} from './product-review'
import {fetchProduct} from '../store/singleProduct'

/**
 * COMPONENT
 */
export class SingleProduct extends Component {
  componentDidMount() {
    const paramId = Number(this.props.match.params.id)
    this.props.fetchProduct(paramId)
  }

  render() {
        if (!this.props.selectedProduct.id) return <div>Product Not Found</div>
        return (
            <div>
                <ProductInfo product={this.props.selectedProduct} />
                <ProductReview reviews={this.props.selectedProduct.reviews} />
            </div>
        )
    }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    selectedProduct: state.selectedProduct
  }
}

const mapDispatch = dispatch => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
