import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ProductInfo, ProductReview} from './index'
import {fetchProduct} from '../store/singleProduct'
import ReviewForm from './ReviewForm'

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
                <div>
                  <h3>Reivews for {this.props.selectedProduct.title} </h3>
                <ProductReview reviews={this.props.selectedProduct.reviews} />
                <ReviewForm />
                </div>
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
