import React from 'react'

/**
 * COMPONENT
 */
export const ProductReview = props => {
  const reviews = props.reviews

  if (reviews.length === 0)
    return <section>No reviews to display. Leave a review.</section>

  return (
    <section className="ui celled list">
      {reviews.map((review, idx) => {
        return (
          <article key={parseInt(idx, 10)} className='item'>
            <div className='content'>
              <div className='header'>
                {review.user === null ? 'Anonymous' : review.user.email}
              </div>
              <p>{review.text}</p>
              <p>Rating: {review.rating}</p>

            </div>
          </article>
        )
      })}
    </section>
  )
}

export default ProductReview
