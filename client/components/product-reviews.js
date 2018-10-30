import React from 'react'

/**
 * COMPONENT
 */
export const ProductReview = props => {
    const reviews = props.reviews

    return (
        <div>
            {reviews.map(review => {
                return (
                    <div key={review.id}>
                        {review.user.email}
                        <p>{review.text}</p>
                        {review.rating}
                    </div>
                )
            })}
        </div>
    )
}

export default ProductReview
