import React from 'react'
import StarRatings from 'react-star-ratings'

export const ProductReview = props => {
  const reviews = props.reviews
  if (reviews.length === 0)
    return <section>No reviews to display. Leave a review.</section>

  return (
    <section>
      {reviews.map(review => {
        return (
          <div key={review.id}>
            <StarRatings
              rating={review.rating}
              starDimension='15px'
              starSpacing='5px'
            />
            <article>
              {review.user.email}
              <p>{review.text}</p>
            </article>
          </div>
        )
      })}
    </section>
  )
}

export default ProductReview
