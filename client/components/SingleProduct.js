import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ProductInfo, ProductReview} from './index'
import {fetchProduct} from '../store/singleProduct'
import { createReview } from '../store/reviews'
import StarRatings from 'react-star-ratings'

export class SingleProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
        review: '',
        rating: 0
    }
  }

  componentDidMount() {
    const paramId = Number(this.props.match.params.id)
    this.props.fetchProduct(paramId)
  }

  handleTextChange = evt => {
    this.setState({
      review: evt.target.value
    })
  }

  changeRating = newRating => {
    this.setState({
      rating: newRating
    })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    const review = {
        rating: this.state.rating,
        text: this.state.review,
        userId: this.props.user.id,
        productId: this.props.selectedProduct.id
    }
    this.props.createReview(review)
    this.setState({
      review: '',
      rating: 0
    })
  }

  render() {
        if (!this.props.selectedProduct.id) return <div>Product Not Found</div>
        else if (!this.props.user.id) {
          return (
            <div>
              <ProductInfo product={this.props.selectedProduct} />
              <ProductReview reviews={this.props.selectedProduct.reviews} />
            </div>
          )
        } else {
          return (
            <div>
                <ProductInfo product={this.props.selectedProduct} />
                <ProductReview reviews={this.props.selectedProduct.reviews} />
                <div>
                  <br />
                  <form
                    className="ui form"
                    onSubmit={this.handleSubmit}>
                      <div className="field">
                          <label>Review This Product</label>
                          <StarRatings
                          rating={this.state.rating}
                          starRatedColor="blue"
                          changeRating={this.changeRating}
                          numberOfStars={5}
                          starDimension='20px'
                          starSpacing='5px'
                          name="rating"
                        />
                          <input
                            type="text"
                            name="review"
                            placeholder="Write your review..."
                            onChange={this.handleTextChange}
                            value={this.state.review}
                          />
                      </div>
                      <button className="ui button" type="submit">Submit</button>
                  </form>
                </div>
            </div>
        )
        }
    }
}

const mapState = state => {
  return {
    selectedProduct: state.selectedProduct,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id)),
    createReview: review => dispatch(createReview(review))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
