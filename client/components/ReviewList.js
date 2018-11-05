import React from 'react'
import ReviewListItem from './ReviewListItem'

const ReviewList = props => {
  if (!Array.isArray(props.reviews) || props.reviews.length === 0) {
    return (
      <div>
        <p>You haven't written any reviews!</p>
      </div>
    )
  } else {
    return (
      <div>
        {props.reviews.map(review => {
          return (
            <div key={review.id}>
              <ReviewListItem review={review} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default ReviewList
