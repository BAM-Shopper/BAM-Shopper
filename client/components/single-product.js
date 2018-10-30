import React from 'react'
import { connect } from 'react-redux'
import { ProductInfo } from "./product-info";
import { ProductReview } from "./product-reviews";

/**
 * COMPONENT
 */
export const SingleProduct = props => {

    return (
        //Navbar
        <div>
            <ProductInfo product={props.product} />
            <ProductReview reviews={props.reviews} />
        </div>
    )
}

/**
 * CONTAINER
 */
const mapState = state => ({
    selecetedProduct: state.selecetedProduct
})

export default connect(mapState)(SingleProduct)
