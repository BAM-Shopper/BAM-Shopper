import React from 'react'

/**
 * COMPONENT
 */
export const ProductReview = props => {
    const reviews = props.reviews

    return (
        <section>
            {reviews.map(review => {
                return (
                    <article key={review.id}>
                        {review.user.email}
                        <p>{review.text}</p>
                        {review.rating}
                    </article>
                )
            })
            }
        </section>
    )
}

export default ProductReview
