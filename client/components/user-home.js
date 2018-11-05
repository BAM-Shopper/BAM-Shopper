import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AdminDashboard from "./AdminDashboard";
import OrderList from './OrderList'
import ReviewList from './ReviewList'

export const UserHome = props => {
  const { email, isAdmin } = props.user
  const { orders, reviews } = props
  // const myOrders = orders.filter(order => order.userId === props.user.id)
  const myOrders = orders.filter(order => order.userId === 7)
  // const myReviews = reviews.filter(review => review.userId === props.user.id)
  const myReviews = reviews.filter(review => review.userId === 7)
  return (
    <div>
      <h3>Welcome, {email}</h3>
      <OrderList orders={myOrders} />
      <br />
      <ReviewList reviews={myReviews} />
      <div>
        {isAdmin ? <AdminDashboard products={props.products} user={props.user} /> : <div />}
      </div>

    </div>
  )
}

const mapState = state => {
  return {
    user: state.user,
    products: state.products,
    orders: state.orders,
    reviews: state.reviews
  }
}

export default connect(mapState)(UserHome)

UserHome.propTypes = {
  user: PropTypes.object,
  products: PropTypes.array
}
