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
    <div className='ui container'>
      <h3>Welcome, {email}</h3>
      <button
          type='button'
          className='ui primary button'
          style={{ marginLeft: '5px' }}
      >Manage Account</button>
      <ReviewList reviews={myReviews} />
      <div>
        <h3>My Orders</h3>
        <OrderList orders={myOrders} />
      </div>
      <div>
        {isAdmin ? <AdminDashboard user={props.user} /> : <div />}
      </div>

    </div>
  )
}

const mapState = state => {
  return {
    user: state.user,
    products: state.products,
    orders: state.orders,
    reviews: state.reviews,
    users: state.users
  }
}

export default connect(mapState)(UserHome)

UserHome.propTypes = {
  user: PropTypes.object,
  orders: PropTypes.array
}
