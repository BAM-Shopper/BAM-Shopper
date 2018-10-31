import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ProductInfo } from "./product-info";
import { ProductReview } from "./product-reviews";
import { fetchProduct } from "../store/singleProduct";

/**
 * COMPONENT
 */
class SingleProduct extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProduct()
    }

    render() {
        //Navbar
        if (!this.props.product) return <div>Product Not Found</div>
        return (
            <div>
                <p>hi</p>
                <ProductInfo product={this.props.product} />
                <ProductReview reviews={this.props.reviews} />
            </div>
        )
    }

}

/**
 * CONTAINER
 */
const mapState = state => ({
    selecetedProduct: state.selecetedProduct
})


const mapDispatch = dispatch => {
    return {
        fetchProduct: () => dispatch(fetchProduct())
    }
}

export default connect(mapState, mapDispatch)(SingleProduct)
